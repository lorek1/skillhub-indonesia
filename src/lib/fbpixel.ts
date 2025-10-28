// Facebook Pixel utilities
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'YOUR_PIXEL_ID';

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
};

export const customEvent = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', name, options);
  }
};

// Standard Facebook Pixel Events
export const trackViewContent = (contentName: string, contentCategory: string = 'Digital Skills') => {
  event('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
    content_type: 'product',
    value: 0.00,
    currency: 'IDR'
  });
};

export const trackInitiateCheckout = () => {
  event('InitiateCheckout', {
    content_name: 'Registration Form',
    content_category: 'Lead Generation',
    value: 0.00,
    currency: 'IDR'
  });
};

export const trackLead = () => {
  event('Lead', {
    content_name: 'Free Registration',
    content_category: 'E-Learning',
    value: 0.00,
    currency: 'IDR',
    predicted_ltv: 0.00
  });
};

export const trackCompleteRegistration = () => {
  event('CompleteRegistration', {
    content_name: 'SkillHub Registration',
    status: 'completed',
    value: 0.00,
    currency: 'IDR'
  });
};

export const trackSearch = (searchString: string) => {
  event('Search', {
    search_string: searchString,
    content_category: 'Courses'
  });
};

export const trackButtonClick = (buttonName: string) => {
  customEvent('ButtonClick', {
    button_name: buttonName,
    page_location: typeof window !== 'undefined' ? window.location.href : ''
  });
};
