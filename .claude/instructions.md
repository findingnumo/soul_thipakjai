# Claude Code Instructions for Soul Spectrum

## Auto-load Context

**Before starting any task, always:**
1. Read `AI_CONTEXT.md` for project overview
2. Check relevant documentation:
   - UI/Design changes → `BRAND_MASTER_PLAN.md`
   - Features/Content → `PRD.md`

## Project Type
Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion

## Key Principles

### Brand Voice: "Fah Sai (ฟ้าใส)"
- ใช้ "เธอ/เรา" (NOT "คุณ")
- Validate before advice
- NO toxic positivity ("สู้ๆ", "คิดบวก")

### Content Structure: 3-Act Framework
1. **Mirror** - Validate feelings
2. **Light** - Insight + metaphor
3. **Step** - Action + product bridge

### Code Style
- Mobile-first responsive
- Tailwind utility classes
- Framer Motion for animations
- TypeScript strict mode
- No database (use JSON files)

## Common Files

**Data:**
- `src/data/oracle_data.json` - Oracle cards
- `src/data/blog_posts.json` - Blog posts

**Components:**
- `src/components/OracleCard.tsx` - 3D flip card
- `src/components/BlogCard.tsx` - Blog card
- `src/components/Header.tsx` - Navigation

**Pages:**
- `src/app/page.tsx` - Homepage
- `src/app/oracle/page.tsx` - Oracle flow
- `src/app/blog/page.tsx` - Blog index

## Quick Commands

Read context: `Read AI_CONTEXT.md`
Check structure: `Glob "src/**/*.tsx"`
Search code: `Grep "pattern" src/`

---

**For detailed context, see `AI_CONTEXT.md`**
