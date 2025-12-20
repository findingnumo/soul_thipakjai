import { BlogPost } from '@/types/blog';

const SITE_URL = 'https://thipakjai.com';
const SITE_NAME = 'ที่พักใจ';
const SITE_DESCRIPTION = 'พื้นที่พักใจสำหรับคนที่ต้องการกำลังใจ คำแนะนำ และแรงบันดาลใจในการใช้ชีวิต';

/**
 * Generate Website Schema for homepage
 */
export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        alternateName: "Heart's Haven",
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: 'th',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/blog?search={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    };
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        alternateName: "Heart's Haven",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: SITE_DESCRIPTION,
        sameAs: [
            'https://facebook.com/thipakjai',
            'https://instagram.com/thipakjai'
        ]
    };
}

/**
 * Generate Article Schema for blog posts
 */
export function generateArticleSchema(post: BlogPost) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Organization',
            name: post.author,
            url: SITE_URL
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`
            }
        },
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${post.slug}`
        },
        articleSection: getCategoryName(post.category),
        keywords: post.tags.join(', '),
        inLanguage: 'th',
        isAccessibleForFree: true
    };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(post: BlogPost) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'หน้าแรก',
                item: SITE_URL
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'บทความ',
                item: `${SITE_URL}/blog`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: `${SITE_URL}/blog/${post.slug}`
            }
        ]
    };
}

/**
 * Helper function to get category display name
 */
function getCategoryName(category: string): string {
    const categoryMap: Record<string, string> = {
        'love-relations': 'เรื่องหัวใจและความสัมพันธ์',
        'work-growth': 'การงานและการเติบโต',
        'life-balance': 'จังหวะชีวิตและความสมดุล',
        'self-care': 'การดูแลใจและรักตัวเอง'
    };
    return categoryMap[category] || category;
}

/**
 * Generate combined schema for a blog post page
 */
export function generateBlogPostPageSchema(post: BlogPost) {
    return [
        generateArticleSchema(post),
        generateBreadcrumbSchema(post),
        generateOrganizationSchema()
    ];
}
