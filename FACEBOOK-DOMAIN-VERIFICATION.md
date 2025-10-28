# 🔐 Facebook Domain Verification - SkillHub Indonesia

## Проблема: Facebook дает 403 на custom domain

**Симптомы:**
- ✅ Vercel domain работает (`skillhub-indonesia.vercel.app`)
- ❌ Custom domain дает 403 (`skillhubindonesia.site`)
- ✅ Домен валидный в Vercel
- ✅ robots.txt правильный

**Причина:** Facebook требует верификацию домена для доступа к контенту.

---

## ✅ Решение: Верификация домена в Facebook

### **Шаг 1: Откройте Facebook Business Settings**

```
https://business.facebook.com/settings/
```

Если у вас нет Business Manager:
1. Создайте: https://business.facebook.com/create
2. Следуйте инструкциям

### **Шаг 2: Добавьте домен**

1. В левом меню: **Brand Safety** → **Domains**
2. Нажмите кнопку **"Add"**
3. Введите домен: `skillhubindonesia.site`
4. Нажмите **"Add Domain"**

### **Шаг 3: Выберите метод верификации**

Facebook предложит 3 метода:

---

## 🔧 Метод 1: HTML Meta Tag (РЕКОМЕНДУЕТСЯ)

**Самый простой для Vercel/Next.js**

1. **Facebook покажет код типа:**
```html
<meta name="facebook-domain-verification" content="abc123xyz456" />
```

2. **Скопируйте код верификации** (только `abc123xyz456` часть)

3. **Откройте файл:**
```
/src/app/layout.tsx
```

4. **Найдите строку 120:**
```tsx
<meta name="facebook-domain-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

5. **Замените `YOUR_VERIFICATION_CODE_HERE`** на ваш код

6. **Пример после замены:**
```tsx
<meta name="facebook-domain-verification" content="abc123xyz456" />
```

7. **Сохраните файл**

8. **Commit и Push:**
```bash
git add src/app/layout.tsx
git commit -m "Add Facebook domain verification code"
git push
```

9. **Подождите 2-3 минуты** пока Vercel задеплоит

10. **В Facebook нажмите "Verify"**

11. **Готово!** Домен верифицирован ✅

---

## 🌐 Метод 2: DNS TXT Record

**Если не хотите добавлять meta tag**

1. **Facebook покажет TXT запись:**
```
Type: TXT
Name: @
Value: facebook-domain-verification=abc123xyz456
```

2. **Откройте панель у регистратора домена** (где купили .site)

3. **Добавьте DNS TXT запись:**
```
Type: TXT
Host: @
Value: facebook-domain-verification=abc123xyz456
TTL: Auto или 3600
```

4. **Сохраните DNS запись**

5. **Подождите 10-30 минут** (DNS propagation)

6. **В Facebook нажмите "Verify"**

---

## 📄 Метод 3: HTML File Upload

1. Facebook даст файл для скачивания
2. Загрузите файл в `/public/` папку проекта
3. Commit и push
4. В Facebook нажмите "Verify"

---

## ✅ После верификации

### **Проверьте что домен верифицирован:**

1. **Facebook Business Settings** → **Domains**
2. Статус должен быть: ✅ **Verified**

### **Подождите 5-10 минут** и проверьте Facebook Debugger:

```
https://developers.facebook.com/tools/debug/
```

Вставьте: `https://skillhubindonesia.site`

**Должно быть:**
- ✅ Response Code: 200
- ✅ No warnings
- ✅ OG image показывается

---

## 🎯 Troubleshooting

### **"We couldn't verify your domain"**

**Проблема:** Meta tag не найден

**Решение:**
1. Проверьте что код деплоился на Vercel
2. Откройте `https://skillhubindonesia.site`
3. View Page Source (Ctrl+U / Cmd+Option+U)
4. Поищите `facebook-domain-verification` в коде
5. Если нет - значит деплой не завершился
6. Подождите еще 2-3 минуты

### **"Access Denied" при попытке добавить домен**

**Проблема:** Нет прав в Business Manager

**Решение:**
1. Убедитесь что вы Admin в Business Manager
2. Или попросите админа добавить домен

### **DNS TXT запись не находится**

**Проблема:** DNS еще не обновился

**Решение:**
1. Проверьте через: https://dnschecker.org/
2. Введите домен и выберите TXT
3. Подождите пока все серверы покажут вашу запись
4. Попробуйте верифицировать снова

---

## 📊 Почему это важно?

**Верифицированный домен:**
- ✅ Нет 403 ошибок в Facebook Debugger
- ✅ Правильное отображение OG images
- ✅ Возможность запускать Facebook Ads
- ✅ Защита от domain spoofing
- ✅ Доверие Facebook к вашему контенту

**Неверифицированный домен:**
- ❌ Facebook может блокировать доступ
- ❌ Ads могут не одобряться
- ❌ OG tags могут не работать

---

## 🚀 После успешной верификации

Сайт готов для:
- ✅ Facebook Ads кампаний
- ✅ Instagram Ads
- ✅ Постинга в социальных сетях
- ✅ Lead Generation
- ✅ Retargeting

---

## 💡 Дополнительно

### **Добавьте www поддомен (опционально):**

Если используете `www.skillhubindonesia.site`:
1. В Vercel добавьте `www.skillhubindonesia.site`
2. В Facebook верифицируйте оба домена:
   - `skillhubindonesia.site`
   - `www.skillhubindonesia.site`

---

**Следуйте инструкциям выше** и ошибка 403 исчезнет! 🎉
