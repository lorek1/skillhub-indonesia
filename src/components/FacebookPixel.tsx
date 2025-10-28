'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { FB_PIXEL_ID } from '@/lib/fbpixel';
import { getCookieConsent } from '@/lib/cookieConsent';

export default function FacebookPixel() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check initial consent
    const consent = getCookieConsent();
    setConsentGiven(consent === 'accepted');

    // Listen for consent changes
    const handleConsentChange = (e: CustomEvent) => {
      setConsentGiven(e.detail === 'accepted');
    };

    window.addEventListener('cookieConsentChange', handleConsentChange as EventListener);

    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange as EventListener);
    };
  }, []);

  if (!consentGiven) {
    return null;
  }

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
