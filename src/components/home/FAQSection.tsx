'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah benar-benar gratis?',
    answer: 'Ya, semua kursus di SkillHub Indonesia 100% gratis. Anda tidak perlu membayar biaya pendaftaran, biaya kursus, atau biaya tersembunyi lainnya. Kami berkomitmen untuk memberikan akses pendidikan digital yang terjangkau untuk semua orang Indonesia.',
  },
  {
    question: 'Berapa lama waktu belajar yang dibutuhkan?',
    answer: 'Waktu belajar bervariasi tergantung kursus yang Anda pilih, mulai dari 6-12 minggu. Namun, Anda belajar dengan kecepatan Anda sendiri - tidak ada deadline yang ketat. Platform kami tersedia 24/7 sehingga Anda bisa belajar kapan saja sesuai jadwal Anda.',
  },
  {
    question: 'Apakah saya akan mendapat sertifikat?',
    answer: 'Ya! Setelah menyelesaikan setiap kursus dan lulus ujian akhir, Anda akan mendapatkan sertifikat digital profesional yang dapat dibagikan di LinkedIn dan CV Anda. Sertifikat ini diakui oleh berbagai perusahaan di Indonesia.',
  },
  {
    question: 'Untuk siapa platform ini?',
    answer: 'SkillHub Indonesia dirancang untuk siapa saja yang ingin meningkatkan skill digital mereka - baik Anda mahasiswa, fresh graduate, profesional yang ingin switch career, atau entrepreneur yang ingin mengembangkan bisnis. Kursus kami cocok untuk pemula hingga menengah.',
  },
  {
    question: 'Apa ada jaminan hasil?',
    answer: 'Platform ini bersifat informasional dan edukatif. Hasil belajar tergantung pada usaha dan konsistensi masing-masing individu. Kami tidak memberikan jaminan finansial atau hasil spesifik. Namun, kami berkomitmen menyediakan materi berkualitas tinggi dan dukungan komunitas untuk memaksimalkan pembelajaran Anda.',
  },
  {
    question: 'Bagaimana cara mendaftar?',
    answer: 'Pendaftaran sangat mudah! Klik tombol "Daftar Gratis" di halaman ini, isi form singkat dengan nama, email, dan nomor WhatsApp Anda. Setelah itu, Anda akan langsung mendapatkan akses ke semua kursus kami.',
  },
  {
    question: 'Apakah ada persyaratan teknis?',
    answer: 'Anda hanya membutuhkan perangkat (laptop, tablet, atau smartphone) dengan koneksi internet. Beberapa kursus mungkin memerlukan software tertentu, tetapi kami akan memberikan panduan instalasi dan alternatif gratis untuk semua tools yang dibutuhkan.',
  },
  {
    question: 'Bagaimana jika saya punya pertanyaan saat belajar?',
    answer: 'Anda dapat mengajukan pertanyaan melalui forum diskusi di setiap kursus, bergabung dengan komunitas learner kami, atau menghubungi tim support kami melalui email di support@skillhubindonesia.com. Kami siap membantu Anda!',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang SkillHub Indonesia
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-[#FF6B35] transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
