# 🤖 AI CONTEXT - Soul Spectrum (ที่พักใจ)

> **คำแนะนำสำหรับ AI Assistant ทุกตัว:**
> อ่านไฟล์นี้ก่อนเริ่มทำงานทุกครั้ง เพื่อเข้าใจบริบทของโปรเจกต์

---

## 📋 QUICK START

### อ่านไฟล์เหล่านี้ก่อน:
1. **`PRD.md`** - Product Requirements Document (รายละเอียดทุกอย่าง)
2. **`BRAND_MASTER_PLAN.md`** - Brand identity และ design system
3. **`AI_CONTEXT.md`** (ไฟล์นี้) - Context สำหรับ AI

### โปรเจกต์คืออะไร?
**Soul Spectrum** เป็น satellite website ของ **ที่พักใจ (thipakjai.com)**
- **URL:** soul.thipakjai.com
- **วัตถุประสงค์:** สะพานเชื่อมจาก social media → สินค้า digital ที่ thipakjai.com
- **คอนเซ็ปต์:** "Psychological Mutelu" - ใช้ไพ่ทำนายเป็นหน้ากาก แต่เนื้อในคือจิตวิทยา
- **กลุ่มเป้าหมาย:** Gen Z & First Jobbers (18-28 ปี) ที่กำลังเผชิญ Anxiety Economy

---

## 🎯 CORE PRINCIPLES (ห้ามลืม!)

### 1. Brand Voice: "Fah Sai (ฟ้าใส)"

**DO ✅:**
- ใช้สรรพนาม "เธอ/เรา" (intimate, friendly)
- "เราเข้าใจนะว่ามันหนัก"
- "ไม่เก่งบ้างก็ได้"
- "ค่อยๆ ดีขึ้น"
- Validate ความรู้สึกก่อนเสมอ

**DON'T ❌:**
- "คุณ" (too formal)
- "คิดมากไปเอง" (dismissive)
- "สู้ๆ นะ" (toxic positivity)
- "ต้องแข็งแรง" (pushy)
- ตัดสินหรือบังคับ

### 2. Content Structure: 3-Act Framework

**ทุกชิ้น content ต้องมี:**

```
Act 1: The Mirror (กระจกสะท้อน)
→ Validate ความรู้สึก (30 คำ)
→ "เธอคงเหนื่อยใช่ไหม..."

Act 2: The Light (แสงสว่าง)
→ Insight + Metaphor (40 คำ)
→ "แต่เมฆกำลังจะผ่านไป..."

Act 3: The Step (ก้าวเดินต่อ)
→ Micro-action + Product bridge (30 คำ)
→ "วันนี้ลองพักสักนิด... [CTA ไปสินค้า]"
```

### 3. Writer Type

- **Nuanced:** ใช้คำที่มีน้ำหนัก (อ่อนล้า มากกว่า เหนื่อย)
- **Deep but Accessible:** ลึกซึ้งแต่เข้าใจง่าย
- **Nature Metaphors:** ใช้ภาพธรรมชาติ (น้ำ, ลม, ต้นไม้)
- **Spacious:** เว้นวรรค เว้นใจ ย่อหน้าสั้นๆ

---

## 🏗️ PROJECT STRUCTURE

```
Mutelu.Thipakjai/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage (4 soul cards)
│   │   ├── oracle/page.tsx       # Oracle reading flow
│   │   └── blog/
│   │       ├── page.tsx          # Blog index
│   │       └── [slug]/page.tsx   # Blog post detail
│   │
│   ├── components/
│   │   ├── Header.tsx            # Glassmorphism nav
│   │   ├── OracleCard.tsx        # 3D flippable card
│   │   ├── CategoryButton.tsx    # Vertical tarot card
│   │   ├── BlogCard.tsx          # Paper-style card
│   │   └── LinkButton.tsx        # UTM-tracked CTA
│   │
│   ├── data/
│   │   ├── oracle_data.json      # 50 oracle cards
│   │   └── blog_posts.json       # 30 blog posts
│   │
│   ├── types/
│   │   ├── oracle.ts
│   │   └── blog.ts
│   │
│   └── hooks/
│       └── useOracle.ts          # Oracle state management
│
├── public/assets/auras/          # Watercolor category images
├── BRAND_MASTER_PLAN.md          # Brand guidelines
├── PRD.md                        # Full product spec
└── AI_CONTEXT.md                 # This file
```

---

