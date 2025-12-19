import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import blogPosts from '@/data/blog_posts.json';
import { BlogPost } from '@/types/blog';
import { BLOG_CATEGORIES } from '@/types/blog';
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

// Clean content renderer with proper spacing
function renderContent(content: string) {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    const flushList = () => {
        if (currentList.length > 0) {
            elements.push(
                <ul key={`list-${listKey++}`} style={{ margin: '24px 0', paddingLeft: '24px' }}>
                    {currentList.map((item, i) => (
                        <li
                            key={i}
                            className="text-gray-700"
                            style={{
                                marginBottom: '16px',
                                lineHeight: '1.9',
                                fontSize: '16px'
                            }}
                        >
                            {item}
                        </li>
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
                <h2
                    key={i}
                    className="text-teal-700 font-bold"
                    style={{
                        fontSize: '24px',
                        marginTop: '48px',
                        marginBottom: '20px',
                        lineHeight: '1.4'
                    }}
                >
                    {trimmed.replace('## ', '')}
                </h2>
            );
        } else if (trimmed.startsWith('### ')) {
            flushList();
            elements.push(
                <h3
                    key={i}
                    className="text-teal-600 font-semibold"
                    style={{
                        fontSize: '20px',
                        marginTop: '36px',
                        marginBottom: '16px',
                        lineHeight: '1.4'
                    }}
                >
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
                <p
                    key={i}
                    className="text-gray-700"
                    style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        marginBottom: '24px'
                    }}
                >
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
    const allPosts = blogPosts as BlogPost[];
    const post = allPosts.find(p => p.slug === slug);
    const currentDate = new Date();

    // Return 404 if post not found OR if post is scheduled for the future
    if (!post || new Date(post.publishDate) > currentDate) {
        notFound();
    }

    const categoryInfo = getCategoryInfo(post.category);
    const relatedCategory = post.relatedOracleCategory
        ? CATEGORIES.find(c => c.id === post.relatedOracleCategory)
        : null;

    // Get related posts (only published ones, sorted by newest first)
    const relatedPosts = allPosts
        .filter(p =>
            p.slug !== post.slug &&
            new Date(p.publishDate) <= currentDate &&
            (p.category === post.category || p.relatedOracleCategory === post.relatedOracleCategory)
        )
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, 2);

    return (
        <AppLayout showFooter={true}>
            <div className="min-h-screen bg-[#F8F8F8]">
                {/* Article */}
                <article style={{ padding: '60px 24px' }}>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>

                        {/* Back Button */}
                        <nav style={{ marginBottom: '40px' }}>
                            <Link
                                href="/blog"
                                className="text-teal-600 hover:text-teal-700 transition-colors"
                                style={{ fontSize: '14px', fontWeight: '500' }}
                            >
                                ← กลับหน้ารวมบทความ
                            </Link>
                        </nav>

                        {/* Header */}
                        <header style={{ marginBottom: '48px' }}>
                            {/* Category */}
                            {categoryInfo && (
                                <p
                                    className="text-teal-600 font-medium"
                                    style={{ fontSize: '14px', marginBottom: '20px' }}
                                >
                                    {categoryInfo.name_th}
                                </p>
                            )}

                            {/* Title */}
                            <h1
                                className="text-teal-700 font-bold"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '36px',
                                    lineHeight: '1.3',
                                    marginBottom: '24px'
                                }}
                            >
                                {post.title}
                            </h1>

                            {/* Description */}
                            <p
                                className="text-gray-600"
                                style={{
                                    fontSize: '18px',
                                    lineHeight: '1.7',
                                    marginBottom: '24px'
                                }}
                            >
                                {post.description}
                            </p>

                            {/* Meta */}
                            <div
                                className="text-gray-400"
                                style={{
                                    fontSize: '14px',
                                    display: 'flex',
                                    gap: '16px',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <span>{formatDate(post.publishDate)}</span>
                                <span>·</span>
                                <span>อ่าน {post.readingTime} นาที</span>
                            </div>
                        </header>

                        {/* Divider */}
                        <div
                            className="bg-teal-500"
                            style={{
                                height: '4px',
                                width: '60px',
                                borderRadius: '2px',
                                marginBottom: '48px'
                            }}
                        />

                        {/* Content */}
                        <div>
                            {renderContent(post.content)}
                        </div>

                        {/* Tags */}
                        <div style={{
                            marginTop: '48px',
                            paddingTop: '32px',
                            borderTop: '1px solid #E5E5E5',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px'
                        }}>
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="bg-white text-gray-600"
                                    style={{
                                        fontSize: '13px',
                                        padding: '6px 14px',
                                        borderRadius: '50px',
                                        border: '1px solid #E5E5E5'
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Oracle CTA */}
                {relatedCategory && (
                    <section style={{ padding: '0 24px 60px' }}>
                        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                            <div
                                className="bg-[#FDF8F3] border-l-4 border-teal-500"
                                style={{
                                    padding: '32px 36px',
                                    borderRadius: '12px'
                                }}
                            >
                                <p
                                    className="text-teal-700 font-bold"
                                    style={{ fontSize: '18px', marginBottom: '12px' }}
                                >
                                    รู้สึกแบบนี้อยู่หรือเปล่า?
                                </p>
                                <p
                                    className="text-gray-600"
                                    style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}
                                >
                                    ถ้าอ่านแล้วรู้สึกว่า &quot;นี่มันฉันเลย!&quot; ลองไปเช็คอาการและรับวิธีดูแลใจเบื้องต้นกันไหม?
                                </p>
                                <Link
                                    href={`/oracle/${relatedCategory.id}`}
                                    className="inline-block bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
                                    style={{
                                        padding: '12px 24px',
                                        borderRadius: '50px',
                                        fontSize: '14px'
                                    }}
                                >
                                    ไปหน้าเช็คอาการ ({relatedCategory.id}) 👉
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section style={{ padding: '0 24px 60px' }}>
                        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                            <h2
                                className="text-gray-800 font-bold"
                                style={{ fontSize: '20px', marginBottom: '24px' }}
                            >
                                บทความที่เกี่ยวข้อง
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '20px'
                            }}
                            className="max-sm:grid-cols-1"
                            >
                                {relatedPosts.map(relatedPost => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="group block bg-white hover:shadow-md transition-shadow"
                                        style={{
                                            padding: '24px',
                                            borderRadius: '12px',
                                            borderLeft: '4px solid #14B8A6'
                                        }}
                                    >
                                        <h3
                                            className="text-teal-700 font-semibold group-hover:text-teal-600 transition-colors"
                                            style={{
                                                fontSize: '16px',
                                                lineHeight: '1.5',
                                                marginBottom: '12px'
                                            }}
                                        >
                                            {relatedPost.title}
                                        </h3>
                                        <p
                                            className="text-gray-500"
                                            style={{
                                                fontSize: '14px',
                                                lineHeight: '1.6',
                                                marginBottom: '16px',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {relatedPost.description}
                                        </p>
                                        <p
                                            className="text-teal-600 font-medium"
                                            style={{ fontSize: '13px' }}
                                        >
                                            อ่านต่อ →
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </AppLayout>
    );
}
