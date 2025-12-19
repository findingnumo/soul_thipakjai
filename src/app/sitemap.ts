import { MetadataRoute } from 'next';
import blogPosts from '@/data/blog_posts.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://soul.thipakjai.com';

    // Homepage
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
            priority: 0.8,
        },
    ];

    // Blog posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
