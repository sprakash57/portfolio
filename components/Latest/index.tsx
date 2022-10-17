import { capitalize, concatEllipsis } from '@/helpers/utils';
import Image from 'next/future/image';
import React from 'react';
import { RouteLink } from '../Elements';
import YoutubePlayer from '../YoutubePlayer';
import s from './index.module.scss';

const LATEST = [
  {
    section: 'blog',
    title: 'My Dockathon entry - Bookplorer',
    cover: 'https://dev-to-uploads.s3.amazonaws.com/i/mgmmuh2xext1qvs8wjra.png',
    description: `In the month of January 2021, DigitalOcean parterned with Dev.to and commenced **Dockathon**. It was just like another hackathon event except one thing. You will have to built something on DigitalOcean newly launched App platform. I saw this as a great opportunity to learn about the platform meanthile I participate. So I have decided to create a web app. For a long time, I wanted to try out the **Google's Books API** and that is why I decided to build **Bookplorer**, a dedicated book finder. Afterwards it was more about choosing tools to built it and I decided to go with something entirely new 😁. More info in **How I built it** section.`,
    thumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/mgmmuh2xext1qvs8wjra.png',
    url: 'bookplorer',
  },
  {
    section: 'video',
    title: 'German Work Visa',
    cover: 'German Work Visa',
    description:
      'We have shared our Work Visa for Germany experience that we had during 2021. There are major tips and challenges that will surely help you overcome any difficulties you face during your visa process.',
    url: 'DSUbPGfAEgg',
  },
];

const Latest = () => {
  return (
    <section className={s.latest}>
      <h2>LATEST</h2>
      <div className={s.latest__row}>
        {LATEST.map(({ section, title, cover, description, thumbnail, url }, i) => (
          <div key={`${section}-${i}`} className={s.latest__card}>
            <small>{capitalize(section)}</small>
            <h3>{title}</h3>
            {section === 'blog' && (
              <figure>
                <Image src={cover} alt="Cover" placeholder="blur" blurDataURL={thumbnail} width={450} height={150} />
              </figure>
            )}
            <p>{concatEllipsis(description, section === 'blog' ? 250 : 160)}</p>
            {section !== 'video' && <RouteLink href={`/blogs/${url}`}>Read more</RouteLink>}
            {section === 'video' && <YoutubePlayer videoId={url} title={cover} height={250} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
