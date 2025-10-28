# 📊 SEO & Meta Tags Guide - SkillHub Indonesia

## ✅ Что уже настроено

### 🏠 **Root Layout (все страницы)**

#### Basic SEO:
- ✅ **Title Template**: Автоматически добавляет "| SkillHub Indonesia"
- ✅ **Description**: 200+ символов с ключевыми словами
- ✅ **Keywords**: 12 релевантных ключевых слов
- ✅ **Canonical URL**: Указан основной URL
- ✅ **Language**: id-ID (Indonesian)
- ✅ **Robots**: Index, Follow

#### Open Graph (Facebook):
- ✅ **og:title**: Оптимизирован для Facebook Feed
- ✅ **og:description**: Краткое описание
- ✅ **og:image**: `/og-image.png` (1200x630px)
- ✅ **og:type**: website
- ✅ **og:locale**: id_ID

#### Twitter Cards:
- ✅ **twitter:card**: summary_large_image
- ✅ **twitter:title**: Краткий заголовок
- ✅ **twitter:description**: Описание
- ✅ **twitter:image**: OG изображение

#### JSON-LD Structured Data:
- ✅ **@type**: EducationalOrganization
- ✅ **Schema.org** разметка для Google Rich Results
- ✅ **Contact Points**
- ✅ **Social Media Links**
- ✅ **Offers** (Free courses)

### 📝 **Страница регистрации (/daftar)**
- ✅ Специфичные meta для landing page
- ✅ Оптимизирована для conversion tracking
- ✅ Keywords для платных кампаний

### 📄 **Остальные страницы**
Каждая страница имеет свои уникальные meta:
- `/tentang` - About page
- `/kursus` - Course listing
- `/kursus/[slug]` - Individual courses
- `/blog` - Blog listing
- `/kontak` - Contact page
- Legal pages (Privacy, Terms, etc.)

---

## 🎯 Что нужно добавить вручную

### 1. **Open Graph Image**

Создайте изображение размером **1200x630px**:
- Сохраните как `/public/og-image.png`
- Включите лого SkillHub Indonesia
- Текст: "Belajar Digital Skills Gratis"
- Используйте бренд-цвета: #FF6B35 и #0066FF

