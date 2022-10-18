import React from 'react';

export enum AdType {
  DEFAULT,
  ARTICLE,
  VERTICAL,
}

const adProps = {
  [AdType.DEFAULT]: {
    'data-ad-slot': '7181773959',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
  },
  [AdType.ARTICLE]: {
    'data-ad-slot': '3197857275',
    'data-ad-format': 'fluid',
    'data-ad-layout': 'in-article',
  },
  [AdType.VERTICAL]: {
    'data-ad-slot': '8863578035',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
  },
};

const GoogleAd = ({ variant = AdType.DEFAULT }: { variant: AdType }) => {
  React.useEffect(() => {
    try {
      //@ts-ignore
      window.adsbygoogle = (window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div aria-hidden={true} style={{ overflow: 'hidden', minWidth: '300px', minHeight: '250px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.ADSENSE}
        {...adProps[variant]}
      />
    </div>
  );
};

export default GoogleAd;
