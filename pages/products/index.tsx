import { Icon, RouteLink } from '@/components/Elements';
import Image from 'next/image';
import React from 'react';
import s from './index.module.scss';

const PRODUCTS = [
  {
    title: 'Create React Saga',
    body: 'There are very less CLI tools that generates quality and minimalistic boilerplate code for your next React app. Plus, It comes bundled with superpowers like reduxjs/toolkit, redux-saga, react-testing-library and Storybook. You do not need to plug these by yourself. Webpack 5 is at your service for your bundling needs. Tried and tested coding standard with Industry approved tools to set the base of your development for robust and complex production ready app.',
    logo: 'https://i.ibb.co/zQhXPvw/wrs-bg.png',
    thumbnail: 'https://i.ibb.co/Cm5bVGF/wrs-bg.png',
    platforms: ['npm'],
    url: 'https://sprakash57.github.io/create-react-saga',
    urlText: 'Know more',
  },
  {
    title: 'Articlyzer',
    body: 'Did you ever wonder how much an article reading time costs in terms of time. Or maybe you are writing one yourself and wanted to know number of words present in it and which words are used frequently. Well Articlyzer all of this for free. Just put your article inside and results are just one click away.',
    logo: 'https://i.ibb.co/bWjzy7P/articlyzer.png',
    thumbnail: 'https://i.ibb.co/gjbzX63/articlyzer.png',
    platforms: ['chrome'],
    url: 'https://articlyzer-project.herokuapp.com',
    urlText: 'Try it',
  },
  {
    title: 'Connect 3',
    body: 'Good old classic tic tac toe on your android. Play against your friend or challange your smartphone 😉 in duel.',
    logo: 'https://i.ibb.co/8jJ53rd/logo.png',
    thumbnail: 'https://i.ibb.co/gDGT1SP/logo.png',
    platforms: ['android'],
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
    urlText: 'Download',
  },
  {
    title: 'Mealander',
    body: 'What if I tell you there is a Calendar that takes care of your meetings not with people but with your meals. The whole purpose of this app is to take care what you are going to have in Breakfast, Lunch and Dinner. Either add meals by yourself or let app do it for you. Specially made for your meal plans. It also generate plans for you in one click.',
    logo: 'https://i.ibb.co/1RB3gM8/Mealander-800.png',
    thumbnail: 'https://i.ibb.co/p4Ng7QJ/Mealander-800.png',
    platforms: ['android'],
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
    urlText: 'Download',
  },
  {
    title: 'Ecslate',
    body: 'This desktop app is still in prototype phase. The basic idea behind making this tool is to take care of trivial and repititive task of web developers without comprimising client data over the internet by using tools like converters and formatters. You do not need to open your web browser again and connect to the network to achieve these tasks. You can do all this on your desktop away from prying eyes. And yes, we do not collect any sort of data.',
    logo: 'https://i.ibb.co/zQPPtRc/ecslate.png',
    thumbnail: 'https://i.ibb.co/PF11Vhp/ecslate.png',
    platforms: ['windows'],
    url: 'https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat',
    urlText: 'Know more',
  },
  {
    title: 'Discogspedia',
    body: 'Modern search tool to find music releases published over Discogs website. Oh! Did I tell you it has clutter-free and clean UI. 🧹',
    logo: 'https://i.ibb.co/Jc9CQN9/discogspedia.png',
    thumbnail: 'https://i.ibb.co/Jc9CQN9/discogspedia.png',
    platforms: ['chrome'],
    url: 'https://discogspedia.netlify.app',
    urlText: 'Try it',
  },
];

const Products = () => {
  return (
    <section className={s.products}>
      {PRODUCTS.map(({ title, body, logo, thumbnail, platforms, url, urlText }) => (
        <div className={s.products__row} key={title}>
          <div className={s.products__item}>
            <figure>
              <Image
                src={logo}
                alt={title}
                placeholder="blur"
                blurDataURL={thumbnail}
                width={180}
                height={180}
                style={{ borderRadius: '50%' }}
              />
            </figure>
            <div className={s.products__details}>
              <div className={s.products__title}>
                <h2>{title}</h2>
                <div className={s.products__platforms}>
                  {platforms.map((platform) => (
                    <Icon key={platform} name={platform} width="24" height="24" />
                  ))}
                </div>
              </div>
              <p>{body}</p>
            </div>
          </div>
          <RouteLink classForContainer={s.products__link} href={url} isExternal>
            {urlText}
          </RouteLink>
        </div>
      ))}
    </section>
  );
};

export default Products;
