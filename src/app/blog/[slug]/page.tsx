import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import blogPosts from '@/data/blog_posts.json';
import { BlogPost } from '@/types/blog';
import { BLOG_CATEGORIES } from '@/types/blog';
import { MothershipLink } from '@/components/LinkButton';
import { CATEGORIES } from '@/types/oracle';
import { AppLayout } from '@/components/AppLayout';

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = blogPosts as BlogPost[];
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const posts = blogPosts as BlogPost[];
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return {
            title: 'ไม่พบบทความ | Soul Spectrum'
        };
    }

    return {
        title: `${post.title} | Soul Spectrum`,
        description: post.description,
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `https://soul.thipakjai.com/blog/${post.slug}`,
            publishedTime: post.publishDate,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        }
    };
}

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

// Simple markdown-like content renderer with improved typography
function renderContent(content: string) {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    const flushList = () => {
        if (currentList.length > 0) {
            elements.push(
                <ul key={`list-${listKey++}`} className="list-disc list-inside text-gray-700 space-y-3 my-6 pl-4 leading-8">
                    {currentList.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
            currentList = [];
        }
    };

    lines.forEach((line, i) => {
        const trimmed = line.trim();

        if (trimmed.startsWith('## ')) {
            flushList();
            elements.push(
                <h2 key={i} className="text-2xl font-semibold text-teal-700 mt-10 mb-5">
                    {trimmed.replace('## ', '')}
                </h2>
            );
        } else if (trimmed.startsWith('### ')) {
            flushList();
            elements.push(
                <h3 key={i} className="text-xl font-semibold text-teal-700 mt-8 mb-4">
                    {trimmed.replace('### ', '')}
                </h3>
            );
        } else if (trimmed.startsWith('- ')) {
            currentList.push(trimmed.replace('- ', ''));
        } else if (trimmed === '') {
            flushList();
        } else {
            flushList();
            elements.push(
                <p key={i} className="text-gray-700 leading-8 my-5">
                    {trimmed}
                </p>
            );
        }
    });

    flushList();
    return elements;
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const posts = blogPosts as BlogPost[];
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const categoryInfo = getCategoryInfo(post.category);
    const relatedCategory = post.relatedOracleCategory
        ? CATEGORIES.find(c => c.id === post.relatedOracleCategory)
        : null;

    // Get related posts
    const relatedPosts = posts
        .filter(p => p.slug !== post.slug && (p.category === post.category || p.relatedOracleCategory === post.relatedOracleCategory))
        .slice(0, 2);

    return (
        <AppLayout showFooter={false}>
            <div className="bg-aura-mesh">
                {/* Article */}
                <article className="px-4 py-16 relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-6">
                        <Link href="/blog" className="text-teal-600 hover:text-teal-700 text-sm transition-colors">
                            ← กลับไปหน้าบทความ
                        </Link>
                    </nav>

                    {/* Header */}
                    <header className="mb-8">
                        {/* Category */}
                        {categoryInfo && (
                            <span className={`text-sm font-medium ${categoryInfo.color}`}>
                                {categoryInfo.name_th}
                            </span>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl font-semibold text-teal-800 mt-3 mb-5 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span>{formatDate(post.publishDate)}</span>
                            <span>·</span>
                            <span>อ่าน {post.readingTime} นาที</span>
                            <span>·</span>
                            <span>โดย {post.author}</span>
                        </div>
                    </header>

                    {/* Gradient bar */}
                    <div className={`h-1 rounded-full mb-10 ${post.relatedOracleCategory ? `gradient-${post.relatedOracleCategory}` : 'bg-gradient-to-r from-teal-400 to-cyan-400'}`} />

                    {/* Content - with improved reading typography */}
                    <div className="prose-reading">
                        {renderContent(post.content)}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-200/50">
                        {post.tags.map(tag => (
                            <span
                                key={tag}
                                className="bg-white/60 backdrop-blur-sm text-slate-600 text-sm px-4 py-1.5 rounded-full border border-white/50"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            {/* Related Posts - Mini Card Layout */}
            {relatedPosts.length > 0 && (
                <section className="py-10 px-4 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-xl font-semibold text-teal-700 mb-6">
                            บทความที่เกี่ยวข้อง
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {relatedPosts.map(relatedPost => (
                                <Link
                                    key={relatedPost.slug}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="mini-card group"
                                >
                                    <h3 className="font-semibold text-slate-700 group-hover:text-teal-600 transition-colors line-clamp-2">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                                        {relatedPost.description}
                                    </p>
                                    <div className="mt-3 text-xs text-teal-600 font-medium">
                                        อ่านต่อ →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

                {/* Mothership CTA - Bottom Section */}
                <section className="py-12 px-4 bg-gradient-to-br from-teal-600 to-cyan-600 text-white relative z-10">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-xl font-semibold mb-3">
                            แวะมาที่พักใจ
                        </h2>
                        <p className="text-white/80 mb-6">
                            พบกับสินค้าฮีลใจ ที่ออกแบบมาเพื่อดูแลใจคุณโดยเฉพาะ
                        </p>
                        <a
                            href="https://thipakjai.com/shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            เยี่ยมชม thipakjai.com →
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-200/50 py-8 px-4 text-center text-slate-400 text-sm bg-white/30 backdrop-blur-sm relative z-10">
                    <p>© 2025 Soul Spectrum by ที่พักใจ | thipakjai.com</p>
                </footer>

                {/* Floating CTA Button (position: fixed, works outside layout) */}
                <Link
                    href="/"
                    className="fab btn-primary flex items-center gap-2 text-sm"
                >
                    <span>🔮</span>
                    <span>เปิดไพ่เลย</span>
                </Link>
            </div>
        </AppLayout>
    );
}
