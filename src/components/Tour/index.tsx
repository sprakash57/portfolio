import { Steps } from 'intro.js-react';
import { useLocalStorage } from 'helpers/hooks';

const Tour = () => {
  const [tourEnabled, setTourEnabled] = useLocalStorage<boolean>('sunnyprakash_tour', true);

  const steps = [
    {
      title: 'Hello 👋',
      element: '[alt="Profile photo"]',
      intro: 'Let me show you around the place.',
    },
    {
      title: 'Connect',
      element: '#social_network',
      intro: 'My soical presence and easiest way to connect. I call them <strong>Ice Breakers</strong>.😆',
    },
    {
      title: 'More to explore',
      element: '#Introduction > [title="Next section"] > svg',
      intro: 'This button will help you to reach out to more exciting content that I have to offer.🚀',
    },
    {
      title: 'Lets talk!',
      element: '#contact_email',
      intro: 'Have Something to discuss? Send me an email and I will get back to you ASAP.🏃‍♂️',
    },
    {
      title: 'Are you hiring?',
      element: '#download_resume',
      intro: 'Looking for a Frontend Developer who can take on new challanges? Here is my resume.🧾',
    },
  ];

  return (
    <Steps
      initialStep={0}
      enabled={tourEnabled}
      steps={steps}
      onExit={() => setTourEnabled(false)}
      options={{
        showProgress: true,
        showBullets: false,
      }}
    />
  );
};

export default Tour;
