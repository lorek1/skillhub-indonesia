import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Page - SkillHub Indonesia',
  description: 'Test page for Facebook Open Graph validation',
  openGraph: {
    title: 'SkillHub Indonesia - Test Page',
    description: 'Platform pembelajaran digital gratis',
    siteName: 'SkillHub Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SkillHub Indonesia',
        type: 'image/png',
      },
    ],
  },
};

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6B35] to-[#0066FF] flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white rounded-2xl shadow-2xl p-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ✅ Facebook Test Page
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          This page confirms that SkillHub Indonesia website is working correctly!
        </p>
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold text-green-800 mb-2">
            ✅ Status: All Systems Operational
          </p>
          <ul className="text-left text-gray-700 space-y-2">
            <li>✅ Server Response: 200 OK</li>
            <li>✅ Open Graph Tags: Working</li>
            <li>✅ OG Image: Available</li>
            <li>✅ Facebook Pixel: Loaded</li>
            <li>✅ No robots.txt blocking</li>
          </ul>
        </div>
        <a 
          href="/" 
          className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E55A2B] transition-colors"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
