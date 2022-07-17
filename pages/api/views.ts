import { createClient } from '@supabase/supabase-js';
import { PostgrestResponse } from '@supabase/postgrest-js';
import { NextApiRequest, NextApiResponse } from 'next';

const url = process.env.SUPABASE_URL ?? '';
const token = process.env.SUPABASE_TOKEN ?? '';
const table = process.env.SUPABASE_VIEW_TABLE ?? '';

const supabase = createClient(url, token);

const views = async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NODE_ENV === 'development') return res.json({ views: 25 });

  const { update, read } = req.query;
  const queriedSlug = update ?? read;
  const { data } = await supabase.from(table).select('views').filter('slug', 'eq', queriedSlug);
  if (read) {
    res.json({ views: data?.length ? data[0].views : 0 });
  } else {
    let updatedData: PostgrestResponse<{ views: number }>;
    if (!data?.length) {
      updatedData = await supabase.from(table).insert([{ slug: queriedSlug, views: 1 }]);
    } else {
      updatedData = await supabase
        .from(table)
        .update({ views: data[0].views + 1 })
        .match({ slug: queriedSlug });
    }
    res.status(201).json({ views: updatedData.data ? updatedData.data[0].views : 0 });
  }
};

export default views;
