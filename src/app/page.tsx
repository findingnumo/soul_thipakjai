'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Inline Icons for the Floating Nav
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M9 5h4" /></svg>
);
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);

// --- Components ---

// 1. The Soul Card (Vertical Tarot Style)
function SoulCard({
    href,
    title,
    imagePath,
    delay
}: {
    href: string;
    title: string;
    imagePath: string;
    delay: number;
}) {
    return (
        <Link href={href} className="group relative z-10 block">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-[200px] sm:w-[240px] aspect-[2/3] relative rounded-3xl cursor-pointer"
                style={{
                    perspective: '1000px',
                }}
            >
                {/* Flippable Container */}
                <motion.div
                    className="w-full h-full relative transition-all duration-500 ease-out preserve-3d group-hover:-translate-y-2"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Card Body - WARM CREAM BACKGROUND */}
                    <div className="absolute inset-0 bg-[#FDFBF7] rounded-3xl shadow-xl overflow-hidden border border-white/60">
                        {/* Aura Image - AGGRESSIVE MASKING */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <motion.img
                                src={imagePath}
                                alt={title}
                                className="w-[130%] h-[130%] object-contain opacity-95"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                                style={{
                                    // Very aggressive mask: start fading at 35%, fully transparent at 55%
                                    maskImage: 'radial-gradient(circle, black 35%, transparent 55%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 55%)'
                                }}
                            />
                        </div>

                        {/* Title Label (Bottom) */}
                        <div className="absolute bottom-6 left-0 right-0 text-center">
                            <h3 className="text-xl text-[#44403C] font-light tracking-wide">{title}</h3>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                </motion.div>

                {/* Soft Shadow Base */}
                <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
        </Link>
    );
}

// 2. Floating Glass Navigation
function FloatingNav() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-1 p-1.5 bg-white/70 backdrop-blur-xl border border-white/60 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

                {/* Tab 1: Oracle */}
                <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm text-[#0D7377] transition-all">
                    <SparklesIcon />
                    <span className="text-sm font-medium tracking-wide">ทำนาย</span>
                </button>

                {/* Tab 2: Blog */}
                <Link href="/blog" className="flex items-center gap-2 px-6 py-3 text-[#44403C]/70 hover:text-[#0D7377] hover:bg-white/50 rounded-full transition-all">
                    <BookIcon />
                    <span className="text-sm font-medium tracking-wide">อ่านเล่น</span>
                </Link>

            </div>
        </motion.div>
    );
}

// --- Main Page ---

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans text-[#44403C] relative overflow-x-hidden selection:bg-[#0D7377]/10">

            {/* Background Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Main Content Container */}
            <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-20 px-4">

                {/* Header Section - EQUAL SPACING: mb-40 */}
                <div className="text-center mb-40 max-w-3xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-[#0D7377] text-xs md:text-sm tracking-[0.25em] uppercase mb-4 opacity-70"
                    >
                        Soul Spectrum
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8 text-[#2A2826]"
                    >
                        วันนี้... ใจของเธอเป็นสีอะไร?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[#44403C]/60 text-base md:text-lg font-light leading-relaxed"
                    >
                        ตอนนี้เรื่องไหนที่เธออยากจะหาคำตอบ
                    </motion.p>
                </div>

                {/* Card Deck Section - EQUAL SPACING: pb-40 */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pb-40 w-full max-w-[1200px]">
                    <SoulCard
                        href="/oracle?category=love"
                        title="ความรัก"
                        imagePath="/assets/auras/Love.png"
                        delay={0.6}
                    />
                    <SoulCard
                        href="/oracle?category=work"
                        title="การงาน"
                        imagePath="/assets/auras/Work.png"
                        delay={0.7}
                    />
                    <SoulCard
                        href="/oracle?category=finance"
                        title="ชีวิต"
                        imagePath="/assets/auras/Finance.png"
                        delay={0.8}
                    />
                    <SoulCard
                        href="/oracle?category=family"
                        title="ใจตัวเอง"
                        imagePath="/assets/auras/Family.png"
                        delay={0.9}
                    />
                </div>

            </main>

            {/* Floating Navigation */}
            <FloatingNav />

        </div>
    );
}
