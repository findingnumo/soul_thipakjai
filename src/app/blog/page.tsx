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

        <div className="min-h-screen bg-neutral-50">
            {/* Header - Matching Main Page */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-neutral-100 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <span className="text-2xl">🏡</span>
                        <div>
                            <span className="text-lg font-bold text-neutral-800" style={{ fontFamily: 'var(--font-heading)' }}>
                                ที่พักใจ
                            </span>
                            <span className="text-xs text-neutral-500 block -mt-0.5 tracking-wide">Soul Spectrum</span>
                        </div>
                    </Link>
                    <MothershipLink />
                </div>
            </header>

            {/* Main Content */}
            <main className="px-4" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        {/* Welcome Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                            <span className="text-sm font-medium text-indigo-600">📚 คลังบทความฮีลใจ</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            เติมพลังใจในวันที่อ่อนล้า
                        </h1>
                        <p className="text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                            รวบรวมบทความคิดดีๆ เพื่อสุขภาพใจ การดูแลตัวเอง<br className="hidden sm:block" />
                            และการเติบโตอย่างมีความสุข
                        </p>
                    </div>

                    {/* Featured Posts */}
                    {featuredPosts.length > 0 && (
                        <section className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-xl">⭐</span>
                                <h2 className="text-2xl font-bold text-neutral-800" style={{ fontFamily: 'var(--font-heading)' }}>
                                    บทความแนะนำ
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredPosts.map(post => {
                                    const categoryInfo = getCategoryInfo(post.category);
                                    return (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group block bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-neutral-100 hover:-translate-y-1"
                                        >
                                            <div className="p-8">
                                                {/* Category */}
                                                {categoryInfo && (
                                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryInfo.color} bg-opacity-10`}>
                                                        {categoryInfo.name_th}
                                                    </span>
                                                )}

                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-neutral-800 mb-3 group-hover:text-indigo-600 transition-colors tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                                    {post.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-neutral-500 mb-6 line-clamp-2 leading-relaxed font-light">
                                                    {post.description}
                                                </p>

                                                {/* Meta */}
                                                <div className="flex items-center justify-between text-sm text-neutral-400 border-t border-neutral-100 pt-4">
                                                    <div className="flex items-center gap-2">
                                                        <span>🗓️ {formatDate(post.publishDate)}</span>
                                                    </div>
                                                    <span className="flex items-center gap-1">⏱️ อ่าน {post.readingTime} นาที</span>
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
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xl">📖</span>
                            <h2 className="text-2xl font-bold text-neutral-800" style={{ fontFamily: 'var(--font-heading)' }}>
                                บทความทั้งหมด
                            </h2>
                        </div>
                        <div className="grid gap-4">
                            {regularPosts.map(post => {
                                const categoryInfo = getCategoryInfo(post.category);
                                return (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-indigo-100"
                                    >
                                        <div className="flex items-start gap-6">
                                            {/* Icon based on category */}
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl shadow-inner ${post.relatedOracleCategory ? `bg-gradient-to-br from-indigo-50 to-purple-50` : 'bg-gray-50'}`}>
                                                <span>
                                                    {post.category === 'mental-health' ? '🧠' :
                                                        post.category === 'self-care' ? '💆' :
                                                            post.category === 'relationships' ? '💕' :
                                                                post.category === 'career' ? '💼' :
                                                                    post.category === 'life-advice' ? '✨' : '🧘'}
                                                </span>
                                            </div>

                                            <div className="flex-1 min-w-0 py-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    {categoryInfo && (
                                                        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                                                            {categoryInfo.name_th}
                                                        </span>
                                                    )}
                                                    <span className="text-neutral-300 text-xs">•</span>
                                                    <span className="text-xs text-neutral-400">{formatDate(post.publishDate)}</span>
                                                </div>

                                                <h3 className="text-lg font-bold text-neutral-800 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                                    {post.title}
                                                </h3>

                                                <p className="text-neutral-500 text-sm line-clamp-1 font-light">
                                                    {post.description}
                                                </p>
                                            </div>

                                            <div className="self-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 text-indigo-400">
                                                →
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-20 text-center bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2rem] p-10 sm:p-14 text-white shadow-2xl shadow-indigo-200">
                        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            ยังไม่แน่ใจว่าจะเริ่มตรงไหน? 🔮
                        </h2>
                        <p className="text-indigo-100 mb-8 text-lg opacity-90 font-light">
                            ลองเปิดไพ่ Oracle เพื่อค้นหาคำตอบที่ใจคุณต้องการในตอนนี้
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <span>✨</span> เปิดไพ่ทันที
                        </Link>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-neutral-100 py-12 px-4 text-center bg-white">
                <p className="text-base font-medium text-neutral-600 mb-2">
                    🏡 ที่พักใจ (Heart&apos;s Haven)
                </p>
                <p className="text-sm text-neutral-400 font-light mb-6">
                    &quot;พื้นที่ปลอดภัยในหน้าจอ สำหรับวันที่หัวใจต้องการคำตอบ&quot;
                </p>
                <p className="text-xs text-neutral-300">
                    Soul Spectrum — <a href="https://thipakjai.com" className="text-indigo-400 hover:underline">thipakjai.com</a>
                </p>
            </footer>
        </div>
    );
}
