import React from 'react';
import s from './index.module.scss';

const Hashtags = ({ tags }: { tags: string[] }) => {
  return (
    <section className={s.tags}>
      {tags.map((tag) => (
        <span className={s.tags__text} key={tag}>
          {tag}
        </span>
      ))}
    </section>
  );
};

export default React.memo(Hashtags);
