// Blog post types
export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
    category: BlogCategory;
    publishDate: string;
    author: string;
    readingTime: number;
    tags: string[];
    featured?: boolean;
    relatedOracleCategory?: 'health' | 'love' | 'work' | 'finance' | 'family';
}

export type BlogCategory =
    | 'mental-health'
    | 'self-care'
    | 'relationships'
    | 'career'
    | 'life-advice'
    | 'mindfulness';

export interface BlogCategoryInfo {
    id: BlogCategory;
    name_th: string;
    name_en: string;
    description: string;
    color: string;
}

export const BLOG_CATEGORIES: BlogCategoryInfo[] = [
    {
        id: 'mental-health',
        name_th: 'สุขภาพจิต',
        name_en: 'Mental Health',
        description: 'บทความเกี่ยวกับการดูแลสุขภาพจิต ความเครียด และการฟื้นฟู',
        color: 'text-emerald-600'
    },
    {
        id: 'self-care',
        name_th: 'ดูแลตัวเอง',
        name_en: 'Self Care',
        description: 'เคล็ดลับในการดูแลตัวเองทั้งกายและใจ',
        color: 'text-pink-500'
    },
    {
        id: 'relationships',
        name_th: 'ความสัมพันธ์',
        name_en: 'Relationships',
        description: 'บทความเกี่ยวกับความรัก ครอบครัว และมิตรภาพ',
        color: 'text-rose-500'
    },
    {
        id: 'career',
        name_th: 'การทำงาน',
        name_en: 'Career',
        description: 'เคล็ดลับสำหรับชีวิตการทำงานและความสำเร็จ',
        color: 'text-blue-600'
    },
    {
        id: 'life-advice',
        name_th: 'คำแนะนำชีวิต',
        name_en: 'Life Advice',
        description: 'บทความให้กำลังใจและคำแนะนำในการใช้ชีวิต',
        color: 'text-purple-600'
    },
    {
        id: 'mindfulness',
        name_th: 'สติและสมาธิ',
        name_en: 'Mindfulness',
        description: 'เทคนิคการฝึกสติและการมีสมาธิ',
        color: 'text-teal-600'
    }
];
