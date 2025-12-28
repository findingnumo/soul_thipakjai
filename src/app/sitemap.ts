import { MetadataRoute } from 'next';
import blogPosts from '@/data/blog_posts.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://soul.thipakjai.com';

    // Homepage and main pages
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ];

    // Blog posts with higher priority for cornerstone content
    const blogRoutes = blogPosts.map((post) => {
        const isCornerstone = post.slug.startsWith('cornerstone-') || post.featured;
        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.publishDate),
            changeFrequency: 'weekly' as const,
            priority: isCornerstone ? 0.9 : 0.6,
        };
    });

    return [...routes, ...blogRoutes];
}
