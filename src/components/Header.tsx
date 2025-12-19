'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-neutral-100/50">
            <div className="max-w-6xl mx-auto px-10 py-4 flex items-center justify-between">
                {/* Logo with Playfair Display - BOLD & LARGE */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-3xl">✨</span>
                    <span
                        className="text-3xl font-bold text-gray-900"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Soul Spectrum
                    </span>
                </Link>

                {/* Navigation - CONFIDENT & BOLD */}
                <nav className="flex items-center gap-2">
                    <Link
                        href="/oracle"
                        className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all ${
                            pathname?.startsWith('/oracle')
                                ? 'bg-emerald-600 text-white'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        ทำนาย
                    </Link>
                    <Link
                        href="/blog"
                        className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all ${
                            pathname?.startsWith('/blog')
                                ? 'bg-emerald-600 text-white'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        อ่านเล่น
                    </Link>
                </nav>
            </div>
        </header>
    );
}
