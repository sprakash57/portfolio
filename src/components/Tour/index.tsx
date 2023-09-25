import ReactJoyride, { CallBackProps } from 'react-joyride';
import { useLocalStorage } from 'helpers/hooks';
import React from 'react';


const Tour = () => {
  const [tourEnabled, setTourEnabled] = useLocalStorage<boolean>('sunnyprakash_tour', true);

  const steps = [
    {
      title: 'Hello 👋',
      target: '[alt="Profile photo"]',
      content: 'Let me show you around the place.',
    },
    {
      title: 'Social network',
      target: '#social_network',
      content: 'These platforms are the best way to connect. I call them Ice Breakers.😆',
    },
    {
      title: 'More to explore',
      target: '#Introduction > [title="Next section"] > svg',
      content: 'This button will help you to reach out to more exciting content that I have to offer.🚀',
    },
    {
      title: 'Are you hiring?',
      target: '#download_resume',
      content: 'Looking for a Frontend Developer who can take on new challanges? Here is my resume.🧾',
    },
  ];

  const handleCallback = React.useCallback((data: CallBackProps) => {
    if (data.action === 'reset') {
      setTourEnabled(false);
    }
  }, [setTourEnabled]);

  return (
    <ReactJoyride
      run={tourEnabled}
      callback={handleCallback}
      steps={steps}
      continuous
      showProgress
      scrollDuration={600}
      styles={{
        spotlight: {
          borderRadius: '8px'
        },
        options: {
          overlayColor: 'rgba(0, 0, 0, 0.7)',
        }
      }}
    />
  );
};

export default Tour;