## 🎨 DESIGN SYSTEM (Quick Reference)

### Colors
```css
/* Base */
--cream: #FDFBF7;           /* Main background */
--teal: #0D7377;            /* Brand accent */
--indigo: #6366F1;          /* Primary */
--pink: #EC4899;            /* Secondary */

/* Oracle Gradients */
Health:  #84FAB0 → #8FD3F4  (🌿)
Love:    #FF9A9E → #FECFEF  (💕)
Work:    #A1C4FD → #C2E9FB  (💼)
Finance: #FFC3A0 → #FFAFBD  (✨)
Family:  #D299C2 → #FEF9D7  (🏠)
```

### Typography
- **Body:** Prompt (300, 400, 500, 600)
- **Brand:** Playfair Display (logo only)
- **Scale:** 16px base, 1.8 line-height for body

### Key Visual Elements
- Paper texture (3% opacity noise)
- Rotating watercolor auras (60-90s)
- Glassmorphism navigation
- Soft shadows (0.08-0.16 opacity)
- Rounded corners (20-32px)

---

## 💻 TECH STACK

```json
{
  "framework": "Next.js 16.1.0",
  "runtime": "React 19.2.3",
  "styling": "Tailwind CSS v4",
  "animation": "Framer Motion 12.23.26",
  "language": "TypeScript 5",
  "deployment": "Vercel",
  "domain": "soul.thipakjai.com"
}
```

**Data Strategy:** No database - ใช้ JSON files เพื่อความเร็ว

---

## 📝 COMMON TASKS

### 1. เพิ่ม Oracle Card ใหม่

**Location:** `src/data/oracle_data.json`

```json
{
  "id": "category_001",
  "category": "health|love|work|finance|family",
  "gradient_theme": "green-to-blue",
  "message_title": "ชื่อข้อความ (3-5 คำ)",
  "message_body": "[Act 1]\n\n[Act 2]\n\n[Act 3]",
  "product_mapping": {
    "cta_text": "รับพลังงานต่อที่บ้าน >",
    "target_url": "https://thipakjai.com/products/slug",
    "utm_campaign": "oracle_category"
  }
}
```

**Checklist:**
- [ ] ใช้ 3-Act Structure
- [ ] ความยาว 60-100 คำ
- [ ] มี product mapping ที่เกี่ยวข้อง
- [ ] Brand voice = Fah Sai

### 2. เพิ่ม Blog Post ใหม่

**Location:** `src/data/blog_posts.json`

```json
{
  "slug": "post-slug",
  "title": "หัวข้อบทความ (มี keyword)",
  "description": "คำอธิบาย 1-2 ประโยค",
  "content": "# Title\n\n## Act 1: The Mirror\n...",
  "category": "mental-health|self-care|relationships|career|life-advice|mindfulness",
  "publishDate": "2026-01-15",
  "author": "Fah Sai",
  "readingTime": 4,
  "tags": ["tag1", "tag2"],
  "featured": false,
  "relatedOracleCategory": "health"
}
```

**Checklist:**
- [ ] ใช้ 3-Act Structure
- [ ] 600-800 คำ (2-4 นาที)
- [ ] มี SEO keywords
- [ ] เชื่อมโยงไป oracle category (ถ้าได้)
- [ ] Markdown format

### 3. แก้ไข UI Component

**Before:**
1. อ่านไฟล์ component ที่เกี่ยวข้องก่อน
2. เช็ค design system ใน `BRAND_MASTER_PLAN.md`
3. ตรวจสอบว่า responsive (mobile-first)

**During:**
- ใช้ Tailwind classes
- ใช้ Framer Motion สำหรับ animation
- เช็คว่า accessible (ARIA labels, keyboard nav)

**After:**
- ทดสอบ mobile, tablet, desktop
- เช็ค console ไม่มี errors
- Verify animations smooth (60fps)

### 4. Update Analytics Tracking

**Add new event:**
```typescript
// In component
import { trackEvent } from '@/lib/analytics';

trackEvent('event_name', {
  property1: 'value',
  property2: 123
});
```

**UTM Structure:**
```
?utm_source=soul_spectrum
&utm_medium=oracle
&utm_campaign=oracle_{category}
&utm_content={card_id}
```

---

## 🔗 PRODUCT MAPPING

