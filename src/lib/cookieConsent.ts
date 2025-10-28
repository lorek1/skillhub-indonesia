// Cookie consent management
const COOKIE_CONSENT_KEY = 'skillhub_cookie_consent';

export type CookieConsentStatus = 'accepted' | 'rejected' | null;

export const getCookieConsent = (): CookieConsentStatus => {
  if (typeof window === 'undefined') return null;
  
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return consent as CookieConsentStatus;
};

export const setCookieConsent = (status: 'accepted' | 'rejected') => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
  
  // Dispatch custom event for components to listen
  window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: status }));
};

export const shouldShowCookieBanner = (): boolean => {
  return getCookieConsent() === null;
};
