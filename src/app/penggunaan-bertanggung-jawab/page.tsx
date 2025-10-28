import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Penggunaan Bertanggung Jawab - SkillHub Indonesia',
  description: 'Panduan penggunaan platform SkillHub Indonesia secara bertanggung jawab',
};

export default function PenggunaanBertanggungJawabPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Penggunaan Bertanggung Jawab
          </h1>
          <p className="text-gray-600 mb-8">
            Terakhir diperbarui: Januari 2025
          </p>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4 leading-relaxed">
              SkillHub Indonesia berkomitmen untuk menyediakan platform pembelajaran yang aman, produktif, dan 
              bermanfaat bagi semua pengguna. Halaman ini memberikan panduan tentang cara menggunakan platform 
              kami secara bertanggung jawab dan etis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Persyaratan Usia</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
              <p className="text-gray-900 font-semibold mb-2">Batasan Usia 18+</p>
              <p className="text-gray-700 leading-relaxed">
                Platform SkillHub Indonesia ditujukan untuk pengguna yang berusia <strong>18 tahun ke atas</strong>. 
                Dengan mendaftar dan menggunakan layanan kami, Anda menyatakan bahwa Anda telah berusia minimal 18 tahun 
                dan memiliki kapasitas hukum untuk menyetujui syarat dan ketentuan kami.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Jika kami mengetahui bahwa pengguna di bawah 18 tahun telah mendaftar, kami berhak untuk menonaktifkan 
                akun tersebut tanpa pemberitahuan sebelumnya.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Pembelajaran yang Bertanggung Jawab</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Untuk memaksimalkan pengalaman belajar Anda:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Tetapkan Jadwal Belajar:</strong> Buat jadwal belajar yang konsisten dan realistis sesuai 
                dengan komitmen Anda yang lain</li>
              <li><strong>Istirahat yang Cukup:</strong> Hindari belajar secara berlebihan. Ambil istirahat teratur 
                setiap 45-60 menit</li>
              <li><strong>Praktik Berkelanjutan:</strong> Terapkan apa yang Anda pelajari dalam proyek nyata untuk 
                memperkuat pemahaman</li>
              <li><strong>Jangan Terburu-buru:</strong> Fokus pada pemahaman mendalam daripada hanya menyelesaikan 
                kursus dengan cepat</li>
              <li><strong>Bergabung dengan Komunitas:</strong> Berinteraksi dengan learner lain untuk berbagi pengalaman 
                dan belajar bersama</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Ekspektasi yang Realistis</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-4">
              <p className="text-gray-900 font-semibold mb-2">Penting untuk Dipahami</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                SkillHub Indonesia adalah platform <strong>pendidikan dan informasional</strong>. Kami membantu Anda 
                mengembangkan skill, tetapi kesuksesan karir dan finansial Anda bergantung pada banyak faktor di luar 
                materi kursus kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Harapan yang Realistis:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
                <li>Pembelajaran membutuhkan waktu - tidak ada jalan pintas untuk menguasai skill</li>
                <li>Setiap orang belajar dengan kecepatan yang berbeda</li>
                <li>Menyelesaikan kursus tidak menjamin pekerjaan atau penghasilan tertentu</li>
                <li>Praktik dan pengalaman nyata sama pentingnya dengan pengetahuan teoritis</li>
                <li>Kesuksesan memerlukan kombinasi skill, networking, dan peluang pasar</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Etika Penggunaan Platform</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sebagai bagian dari komunitas SkillHub Indonesia, Anda diharapkan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Hormati Hak Cipta:</strong> Jangan membagikan, menjual, atau mendistribusikan materi kursus 
                tanpa izin</li>
              <li><strong>Integritas Akademik:</strong> Kerjakan ujian dan tugas sendiri tanpa kecurangan</li>
              <li><strong>Perilaku Sopan:</strong> Berkomunikasi dengan respek dalam forum dan diskusi</li>
              <li><strong>Tidak Ada Spam:</strong> Jangan menggunakan platform untuk promosi yang tidak relevan</li>
              <li><strong>Privasi Orang Lain:</strong> Hormati privasi sesama learner dan instruktur</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Keamanan Akun</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Untuk menjaga keamanan akun Anda:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Gunakan password yang kuat dan unik</li>
              <li>Jangan bagikan informasi login Anda dengan siapa pun</li>
              <li>Logout dari perangkat publik atau bersama</li>
              <li>Perbarui informasi kontak Anda agar tetap akurat</li>
              <li>Laporkan aktivitas mencurigakan segera ke tim support</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Kesehatan Mental dan Fisik</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Pembelajaran online yang sehat melibatkan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Keseimbangan Hidup:</strong> Jangan sampai pembelajaran mengorbankan kesehatan, keluarga, 
                atau pekerjaan Anda</li>
              <li><strong>Postur yang Baik:</strong> Gunakan kursi dan meja yang ergonomis saat belajar</li>
              <li><strong>Jaga Mata:</strong> Gunakan aturan 20-20-20 (setiap 20 menit, lihat objek 20 kaki jauhnya 
                selama 20 detik)</li>
              <li><strong>Aktivitas Fisik:</strong> Seimbangkan waktu duduk dengan olahraga teratur</li>
              <li><strong>Dukungan Mental:</strong> Jika merasa overwhelmed, jangan ragu untuk istirahat atau mencari 
                bantuan</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Penggunaan Sertifikat</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sertifikat dari SkillHub Indonesia:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Adalah bukti penyelesaian kursus di platform kami</li>
              <li>Dapat ditambahkan ke CV, LinkedIn, dan portfolio Anda</li>
              <li>Harus digunakan secara jujur dan tidak dilebih-lebihkan</li>
              <li>Tidak menggantikan sertifikasi profesional resmi atau lisensi</li>
              <li>Nilai dan pengakuannya tergantung pada pihak yang menerimanya</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Pelanggaran dan Konsekuensi</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Pelanggaran terhadap pedoman ini dapat mengakibatkan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Peringatan tertulis</li>
              <li>Pembatasan akses ke fitur tertentu</li>
              <li>Penangguhan akun sementara</li>
              <li>Penutupan akun permanen</li>
              <li>Tindakan hukum untuk pelanggaran serius</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Melaporkan Penyalahgunaan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jika Anda menemukan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Konten yang tidak pantas atau melanggar</li>
              <li>Perilaku yang melecehkan atau mengancam</li>
              <li>Spam atau aktivitas penipuan</li>
              <li>Pelanggaran hak cipta</li>
              <li>Masalah teknis atau keamanan</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Silakan laporkan segera ke:{' '}
              <a href="mailto:support@skillhubindonesia.com" className="text-[#FF6B35] hover:underline">
                support@skillhubindonesia.com
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Dukungan dan Bantuan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jika Anda memerlukan bantuan atau memiliki pertanyaan tentang penggunaan platform yang bertanggung jawab:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email Support:</strong>{' '}
              <a href="mailto:support@skillhubindonesia.com" className="text-[#FF6B35] hover:underline">
                support@skillhubindonesia.com
              </a>
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
              <p className="text-gray-900 font-semibold mb-2">Komitmen Kami</p>
              <p className="text-gray-700 leading-relaxed">
                Kami berkomitmen untuk menciptakan lingkungan pembelajaran yang aman, inklusif, dan produktif. 
                Dengan mengikuti panduan ini, Anda membantu kami membangun komunitas yang lebih baik untuk semua 
                learner di Indonesia.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="text-[#FF6B35] hover:underline font-medium"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
