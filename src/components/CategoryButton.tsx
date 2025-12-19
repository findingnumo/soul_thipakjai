'use client';

import { motion } from 'framer-motion';
import { CATEGORIES, OracleCategory } from '@/types/oracle';

interface CategoryButtonProps {
    category: typeof CATEGORIES[number];
    onClick: (id: OracleCategory) => void;
    disabled?: boolean;
}

// Image assets for each category (Generated Watercolor Auras)
const auraImages: Record<OracleCategory, string> = {
    health: '/assets/auras/Health.png',
    love: '/assets/auras/Love.png',
    work: '/assets/auras/Work.png',
    finance: '/assets/auras/Finance.png',
    family: '/assets/auras/Family.png',
};

const auraColors: Record<OracleCategory, { from: string; label: string }> = {
    health: { from: 'var(--health-from)', label: 'ดูแลกายใจ' },
    love: { from: 'var(--love-from)', label: 'รักและความสัมพันธ์' },
    work: { from: 'var(--work-from)', label: 'เติบโตในหน้าที่' },
    finance: { from: 'var(--finance-from)', label: 'มั่นคงทางการเงิน' },
    family: { from: 'var(--family-from)', label: 'ครอบครัวที่รัก' },
};

export function CategoryButton({ category, onClick, disabled }: CategoryButtonProps) {
    return (
        <motion.button
            onClick={() => onClick(category.id)}
            disabled={disabled}
            className="relative group w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ aspectRatio: '2/3' }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Card Background (Clean White Paper) */}
            <div
                className="absolute inset-0 rounded-3xl transition-all duration-300 group-hover:shadow-2xl border border-stone-100"
                style={{
                    background: '#FFFFFF',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                }}
            />

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-between py-8 px-4">
                {/* Watercolor Aura - Image Asset */}
                <div className="flex-1 flex items-center justify-center w-full relative">
                    <motion.div
                        className="w-full aspect-square relative"
                        animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* We use a standard img tag here for simplicity with motion, or could use Next Image */}
                        <img
                            src={auraImages[category.id]}
                            alt={category.name_th}
                            className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                            }}
                        />
                    </motion.div>
                </div>

                {/* Text Content - Bottom */}
                <div className="text-center mt-auto">
                    <h3
                        className="text-lg font-bold tracking-tight mb-1"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--text-main)',
                        }}
                    >
                        {category.name_th}
                    </h3>
                    <p className="text-xs font-medium opacity-80" style={{ color: 'var(--text-secondary)' }}>
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
