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
        <div className="min-h-screen bg-[#FDF9F3]">
            {/* Header - Matching Main Page */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-[#FDF9F3]/95 backdrop-blur-lg border-b border-stone-200/30">
                <div className="max-w-4xl mx-auto px-4 flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="text-xl">🏡</span>
                        <div>
                            <span className="text-lg font-medium text-stone-700" style={{ fontFamily: 'var(--font-serif)' }}>
                                ที่พักใจ
                            </span>
                            <span className="text-xs text-stone-500 block -mt-0.5">Soul Spectrum</span>
                        </div>
                    </Link>
                    <MothershipLink />
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-12">
                        {/* Welcome Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F4F2] border border-[#C1D1C8] mb-6">
                            <span className="text-sm text-[#5B7B6F]">📚 องค์ความรู้</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl text-stone-800 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                            บทความฮีลใจ
                        </h1>
                        <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
                            รวมบทความดีๆ ที่จะช่วยให้คุณรู้สึกดีขึ้น
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
                    <section className="mt-16 text-center bg-gradient-to-r from-[#F0F4F2] to-[#E8DFD2] rounded-3xl p-8">
                        <h2 className="text-xl text-stone-800 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                            ลองเปิดไพ่รับคำตอบจากใจ 🔮
                        </h2>
                        <p className="text-stone-500 mb-6">
                            นอกจากบทความ ลองเปิดไพ่ Oracle ดูสิ่งที่ใจคุณต้องการได้
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-[#5B7B6F] text-white font-medium px-6 py-3 rounded-2xl hover:bg-[#4A6A5E] transition-colors shadow-md"
                        >
                            เปิดไพ่เลย →
                        </Link>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-stone-200/30 py-10 px-4 text-center bg-[#F0EBE3]">
                <p className="text-sm text-stone-600 mb-2">
                    🏡 ที่พักใจ (Heart&apos;s Haven)
                </p>
                <p className="text-xs text-stone-500 italic mb-4">
                    &quot;พื้นที่ปลอดภัยในหน้าจอ สำหรับวันที่หัวใจต้องการคำตอบ&quot;
                </p>
                <p className="text-xs text-stone-400">
                    Soul Spectrum — <a href="https://thipakjai.com" className="text-[#5B7B6F] hover:underline">thipakjai.com</a>
                </p>
            </footer>
        </div>
    );
}
