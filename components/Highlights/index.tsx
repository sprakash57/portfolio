import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import { RouteLink } from '../Elements';
import s from './index.module.scss';

const HIGHLIGHTS = [
  {
    title: 'JOB READY PROFILE',
    body: 'Make your Resume and LinkedIn profile standout in the crowd.',
    url: 'consult#job',
  },
  {
    title: '4X YOUR SALARY',
    body: 'Get visa sponsered job and boost your salary upto 4 times.',
    url: 'consult#career',
  },
  {
    title: 'APP ENGINEERING',
    body: 'Learn Web or App devleopment with modern tools. Deliver full-stack projects.',
    url: 'videos',
  },
];

const Highlights = () => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    dots: true,
    infinite: true,
    className: s.slides__dots,
    lazyLoad: 'ondemand',
  };
  return (
    <section className={s.slides}>
      {/*@ts-ignore */}
      <Slider {...settings}>
        {HIGHLIGHTS.map(({ title, body, url }) => (
          <div key={title} className={s.slides__item}>
            <h1>{title}</h1>
            <p>{body}</p>
            <RouteLink href={`/${url}`} classForContainer={s.learnMore} aria-current="page">
              <span>Leran More</span>
            </RouteLink>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Highlights;
