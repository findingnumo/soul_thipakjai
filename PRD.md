# 📔 Soul Spectrum - Product Requirements Document (PRD)

> **The Satellite Sanctuary: A Bridge to Heart's Haven**
>
> "วันนี้... ใจของเธอเป็นสีอะไร?" → "กลับบ้านที่ใจได้พักผ่อน"

---

## 📑 TABLE OF CONTENTS

1. [Product Overview](#-product-overview)
2. [Ecosystem Architecture](#-ecosystem-architecture)
3. [Brand Identity & Voice](#-brand-identity--voice)
4. [Content Strategy & 3-Act Structure](#-content-strategy--3-act-structure)
5. [Visual & Design System](#-visual--design-system)
6. [Technical Architecture](#-technical-architecture)
7. [User Journey & Conversion Funnel](#-user-journey--conversion-funnel)
8. [Features & Functionality](#-features--functionality)
9. [Writer Type & Review Rules](#-writer-type--review-rules)
10. [Product Portfolio Integration](#-product-portfolio-integration)
11. [Analytics & Success Metrics](#-analytics--success-metrics)
12. [Development Phases](#-development-phases)

---

## 🎯 PRODUCT OVERVIEW

### What is Soul Spectrum?

**Soul Spectrum (โซลสเปกตรัม)** is a **Satellite Sanctuary** that serves as a digital bridge between the chaotic Anxiety Economy of social media and the safe haven of **ที่พักใจ (thipakjai.com)**.

#### Product Type
**"Psychological Mutelu (มูเตลูเชิงจิตวิทยา)"**

ใช้การพยากรณ์เป็น**หน้ากาก** แต่เนื้อในคือการ:
- ✅ **Validate** ความรู้สึก (ไม่ใช่การทำนายจริง)
- ✅ ให้คำแนะนำเชิงจิตวิทยาแบบย่อยง่าย
- ✅ สร้าง Micro-moment of Peace ก่อนนำทางกลับ "บ้าน"

### Positioning

**"The Bridge to Home"** - สะพานเชื่อมระหว่าง:

```
Anxiety Economy          Soul Spectrum          Heart's Haven
(โลกโซเชียล)        →   (สะพาน)           →   (thipakjai.com)
ความวิตกกังวล            การฟื้นฟูชั่วคราว        พื้นที่ปลอดภัยจริง
Quick Fix                State Change           Deep Healing
Free Content             Discovery              Premium Products
```

### Target Audience

**Primary:** Gen Z & First Jobbers (18-28 ปี) ชาวไทย

**Psychographics:**
- กำลังเผชิญ **Anxiety Economy** (เศรษฐกิจแห่งความวิตกกังวล)
- แบกรับความเครียดรอบด้าน:
  - 💼 งาน (Burnout, ความไม่แน่นอน)
  - 💰 การเงิน (หนี้, ค่าครองชีพสูง)
  - 💕 ความสัมพันธ์ (ความเหงา, toxic relationships)
  - 👨‍👩‍👧 สังคม (ความคาดหวัง, การเปรียบเทียบ)

**Behavioral Traits:**
- เปิด Social Media เพื่อ "Escape" แต่กลับเจอ FOMO
- ต้องการคำตอบเร็วๆ แต่ลึกซึ้งพอ
- เชื่อใน "Magic" แบบมีเหตุผล (ไม่งมงาย แต่ open-minded)
- พร้อมซื้อของที่ช่วย "จัดการใจ"

### Mission

**"เปลี่ยนสภาวะทางอารมณ์ (State Change)"** จากความหนักอึ้งให้เบาลง

ผ่าน 3 องค์ประกอบ:

1. **Validation** - ยืนยันว่าความรู้สึกแย่ๆ เป็นเรื่องปกติ
   - "ไม่เก่งบ้างก็ได้"
   - "เหนื่อยแบบนี้ใครก็เหนื่อย"

2. **Sense of Control** - มอบเครื่องมือให้จัดการชีวิต
   - Micro-actions ที่ทำได้ทันที
   - เครื่องมือดิจิทัลที่ช่วยจัดระเบียบ

3. **Belonging** - สร้างความรู้สึกว่ามีเพื่อนที่เข้าใจ
   - ภาษาที่คุ้นเคย ไม่ห่างเหิน
   - Community ของคนที่ผ่านมาด้วยกัน

---

## 🏗️ ECOSYSTEM ARCHITECTURE

### The Two-Level Sanctuary System

```
┌─────────────────────────────────────────────────────────────┐
│                    ANXIETY ECONOMY                          │
│           (Social Media, News, Work Pressure)               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│              LEVEL 1: SOUL SPECTRUM (Satellite)             │
│           soul.thipakjai.com                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Free Oracle Reading + Blog                           │   │
│  │ - Quick Validation                                   │   │
│  │ - Psychological Insights                             │   │
│  │ - Category Exploration                               │   │
│  │ - CTA to Products                                    │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓ (Bridge CTAs)
┌─────────────────────────────────────────────────────────────┐
│              LEVEL 2: HEART'S HAVEN (Mothership)            │
│           thipakjai.com                                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Premium Digital Products                             │   │
│  │ - Healing E-books                                    │   │
│  │ - Digital Planners                                   │   │
│  │ - Interactive Oracle Decks                           │   │
│  │ - Scientific Wallpapers                              │   │
│  │ - Coloring Books                                     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Soul Spectrum's Role

**Soul Spectrum ≠ Main Product**
Soul Spectrum = **Discovery Layer** + **Trust Builder** + **Traffic Source**

| Function | Description | Outcome |
|----------|-------------|---------|
| **Awareness** | ดัก traffic จาก social media ด้วย oracle card virality | Reach |
| **Validation** | สร้างความรู้สีกว่า "ที่นี่เข้าใจฉัน" | Trust |
| **Discovery** | ให้ผู้ใช้ค้นพบปัญหาของตัวเอง (category mapping) | Self-awareness |
| **Bridge** | นำทางไปยังสินค้าที่ตรงกับปัญหา | Conversion |

### Heart's Haven (Main Ecosystem)

**Mission:** "พื้นที่ปลอดภัยในหน้าจอ (Safe Space on Screen)"

ที่พักใจไม่ใช่:
- ❌ คลินิก (Clinical)
- ❌ วัด (Religious)
- ❌ ไลฟ์โค้ช (Pushy Motivation)

แต่เป็น:
- ✅ **อาศรมดิจิทัล (Digital Sanctuary)**
- ✅ **เพื่อนร่วมทางผู้มีวุฒิภาวะ (Reasonable Fellow Traveler)**
- ✅ คนที่พร้อมนั่งข้างๆ ในวันที่ฝนตก โดยไม่ตัดสิน

**What We Sell:**
"เครื่องรางทางใจยุคดิจิทัล (Digital Emotional Amulets)"

ไม่ได้ขายแค่ไฟล์ PDF แต่ขาย:
- ความสบายใจ (Peace of Mind)
- พลังที่จะไปต่อ (Energy to Continue)
- Sense of Control (ความรู้สึกว่าจัดการชีวิตได้)

---

## 🎭 BRAND IDENTITY & VOICE

### Brand Names & Hierarchy

```
Heart's Haven (Mothership)
    ├── ชื่อไทย: ที่พักใจ
    ├── Domain: thipakjai.com
    └── Satellite: Soul Spectrum
              ├── ชื่อไทย: โซลสเปกตรัม
              └── Domain: soul.thipakjai.com
```

### Brand Voice: "Fah Sai (ฟ้าใส)"

**Archetype:** กัลยาณมิตร (Spiritual Friend) ที่อบอุ่น ไม่ตัดสิน

**Voice Characteristics:**

| DO ✅ | DON'T ❌ |
|-------|---------|
| ใช้สรรพนาม "เธอ/เรา" (intimate) | "คุณ" (formal) |
| "เราเข้าใจนะว่ามันหนัก" | "คิดมากไปเอง" |
| "ไม่เก่งบ้างก็ได้" | "สู้ๆ นะ" (toxic positivity) |
| "ค่อยๆ ดีขึ้น" | "ต้องแข็งแรง" |
| รับรู้ความเจ็บปวด | บังคับให้คิดบวก |
| Validate feelings | Dismiss emotions |
| Gentle suggestions | Commanding orders |

**Tone Variations by Context:**

| Context | Tone | Example |
|---------|------|---------|
| Oracle Card | Mystical + Caring | "ดวงดาวกำลังบอกว่าเธอทำดีมากแล้ว..." |
| Blog Post | Conversational + Expert | "ทำไมเราถึงรู้สึก Burnout? มาดูกัน..." |
| Product CTA | Empowering + Soft | "พร้อมรับพลังงานต่อที่บ้านหรือยัง?" |
| Footer/UI | Warm + Friendly | "Made with ❤️ for everyone who needs a moment to breathe" |

### Writer Type Alignment

ทุก content ต้องมีกลิ่นอายของ **Writer Type** ที่กำหนด:
- เน้นความละเอียดละไม (Nuanced)
- ลึกซึ้ง แต่ไม่หนักหนา (Deep but Accessible)
- มี Metaphor ธรรมชาติ (Nature metaphors)
- เว้นวรรค เว้นใจ (Spacious layout)

**Reference:** 07_Ebook_Writer_OS

---

## 📖 CONTENT STRATEGY & 3-ACT STRUCTURE

### The 3-Act Framework

ทุกชิ้น content (Oracle messages, Blog posts) ใช้โครงสร้างนี้:

#### **Act 1: The Mirror (กระจกสะท้อน)**
**Goal:** Validate ความรู้สึกที่กำลังเจอ

**Structure:**
```
สะท้อนสิ่งที่เขากำลังเจอ + Validate
```

**Example:**
> "เธอคงเหนื่อยกับงานที่ทำเท่าไหร่ก็ไม่จบสักทีใช่ไหม...
> รู้สึกเหมือนว่าทุกคนคาดหวังไว้ และเธอกำลังแบกน้ำหนักคนเดียว"

**Writing Tips:**
- ใช้ภาษาที่เฉพาะเจาะจง (Specific emotions)
- อย่ากลัวพูดถึงความเจ็บปวด
- ให้รู้สึกว่า "คนนี้เข้าใจฉันจริงๆ"

#### **Act 2: The Light (แสงสว่าง)**
**Goal:** ให้ Insight หรือมุมมองใหม่

**Structure:**
```
Reframe + Wisdom + Hope
```

**Example:**
> "แต่รู้ไหมว่าเมฆที่บังตาเธออยู่ตอนนี้ มันกำลังจะเคลื่อนผ่านไป...
> บางครั้ง ความเหนื่อยล้าคือสัญญาณว่าเรากำลังเติบโต
> ไม่ใช่ว่าเราไม่พอ"

**Writing Tips:**
- ใช้ Metaphor ธรรมชาติ (เมฆ, ฝน, ต้นไม้)
- Reframe ความคิดเชิงลบเป็นเชิงบวกแบบ realistic
- ไม่ใช้ Toxic Positivity

#### **Act 3: The Step (ก้าวเดินต่อ)**
**Goal:** ให้ Action ที่ทำได้จริง + นำทางไปสินค้า

**Structure:**
```
Micro-action + Product Bridge
```

**Example:**
> "วันนี้ลองวางโทรศัพท์ แล้วหาเครื่องดื่มอุ่นๆ ให้ตัวเองดูนะ
>
> [CTA] ถ้าพร้อมจะจัดการใจให้เป็นระบบมากขึ้น
> ไปรับพลังงานต่อที่บ้าน > (ลิงก์ไป Planner/E-book)"

**Writing Tips:**
- Action ต้องเล็ก ทำได้ภายใน 5 นาที
- CTA ต้อง soft, ไม่ pushy
- Link ไปสินค้าที่เกี่ยวข้องจริงๆ

### Content Types

#### 1. Oracle Card Messages

**Format:**
```json
{
  "message_title": "ฟังเสียงร่างกาย",
  "message_body": "Act 1: [Mirror]\n\nAct 2: [Light]\n\nAct 3: [Step]",
  "product_mapping": {
    "cta_text": "รับพลังงานต่อที่บ้าน >",
    "target_url": "https://thipakjai.com/products/healing-ebook"
  }
}
```

**Length:** 60-100 คำ (อ่านได้ใน 30-45 วินาที)

**Tone:** Mystical + Psychological

**Product Mapping:**
| Oracle Category | Related Products |
|----------------|------------------|
| สุขภาพ (Health) | Healing E-book, Meditation Audio |
| ความรัก (Love) | Relationship Guide, Self-Love Workbook |
| การงาน (Work) | Career Planner, Burnout Recovery Guide |
| ชีวิต (Finance) | Financial Healing Planner |
| ใจตัวเอง (Self) | Journaling Templates, Coloring Book |

#### 2. Blog Posts

**Categories (ตาม 09_Insight_Vault):**
- Mental Health (สุขภาพจิต)
- Self Care (ดูแลตัวเอง)
- Relationships (ความสัมพันธ์)
- Career (การทำงาน)
- Life Advice (คำแนะนำชีวิต)
- Mindfulness (สติและสมาธิ)

**SEO Strategy:**
ดัก keyword จาก pain points:
- "วิธีจัดการ Burnout"
- "ดวงความรัก Gen Z"
- "การเงินสำหรับมือใหม่"
- "ทำงานที่บ้านไม่เครียด"

**Structure:**
```markdown
# Title (Hook + Keyword)

## Act 1: The Mirror (100-150 คำ)
- เล่าสถานการณ์ที่คนส่วนใหญ่เจอ
- สร้างความเห็นอกเห็นใจ

## Act 2: The Light (300-400 คำ)
- อธิบายปัญหาด้วย psychology/science
- ให้มุมมองใหม่
- แทรก personal story หรือ case study

## Act 3: The Step (200-300 คำ)
- ขั้นตอนชัดเจน 3-5 ข้อ
- แต่ละข้อทำได้จริง

## Closing + Oracle CTA
- สรุปอ่อนๆ
- เชิญไปดูดวงหมวดที่เกี่ยวข้อง
- CTA ไปสินค้า

## Related Posts
- 2 posts ใน category เดียวกัน
```

**Length:** 600-800 คำ (2-4 นาที reading time)

---

## 🎨 VISUAL & DESIGN SYSTEM

### Theme: "The Floating Sanctuary (อาศรมลอยฟ้า)"

**Core Concept:**
> พื้นที่ที่ลอยอยู่เหนือความวุ่นวาย มีน้ำหนักแต่ไม่หนักอึ้ง
> เหมือนกระดาษที่ถูกลมพัดขึ้นไปบนท้องฟ้า

### Color Palette (Extended)

#### Base Colors
```css
/* Primary Background */
--cream: #FDFBF7;           /* Warm cream paper */
--white: #FFFFFF;
--subtle: #F8FAFC;
--muted: #F1F5F9;

/* Neutral Scale */
--neutral-50: #F8FAFC;
--neutral-100: #F1F5F9;
--neutral-200: #E2E8F0;
--neutral-300: #CBD5E1;
--neutral-400: #94A3B8;
--neutral-500: #64748B;
--neutral-600: #475569;
--neutral-700: #334155;
--neutral-800: #1E293B;
--neutral-900: #0F172A;

/* Text Colors */
--text-main: #2A2826;       /* Dark brown */
--text-secondary: #44403C;   /* Medium brown */
--text-light: #94A3B8;      /* Light gray */
```

#### Brand Colors
```css
/* Primary - Modern Indigo */
--indigo: #6366F1;
--indigo-light: #818CF8;
--indigo-dark: #4F46E5;

/* Secondary - Vibrant Pink */
--pink: #EC4899;
--pink-light: #F472B6;

/* Accent - Deep Teal */
--teal: #0D7377;
--teal-deep: #134E4A;

/* Supporting - Dusty Rose */
--rose: #F43F5E;
--rose-light: #FB7185;

/* Supporting - Gold */
--gold: #F59E0B;
--gold-light: #FBBF24;
```

#### Oracle Category Gradients
```css
/* สุขภาพ (Health) */
--health-gradient: linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%);
--health-icon: 🌿;

/* ความรัก (Love) */
--love-gradient: linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%);
--love-icon: 💕;

/* การงาน (Work) */
--work-gradient: linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%);
--work-icon: 💼;

/* ชีวิต/การเงิน (Finance) */
--finance-gradient: linear-gradient(135deg, #FFC3A0 0%, #FFAFBD 100%);
--finance-icon: ✨;

/* ใจตัวเอง/ครอบครัว (Family) */
--family-gradient: linear-gradient(135deg, #D299C2 0%, #FEF9D7 100%);
--family-icon: 🏠;
```

#### Holographic Colors (Card Backs)
```css
--holo-1: #FF9A9E;
--holo-2: #FECFEF;
--holo-3: #A1C4FD;
--holo-4: #D299C2;

/* Animated Background */
background: linear-gradient(45deg,
  var(--holo-1) 0%,
  var(--holo-2) 25%,
  var(--holo-3) 50%,
  var(--holo-4) 75%,
  var(--holo-1) 100%);
background-size: 400% 400%;
animation: holographic-shift 10s ease infinite;
```

### Typography System

#### Font Families
```css
/* Body Font - Thai-friendly */
--font-body: 'Prompt', sans-serif;
--font-weights: 300, 400, 500, 600;

/* Brand/Logo Font */
--font-brand: 'Playfair Display', serif;
--font-weights: 400, 500, 600, 700;
```

#### Type Scale
```css
/* Display */
--text-6xl: 3.75rem;    /* 60px - Hero headlines */
--text-5xl: 3rem;       /* 48px - Page titles */
--text-4xl: 2.25rem;    /* 36px - Section headers */

/* Headings */
--text-3xl: 1.875rem;   /* 30px - H2 */
--text-2xl: 1.5rem;     /* 24px - H3 */
--text-xl: 1.25rem;     /* 20px - H4 */
--text-lg: 1.125rem;    /* 18px - Large body */

/* Body */
--text-base: 1rem;      /* 16px - Default */
--text-sm: 0.875rem;    /* 14px - Small */
--text-xs: 0.75rem;     /* 12px - Tiny */
```

#### Line Heights
```css
--leading-tight: 1.2;   /* Headlines */
--leading-snug: 1.3;    /* Subheadings */
--leading-normal: 1.5;  /* UI text */
--leading-relaxed: 1.8; /* Body content */
--leading-loose: 2.0;   /* Spacious reading */
```

### Visual Elements

#### 1. Paper Texture (Noise)
```css
.paper-texture {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

**Usage:** ทุกหน้า background เพื่อให้ความรู้สึกกระดาษ

#### 2. Watercolor Aura Images
```
Location: /public/assets/auras/
- Health.png (490KB)
- Love.png (423KB)
- Work.png (634KB)
- Finance.png (633KB)
- Family.png (537KB)
```

**Effect:**
- Rotating 360° ช้าๆ (60-90 วินาที)
- Radial mask gradient (fade จากตรงกลาง)
- Opacity 95%
- Scale 130% เพื่อให้เลอะออก

**Why Image Assets over Code?**
> เพื่อให้ความรู้สึกมีน้ำหนักและขลังกว่าการใช้ gradient จาก code เพียวๆ

#### 3. Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

**Usage:**
- Navigation bar
- Floating buttons
- Overlay panels

#### 4. Shadows & Elevation
```css
/* Soft Shadow (Cards) */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.16);

/* Glow (Hover states) */
--glow-teal: 0 0 20px rgba(13, 115, 119, 0.3);
--glow-pink: 0 0 20px rgba(236, 72, 153, 0.3);
```

#### 5. Border Radius
```css
--radius-sm: 8px;     /* Small elements */
--radius-md: 12px;    /* Cards */
--radius-lg: 20px;    /* Large cards */
--radius-xl: 24px;    /* Hero sections */
--radius-2xl: 32px;   /* Oracle cards */
--radius-full: 9999px; /* Pills/buttons */
```

### Design Principles

1. **Minimalism**
   - เว้นพื้นที่ว่างมาก (generous whitespace)
   - เน้นเนื้อหาหลัก ลดสิ่งรบกวน
   - Max 3 สีในหนึ่งหน้า

2. **Gentleness**
   - สีพาสเทล ไม่ฉูดฉาด
   - มุมโค้งทุกอย่าง
   - Shadow นุ่มๆ ไม่หนักจนเกินไป

3. **Healing**
   - Breathing animations (ลมหายใจเข้าออก)
   - Slow rotation (ไม่ aggressive)
   - Soft transitions (0.3-0.8s)

4. **Paper-like**
   - Texture สัมผัสได้
   - สีครีมอบอุ่น (ไม่ใช่ขาวจ้า)
   - Typography ที่อ่านง่าย

5. **Magic**
   - Holographic shimmer
   - Aura glows
   - 3D card flips
   - แต่ไม่ Overuse จนดูเชย

### Animation Library

#### Entry Animations
```javascript
// Fade + Slide Up
{
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay: 0.2,
    ease: [0.21, 0.47, 0.32, 0.98] // Custom ease-out
  }
}

// Staggered Children
{
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}
```

#### Hover States
```javascript
// Lift + Scale
{
  whileHover: {
    scale: 1.05,
    y: -8,
    transition: { duration: 0.3 }
  },
  whileTap: { scale: 0.98 }
}

// Glow on Hover
{
  "&:hover": {
    boxShadow: "0 0 20px rgba(13, 115, 119, 0.3)"
  }
}
```

#### Continuous Animations
```css
/* Rotating Aura */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.aura {
  animation: rotate 90s linear infinite;
}

/* Breathing Glow */
@keyframes breathing {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}
.glow {
  animation: breathing 3s ease-in-out infinite;
}

/* Floating */
@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.float {
  animation: floating 4s ease-in-out infinite;
}

/* Holographic Shift */
@keyframes holographic-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

#### 3D Card Flip
```javascript
{
  style: {
    transformStyle: "preserve-3d",
    perspective: "1000px"
  },
  animate: {
    rotateY: isFlipped ? 180 : 0
  },
  transition: {
    duration: 0.8,
    ease: [0.34, 1.56, 0.64, 1] // Back ease
  }
}
```

---

## 🏗️ TECHNICAL ARCHITECTURE

### Tech Stack

```json
{
  "framework": "Next.js 16.1.0",
  "runtime": "React 19.2.3",
  "styling": "Tailwind CSS v4 (@tailwindcss/postcss)",
  "animation": "Framer Motion 12.23.26",
  "language": "TypeScript 5",
  "analytics": {
    "ga4": "Google Analytics 4",
    "gtm": "Google Tag Manager (GTM-TG4CT6P7)"
  },
  "deployment": "Vercel",
  "domain": "soul.thipakjai.com"
}
```

### Data Strategy: "No Database (Low Friction)"

**Philosophy:**
> ความเร็วสูงสุด + Zero maintenance + No login required

**Implementation:**
```
src/data/
  ├── oracle_data.json      # ~50 cards across 5 categories
  └── blog_posts.json       # 30 scheduled posts
```

**Why No Database?**
1. ✅ Fast initial load (no API calls)
2. ✅ Easy deployment (static export)
3. ✅ No authentication needed
4. ✅ Version control friendly (Git)
5. ✅ Offline-friendly (PWA potential)

**Trade-offs:**
- ❌ ไม่มี personalization
- ❌ ไม่บันทึกประวัติผู้ใช้
- ❌ Update ต้อง redeploy

**Solution:** ถ้าอนาคตต้องการ user accounts → Separate Phase 2

### Project Structure (Detailed)

```
Mutelu.Thipakjai/
├── public/
│   ├── assets/
│   │   └── auras/              # Watercolor category images
│   │       ├── Health.png
│   │       ├── Love.png
│   │       ├── Work.png
│   │       ├── Finance.png
│   │       └── Family.png
│   ├── favicon.ico
│   └── og-image.png            # Social share image
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout + GA + fonts
│   │   ├── page.tsx            # Homepage (4 soul cards)
│   │   ├── globals.css         # Tailwind + custom CSS
│   │   ├── sitemap.ts          # SEO sitemap
│   │   ├── robots.ts           # SEO robots.txt
│   │   │
│   │   ├── oracle/
│   │   │   └── page.tsx        # Oracle reading flow
│   │   │
│   │   └── blog/
│   │       ├── page.tsx        # Blog index with filters
│   │       └── [slug]/
│   │           └── page.tsx    # Blog post detail
│   │
│   ├── components/
│   │   ├── Header.tsx          # Glassmorphism nav
│   │   ├── AppLayout.tsx       # Layout wrapper + footer
│   │   ├── OracleCard.tsx      # 3D flippable card
│   │   ├── CategoryButton.tsx  # Vertical tarot card
│   │   ├── BlogCard.tsx        # Paper-style blog card
│   │   ├── LinkButton.tsx      # UTM-tracked CTA
│   │   └── GoogleAnalytics.tsx # GA4 integration
│   │
│   ├── data/
│   │   ├── oracle_data.json    # Oracle messages + product mapping
│   │   └── blog_posts.json     # Blog content + metadata
│   │
│   ├── types/
│   │   ├── oracle.ts           # TypeScript types for oracle
│   │   └── blog.ts             # TypeScript types for blog
│   │
│   ├── hooks/
│   │   └── useOracle.ts        # Oracle state management hook
│   │
│   ├── lib/
│   │   └── utils.ts            # Helper functions
│   │       ├── appendUTM()     # Add tracking params
│   │       ├── getRandomItem() # Random selection
│   │       └── buildMothershipURL() # Link to thipakjai.com
│   │
│   └── styles/
│       └── animations.css      # Custom keyframes
│
├── .env.local                  # Environment variables
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config (if needed)
├── tsconfig.json               # TypeScript config
├── package.json
├── BRAND_MASTER_PLAN.md        # Brand guidelines
└── PRD.md                      # This document
```

### Key Modules & Hooks

#### `useOracle.ts` - Oracle State Management
```typescript
type OracleState = 'idle' | 'selecting' | 'ritual' | 'revealing' | 'revealed';

export function useOracle() {
  const [state, setState] = useState<OracleState>('idle');
  const [selectedCategory, setSelectedCategory] = useState<OracleCategory | null>(null);
  const [selectedCard, setSelectedCard] = useState<OracleCard | null>(null);

  const selectCategory = (category: OracleCategory) => {
    setSelectedCategory(category);
    setState('ritual');
  };

  const drawCard = () => {
    setState('revealing');
    const cards = oracleData.filter(c => c.category === selectedCategory);
    const randomCard = getRandomItem(cards);
    setSelectedCard(randomCard);

    setTimeout(() => setState('revealed'), 800); // After flip animation
  };

  const reset = () => {
    setState('idle');
    setSelectedCategory(null);
    setSelectedCard(null);
  };

  return { state, selectedCategory, selectedCard, selectCategory, drawCard, reset };
}
```

#### `utils.ts` - Helper Functions
```typescript
// Add UTM parameters for tracking
export function appendUTM(url: string, source: string, campaign: string): string {
  const urlObj = new URL(url);
  urlObj.searchParams.set('utm_source', source);
  urlObj.searchParams.set('utm_medium', 'oracle');
  urlObj.searchParams.set('utm_campaign', campaign);
  return urlObj.toString();
}

// Build URL to mothership with tracking
export function buildMothershipURL(productSlug: string, category: string): string {
  const baseURL = 'https://thipakjai.com';
  const productURL = `${baseURL}/products/${productSlug}`;
  return appendUTM(productURL, 'soul_spectrum', `oracle_${category}`);
}

// Random item from array
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
```

### SEO Strategy

#### Sitemap
```typescript
// app/sitemap.ts
export default function sitemap() {
  const baseURL = 'https://soul.thipakjai.com';

  // Static pages
  const routes = ['', '/oracle', '/blog'].map(route => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));

  // Blog posts
  const posts = blogPosts.map(post => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.publishDate,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...routes, ...posts];
}
```

#### Meta Tags
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Soul Spectrum | ที่พักใจ - ค้นหาคำตอบทางใจ',
  description: 'ค้นหาคำตอบทางใจผ่านไพ่จิตวิทยา (Psychological Oracle) เพื่อฮีลใจและเข้าใจตัวเองมากขึ้น',
  keywords: 'oracle, ไพ่ทาโรต์, จิตวิทยา, ฮีลใจ, Gen Z, mental health, ที่พักใจ',
  openGraph: {
    title: 'Soul Spectrum - วันนี้ใจของเธอเป็นสีอะไร?',
    description: 'พื้นที่ปลอดภัยบนจอสำหรับคนที่ต้องการพักใจและหาทิศทาง',
    images: ['/og-image.png'],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soul Spectrum | ที่พักใจ',
    description: 'ค้นหาคำตอบทางใจผ่านไพ่จิตวิทยา',
    images: ['/og-image.png'],
  }
};
```

### Analytics Implementation

#### Google Analytics 4 Setup
```typescript
// components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
```

#### Event Tracking
```typescript
// Track oracle card draw
export function trackOracleDraw(category: string, cardId: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'oracle_draw', {
      category: category,
      card_id: cardId,
      timestamp: new Date().toISOString()
    });
  }
}

// Track CTA clicks
export function trackCTAClick(destination: string, source: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      link_url: destination,
      link_source: source
    });
  }
}
```

---

## 🚶 USER JOURNEY & CONVERSION FUNNEL

### The Complete Journey

```
┌─────────────────────────────────────────────────────────────┐
│                   STAGE 1: ARRIVE                           │
│                   (Discovery)                               │
├─────────────────────────────────────────────────────────────┤
│ Entry Points:                                               │
│ • Social Media (IG, TikTok, Twitter)                       │
│ • Google Search ("ดูดวงออนไลน์", "ฮีลใจ")                  │
│ • Word of Mouth (Share from friends)                       │
│                                                             │
│ Landing: Homepage                                           │
│ First Impression: "วันนี้... ใจของเธอเป็นสีอะไร?"         │
│ Emotion: Curiosity + Relief (พบพื้นที่ปลอดภัย)            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                   STAGE 2: RITUAL                           │
│                   (Engagement)                              │
├─────────────────────────────────────────────────────────────┤
│ Action: เลือกหมวด (Love, Work, Life, Self)                │
│ Micro-Interaction: Click on category card                  │
│                                                             │
│ Transition: Ritual/Meditation Screen                       │
│ Message: "หลับตา... หายใจเข้าลึกๆ... ตั้งคำถามในใจ"      │
│ Duration: 10-15 วินาที (พอให้รู้สึกพิเศษ)                  │
│                                                             │
│ Psychology: สร้าง "Sense of Ceremony" และ anticipation     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                   STAGE 3: REVEAL                           │
│                   (Validation)                              │
├─────────────────────────────────────────────────────────────┤
│ Action: แตะเพื่อสุ่มไพ่                                    │
│ Animation: 3D Card Flip (0.8s)                             │
│                                                             │
│ Content: Oracle Message (3-Act Structure)                  │
│ • Act 1: Mirror - "เธอคงเหนื่อยใช่ไหม..."                 │
│ • Act 2: Light - "แต่เมฆกำลังจะผ่านไป..."                 │
│ • Act 3: Step - "วันนี้ลองพักสักนิด..."                   │
│                                                             │
│ Emotion: Validated + Hopeful + Curious                     │
│ Psychology: "Barnum Effect" + Genuine empathy              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                   STAGE 4: BRIDGE                           │
│                   (Conversion)                              │
├─────────────────────────────────────────────────────────────┤
│ Primary CTA:                                                │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ "ไปรับพลังงานต่อที่บ้าน >"                          │    │
│ │ → Link to relevant product on thipakjai.com        │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                             │
│ Secondary Actions:                                          │
│ • "เปิดไพ่ใบใหม่" (Draw again)                            │
│ • "อ่านบทความ" (Related blog post)                        │
│                                                             │
│ UTM Tracking:                                               │
│ ?utm_source=soul_spectrum                                   │
│ &utm_medium=oracle                                          │
│ &utm_campaign=oracle_{category}                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓ (If clicked CTA)
┌─────────────────────────────────────────────────────────────┐
│               MOTHERSHIP: THIPAKJAI.COM                     │
│                   (Conversion)                              │
├─────────────────────────────────────────────────────────────┤
│ Landing: Product Page (Planner/E-book/etc)                 │
│                                                             │
│ Trust Signals:                                              │
│ • รู้จักแบรนด์จาก Soul Spectrum แล้ว                       │
│ • Message ตรงกับปัญหาที่กำลังเจอ                           │
│ • Pricing reasonable (99-299 บาท)                         │
│                                                             │
│ Conversion: Purchase digital product                       │
└─────────────────────────────────────────────────────────────┘
```

### Conversion Funnel Metrics

| Stage | Expected Behavior | Success Metric | Benchmark |
|-------|------------------|----------------|-----------|
| **Arrive** | Land on homepage | Page views | - |
| **Engage** | Select category | Category click rate | 60-70% |
| **Ritual** | Wait for ritual screen | Ritual completion | 80-90% |
| **Draw** | Tap to draw card | Draw rate | 90-95% |
| **Read** | Read full message | Time on card | 30-60s |
| **Bridge** | Click CTA to product | CTR to mothership | 5-10% |
| **Convert** | Purchase on thipakjai.com | Conversion rate | 2-5% |

### User Segments

#### 1. The Curious Explorer (40%)
**Behavior:**
- เข้ามาครั้งแรก จาก social media
- สุ่มไพ่ 1-2 ใบ แล้วออก
- ไม่ได้มีปัญหาหนักมาก แค่อยากรู้

**Strategy:**
- Focus on virality and shareability
- Make oracle messages quotable
- Encourage "draw again" behavior

#### 2. The Seeker (35%)
**Behavior:**
- มีปัญหาจริงๆ ที่กำลังหาคำตอบ
- สุ่มไพ่หลายใบ ในหมวดเดียวกัน
- อ่าน blog posts ประกอบ

**Strategy:**
- Strong validation in Act 1
- Clear actionable steps in Act 3
- Cross-link to relevant blog content

#### 3. The Converter (25%)
**Behavior:**
- พร้อมซื้อของถ้าตรงโจทย์
- ติดตาม brand จาก oracle
- กลับมาใช้บ่อย

**Strategy:**
- Clear product CTAs
- Show product value in oracle messages
- Retargeting via GA remarketing

---

## ⚙️ FEATURES & FUNCTIONALITY

### Core Features (MVP)

#### 1. Oracle Card Reading System

**User Flow:**
```
Homepage → Category Selection → Ritual → Draw → Revealed → Actions
```

**States:**
- **Idle:** Homepage with 4 category cards
- **Selecting:** Category button hover/active states
- **Ritual:** Meditation screen with breathing instructions
- **Revealing:** Card flip animation (0.8s)
- **Revealed:** Message display with CTAs

**Technical Implementation:**
```typescript
// useOracle hook manages state
const {
  state,              // Current oracle state
  selectedCategory,   // User's category choice
  selectedCard,       // Randomly selected card
  selectCategory,     // Function to choose category
  drawCard,           // Function to draw random card
  reset               // Function to start over
} = useOracle();
```

**Data Structure:**
```json
{
  "id": "health_001",
  "category": "health",
  "gradient_theme": "green-to-blue",
  "message_title": "ฟังเสียงร่างกาย",
  "message_body": "Act 1: [Mirror]\n\nAct 2: [Light]\n\nAct 3: [Step]",
  "product_mapping": {
    "cta_text": "รับพลังงานต่อที่บ้าน >",
    "target_url": "https://thipakjai.com/products/healing-ebook",
    "utm_campaign": "oracle_health"
  }
}
```

**Features:**
- ✅ 5 categories (Health, Love, Work, Finance, Family)
- ✅ ~10 unique messages per category (total 50 cards)
- ✅ Random selection (no repeats in session)
- ✅ 3D card flip animation
- ✅ Holographic card back
- ✅ Product mapping for each card
- ✅ UTM tracking on CTA links

#### 2. Blog / Reading Room

**User Flow:**
```
Blog Index → Filter by Category → Select Post → Read → Related Content
```

**Features:**
- ✅ Category filtering (6 categories)
- ✅ Scheduled post system (publishDate filter)
- ✅ 2-column responsive grid (1 on mobile)
- ✅ Reading time estimation
- ✅ Tag system
- ✅ Related posts algorithm (same category)
- ✅ Oracle category cross-linking
- ✅ Clean reading layout (720px max-width)

**Data Structure:**
```json
{
  "slug": "burnout-recovery-guide",
  "title": "คู่มือฟื้นตัวจาก Burnout",
  "description": "เมื่อเหนื่อยจนไม่อยากทำอะไรเลย...",
  "content": "# Markdown content...",
  "category": "mental-health",
  "publishDate": "2026-01-15",
  "author": "Fah Sai",
  "readingTime": 4,
  "tags": ["burnout", "mental health", "recovery"],
  "featured": true,
  "relatedOracleCategory": "work"
}
```

**SEO Optimization:**
- ✅ Keyword-rich titles
- ✅ Meta descriptions
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Internal linking (blog ↔ oracle)

#### 3. Navigation & Layout

**Header Component:**
- Glassmorphism effect (frosted glass)
- Brand logo (Playfair Display)
- Navigation pills: "ทำนาย" (Oracle), "อ่านเล่น" (Blog)
- Active state highlighting
- Fixed position (80px height)
- Responsive padding

**Footer:**
```
© 2025 Soul Spectrum · Made with ❤️ · ที่พักใจ (thipakjai.com)
```

**AppLayout:**
- Full-screen mode toggle (for oracle)
- Optional footer (hidden on oracle page)
- Min-height screen layout
- Background noise texture

#### 4. Analytics & Tracking

**Google Analytics 4:**
- Page views
- User engagement time
- Bounce rate
- User flow (homepage → oracle → blog → exit)

**Google Tag Manager:**
- Tag ID: GTM-TG4CT6P7
- Custom events:
  - `oracle_category_select`
  - `oracle_card_draw`
  - `cta_click_mothership`
  - `blog_post_read`

**UTM Parameters:**
```
?utm_source=soul_spectrum
&utm_medium=oracle
&utm_campaign=oracle_{category}
&utm_content={card_id}
```

### Future Features (Phase 2)

#### User Accounts
- [ ] Save favorite cards
- [ ] Reading history
- [ ] Personalized recommendations
- [ ] Email notifications (daily card)

#### Community
- [ ] Comments on blog posts
- [ ] User stories submission
- [ ] Share card results on social media
- [ ] Testimonials collection

#### Content Expansion
- [ ] Audio-guided meditations
- [ ] Video content
- [ ] Podcast integration
- [ ] Expert collaborations (therapists)

#### Gamification (Light)
- [ ] Reading streaks (ดูดวงต่อเนื่อง 7 วัน)
- [ ] Card collection (unlock all 50 cards)
- [ ] Badges for engagement
- ⚠️ **Caveat:** ต้องไม่ทำให้รู้สึก pushy หรือ addictive

---

## 📝 WRITER TYPE & REVIEW RULES

### Review Process for All Content

ทุกครั้งที่มีการสร้างหรือรีวิว content ใหม่ (Oracle messages, Blog posts, Product descriptions) ให้ใช้รูปแบบนี้:

#### Review Template
```markdown
## รีวิว
[สรุปภาพรวมความรู้สึกหลังอ่าน 2-3 ประโยค]

## คำโปรย (Hook)
[เขียนประโยคแรกให้สะดุดใจ เชิญชวนให้อ่านต่อ]

## Tags
[ไทย], [อังกฤษ], [อีกหนึ่ง] (คั่นด้วย comma, 3-5 tags)

## Keywords
[คำค้นหาไทย], [keyword อังกฤษ], [long-tail keyword] (5 คำ)

## Score: [X/10]
[ให้คะแนนความเหมาะสมกับ brand voice]

## Suggestions
- [ข้อแนะนำปรับปรุง ถ้ามี]
```

### Writer Type Guidelines

อ้างอิง: **07_Ebook_Writer_OS**

ทุก content ต้องมีลักษณะของ Writer Type ที่กำหนด:

#### 1. Nuanced (ละเอียดละไม)
- ✅ ใช้คำที่มีน้ำหนัก (เช่น "อ่อนล้า" มากกว่า "เหนื่อย")
- ✅ แยกแยะความรู้สึกได้ละเอียด (sadness vs grief vs melancholy)
- ❌ ไม่ใช้คำกว้างๆ อย่าง "ไม่ดี" "แย่"

#### 2. Deep but Accessible (ลึกซึ้งแต่เข้าถึงได้)
- ✅ มี insights ที่ไม่ผิวเผิน
- ✅ แต่อธิบายด้วยภาษาง่ายๆ
- ✅ ใช้ analogies จากชีวิตประจำวัน
- ❌ ไม่ใช้ศัพท์วิชาการหนักจนอ่านไม่รู้เรื่อง

#### 3. Nature Metaphors (เปรียบเทียบธรรมชาติ)
- ✅ ใช้ภาพจากธรรมชาติ: น้ำ, ลม, ต้นไม้, ฤดูกาล
- ✅ เช่น "ความเศร้าเหมือนหมอก มันจะจางไป"
- ✅ เช่น "รากของเธอแข็งแรงกว่าที่คิด"

#### 4. Spacious Layout (เว้นวรรค เว้นใจ)
- ✅ ย่อหน้าสั้นๆ (3-4 บรรทัด)
- ✅ เว้นบรรทัดว่างระหว่างส่วน
- ✅ ใช้ bullet points แทนย่อหน้ายาว
- ✅ ให้ "พื้นที่หายใจ" ในการอ่าน

### Content Checklist

ก่อน publish ทุกชิ้น ต้องผ่านเกณฑ์นี้:

- [ ] **Brand Voice:** เป็น Fah Sai (กัลยาณมิตร) ไหม?
- [ ] **3-Act Structure:** มี Mirror → Light → Step ครบไหม?
- [ ] **Validation:** ทำให้รู้สึกว่า "ที่นี่เข้าใจฉัน" ไหม?
- [ ] **Actionable:** มี action ที่ทำได้จริงไหม?
- [ ] **Product Fit:** เชื่อมโยงไปสินค้าได้เป็นธรรมชาติไหม?
- [ ] **SEO:** มี keyword ที่เกี่ยวข้องไหม?
- [ ] **Proofread:** ไม่มี typo หรือ grammar error
- [ ] **Mobile:** อ่านบนมือถือแล้วสบายตาไหม?

---

## 🛍️ PRODUCT PORTFOLIO INTEGRATION

อ้างอิง: **02_Product_Portfolio**

### Product Categories (ที่พักใจ Mothership)

#### 📖 ปัญญา (Wisdom) - Healing E-books

**Products:**
1. **"ล้มแล้วไม่ต้องรีบลุก"**
   - Topic: Burnout recovery
   - Oracle mapping: Work, Health
   - Price: 149 บาท

2. **"รักตัวเองสำหรับมือใหม่"**
   - Topic: Self-love foundation
   - Oracle mapping: Self, Love
   - Price: 149 บาท

3. **"จัดการความวิตกกังวล"**
   - Topic: Anxiety management
   - Oracle mapping: Health, Self
   - Price: 149 บาท

**Bridge Strategy:**
```
Oracle Card (Health/Work)
  → Message about burnout
    → CTA: "รับคู่มือฟื้นตัวจาก Burnout >"
      → E-book landing page
```

#### 📝 เครื่องมือ (Tools) - Digital Planners

**Products:**
1. **Financial Healing Planner**
   - Topic: Money mindfulness
   - Oracle mapping: Finance, Life
   - Price: 199 บาท

2. **Weekly Intention Planner**
   - Topic: Life organization
   - Oracle mapping: All categories
   - Price: 149 บาท

3. **Self-Care Tracker**
   - Topic: Habit building
   - Oracle mapping: Health, Self
   - Price: 129 บาท

**Bridge Strategy:**
```
Oracle Card (Finance)
  → Message about financial anxiety
    → CTA: "จัดการเงินให้เป็นระบบ >"
      → Planner landing page
```

#### 🔮 ความหวัง (Hope) - Interactive Oracle + Wallpapers

**Products:**
1. **Full Oracle Deck (Web App)**
   - Topic: Daily guidance
   - Price: 299 บาท (one-time)

2. **Scientific Wallpaper Collection**
   - Topic: Daily affirmations
   - Oracle mapping: All categories
   - Price: 99 บาท

**Bridge Strategy:**
```
Oracle Card (Any)
  → Enjoyed free version
    → CTA: "ปลดล็อกไพ่ทุกใบ + บันทึกประวัติ >"
      → Premium oracle deck
```

#### 🎨 การพักผ่อน (Relaxation) - Coloring Books

**Products:**
1. **Mindful Coloring Book (Digital)**
   - Topic: Meditation through art
   - Oracle mapping: Self, Health
   - Price: 129 บาท

**Bridge Strategy:**
```
Oracle Card (Self)
  → Message about needing to slow down
    → CTA: "พักใจด้วยการระบายสี >"
      → Coloring book
```

### Product Mapping Matrix

| Oracle Category | Primary Products | Secondary Products |
|----------------|-----------------|-------------------|
| **สุขภาพ (Health)** | Burnout E-book, Self-Care Tracker | Meditation Audio, Coloring Book |
| **ความรัก (Love)** | Self-Love E-book, Relationship Guide | Journaling Templates |
| **การงาน (Work)** | Burnout E-book, Career Planner | Weekly Planner |
| **ชีวิต (Finance)** | Financial Planner, Money E-book | Goal Tracker |
| **ใจตัวเอง (Self)** | Self-Love E-book, Coloring Book | Meditation Audio, Wallpapers |

### CTA Copy Examples

```javascript
const ctaCopyByCategory = {
  health: [
    "รับคู่มือฟื้นตัวที่บ้าน >",
    "ดูแลตัวเองให้เป็นระบบ >",
    "พักผ่อนอย่างมีประสิทธิภาพ >"
  ],
  love: [
    "เรียนรู้รักตัวเองมากขึ้น >",
    "สร้างความสัมพันธ์ที่ดี >",
    "ฮีลใจจากความรักที่ผ่านมา >"
  ],
  work: [
    "จัดการ Burnout อย่างมีประสิทธิภาพ >",
    "วางแผนอาชีพที่เหมาะกับเธอ >",
    "หาพลังใหม่ในการทำงาน >"
  ],
  finance: [
    "จัดการเงินให้เป็นระบบ >",
    "ลดความวิตกเรื่องการเงิน >",
    "สร้างแผนการเงินที่ไม่เครียด >"
  ],
  self: [
    "ค้นพบตัวเองให้ลึกขึ้น >",
    "สร้างพื้นที่ปลอดภัยภายใน >",
    "ฟื้นฟูพลังงานภายใจ >"
  ]
};
```

---

## 📊 ANALYTICS & SUCCESS METRICS

### Key Performance Indicators (KPIs)

#### Traffic Metrics
| Metric | Benchmark | Tool |
|--------|-----------|------|
| Monthly Page Views | 10,000+ | GA4 |
| Unique Visitors | 5,000+ | GA4 |
| Avg Session Duration | 2-3 min | GA4 |
| Bounce Rate | < 60% | GA4 |
| Pages per Session | 2-3 | GA4 |

#### Engagement Metrics
| Metric | Benchmark | Tool |
|--------|-----------|------|
| Oracle Category Click Rate | 60-70% | GA4 Events |
| Oracle Card Draw Rate | 90%+ | GA4 Events |
| Blog Post Read Rate | 40-50% | GA4 Events |
| Avg Time on Oracle Card | 30-60s | GA4 |
| Blog Reading Time | 70% of estimated | GA4 |

#### Conversion Metrics
| Metric | Benchmark | Tool |
|--------|-----------|------|
| CTA Click-Through Rate | 5-10% | GA4 Events + UTM |
| Oracle → Mothership Rate | 8-12% | UTM tracking |
| Mothership Conversion | 2-5% | Mothership analytics |
| Cost per Acquisition | < 50 บาท | Ads + sales data |

### Tracking Implementation

#### GA4 Events
```javascript
// Oracle category selected
gtag('event', 'oracle_category_select', {
  category: 'love',
  timestamp: '2025-12-20T10:30:00'
});

// Card drawn
gtag('event', 'oracle_card_draw', {
  category: 'love',
  card_id: 'love_003'
});

// CTA clicked
gtag('event', 'cta_click_mothership', {
  destination: 'https://thipakjai.com/products/self-love-ebook',
  source: 'oracle_love',
  card_id: 'love_003'
});

// Blog post read
gtag('event', 'blog_post_read', {
  post_slug: 'burnout-recovery-guide',
  category: 'mental-health',
  reading_time: 4
});
```

#### UTM Parameter Structure
```
https://thipakjai.com/products/{product-slug}
?utm_source=soul_spectrum
&utm_medium=oracle
&utm_campaign=oracle_{category}
&utm_content={card_id}
```

### A/B Testing Plan (Future)

| Test | Variant A | Variant B | Metric |
|------|-----------|-----------|--------|
| Oracle CTA Copy | "รับพลังงานต่อที่บ้าน >" | "ดูสินค้าที่เหมาะกับเธอ >" | CTR |
| Card Message Length | 60 คำ | 100 คำ | Read completion |
| Ritual Duration | 10 วินาที | 20 วินาที | Draw rate |
| Blog CTA Placement | End of post | Middle + End | Click rate |

---

## 🚀 DEVELOPMENT PHASES

### Phase 1: MVP Launch (4-6 weeks)

**Week 1-2: Foundation**
- [x] Next.js project setup with Tailwind v4
- [x] Design system implementation (colors, typography, components)
- [x] Basic routing structure (home, oracle, blog)
- [x] Data structure for oracle + blog (JSON files)

**Week 3-4: Core Features**
- [x] Homepage with 4 category cards
- [x] Oracle flow (category → ritual → draw → reveal)
- [x] OracleCard component with 3D flip
- [x] Blog index with filtering
- [x] Blog post detail page

**Week 5-6: Polish & Launch**
- [x] Analytics integration (GA4 + GTM)
- [x] SEO optimization (sitemap, meta tags)
- [x] Mobile responsiveness
- [x] Performance optimization
- [x] Deployment to Vercel
- [x] Domain setup (soul.thipakjai.com)

**Content Requirements:**
- [x] 50 oracle card messages (10 per category)
- [x] 30 blog posts (5 per category)
- [x] 5 aura images (watercolor category visuals)

**Deliverables:**
- ✅ Fully functional website
- ✅ 50 oracle cards live
- ✅ 30 blog posts published
- ✅ Analytics tracking active

### Phase 2: Optimization & Growth (2-3 months)

**Month 1: Data Collection**
- [ ] Monitor GA4 metrics
- [ ] Identify drop-off points
- [ ] Analyze most popular categories
- [ ] Track conversion rates

**Month 2: Iteration**
- [ ] A/B test CTA copy
- [ ] Optimize card message lengths
- [ ] Add more oracle cards (75 total)
- [ ] Expand blog content (50 posts)
- [ ] Improve SEO rankings

**Month 3: Features**
- [ ] Add "Save favorite card" (local storage)
- [ ] Implement social share buttons
- [ ] Add newsletter signup
- [ ] Create weekly digest email

### Phase 3: Community & Engagement (3-6 months)

**Features:**
- [ ] User accounts (optional login)
- [ ] Reading history
- [ ] Comments on blog posts
- [ ] User testimonials collection
- [ ] Community stories submission

**Content:**
- [ ] Audio-guided meditations
- [ ] Video content (breathing exercises)
- [ ] Podcast episodes
- [ ] Expert interviews

### Phase 4: Advanced Personalization (6-12 months)

**Features:**
- [ ] AI-powered card recommendations
- [ ] Mood tracking over time
- [ ] Personalized content feeds
- [ ] Progress milestones
- [ ] Custom oracle decks (user-created)

**Monetization:**
- [ ] Premium subscription tier
- [ ] Exclusive content for members
- [ ] One-on-one consultation bookings
- [ ] Affiliate partnerships (books, courses)

---

## 📌 PROMPTS FOR AI ASSISTANCE

### Visual Asset Generation

#### Oracle Category Images (Watercolor Auras)
```
"Ethereal watercolor aura representing [CATEGORY]. Soft, flowing gradients in [COLOR PALETTE]. Glowing energy field with organic shapes. Dreamy, mystical, and healing aesthetic. Transparent background. High resolution 1000x1500px. Gentle, pastel tones. No harsh edges."

Examples:
- Health: Green to blue gradient, nature energy
- Love: Pink to rose gradient, heart energy
- Work: Blue gradient, creative energy
- Finance: Orange to pink gradient, abundance energy
- Family: Purple to cream gradient, rooted energy
```

#### OG Image (Social Share)
```
"Hero image for Soul Spectrum website. A glowing oracle card floating in a cream-colored paper texture background. Soft shadows and warm lighting. Text overlay: 'วันนี้... ใจของเธอเป็นสีอะไร?' in Playfair Display font. Minimalist, premium, and calming aesthetic. 1200x630px for social media sharing."
```

#### Blog Post Headers
```
"Abstract header image for a blog post about [TOPIC]. Soft watercolor style, warm cream background, subtle texture. Peaceful and contemplative mood. 1200x400px. Colors: [CATEGORY GRADIENT]."
```

### Code Generation Prompts

#### Phase 1: Base Setup
```
"Setup Next.js 16 with App Router, Tailwind CSS v4, and Framer Motion. Create a layout with a warm cream background (#FDFBF7) and a custom noise texture overlay at 3% opacity."
```

#### Phase 2: Oracle Card Component
```
"Build a reusable OracleCard component in TypeScript that:
1. Displays a 3D flippable card (2:3 aspect ratio)
2. Card back: holographic gradient with shimmer animation
3. Card front: white card with message title and body
4. Flip animation on click (0.8s duration)
5. Accept props: isFlipped, message, onFlip
6. Use Framer Motion for animations"
```

#### Phase 3: Oracle Flow Hook
```
"Create a useOracle custom hook that manages oracle reading state:
- States: idle, selecting, ritual, revealing, revealed
- Functions: selectCategory, drawCard, reset
- Random card selection from JSON data filtered by category
- TypeScript types for OracleCategory and OracleCard"
```

#### Phase 4: Blog System
```
"Implement a blog system with:
1. Blog index page with category filters (pill buttons)
2. 2-column responsive grid (1 column on mobile)
3. Filter posts by publishDate (only show past dates)
4. BlogCard component with hover effects
5. Blog post detail page with markdown rendering
6. Related posts section (same category, max 2)"
```

### Content Writing Prompts

#### Oracle Card Message
```
"Write an oracle card message for the [CATEGORY] category using 3-Act Structure:

Context: Thai Gen Z reader dealing with [SPECIFIC PROBLEM]

Act 1 (The Mirror): Validate their current struggle (30 คำ)
Act 2 (The Light): Provide psychological insight with nature metaphor (40 คำ)
Act 3 (The Step): Suggest one micro-action + bridge to product (30 คำ)

Tone: Fah Sai (กัลยาณมิตร) - caring, non-judgmental, gentle
Language: Thai, conversational, Gen Z appropriate
Total: 60-100 คำ"
```

#### Blog Post
```
"Write a 600-800 word blog post about [TOPIC] for Soul Spectrum:

Target: Thai Gen Z (18-28) dealing with [PROBLEM]

Structure:
1. Hook paragraph (personal anecdote)
2. Act 1 - The Mirror: Validate their experience (100-150 คำ)
3. Act 2 - The Light: Explain with psychology + metaphor (300-400 คำ)
4. Act 3 - The Step: 3-5 actionable steps (200-300 คำ)
5. Closing: Soft CTA to related oracle category

Tone: Conversational, empathetic, realistic (not toxic positivity)
Language: Thai with some English terms Gen Z uses
Keywords: [5 KEYWORDS]"
```

---

## ✅ LAUNCH CHECKLIST

### Pre-Launch

#### Technical
- [x] All pages mobile responsive
- [x] All links working (internal + external)
- [x] All images optimized (< 500KB)
- [x] Favicon and OG image set
- [x] Analytics tracking verified
- [x] Performance score > 90 (Lighthouse)
- [x] No console errors
- [x] SSL certificate active

#### Content
- [x] 50 oracle cards proofread
- [x] 30 blog posts proofread
- [x] All CTAs linking correctly to mothership
- [x] UTM parameters working
- [x] Meta descriptions for all pages
- [x] Alt text for all images

#### Legal & Compliance
- [ ] Privacy policy page
- [ ] Terms of service
- [ ] Cookie consent banner (if needed)
- [ ] Disclaimer about oracle being for entertainment

### Post-Launch (Week 1)

- [ ] Monitor GA4 for errors
- [ ] Check bounce rate on key pages
- [ ] Verify UTM tracking to mothership
- [ ] Fix any user-reported bugs
- [ ] Share on social media
- [ ] Email existing thipakjai.com subscribers

### Week 2-4

- [ ] Analyze first conversion data
- [ ] Optimize low-performing pages
- [ ] Add more oracle cards if needed
- [ ] Start SEO content strategy
- [ ] Plan first A/B test

---

## 📞 SUPPORT & MAINTENANCE

### Content Updates

**Oracle Cards:**
- Add new cards monthly (5-10 new cards)
- Rotate seasonal messages (if applicable)
- Update product mappings as new products launch

**Blog Posts:**
- Publish 2-4 new posts per month
- Update old posts with new links
- Refresh evergreen content quarterly

### Technical Maintenance

**Weekly:**
- Check analytics for anomalies
- Monitor site uptime
- Review error logs

**Monthly:**
- Update dependencies (Next.js, packages)
- Review and optimize images
- Check broken links
- Performance audit

**Quarterly:**
- Major feature releases
- Design system updates
- Content audit and refresh

---

## 🎓 APPENDIX

### Glossary

| Term | Definition |
|------|------------|
| **Mothership** | Main website (thipakjai.com) |
| **Satellite** | Soul Spectrum (soul.thipakjai.com) |
| **Psychological Mutelu** | Fortune telling as mask for psychological validation |
| **3-Act Structure** | Mirror → Light → Step content framework |
| **Fah Sai** | Brand voice persona (กัลยาณมิตร) |
| **Anxiety Economy** | Economic context of Gen Z stress |
| **Writer Type** | Content style guidelines (nuanced, deep, spacious) |

### References

- **00_Master_Blueprint** - Overall brand strategy
- **01_Brand_Foundation** - Core brand identity
- **02_Product_Portfolio** - Product catalog and pricing
- **03_Website_Technical** - Technical specifications
- **05_Lead_Generation_CRM** - Customer journey mapping
- **07_Ebook_Writer_OS** - Writer type and style guide
- **09_Insight_Vault** - Content topics and keywords
- **Soul Spectrum Draft** - Initial design concepts

### Contact & Collaboration

**For Questions:**
- Technical: [Dev team contact]
- Content: [Content team contact]
- Design: [Design team contact]

**Brand Assets:**
- Figma: [Link to design files]
- Drive: [Link to brand assets folder]

---

**Document Version:** 1.0
**Last Updated:** December 20, 2025
**Status:** MVP Launched ✅

---

*"วันนี้... ใจของเธอเป็นสีอะไร?"*
*Made with ❤️ at Heart's Haven (ที่พักใจ)*
