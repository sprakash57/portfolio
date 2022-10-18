import { TEAM } from '@/helpers/constants';
import React from 'react';
import s from './index.module.scss';
import TeamCard, { ITeamCard } from './TeamCard';

const Team = () => {
  return (
    <section className={s.team}>
      <h2>OUR TEAM</h2>
      <div className={s.team__row}>
        {TEAM.map((props: ITeamCard) => (
          <TeamCard key={props.name} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Team;
