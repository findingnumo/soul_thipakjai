'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-white/20">
            <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
                {/* Brand Identity - Elegant & Book-like */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-2xl">✨</span>
                    <span
                        className="text-2xl font-medium text-[#0D7377]"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Soul Spectrum
                    </span>
                </Link>

                {/* Navigation - Premium Pills */}
                <nav className="flex items-center justify-end gap-4">
                    <Link
                        href="/oracle"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                            pathname?.startsWith('/oracle')
                                ? 'bg-[#E8F3E8] text-emerald-800'
                                : 'border border-gray-300/50 text-gray-600 hover:bg-[#E8F3E8] hover:text-emerald-800'
                        }`}
                    >
                        ทำนาย
                    </Link>
                    <Link
                        href="/blog"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                            pathname?.startsWith('/blog')
                                ? 'bg-[#E8F3E8] text-emerald-800'
                                : 'border border-gray-300/50 text-gray-600 hover:bg-[#E8F3E8] hover:text-emerald-800'
                        }`}
                    >
                        อ่านเล่น
                    </Link>
                </nav>
            </div>
        </header>
    );
}
