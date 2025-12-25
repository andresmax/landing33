# SaaS Landing Page Template

A clean, dark-themed landing page template for SaaS products. Based on the mxworks design language.

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
├── index.html          # Main landing page (edit copy here)
├── theme.css           # CSS variables (edit colors here)
├── styles.css          # Compiled output (auto-generated)
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── src/
│   └── input.css       # Source CSS with Tailwind directives
└── images/
    ├── hero.webp           # Header background
    ├── footer.webp         # Footer background
    ├── product.webp        # Product showcase image
    ├── logo.svg            # Navigation logo
    ├── avatar.webp         # CTA button avatar
    ├── feature-1.webp      # Feature screenshot 1
    ├── feature-2.webp      # Feature screenshot 2
    ├── feature-3.webp      # Feature screenshot 3
    ├── feature-4.webp      # Feature screenshot 4
    ├── integration-*.svg   # Integration logos
    ├── testimonial-*.webp  # Testimonial avatars
    └── favicon.ico         # Browser favicon
```

## Customization

### Colors

Edit `theme.css` to change the color scheme:

```css
:root {
  /* Brand colors */
  --brand-primary: #ff2d55;    /* Main accent color */
  --brand-hover: #ff4d73;      /* Hover state */

  /* Background colors */
  --surface-dark: #080B0C;     /* Main background */
  --surface-footer: #101618;   /* Footer/alternate sections */

  /* Text colors */
  --text-primary: #e7e5e4;     /* Headings */
  --text-secondary: #d6d3d1;   /* Body text */
  --text-muted: #a8a29e;       /* Secondary text */
  --text-subtle: #78716c;      /* Captions, metadata */
}
```

### Images to Replace

| Image | Size | Description |
|-------|------|-------------|
| `hero.webp` | 1920x1080+ | Header background |
| `footer.webp` | 1920x1080+ | Footer background |
| `product.webp` | 1200x800+ | Product/dashboard screenshot |
| `logo.svg` | Any | Your product logo |
| `avatar.webp` | 48x48 | CTA button avatar |
| `feature-*.webp` | 800x600+ | Feature screenshots |
| `testimonial-*.webp` | 96x96 | Customer avatars |
| `integration-*.svg` | Any | Partner/integration logos |

### Sections

The template includes these sections:

1. **Hero** - Main headline, subtext, CTA
2. **Integrations** - Partner/tech logos
3. **Features** - 4-card grid with hover effects
4. **Pricing** - 3-tier pricing cards
5. **Product Showcase** - Full-width product image
6. **Why Choose Us** - 4 benefit cards + stats
7. **Testimonials** - Customer quotes
8. **FAQ** - Expandable accordion
9. **Footer CTA** - Final conversion section

## Multiple Products

This template uses a branch-per-product workflow:

```bash
# Create new product landing page
git checkout -b product-name

# Customize for this product
# - Edit theme.css colors
# - Replace images
# - Update copy in index.html

# Deploy this branch
git push origin product-name
```

Each branch can be deployed separately on Netlify/Vercel.

## Deployment

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Set branch to deploy
4. Done!

### Vercel

1. Push to GitHub
2. Import to Vercel
3. Select branch
4. Deploy!

### Manual

Just upload the files to any static hosting provider.

## Design Elements

The template preserves these design patterns:

- **Glass morphism navigation** with gradient border
- **Header/footer background images** with gradient overlays
- **Card components** with subtle borders and backdrop blur
- **FAQ accordion** with smooth animations
- **Mobile menu** with slide animation
- **Smooth hover transitions** throughout

## Typography

Uses [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) from Google Fonts:
- Light (300) for body text
- Regular (400) for general text
- Medium (500) for subheadings
- Semibold (600) for emphasis

## Browser Support

Works in all modern browsers:
- Chrome, Edge, Firefox, Safari (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Credits

Design based on [mx.works](https://mx.works).