**Инструменты для создания:**
- [Canva](https://canva.com) - шаблон "Facebook Post"
- [Figma](https://figma.com)
- Photoshop

### 2. **Favicon Files**

Разместите в `/public/`:
```
/public/favicon.ico          (16x16, 32x32, 48x48)
/public/favicon-32x32.png    (32x32)
/public/apple-touch-icon.png (180x180)
/public/android-chrome-192x192.png
/public/android-chrome-512x512.png
```

**Генератор favicon:**
https://realfavicongenerator.net/

### 3. **Logo File**

Сохраните как `/public/logo.png`:
- Прозрачный фон (PNG)
- Минимум 512x512px
- Используется в JSON-LD structured data

### 4. **Google Search Console Verification**

В `/src/app/layout.tsx` строка 78:
```typescript
verification: {
  google: 'your-google-verification-code', // ← ЗАМЕНИТЕ
  yandex: 'your-yandex-verification-code',
},
```

**Как получить код:**
1. Откройте [Google Search Console](https://search.google.com/search-console)
2. Добавьте property: skillhubindonesia.com
3. Выберите метод: "HTML tag"
4. Скопируйте content="..." код
5. Вставьте в metadata

### 5. **Facebook Domain Verification**

Добавьте в `<head>`:
```html
<meta name="facebook-domain-verification" content="ваш_код" />
```

**Как получить:**
1. [Facebook Business Settings](https://business.facebook.com/settings)
2. Brand Safety → Domains
3. Add Domain → Verify via Meta Tag

---

## 🔍 SEO Checklist

### **On-Page SEO** ✅
- [x] Title tags (уникальные для каждой страницы)
- [x] Meta descriptions
- [x] H1-H6 heading structure
- [x] Alt text для изображений (добавьте при загрузке)
- [x] Internal linking
- [x] Canonical URLs
- [x] Mobile-friendly (responsive)
- [x] Fast loading (Next.js optimization)

### **Technical SEO** ✅
- [x] HTTPS (Vercel автоматически)
- [x] XML Sitemap (Next.js генерирует)
- [x] Robots.txt
- [x] Structured Data (JSON-LD)
- [x] Open Graph tags
- [x] Language declaration (lang="id")

### **Content SEO** ✅
- [x] Уникальный контент на каждой странице
- [x] Ключевые слова в content
- [x] FAQ section с schema markup
- [x] Blog articles
- [x] Legal pages (требуются для доверия)

---

## 📈 Facebook Ads Meta Tags

### **Важные теги для FB Ads:**

1. **Open Graph Image** - КРИТИЧНО!
   - Показывается при шеринге в Facebook
   - 1200x630px, < 8MB
   - Привлекательный дизайн = выше CTR
   - Конвертируйте SVG в PNG! (см. IMAGES-SETUP.md)

2. **og:title** & **og:description**
   - Должны соответствовать тексту рекламы
   - Избегайте clickbait
   - Facebook проверяет соответствие

3. **Domain Verification**
   - Обязательна для запуска рекламы
   - Защита от кражи контента

---

## 🛠️ Инструменты для проверки

### **1. Meta Tags Checker:**
```
https://metatags.io
```
Вставьте ваш URL и проверьте как выглядят meta теги

### **2. Facebook Sharing Debugger:**
```
https://developers.facebook.com/tools/debug/
```
Проверьте как страница выглядит при шеринге в Facebook

### **3. Google Rich Results Test:**
```
https://search.google.com/test/rich-results
```
Проверьте structured data (JSON-LD)

### **4. Lighthouse (Chrome DevTools):**
```
F12 → Lighthouse → Generate Report
```
Проверьте SEO score (должен быть 90+)

### **5. PageSpeed Insights:**
```
https://pagespeed.web.dev/
```
Проверьте скорость загрузки

---

## 📝 Sitemap.xml (автогенерация)

Next.js автоматически создает sitemap. Проверьте:
```
https://yourdomain.com/sitemap.xml
```

Если нужно кастомизировать, создайте:
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://skillhubindonesia.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://skillhubindonesia.com/daftar',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // ... other pages
  ]
}
```

---

## 🚀 После деплоя

### **1. Submit to Google:**
- [Google Search Console](https://search.google.com/search-console)
- Request indexing

### **2. Submit to Bing:**
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### **3. Facebook Pixel Verification:**
- [Events Manager](https://business.facebook.com/events_manager)
- Check Domain Events

### **4. Monitor:**
- Google Analytics
- Facebook Analytics
- Search Console Performance

---

## ⚡ Quick Wins для SEO

1. **Blog Content** - публикуйте 2-3 статьи в неделю
2. **Internal Linking** - ссылки между страницами
3. **Image Optimization** - используйте WebP, alt text
4. **Page Speed** - держите < 3 секунд
5. **Mobile UX** - проверьте на реальных устройствах
6. **Backlinks** - размещайте ссылки на профильных форумах
7. **Social Signals** - активность в соцсетях

---

## 📊 Expected Results

### **SEO Timeline:**
- **1-2 недели**: Индексация Google
- **1-2 месяца**: Появление в поиске
- **3-6 месяцев**: Органический трафик растет
- **6-12 месяцев**: Top 10 позиции по ключевым запросам

### **Facebook Ads:**
- **Сразу**: Pixel tracking работает
- **1 неделя**: Достаточно данных для оптимизации
- **2-4 недели**: Lookalike audiences
- **Постоянно**: Retargeting campaigns

---

Все мета-теги настроены! После добавления изображений - сайт готов к продвижению 🚀
