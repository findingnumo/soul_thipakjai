'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-lg border-b border-neutral-100/50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left: Brand */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D7377] to-[#14FFEC] flex items-center justify-center">
                        <span className="text-white text-xl">✨</span>
                    </div>
                    <span className="text-xl font-semibold text-[#0D7377]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Soul Spectrum
                    </span>
                </Link>

                {/* Right: Navigation Pills */}
                <nav className="flex items-center gap-2">
                    <Link
                        href="/oracle"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                            pathname?.startsWith('/oracle')
                                ? 'bg-[#0D7377]/10 text-[#0D7377]'
                                : 'text-[#44403C]/60 hover:text-[#0D7377] hover:bg-[#0D7377]/5'
                        }`}
                    >
                        ทำนาย
                    </Link>
                    <Link
                        href="/blog"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                            pathname?.startsWith('/blog')
                                ? 'bg-[#0D7377]/10 text-[#0D7377]'
                                : 'text-[#44403C]/60 hover:text-[#0D7377] hover:bg-[#0D7377]/5'
                        }`}
                    >
                        อ่านเล่น
                    </Link>
                </nav>
            </div>
        </header>
    );
}
