import { ScreenSize } from '@/helpers/constants';
import { useScreenDimension } from '@/helpers/hooks';
import { useRouter } from 'next/router';
import React from 'react';
import s from './index.module.scss';
import { Icon, RouteLink } from '@/components/Elements';
import { Arrow } from '@/components/Elements/Icons';

const SERVICES = [
  {
    icon: 'consult',
    title: 'Consult',
    body: `Know important "DOs" and "DON'Ts" about your Resume and LinkedIn profile. Get more recruiter's connect and opportunities.`,
    route: 'srevices#consult',
  },
  {
    icon: 'blog',
    title: 'Read',
    body: `Crisp and informative blogs related to web development, Career guidance, Jobs in Abroad, Product delivery and many more.`,
    route: 'blogs',
  },
  {
    icon: 'watch',
    title: 'Watch',
    body: `Rich tutorial videos at your disposal everytime. Not enough?! We also have videos related to Jobs in Europe, Visa assistance and Career advice.`,
    route: 'videos',
  },
  {
    icon: 'learn',
    title: 'Learn',
    body: `Something new everyday. All Tutorials, Quizzes, Projects and assiatance are in one place to succeed in your next Interview.`,
    route: 'srevices#learn',
  },
  {
    icon: 'develop',
    title: 'Develop',
    body: `Looking for experienced engineers for your next project setup. Or maybe someone who can fix critical bugs. Get the quote in mimimum time.`,
    route: 'srevices#develop',
  },
];

const Services = () => {
  const { type: displayType } = useScreenDimension();
  const {} = useRouter();

  return (
    <section className={s.services}>
      <h2>OUR SERVICES</h2>
      <div className={s.services__row}>
        {SERVICES.map(({ icon, title, body, route }) =>
          displayType !== ScreenSize.MOBILE ? (
            <div key={title} className={s.services__item}>
              <figure className={s.services__figure}>
                <Icon name={icon} width="80" height="80" color="var(--arsenic)" />
              </figure>
              <strong>{title}</strong>
              <div aria-hidden="true" className={s['services__item--roll']}>
                <strong>{title}</strong>
                <p>{body}</p>
                <RouteLink href={`/${route}`}>
                  <Arrow />
                </RouteLink>
              </div>
            </div>
          ) : (
            <div key={title} className={s['services__mobile_item']}>
              <figure>
                <Icon name={icon} width="60" height="60" color="var(--sepia)" />
              </figure>
              <div className={s['services__mobile_item--desc']}>
                <strong>{title}</strong>
                <p>{body}</p>
                <Arrow />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
