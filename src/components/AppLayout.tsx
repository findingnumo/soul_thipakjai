'use client';

import { Header } from './Header';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  customHeader?: ReactNode;
  isFullScreen?: boolean; // For oracle overlays
}

export function AppLayout({
  children,
  showFooter = true,
  customHeader,
  isFullScreen = false
}: AppLayoutProps) {

  // Full-screen mode bypasses layout (for oracle ritual/revealed states)
  if (isFullScreen) {
    return <>{children}</>;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#FDFBF7]">
      {/* Header - Fixed height */}
      {customHeader || <Header />}

      {/* Main Content - Flex grow, internally scrollable */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </main>

      {/* Footer - Fixed at bottom */}
      {showFooter && (
        <footer className="flex-shrink-0 py-4 text-center bg-white/40 border-t border-neutral-100/50">
          <p className="text-xs text-neutral-400">
            © 2025 Soul Spectrum · Made with ❤️
          </p>
        </footer>
      )}
    </div>
  );
}
