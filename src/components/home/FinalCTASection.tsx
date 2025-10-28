'use client';

import { useState } from 'react';
import { trackButtonClick, trackInitiateCheckout } from '@/lib/fbpixel';
import LeadFormModal from '@/components/LeadFormModal';

export default function FinalCTASection() {
  const [showModal, setShowModal] = useState(false);

  const handleCTAClick = () => {
    trackButtonClick('Daftar Gratis Sekarang - Final CTA');
    trackInitiateCheckout();
    setShowModal(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#FF6B35] to-[#0066FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Perjalanan Belajar Anda?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Bergabunglah dengan ribuan learner lainnya dan mulai tingkatkan skill digital Anda hari ini. 
              Gratis, tanpa biaya tersembunyi, tanpa kartu kredit.
            </p>
            <button
              onClick={handleCTAClick}
              className="inline-block px-10 py-4 bg-white text-[#FF6B35] rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Daftar Gratis Sekarang
            </button>
            <p className="mt-6 text-sm text-white/80">
              ✓ Akses instan ke 200+ kursus &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Sertifikat profesional &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Komunitas aktif
            </p>
          </div>
        </div>
      </section>

      <LeadFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
