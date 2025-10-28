'use client';

import Link from 'next/link';
import { trackViewContent } from '@/lib/fbpixel';

const courses = [
  {
    slug: 'data-analytics',
    title: 'Analitik Data',
    description: 'Pelajari cara menganalisis data menggunakan tools modern seperti Excel, Python, dan SQL. Cocok untuk pemula yang ingin memulai karir di bidang data.',
    level: 'Pemula',
    duration: '8 minggu',
    image: '📊',
  },
  {
    slug: 'digital-marketing',
    title: 'Pemasaran Digital',
    description: 'Kuasai strategi pemasaran digital dari SEO, social media marketing, hingga Google Ads untuk meningkatkan bisnis online Anda.',
    level: 'Pemula - Menengah',
    duration: '6 minggu',
    image: '📱',
  },
  {
    slug: 'ui-ux-design',
    title: 'Desain UI/UX',
    description: 'Belajar merancang interface yang menarik dan user experience yang optimal menggunakan Figma dan prinsip design thinking.',
    level: 'Pemula',
    duration: '10 minggu',
    image: '🎨',
  },
  {
    slug: 'programming',
    title: 'Pemrograman (Python/JavaScript)',
    description: 'Mulai perjalanan coding Anda dengan mempelajari Python dan JavaScript, dua bahasa pemrograman paling populer di industri.',
    level: 'Pemula',
    duration: '12 minggu',
    image: '💻',
  },
  {
    slug: 'ai-skills',
    title: 'Keterampilan AI',
    description: 'Pahami fundamental AI dan machine learning, serta cara mengimplementasikannya dalam proyek nyata menggunakan tools modern.',
    level: 'Menengah',
    duration: '10 minggu',
    image: '🤖',
  },
];

export default function PopularCoursesSection() {
  const handleCourseClick = (courseName: string) => {
    trackViewContent(courseName, 'Digital Skills');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kursus Populer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan kursus terbaik yang paling diminati oleh learner kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/kursus/${course.slug}`}
              onClick={() => handleCourseClick(course.title)}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#0066FF]/10 p-8 text-center">
                <div className="text-6xl mb-2">{course.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    📚 {course.level}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {course.duration}
                  </span>
                </div>
                <button className="mt-4 w-full py-2 bg-gray-100 group-hover:bg-[#FF6B35] text-gray-700 group-hover:text-white rounded-lg transition-colors font-medium">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/kursus"
            className="inline-block px-8 py-3 border-2 border-[#FF6B35] text-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white transition-colors font-semibold"
          >
            Lihat Semua Kursus
          </Link>
        </div>
      </div>
    </section>
  );
}
