'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OracleCard as OracleCardType, OracleCategory } from '@/types/oracle';

interface OracleCardProps {
    card: OracleCardType | null;
    category: OracleCategory;
    isRevealed: boolean;
    onReveal?: () => void;
}

export function OracleCard({ card, category, isRevealed, onReveal }: OracleCardProps) {
    const [hasFlipped, setHasFlipped] = useState(false);

    const handleClick = () => {
        if (!hasFlipped && onReveal) {
            setHasFlipped(true);
            onReveal();
        }
    };

    const gradientClass = `gradient-${category}`;

    return (
        <div
            className="w-full max-w-sm mx-auto cursor-pointer perspective-1000"
            onClick={handleClick}
            style={{ perspective: '1000px' }}
        >
            <motion.div
                className="relative w-full aspect-[3/4] preserve-3d"
                initial={false}
                animate={{ rotateY: isRevealed ? 180 : 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Card Back (Holographic) */}
                <motion.div
                    className="absolute inset-0 rounded-3xl holographic-back backface-hidden shadow-2xl"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {/* Decorative elements */}
                        <div className="absolute inset-4 border-2 border-white/30 rounded-2xl" />

                        {/* Center symbol */}
                        <motion.div
                            className="text-6xl mb-4"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ✨
                        </motion.div>

                        <p className="text-white/80 text-center font-medium text-lg">
                            แตะเพื่อเปิดไพ่
                        </p>

                        {/* Corner decorations */}
                        <div className="absolute top-6 left-6 text-2xl opacity-60">🌙</div>
                        <div className="absolute top-6 right-6 text-2xl opacity-60">⭐</div>
                        <div className="absolute bottom-6 left-6 text-2xl opacity-60">⭐</div>
                        <div className="absolute bottom-6 right-6 text-2xl opacity-60">🌙</div>
                    </div>
                </motion.div>

                {/* Card Front (Result - Physical Card Look) */}
                <motion.div
                    className="absolute inset-0 rounded-3xl bg-white shadow-2xl backface-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    {card && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-800" style={{ padding: '32px 24px' }}>
                            {/* Subtle Aura Background Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-3xl">
                                <motion.img
                                    src={`/assets/auras/${category.charAt(0).toUpperCase() + category.slice(1)}.png`}
                                    alt=""
                                    className="w-[120%] h-[120%] object-cover opacity-10 blur-xl"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                                        WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
                                    }}
                                />
                            </div>

                            {/* Quote Marks as Watermarks */}
                            <div className="absolute top-4 left-4 pointer-events-none z-0">
                                <span className="text-[80px] opacity-[0.05] text-neutral-400 leading-none">❝</span>
                            </div>
                            <div className="absolute bottom-4 right-4 pointer-events-none z-0">
                                <span className="text-[80px] opacity-[0.05] text-neutral-400 leading-none rotate-180">❝</span>
                            </div>

                            {/* Double Border Decoration - Clean & Modern */}
                            <div className="absolute inset-4 rounded-[20px] border border-neutral-100 pointer-events-none z-5" />

                            {/* Middle: The Message - SCROLLABLE CONTAINER */}
                            <div className="flex flex-col items-center justify-center text-center relative z-10 w-full h-full overflow-hidden">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isRevealed ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="flex flex-col items-center w-full max-h-full overflow-y-auto no-scrollbar py-2"
                                    style={{ gap: '20px' }}
                                >
                                    <h3
                                        className="text-2xl font-bold text-neutral-800 shrink-0"
                                        style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.4', letterSpacing: '-0.02em' }}
                                    >
                                        {card.message_title}
                                    </h3>

                                    <p
                                        className="text-sm text-neutral-600 font-light"
                                        style={{ lineHeight: '1.8', maxWidth: '260px' }}
                                    >
                                        {card.message_body}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Bottom: Footer Decoration */}
                            <div className="absolute bottom-6 left-0 right-0 opacity-15 z-10 text-center pointer-events-none">
                                <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400">Heart's Haven</span>
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}

// Smaller preview card for category selection
interface CategoryCardPreviewProps {
    category: OracleCategory;
    icon: string;
    name: string;
    onClick: () => void;
}

export function CategoryCardPreview({ category, icon, name, onClick }: CategoryCardPreviewProps) {
    const gradientClass = `gradient-${category}`;

    return (
        <motion.button
            onClick={onClick}
            className={`relative w-full aspect-[3/4] rounded-2xl ${gradientClass} shadow-lg overflow-hidden group`}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-4xl mb-2">{icon}</span>
                <span className="text-white font-semibold text-lg">{name}</span>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
        </motion.button>
    );
}

// Floating animation wrapper
export function FloatingCard({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            className="w-full max-w-sm mx-auto"
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}
