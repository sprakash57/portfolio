import { Icon, RouteLink } from '@/components/Elements';
import React from 'react';
import s from './index.module.scss';

const CONSULT = [
  {
    id: 'job',
    title: 'Job search',
    icon: 'search',
    url: '/contact',
    urlText: 'Contact Us',
    externalLink: false,
    points: [
      { id: '1', body: 'Prepare for your Interviews in right way.' },
      { id: '2', body: 'Search jobs on right platforms.' },
      { id: '3', body: 'Visa-sponsored jobs to get higher salary for the same work.' },
    ],
  },
  {
    id: 'career',
    title: 'Career guidance',
    icon: 'consult',
    url: '/contact',
    urlText: 'Know more',
    externalLink: false,
    points: [
      { id: '1', body: 'Learn to create LinkedIn profile to reach out more recruiters.' },
      { id: '2', body: 'How to write Awesome resume with latest standards.' },
      { id: '3', body: 'ATS-Friendly resume content to pass screening bots.' },
      { id: '4', body: 'Must know facts about CV and resume.' },
      { id: '5', body: 'Write professional cover letters for job application.' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    icon: 'develop',
    url: '/contact',
    urlText: 'Know more',
    externalLink: false,
    points: [
      { id: '1', body: 'Website solution for your Business.' },
      { id: '2', body: 'Mobile apps for all types of needs.' },
      { id: '3', body: 'Architecture, application enhancements and, support.' },
      { id: '4', body: 'Product design consulation and brainstorming sessions.' },
    ],
  },
  {
    id: 'learn',
    title: 'Learn',
    icon: 'learn',
    url: '/videos',
    urlText: 'Videos',
    externalLink: false,
    points: [
      { id: '1', body: 'Video tutorials for different kind of technologies' },
      { id: '2', body: 'Blogs about day-to-day business problems and its solutions.' },
      { id: '3', body: 'Mentorship and guidance for your learning career.' },
    ],
  },
];

const Consult = () => {
  return (
    <section className={s.consult}>
      {CONSULT.map(({ title, icon, id, points, url, urlText, externalLink }, index) => (
        <div key={id} className={s.consult__item} id={id}>
          <div className={s.consult__row}>
            <div className={s.consult__title}>
              <h1>{title}</h1>
              <Icon name={icon} width="80" height="80" color={index % 2 === 0 ? 'var(--sepia)' : 'var(--charcoal)'} />
            </div>
            <ul className={s.consult__list}>
              {points.map(({ id, body }) => (
                <li key={id}>{body}</li>
              ))}
            </ul>
          </div>
          <RouteLink classForContainer={s.consult__link} href={url} isExternal={externalLink}>
            {urlText}
          </RouteLink>
        </div>
      ))}
    </section>
  );
};

export default Consult;
