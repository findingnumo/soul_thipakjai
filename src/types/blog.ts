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
    relatedOracleCategory?: 'love' | 'work' | 'life' | 'self';
}

export type BlogCategory =
    | 'love-relations'
    | 'work-growth'
    | 'life-balance'
    | 'self-care';

export interface BlogCategoryInfo {
    id: BlogCategory;
    name_th: string;
    name_en: string;
    description: string;
    color: string;
    icon: string;
}

export const BLOG_CATEGORIES: BlogCategoryInfo[] = [
    {
        id: 'love-relations',
        name_th: 'เรื่องหัวใจและความสัมพันธ์',
        name_en: 'Love & Relations',
        description: 'ความรัก ครอบครัว มิตรภาพ และการสื่อสาร',
        color: 'text-rose-500',
        icon: '❤️'
    },
    {
        id: 'work-growth',
        name_th: 'การงานและการเติบโต',
        name_en: 'Work & Growth',
        description: 'อาชีพ การพัฒนาตัวเอง และความสำเร็จที่ยั่งยืน',
        color: 'text-blue-600',
        icon: '💼'
    },
    {
        id: 'life-balance',
        name_th: 'จังหวะชีวิตและความสมดุล',
        name_en: 'Life & Balance',
        description: 'การใช้ชีวิตอย่างมีสติ สมดุล และยืดหยุ่น',
        color: 'text-purple-600',
        icon: '⚖️'
    },
    {
        id: 'self-care',
        name_th: 'การดูแลใจและรักตัวเอง',
        name_en: 'Self Care',
        description: 'การดูแลจิตใจ รักตัวเอง และฮีลใจ',
        color: 'text-emerald-600',
        icon: '💚'
    }
];
