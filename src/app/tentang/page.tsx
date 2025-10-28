import type { Metadata } from 'next';
import { Target, Eye, Heart, Users, TrendingUp, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami - SkillHub Indonesia',
  description: 'Pelajari lebih lanjut tentang SkillHub Indonesia, misi, visi, dan komitmen kami dalam memberdayakan talenta digital Indonesia',
};

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF6B35] to-[#0066FF] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang SkillHub Indonesia
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Platform pembelajaran digital yang berkomitmen untuk memberdayakan talenta Indonesia 
              melalui pendidikan berkualitas tinggi yang accessible dan gratis
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Cerita Kami
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                SkillHub Indonesia lahir dari visi sederhana namun kuat: setiap orang Indonesia, 
                terlepas dari latar belakang ekonomi atau geografis mereka, berhak mendapatkan 
                akses ke pendidikan digital berkualitas tinggi.
              </p>
              <p>
                Kami melihat kesenjangan besar antara permintaan industri akan talenta digital 
                dan ketersediaan sumber daya pembelajaran yang terjangkau. Banyak orang Indonesia 
                yang memiliki potensi luar biasa, namun terhambat oleh biaya pendidikan yang tinggi 
                atau kurangnya akses ke materi pembelajaran berkualitas.
              </p>
              <p>
                Dari sinilah SkillHub Indonesia dimulai. Kami membangun platform yang tidak hanya 
                menyediakan kursus gratis, tetapi juga menciptakan ekosistem pembelajaran yang 
                supportif, di mana setiap learner dapat tumbuh, berkembang, dan mencapai potensi 
                penuh mereka.
              </p>
              <p>
                Sejak diluncurkan, kami telah membantu puluhan ribu learner di seluruh Indonesia 
                untuk mengembangkan skill digital mereka, mendapatkan pekerjaan baru, switch career, 
                atau memulai bisnis mereka sendiri. Setiap cerita sukses adalah motivasi kami untuk 
                terus berkembang dan meningkatkan layanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Memberdayakan Talenta Digital Indonesia</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kami berkomitmen untuk menyediakan akses gratis ke pendidikan digital berkualitas 
                  tinggi, membantu setiap individu mengembangkan skill yang relevan dengan kebutuhan 
                  industri, dan menciptakan peluang karir yang lebih baik untuk generasi Indonesia.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Accessible Education for All</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi platform pembelajaran digital terdepan di Indonesia yang dikenal karena 
                  kualitas, aksesibilitas, dan dampak positifnya dalam mengubah kehidupan jutaan 
                  learner dan berkontribusi pada pertumbuhan ekonomi digital Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami percaya pada keterbukaan dan kejujuran. Kami jelas tentang apa yang kami 
                  tawarkan, tidak ada biaya tersembunyi, dan selalu transparan tentang hasil yang 
                  realistis.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kualitas adalah prioritas utama kami. Setiap kursus dirancang dengan cermat, 
                  materi selalu diperbarui, dan kami terus meningkatkan pengalaman pembelajaran.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami membangun lebih dari sekadar platform - kami menciptakan komunitas supportif 
                  di mana learner dapat saling belajar, berbagi, dan tumbuh bersama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Metodologi Pembelajaran
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. Pembelajaran Berbasis Proyek
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami percaya bahwa cara terbaik untuk belajar adalah dengan melakukan. Setiap 
                  kursus dirancang dengan proyek-proyek praktis yang mencerminkan tantangan dunia 
                  nyata, memastikan Anda tidak hanya memahami teori tetapi juga dapat menerapkannya.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. Self-Paced Learning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Setiap orang belajar dengan kecepatan yang berbeda. Platform kami memungkinkan 
                  Anda belajar sesuai dengan jadwal dan kecepatan Anda sendiri, tanpa tekanan 
                  deadline yang ketat.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. Feedback dan Evaluasi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami menyediakan feedback konstruktif melalui quiz, assignments, dan proyek untuk 
                  membantu Anda memahami progress dan area yang perlu ditingkatkan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4. Community Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Belajar lebih efektif dalam komunitas. Forum diskusi, study groups, dan mentorship 
                  dari sesama learner menciptakan lingkungan pembelajaran yang kolaboratif.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  5. Continuous Updates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dunia digital berubah dengan cepat. Kami terus memperbarui materi kursus untuk 
                  memastikan Anda belajar skills dan tools yang paling relevan dengan kebutuhan 
                  industri saat ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Komitmen Kami untuk Anda
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Kami berkomitmen untuk terus meningkatkan platform, menambah lebih banyak kursus 
              berkualitas, dan memberikan dukungan terbaik untuk perjalanan pembelajaran Anda. 
              Kesuksesan Anda adalah kesuksesan kami.
            </p>
            <p className="text-white/80 italic">
              "Kami tidak hanya mengajarkan skill - kami membantu Anda membuka pintu untuk 
              masa depan yang lebih cerah."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
