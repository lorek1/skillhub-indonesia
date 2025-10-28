import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    age: 26,
    location: 'Jakarta',
    photo: '👨',
    text: 'Platform ini sangat membantu saya dalam mempelajari data analytics. Materi lengkap, mudah dipahami, dan gratis! Sekarang saya sudah bekerja sebagai Data Analyst di perusahaan startup.',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    age: 24,
    location: 'Bandung',
    photo: '👩',
    text: 'Sebagai ibu rumah tangga yang ingin kembali berkarir, SkillHub Indonesia memberikan kesempatan untuk belajar digital marketing dengan fleksibel. Sertifikatnya juga membantu saat melamar kerja.',
    rating: 5,
  },
  {
    name: 'Ahmad Rizki',
    age: 29,
    location: 'Surabaya',
    photo: '👨',
    text: 'Kursus UI/UX Design di SkillHub benar-benar mengubah karir saya. Dari yang tidak tahu apa-apa tentang design, sekarang saya bisa freelance dan punya income tambahan. Terima kasih SkillHub!',
    rating: 5,
  },
  {
    name: 'Dewi Lestari',
    age: 22,
    location: 'Yogyakarta',
    photo: '👩',
    text: 'Sebagai fresh graduate, saya merasa lebih percaya diri dalam mencari pekerjaan setelah menyelesaikan beberapa kursus di SkillHub. Komunitasnya juga sangat supportive!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Learner
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cerita sukses dari ribuan learner yang telah mengembangkan skill mereka bersama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{testimonial.photo}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.age} tahun, {testimonial.location}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
