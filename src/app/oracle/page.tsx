'use client';

import { useOracle } from '@/hooks/useOracle';
import { OracleCard, FloatingCard } from '@/components/OracleCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';

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

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans text-[#44403C] relative overflow-x-hidden selection:bg-[#0D7377]/10">
            {/* Header */}
            <Header />

            {/* Background Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Main Content */}
            <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4" style={{ paddingTop: '150px', paddingBottom: '90px' }}>

                {/* Idle State - Category Selection */}
                <AnimatePresence mode="wait">
                    {state === 'idle' && (
                        <motion.div
                            className="w-full max-w-5xl mx-auto flex flex-col items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Header Section */}
                            <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: '90px' }}>
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
                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
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
                            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFBF7]/98 backdrop-blur-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="text-center w-full max-w-lg mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
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
                            style={{
                                position: 'fixed',
                                inset: 0,
                                zIndex: 50,
                                backgroundColor: '#FDFBF7',
                                overflowY: 'auto',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Centered Container */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minHeight: '100vh',
                                    padding: '24px 16px 160px 16px',
                                }}
                            >
                                {/* Category Badge */}
                                {categoryInfo && (
                                    <motion.div
                                        style={{ textAlign: 'center', marginBottom: '16px' }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#0D7377' }}>
                                            {categoryInfo.name_th}
                                        </span>
                                    </motion.div>
                                )}

                                {/* Card Container with explicit dimensions */}
                                <motion.div
                                    style={{
                                        width: '320px',
                                        height: '480px',
                                        margin: '0 auto',
                                        maxWidth: '90vw',
                                    }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <OracleCard
                                        card={currentCard}
                                        category={selectedCategory}
                                        isRevealed={state === 'revealed'}
                                        onReveal={revealCard}
                                    />
                                </motion.div>

                                {/* Reflection Text */}
                                <motion.p
                                    style={{
                                        marginTop: '64px',
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        color: 'rgba(68, 64, 60, 0.6)',
                                        fontWeight: 300,
                                        maxWidth: '320px',
                                        lineHeight: '1.8',
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.0 }}
                                >
                                    ลองหายใจลึกๆ แล้วคิดตามข้อความนี้สักครู่...<br />
                                    <span style={{ color: '#0D7377', fontWeight: 500 }}>
                                        บางทีคำตอบก็อยู่ในใจเราเองแล้ว
                                    </span>
                                </motion.p>

                                {/* Large CTA Buttons */}
                                <motion.div
                                    style={{
                                        marginTop: '48px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: '16px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        maxWidth: '600px',
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <button
                                        onClick={reset}
                                        style={{
                                            padding: '16px 40px',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: 'white',
                                            backgroundColor: '#0D7377',
                                            borderRadius: '16px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            flex: '1',
                                            minWidth: '200px',
                                            boxShadow: '0 4px 12px rgba(13, 115, 119, 0.2)',
                                        }}
                                    >
                                        ✨ เปิดไพ่ใบใหม่
                                    </button>

                                    <Link
                                        href="/blog"
                                        style={{
                                            padding: '16px 40px',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: '#0D7377',
                                            backgroundColor: 'rgba(13, 115, 119, 0.1)',
                                            borderRadius: '16px',
                                            textDecoration: 'none',
                                            flex: '1',
                                            minWidth: '200px',
                                            textAlign: 'center',
                                            border: '1px solid rgba(13, 115, 119, 0.2)',
                                        }}
                                    >
                                        📖 อ่านบทความเพิ่มเติม
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

        </div>
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
