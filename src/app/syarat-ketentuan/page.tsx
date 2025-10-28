import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan - SkillHub Indonesia',
  description: 'Syarat dan ketentuan penggunaan platform SkillHub Indonesia',
};

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-gray-600 mb-8">
            Terakhir diperbarui: Januari 2025
          </p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Penerimaan Ketentuan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Selamat datang di SkillHub Indonesia. Dengan mengakses dan menggunakan platform kami di 
              https://skillhubindonesia.site, Anda setuju untuk terikat dengan syarat dan ketentuan berikut. 
              Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan layanan kami.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Tentang SkillHub Indonesia</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              SkillHub Indonesia adalah platform pembelajaran digital yang menyediakan kursus online gratis 
              dalam berbagai bidang teknologi dan digital skills. Kami adalah platform edukatif yang bertujuan 
              untuk memberdayakan talenta digital Indonesia melalui pendidikan berkualitas tinggi yang dapat 
              diakses secara gratis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Layanan yang Disediakan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              SkillHub Indonesia menyediakan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Akses ke kursus online gratis dalam berbagai bidang digital skills</li>
              <li>Sertifikat digital setelah menyelesaikan kursus</li>
              <li>Webinar dan live sessions dengan praktisi industri</li>
              <li>Panduan karir dan resources untuk pembelajaran</li>
              <li>Akses ke komunitas learner</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Pendaftaran dan Akun</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Untuk menggunakan layanan kami, Anda harus:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Berusia minimal 18 tahun</li>
              <li>Memberikan informasi yang akurat dan lengkap saat pendaftaran</li>
              <li>Menjaga kerahasiaan informasi akun Anda</li>
              <li>Bertanggung jawab atas semua aktivitas yang terjadi di akun Anda</li>
              <li>Segera memberi tahu kami jika terjadi penggunaan tidak sah pada akun Anda</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Hak dan Kewajiban Pengguna</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sebagai pengguna, Anda berhak:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Mengakses semua kursus yang tersedia secara gratis</li>
              <li>Mendapatkan sertifikat setelah menyelesaikan kursus</li>
              <li>Mengajukan pertanyaan dan mendapatkan dukungan</li>
              <li>Mengakses komunitas learner</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Anda berkewajiban untuk:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Menggunakan platform dengan cara yang sah dan etis</li>
              <li>Tidak membagikan konten kursus kepada pihak ketiga tanpa izin</li>
              <li>Menghormati hak kekayaan intelektual kami dan pihak ketiga</li>
              <li>Tidak menggunakan platform untuk tujuan ilegal atau berbahaya</li>
              <li>Tidak mengganggu atau merusak fungsi platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. DISCLAIMER PENTING - Hasil Pembelajaran</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
              <p className="text-gray-900 font-semibold mb-2">HARAP DIBACA DENGAN SEKSAMA:</p>
              <p className="text-gray-700 leading-relaxed">
                Platform SkillHub Indonesia bersifat informasional dan edukatif. Kami menyediakan materi 
                pembelajaran dan resources untuk membantu Anda mengembangkan skill digital. Namun, kami 
                <strong> TIDAK memberikan jaminan hasil spesifik, pendapatan, atau keuntungan finansial</strong> dari 
                penggunaan platform kami.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Hasil pembelajaran dan penerapan skill yang Anda peroleh sangat tergantung pada:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Usaha dan dedikasi pribadi Anda</li>
                <li>Konsistensi dalam belajar dan berlatih</li>
                <li>Kemampuan Anda menerapkan pengetahuan dalam konteks nyata</li>
                <li>Kondisi pasar dan peluang yang tersedia</li>
                <li>Pengalaman dan latar belakang Anda sebelumnya</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Hak Kekayaan Intelektual</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Semua konten di platform SkillHub Indonesia, termasuk teks, grafik, logo, video, dan materi 
              kursus, adalah milik SkillHub Indonesia atau pemberi lisensi kami dan dilindungi oleh undang-undang 
              hak cipta dan kekayaan intelektual Indonesia dan internasional.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Pembatasan Tanggung Jawab</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              SkillHub Indonesia dan afiliasinya tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Kerugian langsung atau tidak langsung dari penggunaan atau ketidakmampuan menggunakan platform</li>
              <li>Hasil atau pencapaian tertentu dari pembelajaran</li>
              <li>Kesalahan, kelalaian, atau ketidakakuratan konten</li>
              <li>Gangguan atau virus yang mungkin mempengaruhi perangkat Anda</li>
              <li>Kerugian finansial yang timbul dari penerapan materi pembelajaran</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Sertifikat</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sertifikat yang diberikan oleh SkillHub Indonesia adalah bukti penyelesaian kursus di platform 
              kami. Sertifikat ini tidak menggantikan kualifikasi profesional resmi atau lisensi yang mungkin 
              diperlukan untuk profesi tertentu. Nilai dan pengakuan sertifikat tergantung pada pihak yang 
              menerimanya.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Perubahan Layanan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami berhak untuk:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Mengubah, menangguhkan, atau menghentikan layanan kapan saja</li>
              <li>Mengubah konten kursus dan materi pembelajaran</li>
              <li>Menolak akses atau menghapus akun yang melanggar ketentuan</li>
              <li>Mengubah syarat dan ketentuan ini dengan pemberitahuan</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Privasi</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Penggunaan data pribadi Anda diatur dalam <Link href="/kebijakan-privasi" className="text-[#FF6B35] hover:underline">Kebijakan Privasi</Link> kami. 
              Dengan menggunakan layanan ini, Anda setuju dengan pengumpulan dan penggunaan informasi sesuai 
              dengan kebijakan tersebut.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Hukum yang Berlaku</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
              Setiap perselisihan yang timbul akan diselesaikan melalui pengadilan yang berwenang di Indonesia.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Kontak</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami di:
            </p>
            <p className="text-gray-700 mb-4">
              Email: <a href="mailto:support@skillhubindonesia.com" className="text-[#FF6B35] hover:underline">support@skillhubindonesia.com</a>
            </p>
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
