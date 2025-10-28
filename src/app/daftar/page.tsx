import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Daftar Gratis - SkillHub Indonesia',
  description: 'Daftar gratis dan dapatkan akses ke 200+ kursus digital skills terbaik. Mulai perjalanan belajar Anda sekarang!',
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
