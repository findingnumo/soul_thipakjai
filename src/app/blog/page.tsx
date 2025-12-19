import Link from 'next/link';
import { Metadata } from 'next';
import blogPosts from '@/data/blog_posts.json';
import { BlogPost } from '@/types/blog';
import { BLOG_CATEGORIES } from '@/types/blog';
import { MothershipLink } from '@/components/LinkButton';

export const metadata: Metadata = {
    title: 'บทความฮีลใจ | Soul Spectrum',
    description: 'รวมบทความเกี่ยวกับสุขภาพจิต การดูแลตัวเอง ความสัมพันธ์ และการทำงาน เพื่อช่วยให้คุณมีพลังใจที่ดีขึ้น',
    keywords: ['บทความสุขภาพจิต', 'ดูแลตัวเอง', 'ฮีลใจ', 'mental health', 'self care thailand'],
    openGraph: {
        title: 'บทความฮีลใจ | Soul Spectrum',
        description: 'รวมบทความเกี่ยวกับสุขภาพจิต การดูแลตัวเอง และการใช้ชีวิต',
        type: 'website',
        url: 'https://soul.thipakjai.com/blog',
    }
};

function getCategoryInfo(categoryId: string) {
    return BLOG_CATEGORIES.find(c => c.id === categoryId);
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export default function BlogPage() {
    const posts = blogPosts as BlogPost[];
    const featuredPosts = posts.filter(p => p.featured);
    const regularPosts = posts.filter(p => !p.featured);

    return (
        <div className="min-h-screen bg-cloud">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-cloud/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl">🌈</span>
                        <span className="font-semibold text-lg text-text-main">Soul Spectrum</span>
                    </Link>
                    <MothershipLink />
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-text-main mb-4">
                            บทความฮีลใจ 📚
                        </h1>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            รวมบทความเกี่ยวกับสุขภาพจิต การดูแลตัวเอง และเคล็ดลับการใช้ชีวิต
                            <br className="hidden sm:block" />
                            ที่จะช่วยให้วันของคุณดีขึ้น
                        </p>
                    </div>

                    {/* Featured Posts */}
                    {featuredPosts.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-xl font-semibold text-text-main mb-6 flex items-center gap-2">
                                ⭐ บทความแนะนำ
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {featuredPosts.map(post => {
                                    const categoryInfo = getCategoryInfo(post.category);
                                    return (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                                        >
                                            {/* Gradient Header */}
                                            <div className={`h-2 ${post.relatedOracleCategory ? `gradient-${post.relatedOracleCategory}` : 'bg-gradient-to-r from-teal-400 to-cyan-400'}`} />

                                            <div className="p-6">
                                                {/* Category */}
                                                {categoryInfo && (
                                                    <span className={`text-sm font-medium ${categoryInfo.color}`}>
                                                        {categoryInfo.name_th}
                                                    </span>
                                                )}

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-text-main mt-2 mb-3 group-hover:text-teal-600 transition-colors">
                                                    {post.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-text-secondary mb-4 line-clamp-2">
                                                    {post.description}
                                                </p>

                                                {/* Meta */}
                                                <div className="flex items-center justify-between text-sm text-text-light">
                                                    <span>{formatDate(post.publishDate)}</span>
                                                    <span>อ่าน {post.readingTime} นาที</span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* All Posts */}
                    <section>
                        <h2 className="text-xl font-semibold text-text-main mb-6 flex items-center gap-2">
                            📖 บทความทั้งหมด
                        </h2>
                        <div className="space-y-4">
                            {regularPosts.map(post => {
                                const categoryInfo = getCategoryInfo(post.category);
                                return (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Icon based on category */}
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${post.relatedOracleCategory ? `gradient-${post.relatedOracleCategory}` : 'bg-gray-200'}`}>
                                                <span className="text-2xl">
                                                    {post.category === 'mental-health' ? '🧠' :
                                                        post.category === 'self-care' ? '💆' :
                                                            post.category === 'relationships' ? '💕' :
                                                                post.category === 'career' ? '💼' :
                                                                    post.category === 'life-advice' ? '✨' : '🧘'}
                                                </span>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                {/* Category */}
                                                {categoryInfo && (
                                                    <span className={`text-sm font-medium ${categoryInfo.color}`}>
                                                        {categoryInfo.name_th}
                                                    </span>
                                                )}

                                                {/* Title */}
                                                <h3 className="text-lg font-bold text-text-main group-hover:text-teal-600 transition-colors line-clamp-1">
                                                    {post.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-text-secondary text-sm line-clamp-1 mt-1">
                                                    {post.description}
                                                </p>

                                                {/* Meta */}
                                                <div className="flex items-center gap-4 text-sm text-text-light mt-2">
                                                    <span>{formatDate(post.publishDate)}</span>
                                                    <span>·</span>
                                                    <span>อ่าน {post.readingTime} นาที</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-16 text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8">
                        <h2 className="text-xl font-bold text-text-main mb-3">
                            ลองเปิดไพ่รับคำตอบจากใจ 🔮
                        </h2>
                        <p className="text-text-secondary mb-6">
                            นอกจากบทความ ลองเปิดไพ่ Oracle ดูสิ่งที่ใจคุณต้องการได้
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors"
                        >
                            เปิดไพ่เลย →
                        </Link>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-8 px-4 text-center text-text-light text-sm">
                <p>© 2025 Soul Spectrum by ที่พักใจ | thipakjai.com</p>
            </footer>
        </div>
    );
}
