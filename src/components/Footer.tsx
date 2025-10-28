import Link from 'next/link';
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#0066FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SH</span>
              </div>
              <span className="text-lg font-bold text-white">SkillHub Indonesia</span>
            </div>
            <p className="text-sm mb-4">
              Platform pembelajaran digital gratis untuk meningkatkan skill teknologi dan mengembangkan karir digital Anda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/skillhubindonesia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#FF6B35] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang" className="hover:text-[#FF6B35] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kursus" className="hover:text-[#FF6B35] transition-colors">
                  Kursus
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FF6B35] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#FF6B35] transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Kategori Kursus */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kategori Kursus</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kursus/data-analytics" className="hover:text-[#FF6B35] transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/kursus/digital-marketing" className="hover:text-[#FF6B35] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/kursus/ui-ux-design" className="hover:text-[#FF6B35] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/kursus/programming" className="hover:text-[#FF6B35] transition-colors">
                  Programming
                </Link>
              </li>
              <li>
                <Link href="/kursus/ai-skills" className="hover:text-[#FF6B35] transition-colors">
                  AI Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-[#FF6B35] transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-[#FF6B35] transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-cookie" className="hover:text-[#FF6B35] transition-colors">
                  Kebijakan Cookie
                </Link>
              </li>
              <li>
                <Link href="/penggunaan-bertanggung-jawab" className="hover:text-[#FF6B35] transition-colors">
                  Penggunaan Bertanggung Jawab
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 SkillHub Indonesia. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Facebook size={16} className="text-gray-400" />
            <a 
              href="https://facebook.com/skillhubindonesia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
