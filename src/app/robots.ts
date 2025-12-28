import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                allow: ['/blog/', '/llms.txt'],
            },
            {
                userAgent: 'Claude-Web',
                allow: ['/blog/', '/llms.txt'],
            },
            {
                userAgent: 'Anthropic-AI',
                allow: ['/blog/', '/llms.txt'],
            }
        ],
        sitemap: 'https://soul.thipakjai.com/sitemap.xml',
    };
}
