'use client';

import { useOracle } from '@/hooks/useOracle';
import { CategoryGrid } from '@/components/CategoryButton';
import { LinkButton, MothershipLink } from '@/components/LinkButton';
import { OracleCard, FloatingCard } from '@/components/OracleCard';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
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

  const categoryInfo = selectedCategory ? getCategoryInfo(selectedCategory) : null;

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFF8E7]/90 backdrop-blur-md border-b border-stone-200/50">
        <div className="container-main flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-lg text-stone-700 tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
              Soul Spectrum
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-stone-600 hover:text-teal-700 transition-colors font-medium"
            >
              📖 บทความ
            </Link>
            <MothershipLink />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center min-h-screen pt-20 pb-24 px-4 relative z-10">
        {/* Idle State - Category Selection */}
        <AnimatePresence mode="wait">
          {state === 'idle' && (
            <motion.div
              className="w-full max-w-6xl mx-auto flex flex-col items-center gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <motion.div
                className="text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl text-stone-800 mb-4 tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  วันนี้ใจเธอสีอะไร?
                </h1>
                <p className="text-stone-500 text-lg">
                  เลือกไพ่ที่ดึงดูดสายตาเธอที่สุด
                </p>
              </motion.div>

              {/* Category Cards */}
              <CategoryGrid onSelect={(cat) => {
                selectCategory(cat);
                setTimeout(() => startRitual(), 300);
              }} />

              {/* Subtle footer text */}
              <motion.p
                className="text-sm text-stone-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                ไพ่จิตวิทยาเชิงบวก — ไม่ใช่การดูดวง แต่เป็นคำตอบที่หัวใจต้องการ
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ritual State - Breathing Animation (CREAM BACKGROUND) */}
        <AnimatePresence>
          {(state === 'ritual' || state === 'selecting') && (
            <motion.div
              className="fixed inset-0 z-50 bg-[#FFF8E7]/98 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center max-w-md mx-auto px-6">
                {categoryInfo && (
                  <motion.div
                    className="mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 border border-stone-200 shadow-sm">
                      <span className="font-medium text-stone-700">{categoryInfo.name_th}</span>
                    </div>
                  </motion.div>
                )}

                <motion.h2
                  className="text-2xl text-stone-700 mb-6 tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  นึกถึงคำถามในใจ...
                </motion.h2>

                <motion.p
                  className="text-stone-500 mb-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  หายใจเข้าลึกๆ ปล่อยใจให้ว่าง
                  <br />
                  แล้วกดเพื่อเปิดไพ่
                </motion.p>

                {/* Breathing Circle */}
                <motion.div
                  className="relative mb-12"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div
                    className="w-28 h-28 mx-auto rounded-full"
                    style={{
                      background: 'linear-gradient(45deg, #D4A5A5 0%, #D4B896 25%, #A8B4C4 50%, #B8A9C9 75%, #D4A5A5 100%)',
                      backgroundSize: '400% 400%',
                      animation: 'holographic-shift 8s ease-in-out infinite',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    }}
                  />
                </motion.div>

                <motion.button
                  onClick={() => {
                    drawCard();
                    setTimeout(() => revealCard(), 500);
                  }}
                  className="btn-primary text-lg px-10 py-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  เปิดไพ่รับคำตอบ
                </motion.button>

                <motion.button
                  onClick={reset}
                  className="block mx-auto mt-6 text-stone-400 hover:text-stone-600 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  ← เลือกหมวดใหม่
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Revealed State - Show Card Result (CREAM BACKGROUND) */}
        <AnimatePresence>
          {(state === 'revealing' || state === 'revealed') && currentCard && selectedCategory && (
            <motion.div
              className="fixed inset-0 z-50 bg-[#FFF8E7]/98 backdrop-blur-sm flex items-center justify-center overflow-y-auto py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full max-w-lg mx-auto px-6">
                {/* Category Badge */}
                {categoryInfo && (
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full ${categoryInfo.gradient_class}`}>
                      <span className="font-medium text-white">{categoryInfo.name_th}</span>
                    </div>
                  </motion.div>
                )}

                {/* The Oracle Card with Flip Animation */}
                <FloatingCard>
                  <OracleCard
                    card={currentCard}
                    category={selectedCategory}
                    isRevealed={state === 'revealed'}
                    onReveal={revealCard}
                  />
                </FloatingCard>

                {/* CTA Buttons */}
                <motion.div
                  className="mt-10 space-y-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <LinkButton
                    href={currentCard.product_mapping.target_url}
                    category={currentCard.category}
                    medium="oracle_card"
                    variant="primary"
                    className="w-full text-lg"
                  >
                    {currentCard.product_mapping.cta_text}
                  </LinkButton>

                  <button
                    onClick={reset}
                    className="w-full py-3 text-stone-500 hover:text-stone-700 transition-colors"
                  >
                    ✨ เปิดไพ่ใบใหม่
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-200/50 bg-[#FFF8E7]/80 relative z-10">
        <div className="container-main text-center">
          <p className="text-sm text-stone-500">
            Soul Spectrum by{' '}
            <a
              href="https://thipakjai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-800 hover:underline transition-colors"
            >
              ที่พักใจ (Heart&apos;s Haven)
            </a>
          </p>
          <p className="text-xs text-stone-400 mt-2">
            พื้นที่ปลอดภัยในหน้าจอ สำหรับวันที่หัวใจต้องการคำตอบ
          </p>
        </div>
      </footer>
    </div>
  );
}
