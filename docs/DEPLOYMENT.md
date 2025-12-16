# Mellon Landing Page - Deployment Guide

## 🚀 Quick Start (Development)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit http://localhost:4321
```

## 📦 Deploy to Netlify (Recommended)

### Option 1: Connect GitHub Repository (Easiest)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mellon landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mellon-landing.git
   git push -u origin main
   ```

2. **Connect to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify will auto-detect Astro settings
   - Click "Deploy site"

3. **Auto-deployment is now active!**
   - Every git push to `main` automatically deploys
   - Build time: ~45 seconds
   - Zero configuration needed (netlify.toml handles it)

### Option 2: Deploy from Terminal

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (first time - creates new site)
netlify deploy

# Deploy to production
netlify deploy --prod
```

## 🌐 Custom Domain Setup

### After Site is Live on Netlify:

1. **Purchase domain** (e.g., mellonvoice.com from Namecheap)

2. **Configure DNS at your domain registrar:**

   ```
   Type: A
   Host: @
   Value: 75.2.60.5 (Netlify's load balancer)

   Type: CNAME
   Host: www
   Value: YOUR_SITE_NAME.netlify.app
   ```

3. **Add custom domain in Netlify:**

   - Site settings → Domain management
   - Add custom domain: `mellonvoice.com`
   - Enable HTTPS (auto with Let's Encrypt)

4. **Done!** Site will be live at your domain in 24-48 hours

## 📊 Performance Checklist

After deployment, verify:

- [ ] **Lighthouse score**: 95+ (target: 100)
- [ ] **SEO score**: 100/100
- [ ] **Accessibility score**: 95+
- [ ] **Performance score**: 90+
- [ ] **Core Web Vitals**: All green
- [ ] **Mobile responsiveness**: Test on phone
- [ ] **Animations**: Smooth at 60fps
- [ ] **Reduced motion**: Test with accessibility preferences

## 🔧 Environment Variables (Optional)

If you need analytics or integrations:

**In Netlify Dashboard:**

- Site settings → Environment variables
- Add variables (e.g., `GOOGLE_ANALYTICS_ID`)

**In Astro:**

```javascript
const analyticsId = import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID;
```

## 📈 SEO Submission (After Deployment)

1. **Google Search Console**

   - Add property: https://mellonvoice.com
   - Verify ownership (HTML file method)
   - Submit sitemap: `https://mellonvoice.com/sitemap-index.xml`

2. **Bing Webmaster Tools**

   - Add site: https://mellonvoice.com
   - Submit sitemap

3. **Product Hunt** (when ready)
   - Submit product with landing page link
   - Use screenshots and demo

## 🛠️ Updating Content

### To update pricing, features, or content:

1. Edit files in `src/pages/` or `src/components/`
2. Test locally: `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update pricing tiers"
   git push origin main
   ```
4. Netlify auto-deploys in ~1 minute

## 💰 Cost Breakdown

- **Netlify Hosting**: $0/month (free tier)

  - 100GB bandwidth/month
  - Unlimited sites
  - Auto SSL
  - CDN included

- **Domain**: ~$12/year

  - mellonvoice.com via Namecheap
  - Privacy protection included

- **Total monthly cost**: $1/month

## 🔄 CI/CD Pipeline (Automatic)

Netlify automatically:

1. Detects git push to main
2. Installs dependencies (`npm install`)
3. Builds site (`npm run build`)
4. Deploys to CDN
5. Invalidates old cache
6. Sends deploy notification

**Average deploy time**: 45-60 seconds

## 🐛 Troubleshooting

### Build fails on Netlify?

**Check Node version:**

```toml
# netlify.toml
[build.environment]
  NODE_VERSION = "18"
```

**Clear cache and retry:**

- Netlify dashboard → Deploys → Options → Clear cache and deploy site

### Domain not resolving?

**Wait 24-48 hours for DNS propagation**

**Verify DNS settings:**

```bash
dig mellonvoice.com
dig www.mellonvoice.com
```

### Lighthouse score below 95?

**Check image optimization:**

- Use WebP format
- Compress images (TinyPNG)
- Add `loading="lazy"` to images

**Check unused CSS:**

- Astro automatically removes unused CSS
- Ensure no large external stylesheets

## 📞 Support

- **Netlify docs**: https://docs.netlify.com
- **Astro docs**: https://docs.astro.build
- **DNS help**: https://www.whatsmydns.net

## 🎯 Next Steps

1. [ ] Deploy to Netlify
2. [ ] Purchase domain
3. [ ] Configure DNS
4. [ ] Submit sitemap to Google
5. [ ] Set up Gumroad products
6. [ ] Test purchase flow
7. [ ] Launch on Product Hunt
8. [ ] Monitor analytics

---

**Ready to deploy?** Run `npm run build` to verify everything works locally, then follow Option 1 above!
