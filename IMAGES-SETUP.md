# 🎨 Настройка Изображений - SkillHub Indonesia

## ✅ Что уже создано

В папке `/public/` уже есть:
- `logo.svg` - Лого в формате SVG
- `og-image.svg` - Open Graph изображение в SVG

## 🔄 Конвертация SVG → PNG (ОБЯЗАТЕЛЬНО!)

Facebook и социальные сети **НЕ поддерживают SVG** для Open Graph изображений.
Нужно сконвертировать в PNG.

### Способ 1: Online конвертер (Самый быстрый)

**Для og-image.png:**
1. Откройте: https://cloudconvert.com/svg-to-png
2. Загрузите: `/public/og-image.svg`
3. Настройки:
   - Width: **1200px**
   - Height: **630px**
   - Quality: **High**
4. Convert → Download
5. Сохраните как: `/public/og-image.png`
6. **Удалите** `og-image.svg`

**Для logo.png:**
1. Откройте: https://cloudconvert.com/svg-to-png
2. Загрузите: `/public/logo.svg`
3. Настройки:
   - Width: **512px**
   - Height: **512px**
   - Quality: **High**
4. Convert → Download
5. Сохраните как: `/public/logo.png`
6. Можете оставить `logo.svg` (он легкий)

### Способ 2: Canva (Более красивый результат)

**Рекомендую для og-image.png:**

1. Откройте: https://canva.com
2. Create a design → Custom size: **1200 x 630 px**
3. Используйте шаблон или создайте с нуля:

**Содержание:**
```
- Background: Градиент #FF6B35 → #0066FF
- Лого: "SH" или полное лого
- Текст 1: "SkillHub Indonesia" (72px, bold, белый)
- Текст 2: "Belajar Digital Skills Gratis" (48px, белый)
- Иконки с текстом:
  ✓ 200+ Kursus Online
  ✓ Sertifikat Profesional
  ✓ 100% Gratis
```

4. Download → PNG
5. Сохраните как: `/public/og-image.png`

### Способ 3: Figma (Профессиональный)

1. Создайте Frame 1200x630px
2. Импортируйте `/public/og-image.svg` или создайте дизайн
3. Export → PNG → 2x quality
4. Сохраните как: `/public/og-image.png`

---

## 📱 Favicon (Обязательно для браузеров)

### Быстрый способ - RealFaviconGenerator:

1. Откройте: https://realfavicongenerator.net/
2. Upload logo: `/public/logo.svg`
3. Generate favicons
4. Download package
5. Извлеките файлы в `/public/`:

```
/public/
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── apple-touch-icon.png (180x180)
  ├── android-chrome-192x192.png
  └── android-chrome-512x512.png
```

6. Обновите `/src/app/layout.tsx` если нужно

---

## ✅ Checklist после конвертации

- [ ] `/public/og-image.png` существует (1200x630px)
- [ ] `/public/logo.png` существует (512x512px)
- [ ] `/public/favicon.ico` существует
- [ ] `/public/favicon-32x32.png` существует
- [ ] `/public/apple-touch-icon.png` существует
- [ ] Удален `/public/og-image.svg` (Facebook не поддерживает)

---

## 🧪 Проверка Open Graph Image

После создания `og-image.png`:

1. Deploy на Vercel
2. Откройте: https://developers.facebook.com/tools/debug/
3. Вставьте URL: `https://skillhubindonesia.site`
4. Click "Scrape Again"
5. Проверьте что изображение отображается

**Если изображение не показывается:**
- Проверьте размер файла (должен быть < 8MB)
- Проверьте размеры (точно 1200x630px)
- Проверьте что файл называется `og-image.png` (не .jpg, не .svg)
- Подождите 5-10 минут и Scrape Again

---

## 🎨 Альтернатива - Готовые Шаблоны

Если не хотите создавать с нуля, используйте шаблоны:

**Canva шаблоны:**
- Поиск: "Facebook Post 1200x630"
- Выберите образовательный стиль
- Замените текст на SkillHub Indonesia
- Добавьте бренд-цвета: #FF6B35, #0066FF

**Figma Community:**
- https://figma.com/community
- Поиск: "Open Graph Template"
- Дублируйте и кастомизируйте

---

## 💡 Рекомендации по дизайну

### Open Graph Image (og-image.png):

✅ **Хорошо:**
- Крупный, читаемый текст
- Контрастные цвета
- Логотип виден
- Простой дизайн
- Бренд-цвета

❌ **Плохо:**
- Мелкий текст (< 40px)
- Слишком много текста
- Низкое разрешение
- Темный текст на темном фоне

### Logo (logo.png):

- Минимум 512x512px
- Прозрачный фон (PNG)
- Четкие края
- Хорошо масштабируется

---

## 🚀 После создания изображений

1. Commit и push в GitHub:
```bash
git add public/
git commit -m "Add logo and Open Graph images"
git push
```

2. Vercel автоматически задеплоит

3. Проверьте на сайте:
   - Откройте `https://yourdomain.com/og-image.png`
   - Откройте `https://yourdomain.com/logo.png`
   - Должны отображаться

4. Проверьте в Facebook Debugger:
   - https://developers.facebook.com/tools/debug/

5. Проверьте meta tags:
   - https://metatags.io

---

## 📞 Если нужна помощь

Если не получается создать изображения:
1. Используйте SVG файлы как референс
2. Наймите дизайнера на Fiverr ($5-10)
3. Или я могу помочь с более детальными инструкциями

**Главное:** og-image.png ОБЯЗАТЕЛЕН для Facebook Ads! 🎯
