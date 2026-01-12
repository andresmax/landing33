# Gratu SEO/AI SEO Strategy: Landing Page Approach

**Created:** January 2025
**Status:** Active
**Approach:** Landing pages + third-party mentions (no blog)

---

## Current Site Assessment

### What We Have
- Well-structured homepage with semantic HTML
- Basic MobileApplication schema
- FAQ section (7 questions)
- Good visual design and conversion focus
- Privacy Policy, Terms pages
- Email signup form
- Social links (X, Instagram)

### What's Missing for SEO/AI SEO
- [x] FAQPage schema (Google rich results) - DONE
- [x] Review/Rating schema - DONE (AggregateRating added)
- [x] Organization schema - DONE
- [x] Keyword-optimized meta content - DONE
- [x] Multiple indexable pages - DONE (2 landing pages created)
- [x] Sitemap.xml - DONE
- [x] robots.txt optimization - DONE

---

## PART 1: CRITICAL BASELINE TASKS

### 1. Homepage Meta & Schema Enhancements

**Current meta description:**
> "A beautiful journaling app to help you slow down, reflect, and find joy in everyday moments."

**Problems:** No keywords, doesn't mention "gratitude", generic

**Optimized meta description:**
> "Gratu is a free gratitude journal app for iPhone, iPad & Mac. Build a daily gratitude practice with prompts, reminders, and complete privacy. No ads, no tracking."

**Title tag optimization:**
- Current: `gratu | Find peace and calm, one gratitude a day`
- Better: `Gratu - Free Gratitude Journal App for iPhone & iPad | Daily Prompts & Privacy`

### 2. Schema Markup to Add

**FAQPage Schema** (enables rich FAQ results in Google):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is gratu really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! gratu is completely free to download and use. All core features including daily journaling, reminders, and prompts are available at no cost. No hidden fees, no subscriptions required."
      }
    },
    {
      "@type": "Question",
      "name": "How do I start a gratitude practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Just download gratu and write your first entry. Start with something simple - one thing you're grateful for today. Set a daily reminder and let the app guide you with thoughtful prompts. Consistency matters more than perfection."
      }
    },
    {
      "@type": "Question",
      "name": "Is my journal private?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Your entries are stored locally on your device and protected by Face ID or Touch ID. We never store your data on our servers, and there's zero tracking or analytics. Your thoughts stay completely private."
      }
    },
    {
      "@type": "Question",
      "name": "Can I sync across my Apple devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! gratu uses iCloud to securely sync your gratitude entries across all your Apple devices. Write on your iPhone, read on your iPad - your journal goes wherever you go."
      }
    },
    {
      "@type": "Question",
      "name": "What if I miss a day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's okay! gratu is designed to encourage, not pressure. Missing a day doesn't break your practice. Just pick up where you left off. Progress isn't about perfection - it's about showing up when you can."
      }
    },
    {
      "@type": "Question",
      "name": "What devices is gratu available on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "gratu is available on iPhone, iPad, and Mac. Your entries sync seamlessly across all your Apple devices via iCloud, so you can journal wherever inspiration strikes."
      }
    },
    {
      "@type": "Question",
      "name": "Is there an Android version?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "gratu is currently available exclusively on iOS. We're focused on creating the best possible experience for iPhone and iPad users. Sign up for updates to be notified if that changes."
      }
    }
  ]
}
```

**AggregateRating Schema** (add to existing MobileApplication schema):
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.5",
  "ratingCount": "XX",
  "bestRating": "5"
}
```

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gratu",
  "url": "https://gratu.app",
  "logo": "https://gratu.app/images/og-image.png",
  "sameAs": [
    "https://x.com/gratuapp",
    "https://www.instagram.com/gratuapp"
  ]
}
```

### 3. Technical SEO Files

**sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gratu.app/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://gratu.app/privacy.html</loc>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://gratu.app/terms.html</loc>
    <priority>0.3</priority>
  </url>
</urlset>
```

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://gratu.app/sitemap.xml
```

### 4. Image Alt Text Updates

| Image | Current Alt | Optimized Alt |
|-------|-------------|---------------|
| shot1.webp | "Gratu app screenshot" | "Gratu gratitude journal app home screen showing daily entries" |
| shot2.webp | "Gratu app screenshot" | "Writing a gratitude entry in Gratu app with guided prompts" |
| shot3.webp | "Gratu app screenshot" | "Gratu app streak tracker and gratitude history timeline" |

---

## PART 2: LANDING PAGE STRATEGY

### Priority Landing Pages

| Priority | Page URL | Target Keywords | Search Intent | Status |
|----------|----------|-----------------|---------------|--------|
| 1 | `/gratitude-journal-prompts` | "gratitude journal prompts", "gratitude prompts" | Users seeking inspiration | [x] DONE |
| 2 | `/gratitude-journal-app` | "gratitude journal app", "gratitude app" | High-intent product search | [x] DONE |
| 3 | `/benefits-of-gratitude-journaling` | "benefits of gratitude journaling", "why gratitude works" | Educational, trust-building | [ ] Not started |
| 4 | `/gratitude-journal-app-iphone` | "gratitude journal app iphone", "ios gratitude app" | Platform-specific search | [ ] Not started |
| 5 | `/private-journal-app` | "private journal app", "secure journal app" | Privacy-focused users | [ ] Not started |
| 6 | `/30-day-gratitude-challenge` | "30 day gratitude challenge", "gratitude challenge" | Challenge seekers | [ ] Not started |

### Landing Page Template Structure

Each landing page should follow this AI-optimized structure:

```
1. ANSWER CAPSULE (2-3 sentences immediately answering the query)
   - Place right after H1
   - Direct, factual, citable
   - This is what AI systems extract

