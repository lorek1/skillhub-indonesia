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

    // Debug log
    console.log('Facebook Pixel - Cookie Consent:', consent);
    console.log('Facebook Pixel ID:', FB_PIXEL_ID);

    // Listen for consent changes
    const handleConsentChange = (e: CustomEvent) => {
      setConsentGiven(e.detail === 'accepted');
      console.log('Cookie consent changed:', e.detail);
    };

    window.addEventListener('cookieConsentChange', handleConsentChange as EventListener);

    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange as EventListener);
    };
  }, []);

  // Show warning if pixel ID is not set
  useEffect(() => {
    if (FB_PIXEL_ID === 'YOUR_PIXEL_ID') {
      console.warn('⚠️ Facebook Pixel ID not configured! Add NEXT_PUBLIC_FB_PIXEL_ID to .env.local');
    }
  }, []);

  if (!consentGiven) {
    console.log('Facebook Pixel not loaded - waiting for cookie consent');
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
