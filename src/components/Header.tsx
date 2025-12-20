'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-50 h-20 bg-white/70 backdrop-blur-md border-b border-white/20 flex items-center transition-all duration-300">
            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between h-full">
                {/* Brand Identity - Deep Teal Serif */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                    <span className="text-2xl text-[#134E4A] group-hover:rotate-12 transition-transform">✨</span>
                    <span
                        className="text-2xl font-bold text-[#134E4A] tracking-tight"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Soul Spectrum
                    </span>
                </Link>

                {/* Navigation - Library Pill Style */}
                <nav className="flex items-center justify-end gap-4 md:gap-6">
                    <Link
                        href="/oracle"
                        className={`inline-flex items-center justify-center rounded-full text-base font-medium tracking-wide transition-all duration-200 ${pathname?.startsWith('/oracle')
                            ? 'bg-[#134E4A] text-white shadow-md'
                            : 'text-[#44403C] hover:bg-[#F0FDFA] hover:text-[#0D7377]'
                            }`}
                        style={{ fontFamily: 'var(--font-sans)', padding: '10px 28px' }}
                    >
                        ทำนาย
                    </Link>
                    <Link
                        href="/blog"
                        className={`inline-flex items-center justify-center rounded-full text-base font-medium tracking-wide transition-all duration-200 ${pathname?.startsWith('/blog')
                            ? 'bg-[#134E4A] text-white shadow-md'
                            : 'text-[#44403C] hover:bg-[#F0FDFA] hover:text-[#0D7377]'
                            }`}
                        style={{ fontFamily: 'var(--font-sans)', padding: '10px 28px' }}
                    >
                        อ่านเล่น
                    </Link>
                    <a
                        href="https://www.thipakjai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-base font-medium tracking-wide text-[#44403C]/70 hover:text-[#0D7377] transition-all duration-200"
                        style={{ fontFamily: 'var(--font-sans)', padding: '10px 16px' }}
                    >
                        กลับสู่ที่พักใจ
                        <svg className="ml-1.5 w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </nav>
            </div>
        </header>
    );
}
