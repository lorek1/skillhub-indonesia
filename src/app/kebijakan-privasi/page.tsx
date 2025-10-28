import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - SkillHub Indonesia',
  description: 'Kebijakan privasi dan perlindungan data SkillHub Indonesia',
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-gray-600 mb-8">
            Terakhir diperbarui: Januari 2025
          </p>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4 leading-relaxed">
              SkillHub Indonesia ("kami", "kita", atau "kami") menghargai privasi Anda dan berkomitmen untuk 
              melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
              menggunakan, membagikan, dan melindungi informasi pribadi Anda saat Anda menggunakan platform kami.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Informasi yang Anda Berikan</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Saat Anda mendaftar atau menggunakan layanan kami, kami mengumpulkan informasi berikut:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Nama Lengkap:</strong> Untuk identifikasi akun Anda</li>
              <li><strong>Alamat Email:</strong> Untuk komunikasi dan verifikasi akun</li>
              <li><strong>Nomor WhatsApp:</strong> Untuk komunikasi dan dukungan</li>
              <li><strong>Informasi Profil:</strong> Skill yang diminati, status pekerjaan, dan informasi relevan lainnya</li>
              <li><strong>Data Pembelajaran:</strong> Progress kursus, hasil ujian, dan sertifikat yang diperoleh</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Informasi yang Dikumpulkan Otomatis</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Saat Anda menggunakan platform kami, kami secara otomatis mengumpulkan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Data Teknis:</strong> Alamat IP, jenis browser, sistem operasi, dan perangkat yang digunakan</li>
              <li><strong>Data Penggunaan:</strong> Halaman yang dikunjungi, waktu kunjungan, kursus yang diikuti, dan interaksi dengan konten</li>
              <li><strong>Cookies dan Teknologi Tracking:</strong> Kami menggunakan cookies, web beacons, dan teknologi serupa (lihat bagian Cookies)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.3 Facebook Pixel dan Analytics</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-4">
              <p className="text-gray-900 font-semibold mb-2">PENTING: Tracking Facebook</p>
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan <strong>Facebook Pixel</strong>, sebuah kode analitik yang ditempatkan oleh Meta Platforms, 
                Inc. (Facebook) untuk mengukur efektivitas iklan dan memahami tindakan yang dilakukan pengguna di situs kami.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Facebook Pixel mengumpulkan data tentang:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Halaman yang Anda kunjungi di situs kami</li>
                <li>Tindakan yang Anda ambil (seperti pendaftaran, melihat kursus)</li>
                <li>Perangkat dan browser yang Anda gunakan</li>
                <li>Alamat IP dan informasi lokasi umum</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Data ini dibagikan dengan Facebook dan dapat digunakan untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Menampilkan iklan yang relevan kepada Anda di Facebook dan Instagram</li>
                <li>Mengukur kinerja kampanye iklan kami</li>
                <li>Membuat audiens serupa (lookalike audiences)</li>
                <li>Meningkatkan pengalaman Anda di platform kami</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami menggunakan informasi yang dikumpulkan untuk:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Menyediakan dan mengelola akses Anda ke kursus dan layanan kami</li>
              <li>Mengirim email konfirmasi, notifikasi, dan informasi penting lainnya</li>
              <li>Menyesuaikan konten dan rekomendasi kursus berdasarkan minat Anda</li>
              <li>Meningkatkan dan mengoptimalkan platform kami</li>
              <li>Menganalisis pola penggunaan untuk meningkatkan layanan</li>
              <li>Mengirim komunikasi pemasaran (dengan persetujuan Anda)</li>
              <li>Melindungi keamanan platform dan mencegah penipuan</li>
              <li>Mematuhi kewajiban hukum</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Dengan Siapa Kami Membagikan Data Anda</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami dapat membagikan informasi Anda dengan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Meta Platforms (Facebook):</strong> Melalui Facebook Pixel untuk tujuan iklan dan analitik</li>
              <li><strong>Penyedia Layanan:</strong> Perusahaan yang membantu kami menyediakan layanan (hosting, email, analytics)</li>
              <li><strong>Mitra Bisnis:</strong> Dengan persetujuan Anda, untuk menawarkan layanan atau konten relevan</li>
              <li><strong>Otoritas Hukum:</strong> Jika diperlukan oleh hukum atau untuk melindungi hak kami</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Kami TIDAK menjual data pribadi Anda kepada pihak ketiga.</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies dan Teknologi Tracking</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami menggunakan cookies dan teknologi tracking serupa untuk meningkatkan pengalaman Anda. 
              Untuk informasi lengkap tentang cookies yang kami gunakan, silakan baca{' '}
              <Link href="/kebijakan-cookie" className="text-[#FF6B35] hover:underline">Kebijakan Cookie</Link> kami.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Keamanan Data</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi 
              data pribadi Anda dari akses tidak sah, kehilangan, atau penyalahgunaan. Ini termasuk:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Enkripsi data selama transmisi (HTTPS/SSL)</li>
              <li>Kontrol akses yang ketat ke data pribadi</li>
              <li>Pemantauan sistem keamanan secara berkala</li>
              <li>Pelatihan karyawan tentang perlindungan data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Penyimpanan Data</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami menyimpan data pribadi Anda selama:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Akun Anda aktif dan Anda menggunakan layanan kami</li>
              <li>Diperlukan untuk menyediakan layanan yang Anda minta</li>
              <li>Diperlukan untuk mematuhi kewajiban hukum</li>
              <li>Hingga Anda meminta penghapusan data (sesuai dengan hak Anda)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Hak Anda</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Anda memiliki hak untuk:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami miliki tentang Anda</li>
              <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki data yang tidak akurat</li>
              <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda ("right to be forgotten")</li>
              <li><strong>Portabilitas:</strong> Menerima data Anda dalam format yang dapat dibaca mesin</li>
              <li><strong>Keberatan:</strong> Keberatan terhadap pemrosesan data tertentu</li>
              <li><strong>Penarikan Persetujuan:</strong> Menarik persetujuan Anda kapan saja</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Untuk menggunakan hak-hak ini, silakan hubungi kami di:{' '}
              <a href="mailto:privacy@skillhubindonesia.com" className="text-[#FF6B35] hover:underline">
                privacy@skillhubindonesia.com
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Opt-Out dari Tracking Facebook</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Anda dapat menolak tracking Facebook Pixel dengan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Menolak cookies marketing saat banner consent muncul</li>
              <li>Mengatur preferensi iklan di pengaturan Facebook Anda</li>
              <li>Menggunakan browser extension untuk memblokir tracking</li>
              <li>Mengaktifkan "Do Not Track" di browser Anda</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Anak-anak</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Layanan kami tidak ditujukan untuk individu di bawah usia 18 tahun. Kami tidak secara sadar 
              mengumpulkan data pribadi dari anak-anak. Jika Anda percaya bahwa kami telah mengumpulkan 
              informasi dari anak di bawah 18 tahun, silakan hubungi kami segera.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Transfer Data Internasional</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Data Anda dapat ditransfer dan disimpan di server yang berlokasi di luar Indonesia, termasuk 
              ke server Facebook/Meta yang berlokasi di berbagai negara. Kami memastikan bahwa transfer 
              data internasional dilakukan dengan perlindungan yang memadai sesuai hukum yang berlaku.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Perubahan Kebijakan Privasi</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda 
              tentang perubahan signifikan melalui email atau pemberitahuan di platform. Penggunaan layanan 
              yang berkelanjutan setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Kontak Kami</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani data Anda, 
              silakan hubungi:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@skillhubindonesia.com" className="text-[#FF6B35] hover:underline">
                privacy@skillhubindonesia.com
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Support:</strong>{' '}
              <a href="mailto:support@skillhubindonesia.com" className="text-[#FF6B35] hover:underline">
                support@skillhubindonesia.com
              </a>
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
