import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - SkillHub Indonesia',
  description: 'Artikel dan tips seputar digital skills, karir, dan pembelajaran',
};

const articles = [
  {
    slug: '5-digital-skills-paling-dicari-2025',
    title: '5 Digital Skills Paling Dicari di 2025',
    excerpt: 'Pelajari skill digital apa saja yang paling dicari oleh perusahaan di tahun 2025 dan bagaimana Anda bisa mempelajarinya.',
    date: '15 Januari 2025',
    readTime: '5 menit',
    category: 'Karir',
    image: '📈',
  },
  {
    slug: 'cara-belajar-programming-untuk-pemula',
    title: 'Cara Belajar Programming untuk Pemula: Panduan Lengkap',
    excerpt: 'Panduan step-by-step untuk memulai perjalanan programming Anda dari nol hingga siap bekerja.',
    date: '12 Januari 2025',
    readTime: '8 menit',
    category: 'Programming',
    image: '💻',
  },
  {
    slug: 'tips-sukses-interview-digital-career',
    title: 'Tips Sukses Interview untuk Digital Career',
    excerpt: 'Persiapan dan strategi untuk menghadapi interview di perusahaan tech dan digital.',
    date: '10 Januari 2025',
    readTime: '6 menit',
    category: 'Karir',
    image: '🎯',
  },
  {
    slug: 'perbedaan-ui-dan-ux-design',
    title: 'Perbedaan UI dan UX Design: Apa yang Perlu Anda Ketahui',
    excerpt: 'Memahami perbedaan antara UI dan UX design dan mengapa keduanya penting dalam product development.',
    date: '8 Januari 2025',
    readTime: '7 menit',
    category: 'Design',
    image: '🎨',
  },
  {
    slug: 'ai-skills-yang-wajib-dipelajari',
    title: 'AI Skills yang Wajib Dipelajari di Era Digital',
    excerpt: 'Skill AI dan machine learning apa saja yang harus Anda kuasai untuk tetap relevan di masa depan.',
    date: '5 Januari 2025',
    readTime: '6 menit',
    category: 'AI',
    image: '🤖',
  },
  {
    slug: 'strategi-digital-marketing-untuk-umkm',
    title: 'Strategi Digital Marketing untuk UMKM',
    excerpt: 'Panduan praktis untuk UMKM yang ingin memanfaatkan digital marketing untuk meningkatkan penjualan.',
    date: '3 Januari 2025',
    readTime: '10 menit',
    category: 'Marketing',
    image: '📱',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog & Artikel
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tips, dan panduan seputar digital skills dan pengembangan karir
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#0066FF]/10 p-12 text-center">
                  <div className="text-6xl">{article.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span className="text-[#FF6B35] group-hover:underline">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
