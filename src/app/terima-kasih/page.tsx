'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Mail, UserCircle, BookOpen } from 'lucide-react';
import { trackCompleteRegistration } from '@/lib/fbpixel';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    // Track CompleteRegistration event
    trackCompleteRegistration();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={48} />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terima Kasih{name ? `, ${name}` : ''}! 🎉
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Selamat! Anda sekarang adalah bagian dari komunitas SkillHub Indonesia. 
              Kami akan segera menghubungi Anda melalui WhatsApp untuk informasi lebih lanjut.
            </p>

            {/* Next Steps */}
            <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#0066FF]/10 rounded-xl p-8 mb-8 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Langkah Selanjutnya:
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="text-[#FF6B35]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      1. Cek WhatsApp Anda
                    </h3>
                    <p className="text-gray-600">
                      Kami akan menghubungi Anda untuk informasi akses ke platform
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <UserCircle className="text-[#FF6B35]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      2. Lengkapi Profil Anda
                    </h3>
                    <p className="text-gray-600">
                      Isi informasi profil untuk mendapatkan rekomendasi kursus yang sesuai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <BookOpen className="text-[#FF6B35]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      3. Mulai Belajar!
                    </h3>
                    <p className="text-gray-600">
                      Pilih kursus pertama Anda dan mulai perjalanan pembelajaran digital
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kursus"
                className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff5722] transition-colors font-semibold"
              >
                Mulai Belajar Sekarang
              </Link>
              <Link
                href="/"
                className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
              >
                Kembali ke Beranda
              </Link>
            </div>

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Bagikan ke teman Anda!</p>
              <div className="flex justify-center gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://skillhubindonesia.site')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
                >
                  Share di Facebook
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent('Saya baru saja mendaftar di SkillHub Indonesia untuk belajar digital skills gratis! Join sekarang: https://skillhubindonesia.site')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors"
                >
                  Share di WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TerimaKasihPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
