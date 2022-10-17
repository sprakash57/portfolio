import { ScreenSize } from '@/helpers/constants';
import { useScreenDimension } from '@/helpers/hooks';
import { useRouter } from 'next/router';
import React from 'react';
import s from './index.module.scss';
import { Icon, RouteLink } from '@/components/Elements';
import { Arrow } from '@/components/Elements/Icons';
import { SERVICES } from '@/helpers/constants';

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
                <RouteLink href={`/${route}`}>
                  <Arrow />
                </RouteLink>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
