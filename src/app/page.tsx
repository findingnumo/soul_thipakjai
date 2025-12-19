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
      {/* Header - Welcoming & Cozy */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FDF9F3]/95 backdrop-blur-lg border-b border-stone-200/30">
        <div className="container-main flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏡</span>
            <div>
              <span className="text-lg font-medium text-stone-700" style={{ fontFamily: 'var(--font-heading)' }}>
                ที่พักใจ
              </span>
              <span className="text-xs text-stone-500 block -mt-0.5">Soul Spectrum</span>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-stone-600 hover:text-[#5B7B6F] transition-colors font-medium"
            >
              📖 บทความฮีลใจ
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
              {/* Hero Section - Gentle Welcome */}
              <motion.div
                className="text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Welcome Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F4F2] border border-[#C1D1C8] mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-sm text-[#5B7B6F]">🌿 พื้นที่ปลอดภัยทางใจ</span>
                </motion.div>

                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl text-stone-800 mb-4 tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  วันนี้หัวใจต้องการอะไร?
                </h1>
                <p className="text-stone-500 text-lg leading-relaxed">
                  ไม่ต้องเร่ง ไม่ต้องรีบ<br />
                  เลือกไพ่ที่ดึงดูดใจเธอที่สุด
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
                ไพ่จิตวิทยาเชิงบวก — เครื่องรางทางใจยุคดิจิทัล
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ritual State - Meditation Space */}
        <AnimatePresence>
          {(state === 'ritual' || state === 'selecting') && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ background: 'linear-gradient(180deg, #FDF9F3 0%, #F5EFE6 100%)' }}
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
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 border border-[#C1D1C8] shadow-sm">
                      <span className="font-medium text-stone-700">{categoryInfo.name_th}</span>
                    </div>
                  </motion.div>
                )}

                <motion.h2
                  className="text-2xl text-stone-700 mb-4 tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  หายใจลึกๆ...
                </motion.h2>

                <motion.p
                  className="text-stone-500 mb-10 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  ปล่อยให้ความคิดเบาลง<br />
                  นึกถึงสิ่งที่อยากถามใจ
                </motion.p>

                {/* Breathing Circle - Gentle Healing Colors */}
                <motion.div
                  className="relative mb-12"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full"
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: ['0 0 0 rgba(91,123,111,0.1)', '0 0 40px rgba(91,123,111,0.2)', '0 0 0 rgba(91,123,111,0.1)'],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      background: 'radial-gradient(circle, #E8DFD2 0%, #C9B896 50%, #B5A378 100%)',
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
                  🌟 พร้อมรับคำตอบแล้ว
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

        {/* Revealed State - Card Result */}
        <AnimatePresence>
          {(state === 'revealing' || state === 'revealed') && currentCard && selectedCategory && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto py-8"
              style={{ background: 'linear-gradient(180deg, #FDF9F3 0%, #F5EFE6 100%)' }}
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

      {/* Footer - Warm Farewell */}
      <footer className="py-10 border-t border-stone-200/30 bg-[#F0EBE3] relative z-10">
        <div className="container-main text-center">
          <p className="text-sm text-stone-600 mb-2">
            🏡 ที่พักใจ (Heart&apos;s Haven)
          </p>
          <p className="text-xs text-stone-500 italic mb-4">
            &quot;พื้นที่ปลอดภัยในหน้าจอ สำหรับวันที่หัวใจต้องการคำตอบ&quot;
          </p>
          <p className="text-xs text-stone-400">
            Soul Spectrum — เครื่องรางทางใจยุคดิจิทัล |{' '}
            <a
              href="https://thipakjai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5B7B6F] hover:text-[#4A6A5E] hover:underline transition-colors"
            >
              thipakjai.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
