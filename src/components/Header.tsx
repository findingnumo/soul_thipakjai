'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-neutral-100/50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo with Playfair Display */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-2xl">✨</span>
                    <span
                        className="text-2xl font-semibold text-gray-800"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Soul Spectrum
                    </span>
                </Link>

                {/* Navigation with sage green active state */}
                <nav className="flex items-center gap-2">
                    <Link
                        href="/oracle"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                            pathname?.startsWith('/oracle')
                                ? 'bg-teal-50 text-teal-800'
                                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                        }`}
                    >
                        ทำนาย
                    </Link>
                    <Link
                        href="/blog"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                            pathname?.startsWith('/blog')
                                ? 'bg-teal-50 text-teal-800'
                                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                        }`}
                    >
                        อ่านเล่น
                    </Link>
                </nav>
            </div>
        </header>
    );
}
