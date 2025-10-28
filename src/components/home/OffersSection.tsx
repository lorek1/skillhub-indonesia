import { BookOpen, Award, Video, Briefcase, Wrench, Users } from 'lucide-react';

const offers = [
  {
    icon: BookOpen,
    title: 'Kursus Online Gratis',
    description: 'Akses ke lebih dari 200 kursus berkualitas tinggi dalam berbagai bidang digital skills tanpa biaya apapun.',
  },
  {
    icon: Award,
    title: 'Sertifikat Profesional',
    description: 'Dapatkan sertifikat resmi yang diakui industri setelah menyelesaikan setiap kursus untuk meningkatkan kredibilitas Anda.',
  },
  {
    icon: Video,
    title: 'Webinar & Live Sessions',
    description: 'Ikuti sesi langsung dengan praktisi industri dan pelajari tips serta trik terbaru dalam dunia digital.',
  },
  {
    icon: Briefcase,
    title: 'Panduan Karir Digital',
    description: 'Akses panduan lengkap untuk memulai dan mengembangkan karir Anda di bidang teknologi dan digital.',
  },
  {
    icon: Wrench,
    title: 'Tools & Resources',
    description: 'Dapatkan akses ke berbagai tools, template, dan resources yang membantu proses pembelajaran Anda.',
  },
  {
    icon: Users,
    title: 'Komunitas Learner',
    description: 'Bergabung dengan komunitas aktif untuk berbagi pengalaman, bertanya, dan tumbuh bersama.',
  },
];

export default function OffersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Yang Kami Tawarkan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform pembelajaran terlengkap dengan berbagai fitur untuk mendukung perjalanan belajar Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FF6B35]/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center mb-5">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
