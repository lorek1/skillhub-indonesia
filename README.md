# SkillHub Indonesia - Facebook-Compliant E-Learning Platform

Platform pembelajaran digital gratis yang fully compliant dengan Facebook Advertising Policies untuk lead generation melalui Facebook Ads.

**Live Site:** https://skillhubindonesia.site

## 🎯 Fitur Utama

### ✅ Facebook Policy Compliance
- ✅ Konten edukatif tanpa financial promises
- ✅ Disclaimer jelas tentang hasil pembelajaran
- ✅ No aggressive CTAs atau misleading claims
- ✅ Transparent terms & conditions
- ✅ Full privacy policy dengan Facebook Pixel disclosure

### 📊 Facebook Pixel Integration
- ✅ Facebook Pixel dengan cookie consent system
- ✅ Standard Events: PageView, ViewContent, Lead, CompleteRegistration
- ✅ Custom Events untuk button tracking
- ✅ GDPR-compliant cookie banner

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Optimized untuk semua devices
- ✅ Touch-friendly UI elements

### 🔒 Legal Pages (Mandatory)
- ✅ Syarat & Ketentuan (Terms of Service)
- ✅ Kebijakan Privasi (Privacy Policy)
- ✅ Kebijakan Cookie (Cookie Policy)
- ✅ Penggunaan Bertanggung Jawab (Responsible Use)
- ✅ Kontak (Contact Page)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Facebook Pixel

Edit `.env.local` dan tambahkan Facebook Pixel ID Anda:

```bash
NEXT_PUBLIC_FB_PIXEL_ID=YOUR_ACTUAL_PIXEL_ID
```

**Cara mendapatkan Facebook Pixel ID:**
1. Buka [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Pilih Pixel Anda atau buat yang baru
3. Copy Pixel ID (15-16 digit number)

### 3. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Proyek

```
skillhub-indonesia/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage dengan Hero, FAQ, CTA
│   │   ├── layout.tsx               # Root layout dengan FB Pixel
│   │   ├── daftar/page.tsx          # Lead form page
│   │   ├── terima-kasih/page.tsx    # Thank you page (CompleteRegistration event)
│   │   ├── tentang/page.tsx         # About page
│   │   ├── kursus/
│   │   │   ├── page.tsx             # Course listing
│   │   │   └── [slug]/page.tsx      # Course detail pages
│   │   ├── blog/page.tsx            # Blog listing
│   │   ├── kontak/page.tsx          # Contact page
│   │   ├── syarat-ketentuan/        # Terms of Service
│   │   ├── kebijakan-privasi/       # Privacy Policy
│   │   ├── kebijakan-cookie/        # Cookie Policy
│   │   ├── penggunaan-bertanggung-jawab/  # Responsible Use
│   │   └── api/
│   │       └── submit-lead/route.ts # Lead submission API
│   ├── components/
│   │   ├── Header.tsx               # Navigation
│   │   ├── Footer.tsx               # Footer with legal links
│   │   ├── FacebookPixel.tsx        # FB Pixel component
│   │   ├── CookieConsent.tsx        # Cookie banner
│   │   ├── LeadForm.tsx             # Lead generation form
│   │   ├── LeadFormModal.tsx        # Modal wrapper for form
│   │   └── home/                    # Home page sections
│   └── lib/
│       ├── fbpixel.ts               # Facebook Pixel utilities
│       └── cookieConsent.ts         # Cookie management
├── .env.local                       # Environment variables (FB Pixel ID)
└── README.md
```

## 🎨 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Analytics:** Facebook Pixel

## 📋 Facebook Pixel Events

### Standard Events Implemented:

1. **PageView** - Automatic pada semua halaman
2. **ViewContent** - Saat user melihat course detail
3. **InitiateCheckout** - Saat user membuka lead form
4. **Lead** - Saat user submit lead form (KEY EVENT!)
5. **CompleteRegistration** - Pada thank you page
6. **Search** - Optional, untuk course search

### Custom Events:

- **ButtonClick** - Track CTA button clicks

## 🔍 Pre-Launch Checklist

Sebelum menjalankan Facebook Ads, pastikan:

### Content Compliance
- [ ] Semua teks tidak mengandung financial promises
- [ ] Tidak ada kata-kata "guaranteed income", "easy money", dll
- [ ] FAQ includes disclaimer tentang hasil pembelajaran
- [ ] Testimonial tidak menyebutkan angka penghasilan

### Technical Setup
- [ ] Facebook Pixel ID sudah configured di `.env.local`
- [ ] Test semua Pixel events dengan Facebook Pixel Helper extension
- [ ] Cookie consent banner muncul di first visit
- [ ] Semua legal pages sudah lengkap dan accessible

### Lead Form
- [ ] Form validation bekerja
- [ ] Success/error messages dalam Bahasa Indonesia
- [ ] Redirect ke thank you page setelah submit
- [ ] Lead event fires saat form submitted
- [ ] CompleteRegistration event fires di thank you page

### Performance
- [ ] Page load speed > 85 (test dengan Google PageSpeed Insights)
- [ ] Responsive di mobile, tablet, desktop
- [ ] Semua images optimized
- [ ] No console errors

### Legal Pages
- [ ] Terms of Service lengkap dengan disclaimer
- [ ] Privacy Policy mentions Facebook Pixel
- [ ] Cookie Policy explains tracking cookies
- [ ] Contact page dengan working email
- [ ] Footer links ke semua legal pages

## 🧪 Testing Facebook Pixel

1. **Install Facebook Pixel Helper** (Chrome Extension)
2. Navigate ke berbagai halaman
3. Check events yang fire:
   - Homepage → PageView
   - Course detail → PageView + ViewContent
   - Open lead form → InitiateCheckout
   - Submit form → Lead
   - Thank you page → CompleteRegistration

4. **Verify di Facebook Events Manager:**
   - Buka [Events Manager](https://business.facebook.com/events_manager)
   - Pilih Pixel Anda
   - Check "Test Events" tab
   - Verify events datang dengan correct parameters

## 🚀 Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable di Vercel dashboard:
# NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id
```

### Option 2: Netlify

1. Connect repository ke Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variable: `NEXT_PUBLIC_FB_PIXEL_ID`

### Option 3: Custom Server

```bash
npm run build
npm start
```

## 📊 Facebook Ads Campaign Setup

1. **Campaign Objective:** Leads
2. **Optimization Goal:** Lead (the event we track)
3. **Target Audience:** Indonesia, 18-35, interested in digital skills
4. **Ad Creative:**
   - Highlight: "Belajar Gratis", "Sertifikat Resmi"
   - NO: "Guaranteed income", "Easy money"
5. **Landing Page:** Your domain/daftar

## ⚠️ Important Notes

### DO NOT:
- ❌ Promise specific financial results
- ❌ Use aggressive countdown timers
- ❌ Fake scarcity indicators
- ❌ Misleading testimonials
- ❌ Change content after ad approval (cloaking)

### DO:
- ✅ Focus on educational value
- ✅ Be transparent about results
- ✅ Provide real contact information
- ✅ Honor privacy commitments
- ✅ Keep content consistent with ads

## 🆘 Support

Untuk pertanyaan atau issues:
- Email: support@skillhubindonesia.com
- Privacy: privacy@skillhubindonesia.com

## 📄 License

© 2025 SkillHub Indonesia. All rights reserved.

---

**Built with ❤️ for Indonesian learners**
