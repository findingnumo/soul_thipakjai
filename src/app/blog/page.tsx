'use client';

import Link from 'next/link';
import { Suspense, useState } from 'react';
import blogPosts from '@/data/blog_posts.json';
import { BlogPost } from '@/types/blog';
import { AppLayout } from '@/components/AppLayout';

// Category label mapper
const getCategoryLabel = (post: BlogPost): string => {
    if (post.category === 'love-relations') return '❤️ เรื่องหัวใจ';
    if (post.category === 'work-growth') return '💼 การงาน';
    if (post.category === 'life-balance') return '⚖️ สมดุลชีวิต';
    if (post.category === 'self-care') return '💚 ดูแลใจ';
    return '💚 ดูแลใจ';
};

// Category type definition
type CategoryFilter = 'all' | 'love-relations' | 'work-growth' | 'life-balance' | 'self-care';

// Filter button categories
const CATEGORIES: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: 'love-relations', label: '❤️ เรื่องหัวใจ' },
    { value: 'work-growth', label: '💼 การงาน' },
    { value: 'life-balance', label: '⚖️ สมดุลชีวิต' },
    { value: 'self-care', label: '💚 ดูแลใจ' },
];

// Card Component - Based on Reference Image
function BlogCard({ post }: { post: BlogPost }) {
    const categoryLabel = getCategoryLabel(post);

    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full border-l-4 border-teal-500"
                style={{ padding: '40px 36px' }}
            >
                {/* Category */}
                <p
                    className="text-teal-600 font-medium"
                    style={{ fontSize: '14px', marginBottom: '28px' }}
                >
                    {categoryLabel}
                </p>

                {/* Title */}
                <h3
                    className="text-teal-700 font-bold leading-snug"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '22px',
                        marginBottom: '24px',
                        lineHeight: '1.4'
                    }}
                >
                    {post.title}
                </h3>

                {/* Description */}
                <p
                    className="text-gray-600"
                    style={{
                        fontSize: '14px',
                        lineHeight: '1.9',
                        marginBottom: '32px'
                    }}
                >
                    {post.description}
                </p>

                {/* Read More */}
                <p className="text-teal-600 font-medium group-hover:text-teal-700 transition-colors" style={{ fontSize: '14px' }}>
                    อ่านต่อ &nbsp;→
                </p>
            </article>
        </Link>
    );
}

function BlogContent() {
    const allPosts = blogPosts as BlogPost[];
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

    // Filter out future/scheduled posts and sort by date (newest first)
    const currentDate = new Date();
    const publishedPosts = allPosts
        .filter(post => new Date(post.publishDate) <= currentDate)
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

    // Then apply category filter
    const filteredPosts = selectedCategory === 'all'
        ? publishedPosts
        : publishedPosts.filter(post => post.category === selectedCategory);

    return (
        <div style={{ padding: '80px 24px' }}>
            {/* Centered Container */}
            <div style={{ maxWidth: '880px', margin: '0 auto' }}>

                {/* Header */}
                <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
                    <h1
                        className="text-gray-900 font-bold"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '48px',
                            marginBottom: '16px'
                        }}
                    >
                        Reading Room
                    </h1>
                    <p className="text-gray-500" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        มุมพักใจ.. อ่านสบายๆ ในวันที่โลกหมุนเร็ว
                    </p>
                </header>

                {/* Filter Buttons */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    justifyContent: 'center',
                    marginBottom: '60px'
                }}>
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => setSelectedCategory(category.value)}
                            className={`transition-all duration-200 ${selectedCategory === category.value
                                    ? 'bg-teal-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:border-teal-400'
                                }`}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer'
                            }}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                {filteredPosts.length > 0 ? (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '32px'
                        }}
                        className="max-md:grid-cols-1"
                    >
                        {filteredPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '80px 0' }}>
                        <div style={{ fontSize: '64px', marginBottom: '16px' }}>📚</div>
                        <p className="text-gray-500" style={{ fontSize: '18px', marginBottom: '8px' }}>
                            ยังไม่มีบทความในหมวดนี้
                        </p>
                        <p className="text-gray-400" style={{ fontSize: '14px' }}>
                            รอติดตามนะ...
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function BlogPage() {
    return (
        <AppLayout showFooter={true}>
            <div className="min-h-screen bg-[#F8F8F8]">
                <Suspense fallback={<div className="h-screen w-full" />}>
                    <BlogContent />
                </Suspense>
            </div>
        </AppLayout>
    );
}
