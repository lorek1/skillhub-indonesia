import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kebijakan Cookie - SkillHub Indonesia',
  description: 'Kebijakan penggunaan cookie di platform SkillHub Indonesia',
};

export default function KebijakanCookiePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Cookie
          </h1>
          <p className="text-gray-600 mb-8">
            Terakhir diperbarui: Januari 2025
          </p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Apa Itu Cookies?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cookies adalah file teks kecil yang ditempatkan di perangkat Anda (komputer, tablet, atau smartphone) 
              saat Anda mengunjungi situs web. Cookies membantu situs web mengingat informasi tentang kunjungan 
              Anda, seperti preferensi bahasa dan pengaturan lainnya, untuk membuat kunjungan berikutnya lebih 
              mudah dan berguna.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Mengapa Kami Menggunakan Cookies?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami menggunakan cookies untuk berbagai tujuan:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Membuat situs web berfungsi dengan baik</li>
              <li>Mengingat preferensi dan pengaturan Anda</li>
              <li>Memahami bagaimana Anda menggunakan situs kami</li>
              <li>Meningkatkan dan mempersonalisasi pengalaman Anda</li>
              <li>Menampilkan iklan yang relevan</li>
              <li>Mengukur efektivitas kampanye marketing kami</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Jenis Cookies Yang Kami Gunakan</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Cookies Esensial (Essential Cookies)</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cookies ini sangat penting untuk fungsi dasar situs web. Tanpa cookies ini, beberapa fitur 
              situs tidak akan berfungsi.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Session Cookies:</strong> Menjaga Anda tetap login selama sesi browsing</li>
              <li><strong>Security Cookies:</strong> Melindungi dari aktivitas penipuan dan meningkatkan keamanan</li>
              <li><strong>Cookie Consent:</strong> Mengingat preferensi cookie Anda</li>
            </ul>
            <p className="text-gray-700 mb-4 italic">
              Cookie ini tidak dapat ditolak karena diperlukan untuk fungsi situs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Cookies Fungsional (Functional Cookies)</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cookies ini memungkinkan situs web mengingat pilihan yang Anda buat dan memberikan fitur 
              yang lebih personal.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Mengingat nama pengguna dan preferensi</li>
              <li>Menyimpan progress kursus</li>
              <li>Mengingat pengaturan bahasa dan tampilan</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Cookies Analitik (Analytics Cookies)</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cookies ini membantu kami memahami bagaimana pengunjung berinteraksi dengan situs kami dengan 
              mengumpulkan dan melaporkan informasi secara anonim.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Google Analytics: Mengukur traffic dan perilaku pengguna</li>
              <li>Halaman yang paling sering dikunjungi</li>
              <li>Waktu yang dihabiskan di situs</li>
              <li>Bounce rate dan conversion rate</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.4 Cookies Marketing (Marketing Cookies)</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-4">
              <p className="text-gray-900 font-semibold mb-2">Facebook Pixel dan Tracking Iklan</p>
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan cookies marketing, termasuk <strong>Facebook Pixel</strong>, untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
                <li><strong>Facebook Pixel (_fbp, _fbc):</strong> Melacak konversi dari iklan Facebook, mengoptimalkan 
                  iklan, membangun audiens untuk penargetan iklan, dan remarketing kepada pengguna yang telah 
                  mengunjungi situs kami</li>
                <li><strong>Google Ads:</strong> Mengukur efektivitas iklan Google dan menampilkan iklan yang relevan</li>
                <li><strong>Remarketing Cookies:</strong> Menampilkan iklan kami kepada Anda di situs lain setelah 
                  Anda mengunjungi situs kami</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Cookies ini dapat ditolak melalui banner consent atau pengaturan browser Anda.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies Pihak Ketiga</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Selain cookies kami sendiri, kami juga menggunakan cookies dari pihak ketiga:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-4 mb-4">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Pihak Ketiga</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tujuan</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Lebih Lanjut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Meta (Facebook)</td>
                    <td className="border border-gray-300 px-4 py-2">Tracking iklan, remarketing</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">
                        Facebook Cookie Policy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Analitik situs web</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">
                        Google Cookie Policy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Berapa Lama Cookies Disimpan?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Durasi penyimpanan cookies bervariasi:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Session Cookies:</strong> Dihapus saat Anda menutup browser</li>
              <li><strong>Persistent Cookies:</strong> Tetap di perangkat Anda hingga kedaluwarsa atau Anda menghapusnya manually. 
                Durasi biasanya berkisar dari beberapa hari hingga beberapa tahun tergantung jenisnya</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cara Mengelola Cookies</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Melalui Banner Consent</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Saat pertama kali mengunjungi situs kami, Anda akan melihat banner consent yang memungkinkan Anda:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Terima Semua:</strong> Mengizinkan semua cookies termasuk marketing</li>
              <li><strong>Tolak Non-Essential:</strong> Hanya mengizinkan cookies esensial</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Melalui Pengaturan Browser</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Anda dapat mengontrol dan menghapus cookies melalui pengaturan browser Anda:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Untuk instruksi lebih detail, kunjungi:{' '}
              <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">
                www.allaboutcookies.org
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 Opt-Out dari Tracking Pihak Ketiga</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Untuk opt-out dari tracking tertentu:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Facebook Ads:</strong> Atur preferensi iklan Anda di{' '}
                <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">
                  Facebook Ad Preferences
                </a>
              </li>
              <li><strong>Google Ads:</strong> Opt-out melalui{' '}
                <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">
                  Google Ads Settings
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Dampak Menonaktifkan Cookies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jika Anda memilih untuk menonaktifkan cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Beberapa fitur situs mungkin tidak berfungsi dengan baik</li>
              <li>Anda mungkin perlu login ulang setiap kali mengunjungi situs</li>
              <li>Preferensi Anda tidak akan disimpan</li>
              <li>Pengalaman personalisasi akan terbatas</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Perubahan Kebijakan Cookie</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kami dapat memperbarui Kebijakan Cookie ini dari waktu ke waktu untuk mencerminkan perubahan 
              dalam cookies yang kami gunakan atau untuk alasan operasional, hukum, atau regulasi lainnya.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Kontak</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang penggunaan cookies kami, silakan hubungi:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@skillhubindonesia.com" className="text-[#FF6B35] hover:underline">
                privacy@skillhubindonesia.com
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
