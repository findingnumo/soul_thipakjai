'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/oracle', label: 'ทำนาย' },
        { href: '/blog', label: 'อ่านเล่น' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="fixed top-0 w-full z-50 h-16 md:h-20 bg-white/70 backdrop-blur-md border-b border-white/20 flex items-center transition-all duration-300">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between h-full">
                    {/* Brand Identity */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity group" onClick={closeMenu}>
                        <span className="text-xl md:text-2xl text-[#134E4A] group-hover:rotate-12 transition-transform">✨</span>
                        <span
                            className="text-xl md:text-2xl font-bold text-[#134E4A] tracking-tight"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Soul Spectrum
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center justify-end gap-4 md:gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`inline-flex items-center justify-center rounded-full text-base font-medium tracking-wide transition-all duration-200 ${pathname?.startsWith(link.href)
                                    ? 'bg-[#134E4A] text-white shadow-md'
                                    : 'text-[#44403C] hover:bg-[#F0FDFA] hover:text-[#0D7377]'
                                    }`}
                                style={{ fontFamily: 'var(--font-sans)', padding: '10px 28px' }}
                            >
                                {link.label}
                            </Link>
                        ))}
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

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg hover:bg-[#F0FDFA] transition-colors"
                        aria-label={isMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={`w-5 h-0.5 bg-[#134E4A] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-5 h-0.5 bg-[#134E4A] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-5 h-0.5 bg-[#134E4A] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeMenu}
            />

            {/* Mobile Menu Drawer */}
            <nav
                className={`fixed top-16 right-0 z-50 w-64 h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col p-6 gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className={`flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${pathname?.startsWith(link.href)
                                ? 'bg-[#134E4A] text-white'
                                : 'text-[#44403C] hover:bg-[#F0FDFA]'
                                }`}
                            style={{ fontFamily: 'var(--font-sans)' }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="h-px bg-[#E5E7EB] my-3" />

                    <a
                        href="https://www.thipakjai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-[#44403C]/70 hover:bg-[#F0FDFA] transition-all duration-200"
                        style={{ fontFamily: 'var(--font-sans)' }}
                    >
                        กลับสู่ที่พักใจ
                        <svg className="ml-2 w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </nav>
        </>
    );
}
