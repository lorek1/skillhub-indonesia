'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackViewContent } from '@/lib/fbpixel';

const allCourses = [
  {
    slug: 'data-analytics',
    title: 'Analitik Data',
    description: 'Pelajari cara menganalisis data menggunakan tools modern seperti Excel, Python, dan SQL. Cocok untuk pemula yang ingin memulai karir di bidang data.',
    level: 'Pemula',
    duration: '8 minggu',
    category: 'Data',
    icon: '📊',
  },
  {
    slug: 'digital-marketing',
    title: 'Pemasaran Digital',
    description: 'Kuasai strategi pemasaran digital dari SEO, social media marketing, hingga Google Ads untuk meningkatkan bisnis online Anda.',
    level: 'Pemula - Menengah',
    duration: '6 minggu',
    category: 'Marketing',
    icon: '📱',
  },
  {
    slug: 'ui-ux-design',
    title: 'Desain UI/UX',
    description: 'Belajar merancang interface yang menarik dan user experience yang optimal menggunakan Figma dan prinsip design thinking.',
    level: 'Pemula',
    duration: '10 minggu',
    category: 'Design',
    icon: '🎨',
  },
  {
    slug: 'programming',
    title: 'Pemrograman (Python/JavaScript)',
    description: 'Mulai perjalanan coding Anda dengan mempelajari Python dan JavaScript, dua bahasa pemrograman paling populer di industri.',
    level: 'Pemula',
    duration: '12 minggu',
    category: 'Programming',
    icon: '💻',
  },
  {
    slug: 'ai-skills',
    title: 'Keterampilan AI',
    description: 'Pahami fundamental AI dan machine learning, serta cara mengimplementasikannya dalam proyek nyata menggunakan tools modern.',
    level: 'Menengah',
    duration: '10 minggu',
    category: 'AI',
    icon: '🤖',
  },
  {
    slug: 'web-development',
    title: 'Pengembangan Web',
    description: 'Bangun website modern dan responsive dari nol menggunakan HTML, CSS, JavaScript, dan framework populer seperti React.',
    level: 'Pemula - Menengah',
    duration: '14 minggu',
    category: 'Programming',
    icon: '🌐',
  },
  {
    slug: 'content-creation',
    title: 'Pembuatan Konten',
    description: 'Pelajari cara membuat konten yang engaging untuk berbagai platform social media dan membangun personal brand Anda.',
    level: 'Pemula',
    duration: '6 minggu',
    category: 'Marketing',
    icon: '📸',
  },
  {
    slug: 'business-analytics',
    title: 'Analitik Bisnis',
    description: 'Gunakan data untuk membuat keputusan bisnis yang lebih baik dengan teknik analytics dan visualization yang efektif.',
    level: 'Menengah',
    duration: '8 minggu',
    category: 'Data',
    icon: '📈',
  },
];

const categories = ['Semua', 'Data', 'Marketing', 'Design', 'Programming', 'AI'];
const levels = ['Semua Level', 'Pemula', 'Menengah'];

export default function KursusPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedLevel, setSelectedLevel] = useState('Semua Level');

  const filteredCourses = allCourses.filter((course) => {
    const categoryMatch = selectedCategory === 'Semua' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'Semua Level' || course.level.includes(selectedLevel);
    return categoryMatch && levelMatch;
  });

  const handleCourseClick = (courseName: string) => {
    trackViewContent(courseName, 'Digital Skills');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Semua Kursus
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih dari lebih dari 200+ kursus berkualitas tinggi untuk mengembangkan skill digital Anda
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Kategori
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#FF6B35] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedLevel === level
                          ? 'bg-[#FF6B35] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan <span className="font-semibold">{filteredCourses.length}</span> kursus
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/kursus/${course.slug}`}
              onClick={() => handleCourseClick(course.title)}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#0066FF]/10 p-8 text-center">
                <div className="text-6xl mb-2">{course.icon}</div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-3">
                  {course.category}
                </div>
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
                  Lihat Detail
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              Tidak ada kursus yang sesuai dengan filter Anda
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSelectedLevel('Semua Level');
              }}
              className="px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff5722] transition-colors font-medium"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
