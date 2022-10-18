export enum SocialLinks {
  LINKEDIN = 'https://www.linkedin.com/in/sunnyprakash12',
  GITHUB = 'https://github.com/sprakash57',
  TWITTER = 'https://twitter.com/sunny_pr_',
  YOUTUBE = 'https://www.youtube.com/c/sunnyprakash5712',
  BUYMECOFFEE = 'https://www.buymeacoffee.com/sunnyprakash',
  FACEBOOK = 'https://www.facebook.com/suprdev',
  INSTAGRAM = 'https://www.instagram.com/sunnyprakash57',
}

export enum Icons {
  ANDROID = 'android',
  ARROW = 'arrow',
  BLOG = 'blog',
  BUYMECOFFEE = 'buymecoffee',
  CARET = 'caret',
  CHECK = 'check',
  CHROME = 'chrome',
  CONSULT = 'consult',
  DEVELOP = 'develop',
  EMAIL = 'email',
  EXPLORE = 'explore',
  EXTLINK = 'extlink',
  FACEBOOK = 'facebook',
  FORK = 'fork',
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  NPM = 'npm',
  OPEN_SOURCE = 'opensource',
  PAYPAL = 'paypal',
  PROJECT = 'project',
  LEARN = 'learn',
  REDDIT = 'reddit',
  SEARCH = 'search',
  SPONSOR = 'sponsor',
  STAR = 'star',
  TWITTER = 'twitter',
  TWITTER_DISCUSS = 'discuss',
  WATCH = 'watch',
  WHATSAPP = 'whatsapp',
  WINDOWS = 'windows',
  YOUTUBE = 'youtube',
}

export enum Alerts {
  WARNING = 'yellow',
  DANGER = 'red',
  SUCCESS = 'green',
}

export enum ScreenSize {
  MOBILE = 'S',
  TABLET = 'M',
  DESKTOP = 'L',
}

export const SERVICES = [
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

export const TEAM = [
  {
    name: 'Sunny Prakash',
    area: 'Mostly Frontend',
    description:
      'He has 5+ years of experience in delivering robust Web and App based solutions. Skilled in designing, developing, and testing full-stack JavaScript applications. Believer of "Learn and Share". Also plays Elder Scrolls Online(@suprdev).',
    photo: 'https://i.ibb.co/kc4gKDn/newphoto.jpg',
    thumbnail: 'https://i.ibb.co/pXfv2KD/newphoto.jpg',
    icons: [
      { type: 'linkedin', src: 'https://www.linkedin.com/in/sunnyprakash12' },
      { type: 'twitter', src: 'https://twitter.com/sunny_pr_' },
      { type: 'github', src: 'https://github.com/sprakash57' },
      { type: 'youtube', src: 'https://www.youtube.com/channel/UC8hDBXuYXqDerW1_kGPGbTA' },
    ],
  },
  {
    name: 'Indrani Biswas',
    area: 'Python Expert',
    description:
      'She is skilled in Python based Web and Dashboard application. A career guide who loves to provide consulatation regarding Visa-sponsored jobs, process and its entierity',
    photo: 'https://i.ibb.co/3Fpghmv/Indrani-Pic.jpg',
    thumbnail: 'https://i.ibb.co/t2qVCpz/Indrani-Pic.jpg',
    icons: [
      { type: 'linkedin', src: 'https://www.linkedin.com/in/ibiswas' },
      { type: 'instagram', src: 'https://www.instagram.com/expat_travel_finds' },
      { type: 'github', src: 'https://github.com/biswain2309' },
      { type: 'youtube', src: 'https://www.youtube.com/c/ExpatTravelFinds' },
    ],
  },
];
