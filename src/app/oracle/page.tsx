'use client';

import { useOracle } from '@/hooks/useOracle';
import { OracleCard, FloatingCard } from '@/components/OracleCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';

// Inline Icons
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M9 5h4" /></svg>
);
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);

// Category Button matching Home Style
function CategoryCard({
    category,
    title,
    imagePath,
    onClick,
    delay
}: {
    category: string;
    title: string;
    imagePath: string;
    onClick: () => void;
    delay: number;
}) {
    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative z-10 block w-[160px] sm:w-[200px] aspect-[2/3] rounded-3xl cursor-pointer"
            style={{ perspective: '1000px' }}
        >
            <motion.div
                className="w-full h-full relative transition-all duration-500 ease-out preserve-3d group-hover:-translate-y-2"
                style={{ transformStyle: 'preserve-3d' }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Card Body - WARM CREAM BACKGROUND */}
                <div className="absolute inset-0 bg-[#FDFBF7] rounded-3xl shadow-xl overflow-hidden border border-white/60">
                    {/* Aura Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <motion.img
                            src={imagePath}
                            alt={title}
                            className="w-[130%] h-[130%] object-contain opacity-95"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                            style={{
                                maskImage: 'radial-gradient(circle, black 35%, transparent 55%)',
                                WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 55%)'
                            }}
                        />
                    </div>

                    {/* Title Label (Bottom) */}
                    <div className="absolute bottom-5 left-0 right-0 text-center">
                        <h3 className="text-lg text-[#44403C] font-light tracking-wide">{title}</h3>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
            </motion.div>

            {/* Soft Shadow Base */}
            <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
    );
}

// Floating Glass Navigation (Same as Home)
// Category data
const categories = [
    { id: 'love', title: 'ความรัก', imagePath: '/assets/auras/Love.png' },
    { id: 'work', title: 'การงาน', imagePath: '/assets/auras/Work.png' },
    { id: 'finance', title: 'ชีวิต', imagePath: '/assets/auras/Finance.png' },
    { id: 'family', title: 'ใจตัวเอง', imagePath: '/assets/auras/Family.png' },
];

// Lead Magnet CTA mapping by category
const categoryCtaMap: Record<string, { text: string; url: string }> = {
    work: {
        text: 'รับฟรี Wallpaper มงคล',
        url: 'https://www.thipakjai.com/resources/wallpaper-set-1-work-calm-in-the-storm'
    },
    finance: {
        text: 'รับฟรี Wallpaper มงคล',
        url: 'https://www.thipakjai.com/resources/wallpaper-set-3-life-the-inner-glow'
    },
    love: {
        text: 'รับฟรี Wallpaper มงคล',
        url: 'https://www.thipakjai.com/resources/wallpaper-set-2-love-the-art-of-self-love'
    },
    family: {
        text: 'รับฟรี Wallpaper มงคล',
        url: 'https://www.thipakjai.com/resources/wallpaper-set-4-self-the-sanctuary-within'
    }
};

function OraclePageContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category');

    const {
        state,
        selectedCategory,
        currentCard,
        selectCategory,
        startRitual,
        drawCard,
        revealCard,
        reset,
        getCategoryInfo,
    } = useOracle();

    // Auto-select category if provided via URL
    useEffect(() => {
        if (initialCategory && !selectedCategory && state === 'idle') {
            const validCategories = ['health', 'love', 'work', 'finance', 'family'];
            if (validCategories.includes(initialCategory)) {
                setTimeout(() => {
                    selectCategory(initialCategory as any);
                    startRitual();
                }, 100);
            }
        }
    }, [initialCategory, selectedCategory, state, selectCategory, startRitual]);

    const categoryInfo = selectedCategory ? getCategoryInfo(selectedCategory) : null;
    const isFullScreen = state !== 'idle';

    return (
        <AppLayout isFullScreen={isFullScreen} showFooter={false}>
            {/* Background Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Idle State - Category Selection */}
            <AnimatePresence mode="wait">
                {state === 'idle' && (
                    <motion.div
                        className="w-full min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 py-8 font-sans text-[#44403C] selection:bg-[#0D7377]/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header Section */}
                        <div className="text-center max-w-3xl mx-auto mb-12">
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
                                ตอนนี้เรื่องไหนที่เธออยากจะหาคำตอบ
                            </motion.h1>
                        </div>

                        {/* Category Cards Grid */}
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                            {categories.map((cat, index) => (
                                <CategoryCard
                                    key={cat.id}
                                    category={cat.id}
                                    title={cat.title}
                                    imagePath={cat.imagePath}
                                    onClick={() => {
                                        selectCategory(cat.id as any);
                                        setTimeout(() => startRitual(), 300);
                                    }}
                                    delay={0.4 + index * 0.1}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Ritual State - Meditation Space */}
            <AnimatePresence>
                {(state === 'ritual' || state === 'selecting') && (
                    <motion.div
                        className="fixed left-0 right-0 top-20 bottom-0 w-full z-40 flex flex-col items-center justify-start bg-[#FDFBF7]/98 backdrop-blur-xl pt-8 pb-8 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="text-center w-full max-w-lg mx-auto px-6 relative z-10 flex flex-col items-center mt-8">
                            {categoryInfo && (
                                <motion.div
                                    className="mb-10"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white/60 shadow-sm">
                                        <span className="text-sm font-medium text-[#44403C]">{categoryInfo.name_th}</span>
                                    </div>
                                </motion.div>
                            )}

                            <motion.h2
                                className="text-3xl font-normal text-[#2A2826] mb-12 tracking-tight"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                หายใจลึกๆ...
                            </motion.h2>

                            <motion.p
                                className="text-[#44403C]/60 mb-16 text-lg font-light"
                                style={{ lineHeight: '2' }}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                ปล่อยให้ความคิดเบาลง นึกถึงสิ่งที่อยากถามใจ<br />
                                <span className="text-[#0D7377]">ลืมตาแล้วแตะที่ไพ่เพื่อหาคำตอบ</span>
                            </motion.p>

                            {/* Selected Category Card - CLICKABLE & Larger on Desktop */}
                            <motion.button
                                onClick={() => {
                                    drawCard();
                                    setTimeout(() => revealCard(), 500);
                                }}
                                className="relative flex items-center justify-center cursor-pointer group"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* The Card - Larger on Desktop */}
                                <motion.div
                                    className="w-[200px] sm:w-[260px] md:w-[280px] lg:w-[320px] aspect-[2/3] relative rounded-3xl"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {/* Card Body */}
                                    <div className="absolute inset-0 bg-[#FDFBF7] rounded-3xl shadow-xl overflow-hidden border border-white/60 group-hover:shadow-2xl transition-shadow duration-300">
                                        {/* Aura Image */}
                                        <div className="absolute inset-0 flex items-center justify-center p-4">
                                            <motion.img
                                                src={categories.find(c => c.id === selectedCategory)?.imagePath || '/assets/auras/Love.png'}
                                                alt=""
                                                className="w-[130%] h-[130%] object-contain opacity-95"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                                style={{
                                                    maskImage: 'radial-gradient(circle, black 35%, transparent 55%)',
                                                    WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 55%)'
                                                }}
                                            />
                                        </div>

                                        {/* Subtle Glow Pulse */}
                                        <motion.div
                                            className="absolute inset-0 rounded-3xl"
                                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            style={{
                                                background: 'radial-gradient(circle, rgba(13,115,119,0.15) 0%, transparent 70%)',
                                            }}
                                        />

                                        {/* Tap Hint */}
                                        <div className="absolute bottom-4 left-0 right-0 text-center">
                                            <span className="text-xs text-[#0D7377]/60 font-medium tracking-wide">แตะเพื่อเปิดไพ่</span>
                                        </div>
                                    </div>

                                    {/* Card Shadow */}
                                    <motion.div
                                        className="absolute -bottom-4 left-6 right-6 h-6 bg-black/10 blur-2xl rounded-full"
                                        animate={{ opacity: [0.3, 0.5, 0.3] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </motion.div>
                            </motion.button>

                            {/* Cancel Button Only */}
                            <motion.button
                                onClick={reset}
                                className="mt-10 text-sm text-[#44403C]/50 hover:text-[#44403C] transition-colors"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                ยกเลิก
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Revealed State - Card Result */}
            <AnimatePresence>
                {(state === 'revealing' || state === 'revealed') && currentCard && selectedCategory && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-[#FDFBF7] flex flex-col h-[100dvh] overflow-hidden items-center"
                        style={{ paddingTop: '80px' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* 
                            Center Everything Wrapper 
                            - Added 'items-center' to parent above to force this wrapper to center horizontally
                            - Added 'justify-between' to spacing
                        */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-8 py-4 px-4 w-full max-w-lg h-full pb-8">
                            {categoryInfo && (
                                <motion.div
                                    className="shrink-0"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div
                                        className="inline-flex items-center gap-2 !px-6 !py-2 rounded-full bg-white border border-neutral-200/60 shadow-sm"
                                        style={{ padding: '8px 24px' }}
                                    >
                                        <span className="text-base font-bold !font-bold text-[#0D7377]">{categoryInfo.name_th}</span>
                                    </div>
                                </motion.div>
                            )}

                            <motion.div
                                className="w-full flex items-center justify-center min-h-0 py-2 shrink-0"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div
                                    className="w-full h-auto aspect-[3/4] mx-auto"
                                    style={{
                                        maxHeight: '45vh',
                                        maxWidth: 'min(280px, calc(45vh * 0.75))'
                                    }}
                                >
                                    <OracleCard
                                        card={currentCard}
                                        category={selectedCategory}
                                        isRevealed={state === 'revealed'}
                                        onReveal={revealCard}
                                    />
                                </div>
                            </motion.div>

                            {/* Footer Wrapper - Clean Stack, No Negative Margins */}
                            <div className="shrink-0 w-full relative z-10 flex flex-col items-center gap-6">
                                <motion.div
                                    className="text-center px-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.0 }}
                                >
                                    <p className="text-sm text-neutral-500 font-light leading-relaxed">
                                        ลองหายใจลึกๆ แล้วคิดตามข้อความนี้สักครู่...<br />
                                        <span className="text-[#0D7377] font-medium">คำตอบอยู่ที่ใจของเธอเอง</span>
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="w-full max-w-[320px] mx-auto grid grid-cols-2 gap-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <button
                                        onClick={reset}
                                        className="w-full h-12 bg-[#0D7377] text-white text-base font-semibold rounded-2xl shadow-lg shadow-[#0D7377]/20 hover:bg-[#0D7377]/90 active:scale-95 transition-all flex items-center justify-center gap-2"
                                    >
                                        ✨ เปิดไพ่ใบใหม่
                                    </button>

                                    <Link
                                        href={selectedCategory ? categoryCtaMap[selectedCategory]?.url || '/blog' : '/blog'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-12 bg-white text-[#0D7377] text-base font-semibold rounded-2xl border border-[#0D7377]/20 hover:bg-[#0D7377]/5 transition-all flex items-center justify-center gap-2"
                                    >
                                        🎁 {selectedCategory ? categoryCtaMap[selectedCategory]?.text || 'รับของขวัญฟรี' : 'รับของขวัญฟรี'}
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AppLayout>
    );
}

export default function OraclePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
            <div className="text-center">
                <div className="animate-pulse text-lg text-[#44403C]/50">กำลังโหลด...</div>
            </div>
        </div>}>
            <OraclePageContent />
        </Suspense>
    );
}
