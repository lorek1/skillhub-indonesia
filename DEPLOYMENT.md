# 🚀 Инструкция по Деплою SkillHub Indonesia

## Вариант 1: Vercel (РЕКОМЕНДУЕТСЯ - Самый простой)

### Преимущества Vercel:
- ✅ **Бесплатный план** с неограниченным bandwidth
- ✅ **Автоматический деплой** при git push
- ✅ **SSL сертификат** (HTTPS) автоматически
- ✅ **CDN** для быстрой загрузки по всему миру
- ✅ **Preview deployments** для каждой ветки
- ✅ **Zero configuration** - работает из коробки

### Шаги деплоя на Vercel:

#### 1. Создайте аккаунт на Vercel
```
https://vercel.com/signup
```
Войдите через GitHub

#### 2. Установите Vercel CLI (опционально)
```bash
npm i -g vercel
```

#### 3. Деплой через CLI:
```bash
cd /Users/danila/CascadeProjects/skillhub-indonesia

# Login
vercel login

# Deploy
vercel

# Следуйте инструкциям:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? skillhub-indonesia
# - Directory? ./
# - Override settings? No
```

#### 4. ИЛИ деплой через Web UI (проще):
1. Откройте https://vercel.com/new
2. Import Git Repository
3. Подключите ваш GitHub/GitLab/Bitbucket
4. Выберите проект
5. Vercel автоматически определит Next.js
6. Нажмите **Deploy**

#### 5. Добавьте Environment Variable:
После деплоя:
1. Откройте Settings → Environment Variables
2. Добавьте: `NEXT_PUBLIC_FB_PIXEL_ID` = `ваш_pixel_id`
3. Redeploy проект

#### 6. Готово! 
Ваш сайт доступен по адресу: `https://skillhub-indonesia.vercel.app`

### Настройка собственного домена:
1. Settings → Domains
2. Добавьте ваш домен (например: skillhubindonesia.com)
3. Настройте DNS записи (Vercel даст инструкции)
4. SSL автоматически настроится

---

## Вариант 2: Netlify (Альтернатива Vercel)

### Преимущества:
- ✅ Бесплатный план
- ✅ Простой UI
- ✅ Хорошая документация

### Шаги:
```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Build проект
npm run build

# 4. Deploy
netlify deploy --prod

# Следуйте инструкциям
```

### Или через Web UI:
1. https://app.netlify.com/start
2. Connect to Git provider
3. Select repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add env var: `NEXT_PUBLIC_FB_PIXEL_ID`

---

## Вариант 3: Railway.app (Node.js Hosting)

### Для более сложных проектов с базой данных

```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Deploy
railway up

# 4. Add environment variables в Railway dashboard
```

---

## Вариант 4: VPS (Ubuntu/Debian) - Для продвинутых

Если у вас есть VPS (DigitalOcean, AWS EC2, etc):

### 1. Подключитесь к серверу:
```bash
ssh user@your-server-ip
```

### 2. Установите Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
```

### 3. Клонируйте проект:
```bash
git clone https://github.com/your-username/skillhub-indonesia.git
cd skillhub-indonesia
npm install
```

### 4. Создайте .env.local:
```bash
nano .env.local
# Добавьте: NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id
```

### 5. Build и запуск:
```bash
npm run build
pm2 start npm --name "skillhub" -- start
pm2 save
pm2 startup
```

### 6. Настройте Nginx:
```bash
sudo nano /etc/nginx/sites-available/skillhub

# Добавьте:
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Активируйте:
sudo ln -s /etc/nginx/sites-available/skillhub /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. SSL с Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 🎯 Рекомендация

**Для начала используйте Vercel:**
- Бесплатно
- Проще всего
- Автоматические обновления
- SSL из коробки
- Отлично подходит для Next.js

**После масштабирования можно перейти на:**
- VPS для полного контроля
- Railway/Render для Node.js приложений

---

## ⚡ Quick Deploy (1 минута)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/skillhub-indonesia.git
git push -u origin main

# 2. Откройте Vercel.com и import GitHub repo
# 3. Добавьте FB Pixel ID в environment variables
# 4. Deploy!
```

Готово! Сайт online 🚀
