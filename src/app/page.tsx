'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';

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
                className="w-full md:w-[200px] lg:w-[240px] aspect-[2/3] relative rounded-3xl cursor-pointer"
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


// --- Main Page ---

export default function Home() {
    return (
        <AppLayout>
            {/* Background Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Main Content - now h-full and centered */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center font-sans text-[#44403C] selection:bg-[#0D7377]/10">

                {/* Header Section - reduced margin */}
                <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12 px-4">
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

                {/* Card Deck - Carousel on Mobile, Grid on Desktop */}
                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-3 px-4 md:flex md:flex-wrap md:justify-center md:gap-8 md:px-0">
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
            </div>
        </AppLayout>
    );
}
