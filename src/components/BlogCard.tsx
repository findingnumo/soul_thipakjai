'use client';

import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
    post: BlogPost;
    categoryLabel: string;
}

export function BlogCard({ post, categoryLabel }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="h-full flex flex-col bg-[#F5F1EB] rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                {/* Category Label */}
                <span className="text-xs font-medium text-[#0D7377] mb-4 tracking-wide">
                    {categoryLabel}
                </span>

                {/* Title */}
                <h3
                    className="text-xl font-bold text-[#0D7377] mb-3 leading-snug group-hover:opacity-80 transition-opacity"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.description}
                </p>

                {/* Read More */}
                <div className="mt-auto text-sm font-medium text-[#0D7377] flex items-center gap-1 group-hover:gap-2 transition-all">
                    อ่านต่อ <span>→</span>
                </div>
            </article>
        </Link>
    );
}