| Oracle Category | Primary Products | CTA Examples |
|----------------|-----------------|--------------|
| สุขภาพ (Health) | Burnout E-book, Self-Care Tracker | "รับคู่มือฟื้นตัวที่บ้าน >" |
| ความรัก (Love) | Self-Love E-book, Relationship Guide | "เรียนรู้รักตัวเองมากขึ้น >" |
| การงาน (Work) | Burnout E-book, Career Planner | "จัดการ Burnout อย่างมีประสิทธิภาพ >" |
| ชีวิต (Finance) | Financial Planner, Money E-book | "จัดการเงินให้เป็นระบบ >" |
| ใจตัวเอง (Self) | Self-Love E-book, Coloring Book | "ค้นพบตัวเองให้ลึกขึ้น >" |

**Mothership URL:**
```
https://thipakhai.com/products/{product-slug}
```

---

## ✅ CONTENT REVIEW CHECKLIST

ทุกครั้งที่สร้าง/แก้ content ให้เช็คตามนี้:

### Brand Voice
- [ ] เป็น Fah Sai (กัลยาณมิตร) ไหม?
- [ ] ใช้ "เธอ/เรา" (ไม่ใช่ "คุณ")
- [ ] Validate ก่อน advice
- [ ] ไม่มี toxic positivity

### Structure
- [ ] มี 3-Act Structure (Mirror → Light → Step)
- [ ] Act 1: Validate ความรู้สึก
- [ ] Act 2: Insight + Nature metaphor
- [ ] Act 3: Micro-action + Product CTA

### Writer Type
- [ ] Nuanced (คำมีน้ำหนัก)
- [ ] Deep but accessible
- [ ] มี nature metaphors
- [ ] เว้นวรรค เว้นใจ

### Technical
- [ ] ไม่มี typos
- [ ] Grammar ถูกต้อง
- [ ] Mobile-friendly (ย่อหน้าสั้น)
- [ ] มี keywords (สำหรับ blog)

### Product Integration
- [ ] Product mapping เหมาะสม
- [ ] CTA ไม่ pushy
- [ ] UTM tracking ครบ

---

## 🚨 COMMON MISTAKES TO AVOID

### Content
- ❌ ใช้ "สู้ๆ" หรือ "คิดบวก" (toxic positivity)
- ❌ ตัดสินความรู้สึก ("ไม่ต้องเศร้า")
- ❌ คำสั่ง ("ต้องทำ", "ควรทำ")
- ❌ ย่อหน้ายาวเกิน 4 บรรทัด
- ❌ ใช้ศัพท์วิชาการหนัก

### Technical
- ❌ ลืมเช็ค mobile responsiveness
- ❌ Animation เร็วหรือช้าเกินไป
- ❌ ใช้สีที่ไม่อยู่ใน design system
- ❌ Hard-code แทนการใช้ data files
- ❌ ลืมใส่ UTM tracking

### UX
- ❌ CTA มากเกินไป (ควร 1-2 ต่อหน้า)
- ❌ Pop-ups หรือ interruptions
- ❌ Auto-play audio/video
- ❌ ขาด loading states
- ❌ Error messages ไม่ชัดเจน

---

## 📊 CURRENT STATUS

### MVP: ✅ Launched

**Live Features:**
- ✅ Homepage with 4 category cards (2×2 mobile grid)
- ✅ Oracle reading flow (5 categories)
- ✅ 50 oracle cards across categories
- ✅ Blog system with 30 posts
- ✅ Category filtering
- ✅ GA4 + GTM analytics
- ✅ Mobile responsive
- ✅ Deployed on Vercel

**Recent Changes:**
- 2025-12-20: Updated mobile homepage to 2×2 grid (no scrolling)
- 2025-12-20: Created BRAND_MASTER_PLAN.md
- 2025-12-20: Created PRD.md
- 2025-12-20: Created AI_CONTEXT.md

**Next Priorities:**
1. Monitor analytics data
2. Add more oracle cards (target: 75 cards)
3. Expand blog content (target: 50 posts)
4. A/B test CTA copy
5. SEO optimization

---

## 🎯 COMMON AI PROMPTS

### สร้าง Oracle Card ใหม่
```
"เขียน oracle card message สำหรับหมวด [CATEGORY] เกี่ยวกับ [TOPIC]

Context: Gen Z ที่กำลังเจอ [PROBLEM]

ใช้ 3-Act Structure:
- Act 1: Validate ความรู้สึก (30 คำ)
- Act 2: Insight + nature metaphor (40 คำ)
- Act 3: Micro-action + bridge to [PRODUCT] (30 คำ)

Brand voice: Fah Sai (อบอุ่น, ไม่ตัดสิน, ใช้ 'เธอ/เรา')
Total: 60-100 คำ ภาษาไทย"
```

