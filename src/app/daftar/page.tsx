import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Daftar Gratis',
  description: 'Daftar gratis di SkillHub Indonesia dan dapatkan akses instan ke 200+ kursus digital skills. Data Analytics, Digital Marketing, UI/UX Design, Programming, AI Skills. Tanpa biaya pendaftaran, tanpa kartu kredit.',
  keywords: ['daftar kursus gratis', 'registrasi gratis', 'belajar online gratis', 'daftar skillhub'],
  openGraph: {
    title: 'Daftar Gratis - Akses 200+ Kursus Digital Skills',
    description: 'Mulai perjalanan belajar Anda hari ini. 100% gratis, tanpa biaya tersembunyi.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DaftarPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
