'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, BarChart, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { trackViewContent, trackInitiateCheckout } from '@/lib/fbpixel';
import LeadFormModal from '@/components/LeadFormModal';

const coursesData: Record<string, any> = {
  'data-analytics': {
    title: 'Analitik Data',
    description: 'Pelajari cara menganalisis data menggunakan tools modern seperti Excel, Python, dan SQL untuk membuat keputusan bisnis yang lebih baik.',
    level: 'Pemula',
    duration: '8 minggu',
    icon: '📊',
    content: {
      overview: 'Kursus Data Analytics ini dirancang untuk pemula yang ingin memulai karir di bidang data. Anda akan belajar dari dasar hingga mampu melakukan analisis data yang kompleks menggunakan tools industry-standard.',
      willLearn: [
        'Fundamental analisis data dan statistik dasar',
        'Microsoft Excel untuk data analysis (Pivot Tables, VLOOKUP, Charts)',
        'SQL untuk query database dan data manipulation',
        'Python untuk data analysis dengan Pandas dan NumPy',
        'Data visualization dengan Matplotlib dan Seaborn',
        'Teknik cleaning dan preprocessing data',
        'Membuat dashboard interaktif',
        'Best practices dalam data analysis',
      ],
      forWho: [
        'Pemula yang ingin memulai karir di bidang data',
        'Profesional yang ingin menambah skill data analysis',
        'Business analyst yang ingin meningkatkan kemampuan teknis',
        'Siapa saja yang ingin membuat keputusan berbasis data',
      ],
      modules: [
        { title: 'Introduction to Data Analytics', duration: '1 minggu' },
        { title: 'Excel for Data Analysis', duration: '2 minggu' },
        { title: 'SQL Fundamentals', duration: '2 minggu' },
        { title: 'Python for Data Analysis', duration: '2 minggu' },
        { title: 'Data Visualization', duration: '1 minggu' },
      ],
      requirements: [
        'Komputer dengan koneksi internet',
        'Tidak perlu pengalaman programming sebelumnya',
        'Motivasi untuk belajar dan berlatih',
      ],
    },
  },
  'digital-marketing': {
    title: 'Pemasaran Digital',
    description: 'Kuasai strategi pemasaran digital lengkap dari SEO, social media marketing, content marketing hingga paid advertising.',
    level: 'Pemula - Menengah',
    duration: '6 minggu',
    icon: '📱',
    content: {
      overview: 'Kursus Digital Marketing yang komprehensif ini akan mengajarkan Anda semua aspek pemasaran digital modern. Dari strategi organik hingga paid advertising, Anda akan menguasai skills yang dibutuhkan untuk sukses di era digital.',
      willLearn: [
        'Fundamental digital marketing dan strategi',
        'Search Engine Optimization (SEO) on-page dan off-page',
        'Social Media Marketing di berbagai platform',
        'Content Marketing dan copywriting',
        'Google Ads dan Facebook Ads',
        'Email Marketing dan automation',
        'Analytics dan measurement dengan Google Analytics',
        'Conversion optimization techniques',
      ],
      forWho: [
        'Entrepreneur yang ingin memasarkan bisnis online',
        'Marketing professional yang ingin upskill',
        'Fresh graduate yang ingin berkarir di digital marketing',
        'Freelancer yang ingin menawarkan jasa digital marketing',
      ],
      modules: [
        { title: 'Digital Marketing Fundamentals', duration: '1 minggu' },
        { title: 'SEO & Content Marketing', duration: '1.5 minggu' },
        { title: 'Social Media Marketing', duration: '1.5 minggu' },
        { title: 'Paid Advertising (Google & Facebook Ads)', duration: '1.5 minggu' },
        { title: 'Analytics & Optimization', duration: '0.5 minggu' },
      ],
      requirements: [
        'Pemahaman dasar tentang internet dan social media',
        'Akun Google dan Facebook (untuk praktik)',
        'Komputer dengan koneksi internet',
      ],
    },
  },
  'ui-ux-design': {
    title: 'Desain UI/UX',
    description: 'Belajar merancang interface yang menarik dan user experience yang optimal menggunakan Figma dan prinsip design thinking.',
    level: 'Pemula',
    duration: '10 minggu',
    icon: '🎨',
    content: {
      overview: 'Kursus UI/UX Design ini akan membawa Anda dari pemula hingga mampu merancang produk digital yang user-friendly dan menarik. Dengan fokus pada design thinking dan tools modern seperti Figma.',
      willLearn: [
        'Prinsip dasar UI dan UX design',
        'Design thinking methodology',
        'User research dan persona creation',
        'Wireframing dan prototyping',
        'Visual design principles (color, typography, layout)',
        'Figma untuk UI design',
        'Usability testing',
        'Design systems dan component libraries',
      ],
      forWho: [
        'Pemula yang ingin memulai karir sebagai UI/UX designer',
        'Graphic designer yang ingin beralih ke digital design',
        'Developer yang ingin memahami design',
        'Product manager yang ingin meningkatkan pemahaman UX',
      ],
      modules: [
        { title: 'Introduction to UI/UX Design', duration: '1 minggu' },
        { title: 'Design Thinking & User Research', duration: '2 minggu' },
        { title: 'Wireframing & Prototyping', duration: '2 minggu' },
        { title: 'Visual Design with Figma', duration: '3 minggu' },
        { title: 'Usability Testing & Iteration', duration: '2 minggu' },
      ],
      requirements: [
        'Komputer (Windows atau Mac)',
        'Tidak perlu pengalaman design sebelumnya',
        'Akun Figma gratis',
      ],
    },
  },
  'programming': {
    title: 'Pemrograman (Python/JavaScript)',
    description: 'Mulai perjalanan coding Anda dengan mempelajari Python dan JavaScript, dua bahasa pemrograman paling populer dan versatile.',
    level: 'Pemula',
    duration: '12 minggu',
    icon: '💻',
    content: {
      overview: 'Kursus programming untuk pemula ini akan mengajarkan fundamental programming dengan Python dan JavaScript. Dua bahasa ini adalah yang paling banyak digunakan di industri dan membuka banyak peluang karir.',
      willLearn: [
        'Programming fundamentals (variables, data types, loops, functions)',
        'Python basics dan advanced concepts',
        'JavaScript dan DOM manipulation',
        'Object-Oriented Programming (OOP)',
        'Working with APIs',
        'Debugging dan problem-solving skills',
        'Version control dengan Git',
        'Best coding practices',
      ],
      forWho: [
        'Pemula tanpa pengalaman coding',
        'Career switcher yang ingin masuk ke tech',
        'Mahasiswa yang ingin memperkuat fundamental programming',
        'Siapa saja yang ingin belajar coding',
      ],
      modules: [
        { title: 'Programming Fundamentals', duration: '2 minggu' },
        { title: 'Python Basics', duration: '3 minggu' },
        { title: 'Python Advanced', duration: '2 minggu' },
        { title: 'JavaScript Basics', duration: '3 minggu' },
        { title: 'JavaScript Advanced & DOM', duration: '2 minggu' },
      ],
      requirements: [
        'Komputer dengan Windows, Mac, atau Linux',
        'Tidak perlu pengalaman programming',
        'Keinginan kuat untuk belajar dan berlatih',
      ],
    },
  },
  'ai-skills': {
    title: 'Keterampilan AI',
    description: 'Pahami fundamental AI dan machine learning, serta cara mengimplementasikannya dalam proyek nyata dengan tools modern.',
    level: 'Menengah',
    duration: '10 minggu',
    icon: '🤖',
    content: {
      overview: 'Kursus AI Skills ini dirancang untuk mereka yang sudah memiliki pemahaman programming dasar dan ingin masuk ke dunia Artificial Intelligence dan Machine Learning. Anda akan belajar teori dan praktik implementasi AI.',
      willLearn: [
        'Fundamental AI dan Machine Learning',
        'Supervised learning (regression, classification)',
        'Unsupervised learning (clustering, dimensionality reduction)',
        'Neural networks dan deep learning basics',
        'Natural Language Processing (NLP) fundamentals',
        'Computer vision basics',
        'Tools: TensorFlow, Keras, scikit-learn',
        'AI ethics dan responsible AI',
      ],
      forWho: [
        'Developer yang ingin masuk ke AI/ML',
        'Data analyst yang ingin upskill ke ML',
        'Tech enthusiast yang penasaran dengan AI',
        'Professional yang ingin implement AI di pekerjaan',
      ],
      modules: [
        { title: 'Introduction to AI & ML', duration: '1 minggu' },
        { title: 'Supervised Learning', duration: '3 minggu' },
        { title: 'Unsupervised Learning', duration: '2 minggu' },
        { title: 'Neural Networks & Deep Learning', duration: '2 minggu' },
        { title: 'NLP & Computer Vision Basics', duration: '2 minggu' },
      ],
      requirements: [
        'Pemahaman Python (wajib)',
        'Dasar matematika dan statistik',
        'Komputer dengan spesifikasi memadai',
      ],
    },
  },
};

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [showModal, setShowModal] = useState(false);
  const course = coursesData[slug];

  useEffect(() => {
    if (course) {
      trackViewContent(course.title, 'Digital Skills');
    }
  }, [course]);

  const handleEnrollClick = () => {
    trackInitiateCheckout();
    setShowModal(true);
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Kursus Tidak Ditemukan</h1>
          <Link href="/kursus" className="text-[#FF6B35] hover:underline">
            ← Kembali ke Semua Kursus
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#FF6B35] to-[#0066FF] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">{course.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <BarChart size={20} />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>5,000+ Learners</span>
                </div>
              </div>
              <button
                onClick={handleEnrollClick}
                className="px-8 py-4 bg-white text-[#FF6B35] rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl"
              >
                Daftar Untuk Kursus Ini
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Kursus Ini</h2>
                <p className="text-gray-700 leading-relaxed">{course.content.overview}</p>
              </div>

              {/* What You'll Learn */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Apa yang Akan Anda Pelajari</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.content.willLearn.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kurikulum</h2>
                <div className="space-y-4">
                  {course.content.modules.map((module: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <span className="font-medium text-gray-900">{module.title}</span>
                      </div>
                      <span className="text-gray-600 text-sm">{module.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Who */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Untuk Siapa Kursus Ini?</h2>
                <ul className="space-y-3">
                  {course.content.forWho.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="text-[#FF6B35] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Persyaratan</h2>
                <ul className="space-y-3">
                  {course.content.requirements.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Siap Memulai Perjalanan Belajar Anda?</h2>
                <p className="mb-6 text-white/90">
                  Bergabunglah dengan ribuan learner lain dan mulai kembangkan skill Anda hari ini
                </p>
                <button
                  onClick={handleEnrollClick}
                  className="px-8 py-4 bg-white text-[#FF6B35] rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
                >
                  Daftar Gratis Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <LeadFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
