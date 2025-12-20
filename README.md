# 🌟 Soul Spectrum (โซลสเปกตรัม)

> Digital Sanctuary for Gen Z Mental Wellness
> "วันนี้... ใจของเธอเป็นสีอะไร?"

[![Live Site](https://img.shields.io/badge/Live-soul.thipakjai.com-6366F1)](https://soul.thipakjai.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB)](https://react.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC)](https://tailwindcss.com/)

---

## 🎯 What is Soul Spectrum?

Soul Spectrum is a **satellite website** for [ที่พักใจ (thipakjai.com)](https://thipakjai.com), serving as a bridge between social media anxiety and mental wellness products.

### Core Concept
**"Psychological Mutelu (มูเตลูเชิงจิตวิทยา)"**

- Fortune telling as a mask 🎭
- Psychological validation as the core 💚
- Bridge to premium wellness products 🌉

### Target Audience
Gen Z & First Jobbers (18-28 years old) facing **Anxiety Economy**

---

## 🚀 Quick Start

### For Developers

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### For AI Assistants

**Before starting any task:**
```
1. Read AI_CONTEXT.md
2. Check BRAND_MASTER_PLAN.md (for design)
3. Check PRD.md (for features)
```

### For Content Writers

**Read these first:**
1. `AI_CONTEXT.md` - Brand voice & 3-Act Structure
2. `PRD.md` (Section 4-6) - Content strategy
3. `src/data/oracle_data.json` - Example oracle cards
4. `src/data/blog_posts.json` - Example blog posts

---

## 📂 Project Structure

```
Mutelu.Thipakjai/
├── .claude/
│   └── instructions.md       # Claude Code auto-instructions
├── src/
│   ├── app/                  # Next.js pages
│   ├── components/           # React components
│   ├── data/                 # JSON data (no database)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities
│   └── types/                # TypeScript types
├── public/assets/auras/      # Watercolor images
├── AI_CONTEXT.md             # 🤖 AI assistant context
├── BRAND_MASTER_PLAN.md      # 🎨 Brand & design
├── PRD.md                    # 📋 Product requirements
└── README.md                 # 📖 This file
```

---

## 🎨 Brand Identity

### Brand Voice: "Fah Sai (ฟ้าใส)"
Caring friend who validates without judgment

**DO ✅:**
- "เธอ/เรา" (intimate)
- "เราเข้าใจนะ" (validate)
- "ค่อยๆ ดีขึ้น" (patient)

**DON'T ❌:**
- "คุณ" (formal)
- "สู้ๆ" (toxic positivity)
- "คิดมากไป" (dismissive)

### Visual Theme
**"The Floating Sanctuary (อาศรมลอยฟ้า)"**
- Warm cream paper (#FDFBF7)
- Watercolor auras
- Glassmorphism navigation
- Gentle animations

### 3-Act Content Structure
1. **Mirror** - Validate feelings
2. **Light** - Provide insight
3. **Step** - Enable action

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16.1.0 (App Router) |
| **Runtime** | React 19.2.3 |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion 12.23.26 |
| **Language** | TypeScript 5 |
| **Deployment** | Vercel |
| **Analytics** | Google Analytics 4 + GTM |

### Key Decisions

**No Database (JSON Files)**
- ✅ Fast (no API calls)
- ✅ Simple deployment
- ✅ Version control friendly
- ❌ No personalization (Phase 2 feature)

**Image Assets for Auras**
- Better visual weight than pure CSS
- More mystical feeling
- Unique to our brand

---

## 📝 Common Tasks

### Add New Oracle Card

1. Open `src/data/oracle_data.json`
2. Add new card object:
```json
{
  "id": "category_###",
  "category": "health|love|work|finance|family",
  "message_title": "Card title (3-5 words)",
  "message_body": "[3-Act Structure content]",
  "product_mapping": {
    "cta_text": "CTA text >",
    "target_url": "https://thipakjai.com/products/slug"
  }
}
```
3. Follow 3-Act Structure (60-100 words total)
4. Use Fah Sai voice

### Add New Blog Post

1. Open `src/data/blog_posts.json`
2. Add new post object with all required fields
3. Use markdown for content
4. Include SEO keywords in title/description
5. Set appropriate publishDate

### Update UI Component

1. Check design system in `BRAND_MASTER_PLAN.md`
2. Use Tailwind utility classes
3. Use Framer Motion for animations
4. Ensure mobile responsive
5. Test on different screen sizes

---

## 📊 Features

### Core Features (Live)
- ✅ **Oracle Reading** - 5 categories, 50+ cards
- ✅ **Blog System** - 30+ posts, 6 categories
- ✅ **3D Card Flip** - Smooth animations
- ✅ **Category Filtering** - Blog category pills
- ✅ **Mobile Responsive** - 2×2 grid on mobile
- ✅ **Analytics** - GA4 + GTM tracking
- ✅ **Product Bridge** - CTAs to mothership

### Roadmap
- [ ] User accounts (save favorites)
- [ ] Newsletter signup
- [ ] Social sharing
- [ ] More oracle cards (75 total)
- [ ] Audio meditations
- [ ] Community features

---

## 🔗 Important Links

- **Live Site:** [soul.thipakjai.com](https://soul.thipakjai.com)
- **Mothership:** [thipakjai.com](https://thipakjai.com)
- **Design System:** See `BRAND_MASTER_PLAN.md`
- **Full Spec:** See `PRD.md`
- **AI Context:** See `AI_CONTEXT.md`

---

## 📚 Documentation

| File | Purpose | Read When |
|------|---------|-----------|
| `README.md` | Project overview | First time |
| `AI_CONTEXT.md` | Quick AI reference | Starting any task |
| `BRAND_MASTER_PLAN.md` | Brand & design system | UI/Design work |
| `PRD.md` | Complete product spec | Building features |

---

## 🤝 Contributing

### For Developers
1. Read `AI_CONTEXT.md` first
2. Follow TypeScript strict mode
3. Mobile-first responsive design
4. Use Framer Motion for animations
5. Test on multiple devices

### For Content Writers
1. Read brand voice guidelines
2. Use 3-Act Structure
3. Keep 60-100 words for oracle cards
4. Keep 600-800 words for blog posts
5. Include product CTAs

### For Designers
1. Check `BRAND_MASTER_PLAN.md`
2. Use approved color palette
3. Maintain paper-like aesthetic
4. Gentle, calming animations
5. Mobile-first approach

---

## 📊 Analytics

**Tracking:**
- Oracle category selections
- Card draws
- CTA clicks to mothership
- Blog post reads
- User flow patterns

**UTM Structure:**
```
?utm_source=soul_spectrum
&utm_medium=oracle
&utm_campaign=oracle_{category}
```

---

## 🎯 Success Metrics

| Metric | Target |
|--------|--------|
| Monthly visitors | 5,000+ |
| Oracle engagement | 60-70% |
| Blog reading rate | 40-50% |
| CTA click-through | 5-10% |
| Mothership conversion | 2-5% |

---

## 🐛 Known Issues

None currently! 🎉

Report issues via GitHub Issues or contact the team.

---

## 📄 License

© 2025 ที่พักใจ (Heart's Haven). All rights reserved.

---

## 💬 Support

For questions or support:
- Check documentation first
- Read `AI_CONTEXT.md` for context
- Review `PRD.md` for detailed specs

---

**Last Updated:** 2025-12-20
**Version:** 1.0 (MVP Launched)
**Status:** ✅ Live in Production

---

*"วันนี้... ใจของเธอเป็นสีอะไร?"*

Made with ❤️ for everyone who needs a moment to breathe.
