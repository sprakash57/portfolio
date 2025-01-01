import ReactJoyride, { CallBackProps } from "react-joyride";
import { useLocalStorage } from "helpers/hooks";
import theme from "theme/index";
import React from "react";
import { TextField } from "components/common";

const Tour = () => {
  const [tourEnabled, setTourEnabled] = useLocalStorage<boolean>(
    "sunnyprakash_tour",
    true
  );

  const steps = [
    {
      title: <TextField variant="P1">Hello 👋</TextField>,
      target: '[alt="Profile photo"]',
      content: "Let me show you around",
    },
    {
      title: <TextField variant="P1">Social network</TextField>,
      target: "#social_network",
      content:
        'These platforms are the best way to connect. I call them "Ice Breakers" 😆',
    },
    {
      title: <TextField variant="P1">More to explore</TextField>,
      target: '#Introduction > [title="Next section"] > svg',
      content:
        "This navigation will help you to reach out to further section 🚀",
    },
    {
      title: <TextField variant="P1">Are you hiring?</TextField>,
      target: "#download_resume",
      content:
        "Looking for a Frontend fullstack React Developer who can take on new challenges? Here is my resume 🧾",
    },
  ];

  const handleCallback = React.useCallback(
    (data: CallBackProps) => {
      if (data.action === "reset") {
        setTourEnabled(false);
      }
    },
    [setTourEnabled]
  );

  return (
    <ReactJoyride
      run={tourEnabled}
      callback={handleCallback}
      steps={steps}
      continuous
      showProgress
      scrollDuration={600}
      styles={{
        beaconInner: {
          backgroundColor: theme.colors.pastelRed,
        },
        beaconOuter: {
          borderColor: theme.colors.pastelRed,
        },
        spotlight: {
          borderRadius: "8px",
        },
        options: {
          overlayColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    />
  );
};

export default Tour;
