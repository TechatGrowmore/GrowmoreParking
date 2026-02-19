# Growmore Parking Solutions - Render Deployment Guide

## Prerequisites
- GitHub account with your code pushed to a repository
- Render account (sign up at https://render.com)
- Your domain: growmoreparking.com

## Deployment Steps

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Create Web Service on Render

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:

**Settings:**
- **Name:** growmore-parking
- **Region:** Choose closest to your target audience (e.g., Singapore for India)
- **Branch:** main
- **Root Directory:** (leave empty)
- **Runtime:** Node
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Instance Type:** Free or Starter (recommended Starter for better performance)

### 3. Environment Variables

Add these in the Render dashboard (Environment tab):

```
NODE_ENV=production
SITE_URL=https://www.growmoreparking.com
```

### 4. Custom Domain Setup

After deployment:

1. Go to your service Settings → Custom Domains
2. Click "Add Custom Domain"
3. Enter: `growmoreparking.com`
4. Render will provide DNS records

**Update your domain registrar:**

Add these DNS records at your domain provider:

**For apex domain (growmoreparking.com):**
- Type: A
- Name: @ (or leave blank)
- Value: [Render's IP address from dashboard]

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: [your-service-name].onrender.com

**SSL Certificate:**
- Render automatically provisions and renews SSL certificates
- Your site will be available at https://www.growmoreparking.com

### 5. Deploy

1. Click "Manual Deploy" → "Deploy latest commit"
2. Wait for build to complete (5-10 minutes)
3. Your site will be live!

## Performance Optimizations

✅ **Already Configured:**
- Image optimization (WebP, AVIF)
- Font optimization
- Code minification
- Compression enabled
- Security headers
- SEO metadata
- Sitemap generation
- Robots.txt

## Post-Deployment Checklist

- [ ] Verify site loads at temporary Render URL
- [ ] Add custom domain in Render dashboard
- [ ] Update DNS records
- [ ] Wait for DNS propagation (up to 48 hours, usually 1-2 hours)
- [ ] Verify HTTPS is working
- [ ] Test all pages and links
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test WhatsApp and email links
- [ ] Test phone call links on mobile

## Monitoring & Maintenance

**Auto-Deploy:**
- Enable auto-deploy in Render dashboard
- Every git push to main branch will trigger deployment

**Performance Monitoring:**
- Check Render dashboard for metrics
- Monitor response times and errors

**Updates:**
```bash
# Make changes locally
git add .
git commit -m "Update description"
git push origin main
# Render will auto-deploy
```

## SEO Setup

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: growmoreparking.com
3. Verify ownership (DNS/HTML verification)
4. Submit sitemap: https://www.growmoreparking.com/sitemap.xml

### Google My Business
- Create/claim business listing
- Add website URL
- Add contact information

## Troubleshooting

**Build fails:**
- Check build logs in Render dashboard
- Verify all dependencies in package.json
- Check Node version compatibility

**Site not loading:**
- Verify Start Command: `npm start`
- Check environment variables
- Review deployment logs

**Domain not working:**
- Verify DNS records are correct
- Wait for DNS propagation (use https://dnschecker.org)
- Check custom domain status in Render

## Support
- Render Docs: https://render.com/docs
- Contact: sales@growmoreparking.com

## Costs
- **Free Tier:** Good for testing
- **Starter ($7/month):** Recommended for production
  - Better performance
  - No sleep on inactivity
  - More memory and CPU
