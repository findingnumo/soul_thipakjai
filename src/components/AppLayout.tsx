'use client';

import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  isFullScreen?: boolean; // For oracle overlays
}

export function AppLayout({
  children,
  showFooter = true,
  isFullScreen = false
}: AppLayoutProps) {

  // Full-screen mode bypasses layout (for oracle ritual/revealed states)
  if (isFullScreen) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      {/* Main Content - Flex grow, uses body scroll */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden pt-20">
        {children}
      </main>

      {/* Footer */}
      {showFooter && (
        <footer className="flex-shrink-0 py-6 text-center bg-white/40 border-t border-neutral-100/50">
          <p className="text-xs text-neutral-400">
            © 2025 Soul Spectrum · Made with ❤️
          </p>
        </footer>
      )}
    </div>
  );
}
