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
                <nav className="flex items-center justify-end gap-6 md:gap-8">
                    <Link
                        href="/oracle"
                        className={`px-8 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${pathname?.startsWith('/oracle')
                            ? 'bg-[#134E4A] text-white shadow-md'
                            : 'text-gray-600 hover:bg-white hover:text-[#134E4A] hover:shadow-sm'
                            }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                    >
                        ทำนาย
                    </Link>
                    <Link
                        href="/blog"
                        className={`px-8 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${pathname?.startsWith('/blog')
                            ? 'bg-[#134E4A] text-white shadow-md'
                            : 'text-gray-600 hover:bg-white hover:text-[#134E4A] hover:shadow-sm'
                            }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                    >
                        อ่านเล่น
                    </Link>
                </nav>
            </div>
        </header>
    );
}