### เขียน Blog Post
```
"เขียน blog post เกี่ยวกับ [TOPIC] สำหรับ Soul Spectrum

Target: Gen Z (18-28) ที่กำลัง [PROBLEM]

Structure:
1. Hook (personal story)
2. Act 1 - Mirror: Validate (100-150 คำ)
3. Act 2 - Light: Psychology + metaphor (300-400 คำ)
4. Act 3 - Step: 3-5 actionable steps (200-300 คำ)
5. Closing + CTA to oracle category

Tone: Conversational, empathetic, realistic
Length: 600-800 คำ
Keywords: [5 KEYWORDS]"
```

### แก้ไข Component
```
"แก้ [COMPONENT_NAME] component:

Changes needed:
- [CHANGE 1]
- [CHANGE 2]

Requirements:
- Responsive (mobile-first)
- ใช้ Tailwind CSS v4
- ใช้ Framer Motion สำหรับ animations
- TypeScript types ครบ
- Accessible (ARIA labels)

Design system: ดูที่ BRAND_MASTER_PLAN.md
Current code: [PATH_TO_FILE]"
```

---

## 📞 HELPFUL COMMANDS

### อ่านไฟล์สำคัญ
```
Read src/app/page.tsx
Read src/data/oracle_data.json
Read BRAND_MASTER_PLAN.md
Read PRD.md
```

### เช็คโครงสร้าง
```
Glob "src/app/**/*.tsx"
Glob "src/components/**/*.tsx"
Glob "src/data/**/*.json"
```

### Search content
```
Grep "pattern" --type typescript
Grep "keyword" src/data/
```

---

## 🎓 KEY LEARNINGS

### Why No Database?
- ✅ Speed (no API calls)
- ✅ Simple deployment (static)
- ✅ No auth needed
- ✅ Version control friendly
- ❌ Trade-off: No personalization (Phase 2)

### Why Image Assets for Auras?
> "เพื่อให้ความรู้สึกมีน้ำหนักและขลังกว่าการใช้ gradient จาก code เพียวๆ"

### Why 3-Act Structure?
- Proven storytelling framework
- Act 1: Create connection (Mirror)
- Act 2: Provide value (Light)
- Act 3: Enable action (Step)
- Perfect length for micro-content (60-100 คำ)

### Why Satellite Strategy?
- Free oracle → Build trust
- Blog SEO → Organic traffic
- Low friction → High reach
- Product CTAs → Conversion to mothership
- Ecosystem > Single product

---

## 🔄 VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-12-20 | Initial creation |
| 1.0.1 | 2025-12-20 | Added mobile 2×2 grid |

---

## 📚 MUST-READ FILES

**Before any work, read these in order:**

1. **`AI_CONTEXT.md`** (this file) - Quick overview
2. **`BRAND_MASTER_PLAN.md`** - Design system + brand identity
3. **`PRD.md`** - Complete product spec
4. **Relevant code files** - Based on task

**For specific tasks:**
- Content writing → Read `PRD.md` sections 4-6 (Content Strategy)
- UI changes → Read `BRAND_MASTER_PLAN.md` section 2 (Design System)
- New features → Read `PRD.md` section 8 (Features)
- Analytics → Read `PRD.md` section 11 (Analytics)

---

## ✨ QUICK TIPS

1. **Always validate first** - Mirror before Light
2. **Keep it simple** - Micro-actions over big changes
3. **Natural CTAs** - Bridge, don't push
4. **Mobile-first** - Most users on phone
5. **Gentle animations** - 0.3-0.8s, ease-out
6. **Spacious layout** - Generous whitespace
7. **Nature metaphors** - เมฆ, ลม, ต้นไม้
8. **Trust the data** - Use JSON files as source of truth
9. **Stay on brand** - Fah Sai voice in everything
10. **Think ecosystem** - Satellite → Mothership flow

---

**Last Updated:** 2025-12-20
**Status:** MVP Launched ✅
**Next Review:** When starting new phase

---

*"วันนี้... ใจของเธอเป็นสีอะไร?"*

**สำหรับ AI: ถ้ามีคำถามเกี่ยวกับโปรเจกต์ ให้อ่าน PRD.md หรือ BRAND_MASTER_PLAN.md ก่อนตอบ**
