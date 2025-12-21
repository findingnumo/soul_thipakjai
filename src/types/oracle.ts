// Types for Oracle Card Data

export type OracleCategory = 'health' | 'love' | 'work' | 'finance' | 'family';

export interface ProductMapping {
    cta_text: string;
    target_url: string;
}

export interface OracleCard {
    id: string;
    category: OracleCategory;
    gradient_theme: string;
    message_title: string;
    message_body: string;
    product_mapping: ProductMapping;
}

export interface OracleData {
    health: OracleCard[];
    love: OracleCard[];
    work: OracleCard[];
    finance: OracleCard[];
    family: OracleCard[];
}

// Category display info
export interface CategoryInfo {
    id: OracleCategory;
    name_th: string;
    name_en: string;
    icon: string;
    gradient_class: string;
    description: string;
}

export const CATEGORIES: CategoryInfo[] = [
    {
        id: 'health',
        name_th: 'สุขภาพ',
        name_en: 'Health',
        icon: '🌿',
        gradient_class: 'gradient-health',
        description: 'สุขภาพกาย-ใจ และความเป็นอยู่ที่ดี'
    },
    {
        id: 'love',
        name_th: 'ความรัก',
        name_en: 'Love',
        icon: '💕',
        gradient_class: 'gradient-love',
        description: 'ความรัก ความสัมพันธ์ และหัวใจ'
    },
    {
        id: 'work',
        name_th: 'การงาน',
        name_en: 'Work',
        icon: '💼',
        gradient_class: 'gradient-work',
        description: 'อาชีพ การทำงาน และเส้นทางชีวิต'
    },
    {
        id: 'finance',
        name_th: 'การเงิน',
        name_en: 'Finance',
        icon: '✨',
        gradient_class: 'gradient-finance',
        description: 'การเงิน ความมั่นคง และความอุดมสมบูรณ์'
    },
    {
        id: 'family',
        name_th: 'ใจตัวเอง',
        name_en: 'Self',
        icon: '💜',
        gradient_class: 'gradient-family',
        description: 'การดูแลใจ การอนุญาตให้ตัวเองอ่อนแอ และสร้างพื้นที่ปลอดภัยให้ตัวเอง'
    }
];
