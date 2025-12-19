'use client';

import { motion } from 'framer-motion';
import { CATEGORIES, OracleCategory } from '@/types/oracle';

interface CategoryButtonProps {
    category: typeof CATEGORIES[number];
    onClick: (id: OracleCategory) => void;
    disabled?: boolean;
}

// Aura colors for each category (softer, healing tones)
const auraColors: Record<OracleCategory, { from: string; to: string; label: string }> = {
    health: { from: '#9DB5A3', to: '#7A9982', label: 'ดูแลกายใจ' },
    love: { from: '#D4A5A5', to: '#C08888', label: 'รักและความสัมพันธ์' },
    work: { from: '#A4B4C4', to: '#8899AA', label: 'เติบโตในหน้าที่' },
    finance: { from: '#C9B896', to: '#B5A378', label: 'มั่นคงทางการเงิน' },
    family: { from: '#B8A9C9', to: '#9E8BB5', label: 'ครอบครัวที่รัก' },
};

export function CategoryButton({ category, onClick, disabled }: CategoryButtonProps) {
    const colors = auraColors[category.id];

    return (
        <motion.button
            onClick={() => onClick(category.id)}
            disabled={disabled}
            className="relative group w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ aspectRatio: '2/3' }}
            whileHover={{ y: -12 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            {/* Card Background */}
            <div
                className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:shadow-xl"
                style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(168, 162, 158, 0.35)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 8px 40px rgba(68, 64, 60, 0.06)',
                }}
            />

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-between py-6 px-3">
                {/* Watercolor Aura - Center */}
                <div className="flex-1 flex items-center justify-center w-full">
                    <div
                        className="w-20 h-20 rounded-full"
                        style={{
                            background: `radial-gradient(ellipse at center, ${colors.from} 0%, ${colors.to} 50%, transparent 70%)`,
                            filter: 'blur(6px)',
                            opacity: 0.9,
                        }}
                    />
                </div>

                {/* Text Content - Bottom */}
                <div className="text-center mt-auto">
                    <h3
                        className="text-base tracking-wide"
                        style={{
                            fontFamily: 'var(--font-heading, Georgia, serif)',
                            color: '#3D3D3D',
                            fontWeight: 400,
                        }}
                    >
                        {category.name_th}
                    </h3>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: '#5B7B6F' }}>
                        {auraColors[category.id].label}
                    </p>
                </div>
            </div>
        </motion.button>
    );
}

interface CategoryGridProps {
    onSelect: (category: OracleCategory) => void;
    disabled?: boolean;
}

export function CategoryGrid({ onSelect, disabled }: CategoryGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 w-full max-w-5xl mx-auto px-4">
            {CATEGORIES.map((category, index) => (
                <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                >
                    <CategoryButton
                        category={category}
                        onClick={onSelect}
                        disabled={disabled}
                    />
                </motion.div>
            ))}
        </div>
    );
}
