'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackButtonClick, trackInitiateCheckout } from '@/lib/fbpixel';
import LeadFormModal from '@/components/LeadFormModal';

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const handleCTAClick = () => {
    trackButtonClick('Daftar Gratis Sekarang - Hero');
    trackInitiateCheckout();
    setShowModal(true);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#FF6B35] via-[#f76942] to-[#0066FF] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Platform Pembelajaran Digital Gratis untuk Meningkatkan Skill Teknologi Anda
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
              Bergabung dengan ribuan learner Indonesia yang mengembangkan karir digital mereka bersama SkillHub Indonesia
            </p>

            {/* CTA Button */}
            <button
              onClick={handleCTAClick}
              className="inline-block px-8 py-4 bg-white text-[#FF6B35] rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Daftar Gratis Sekarang
            </button>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sertifikat Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>50,000+ Learner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
