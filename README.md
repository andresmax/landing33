# SaaS Landing Page Template

A clean, customizable landing page template for SaaS products. Uses CSS variables for easy theming and a simple config file for all customizable content.

## Quick Start

```bash
# Install dependencies
npm install

# Start development (watches for changes)
npm run dev

# Build for production
npm run build
```

Then open `index.html` in your browser.

## File Structure

```
saas-template/
├── config.json          # Site configuration (edit this first!)
├── netlify.toml         # Netlify deployment config
├── build.js             # Template build script
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── theme.css            # CSS variables (edit colors here)
├── src/
│   ├── template.html    # Main page template
│   ├── privacy.html     # Privacy policy template
│   ├── terms.html       # Terms of service template
│   ├── sitemap.xml      # Sitemap template
│   ├── robots.txt       # Robots.txt template
│   └── input.css        # Source CSS with Tailwind directives
├── images/
│   ├── headerbg.png     # Header background
│   ├── footerbg.png     # Footer background
│   ├── product.webp     # Product showcase image
│   ├── og-image.png     # Social sharing image (1200x630)
│   ├── favicon.ico      # Browser favicon
│   ├── apple-touch-icon.png  # iOS icon
│   ├── feature-*.webp   # Feature screenshots
│   ├── integration-*.svg    # Integration logos
│   └── testimonial-*.webp   # Testimonial avatars
└── [generated files]
    ├── index.html       # Built landing page
    ├── privacy.html     # Built privacy policy
    ├── terms.html       # Built terms of service
    ├── sitemap.xml      # Built sitemap
    ├── robots.txt       # Built robots.txt
    └── styles.css       # Compiled CSS
```

## Configuration

Edit `config.json` to customize your site:

```json
{
  "site": {
    "title": "Product Name",
    "tagline": "Your tagline here",
    "description": "Your product description for SEO (under 160 chars)",
    "url": "https://yourproduct.com",
    "contactEmail": "hello@yourproduct.com",
    "ogImage": "images/og-image.png",
    "themeColor": "#2a789b"
  },
  "analytics": {
    "plausibleDomain": "yourproduct.com"
  },
  "cta": {
    "primaryUrl": "https://app.yourproduct.com/signup",
    "primaryText": "Get Started →",
    "navButtonText": "Get Started"
  },
  "social": {
    "twitter": "yourhandle",
    "instagram": "yourhandle",
    "linkedin": "yourcompany"
  },
  "legal": {
    "privacyUrl": "privacy.html",
    "termsUrl": "terms.html"
  },
  "footer": {
    "copyrightYear": "2025",
    "companyName": "Your Company",
    "badgeText": "Available for work"
  },
  "forms": {
    "emailAction": "https://your-form-handler.com/subscribe"
  }
}
```

The build script replaces `{{key}}` placeholders in templates with config values. Run `npm run dev` to auto-rebuild on changes.

## Colors

Edit `theme.css` to change the color scheme:

```css
:root {
  /* Brand colors */
  --brand-primary: #2a789b;
  --brand-hover: #3a8aab;

  /* Background colors */
  --surface-dark: #0a1a1f;

  /* Text colors */
  --text-primary: #ffffff;
  --text-secondary: #e0e0e0;
  --text-muted: rgba(255, 255, 255, 0.8);
  --text-subtle: rgba(255, 255, 255, 0.6);
}
```

## Images to Replace

| Image | Size | Description |
|-------|------|-------------|
| `headerbg.png` | 1920x1080+ | Header background |
| `footerbg.png` | 1920x1080+ | Footer background |
| `product.webp` | 1200x800+ | Product screenshot |
| `og-image.png` | 1200x630 | Social sharing image |
| `favicon.ico` | 32x32 | Browser favicon |
| `apple-touch-icon.png` | 180x180 | iOS home screen icon |
| `feature-*.webp` | 800x600+ | Feature screenshots |
| `testimonial-*.webp` | 96x96 | Customer avatars |
| `integration-*.svg` | Any | Partner/integration logos |

## Sections

1. **Hero** - Headline, subtext, CTA button
2. **Integrations** - Partner/tech logos
3. **Why Choose Us** - Benefits and description
4. **Feature Grid** - Feature cards with icons
5. **Screenshot** - Full-width product screenshot
6. **Pricing** - Pricing tiers
7. **Testimonials** - Customer quotes
8. **FAQ** - Expandable accordion
9. **Footer** - CTA, social links, email signup, legal links

## SEO

The template includes:

- Meta description and Open Graph tags
- Twitter card tags
- Canonical URLs
- JSON-LD structured data (SoftwareApplication schema)
- `sitemap.xml` for search engines
- `robots.txt` allowing all crawlers

All SEO values are pulled from `config.json`.

## Deployment

### Netlify (recommended)

The repo includes `netlify.toml` with build settings and security headers.

1. Push to GitHub
2. Connect repo to Netlify
3. Deploy (build command and publish dir are pre-configured)

### Vercel

1. Push to GitHub
2. Import to Vercel
3. Set build command: `npm run build`
4. Set output directory: `.`

### Manual

Run `npm run build` and upload all files to any static host.

## Multiple Products

Use a branch-per-product workflow:

```bash
git checkout -b product-name

# Customize:
# - Edit config.json
# - Edit theme.css colors
# - Replace images

git push origin product-name
```

Each branch can be deployed separately on Netlify/Vercel.

## Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with auto-rebuild |
| `npm run build` | Build for production |
| `npm run build:html` | Rebuild HTML/XML only |
| `npm run build:css` | Rebuild CSS only |

## Browser Support

Works in all modern browsers: Chrome, Edge, Firefox, Safari (latest versions), iOS Safari, Chrome for Android.

## Credits

Design based on [mx.works](https://mx.works).