2. H1: Keyword-rich headline

3. HERO SECTION
   - Value proposition
   - App Store button
   - App screenshot

4. CONTENT SECTIONS (H2s)
   - Bulleted lists (AI loves these)
   - Short paragraphs
   - Statistics where possible

5. MINI-FAQ (3-5 questions specific to this page)
   - Include FAQPage schema for each page

6. CTA
   - App download button
```

### Example: `/gratitude-journal-prompts` Page

**H1:** "100+ Gratitude Journal Prompts to Inspire Your Daily Practice"

**Answer Capsule:**
> "Gratitude journal prompts are questions or statements that guide you to reflect on the positive aspects of your life. Examples include 'What made you smile today?' and 'Name three people who helped you this week.' The Gratu app includes daily prompts built-in, making it easy to start journaling immediately."

**Content sections:**
- Morning Gratitude Prompts (10 examples)
- Evening Reflection Prompts (10 examples)
- Gratitude Prompts for Anxiety (10 examples)
- Gratitude Prompts for Relationships (10 examples)

**Mini-FAQ:**
- "How many gratitude prompts should I answer per day?"
- "What if I can't think of anything to be grateful for?"
- "Do gratitude prompts actually work?"

**CTA:** Download Gratu for daily prompts delivered to your phone

---

## PART 3: AI SEO (GEO) STRATEGY

### For ChatGPT/Claude/Perplexity Visibility

1. **Answer Capsule on Every Page**
   - AI systems extract these as citations
   - Make them factual, not salesy
   - 2-3 sentences, placed immediately after H1

2. **Structured Lists**
   - AI prefers bullet points and numbered lists
   - They're easier to cite
   - Use for features, benefits, prompts

3. **Third-Party Mentions (CRITICAL)**
   Without blog content, this is our #1 AI SEO lever

4. **Monthly AI Visibility Test**
   Ask ChatGPT/Perplexity: "What's the best gratitude journal app for iPhone?"
   Track if/when Gratu appears

### Third-Party Mention Targets

| Platform | Action | Status |
|----------|--------|--------|
| Product Hunt | Create listing | [ ] Not started |
| AlternativeTo | Create profile | [ ] Not started |
| Slant.co | Submit app | [ ] Not started |
| AppAdvice | Submit for review | [ ] Not started |
| r/gratitude | Authentic participation | [ ] Not started |
| r/journaling | Authentic participation | [ ] Not started |
| r/iosapps | Share app | [ ] Not started |
| Quora | Answer gratitude questions | [ ] Not started |

### Roundup Article Outreach

Find and contact authors of these types of articles:
- "Best gratitude apps 2025"
- "Best journaling apps for iPhone"
- "Best mental health apps"
- "Best mindfulness apps"

**Outreach template:**
> Hi [Name], I came across your article on [topic] and noticed you featured several gratitude apps. I'm the developer of Gratu, a privacy-focused gratitude journal for iOS. Unlike other apps, Gratu stores all data on-device with zero tracking. Would you consider including it in your roundup? Happy to provide screenshots or answer any questions. Thanks, [Your name]

---

## TIME ALLOCATION

| Activity | % of Time | Rationale |
|----------|-----------|-----------|
| **Creating Landing Pages** | 50% | More indexable pages = more keyword opportunities = more AI training data |
| **Third-Party Mentions** | 40% | How AI systems discover you. No mentions = invisible to AI |
| **On-Page Optimization** | 10% | Important but one-time; diminishing returns after baseline |

---

## ACTION CHECKLIST

### Week 1: Baseline (Priority: HIGH) - COMPLETED
- [x] Update meta title on homepage
- [x] Update meta description on homepage
- [x] Add FAQPage schema to existing FAQ
- [x] Add Organization schema
- [x] Add AggregateRating to MobileApplication schema
- [x] Create sitemap.xml
- [x] Create robots.txt
- [ ] Submit site to Google Search Console
- [x] Update image alt texts

### Weeks 2-4: Landing Pages + Outreach
- [x] Create landing page: `/gratitude-journal-prompts`
- [x] Create landing page: `/gratitude-journal-app`
- [ ] Create Product Hunt listing
- [ ] Submit to AlternativeTo
- [ ] Submit to Slant.co
- [ ] Submit to 3 other app directories
- [ ] Find 10 "best gratitude apps" articles
- [ ] Email outreach to 10 article authors

### Ongoing Weekly Tasks
- [ ] Create 1 new landing page
- [ ] 2-3 Reddit/Quora contributions
- [ ] Check Google Search Console for issues
- [ ] Monthly: Test AI visibility (ChatGPT, Perplexity)

---

## TRACKING & METRICS

### Traditional SEO
- Organic traffic (Google Analytics)
- Keyword rankings (Ubersuggest free tier)
- Indexed pages (Search Console)
- Backlinks acquired (Ahrefs free checker)

### AI SEO
- Manual testing: Monthly ChatGPT/Perplexity queries
- Referral traffic from openai.com, perplexity.ai (GA4)
- Third-party mentions count

### Key Queries to Track
- "best gratitude app"
- "gratitude journal app iphone"
- "free gratitude journal app"
- "private journal app"
- "gratitude prompts"

---

## COMPETITOR REFERENCE

| Competitor | Content Strategy | Strength | Weakness |
|------------|-----------------|----------|----------|
| Gratitude Plus ($100k/mo) | Minimal blog, PR-focused | Strong brand, press mentions | Weak content SEO |
| 365 Gratitude | No blog, conversion-focused | Community size claims | No content |
| Happyfeed | Has blog + /research section | Multiple landing pages | Less privacy focus |
| Day One | Strong blog + guides | Content authority | General journaling, not gratitude-specific |

**Our differentiation:** Privacy-first positioning + targeted landing pages in underserved keyword space.

---

## NOTES

- Avoiding long-form blog content per strategy decision
- Focus on landing pages that convert, not traffic for traffic's sake
- Privacy messaging is key differentiator - emphasize in all content
- Update sitemap.xml whenever new landing pages are added
