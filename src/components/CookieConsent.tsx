'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { shouldShowCookieBanner, setCookieConsent } from '@/lib/cookieConsent';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(shouldShowCookieBanner());
  }, []);

  const handleAccept = () => {
    setCookieConsent('accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    setCookieConsent('rejected');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              Kami menggunakan cookie untuk meningkatkan pengalaman Anda dan menganalisis traffic situs. 
              Dengan melanjutkan, Anda menyetujui penggunaan cookie kami.{' '}
              <Link href="/kebijakan-cookie" className="text-[#FF6B35] hover:underline font-medium">
                Pelajari lebih lanjut
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff5722] transition-colors font-medium text-sm"
            >
              Terima Semua
            </button>
            <button
              onClick={handleReject}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm"
            >
              Tolak Non-Essential
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
