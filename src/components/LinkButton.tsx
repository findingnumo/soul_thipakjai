'use client';

import Link from 'next/link';
import { appendUTM, getMothershipUrl } from '@/lib/utils';
import { trackCTAClick } from '@/components/GoogleAnalytics';

interface LinkButtonProps {
    href: string;
    category?: string;
    medium?: 'oracle_card' | 'article' | 'cta';
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    external?: boolean;
}

export function LinkButton({
    href,
    category = 'general',
    medium = 'cta',
    children,
    className = '',
    variant = 'primary',
    external = true,
}: LinkButtonProps) {
    // Determine if this is an external link (to mothership)
    const isExternal = external || href.startsWith('http') || href.startsWith('/products') || href.startsWith('/shop');

    // Build the URL with UTM parameters for external links
    const finalUrl = isExternal ? appendUTM(href, category, medium) : href;

    // Track click event
    const handleClick = () => {
        if (isExternal) {
            trackCTAClick('soul_spectrum', finalUrl, `${category}_${medium}`);
        }
    };

    const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-full font-medium
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

    const variantStyles = {
        primary: `
      bg-brand-teal text-white
      hover:bg-brand-teal-light hover:-translate-y-0.5
      hover:shadow-lg hover:shadow-brand-teal/30
      focus:ring-brand-teal
    `,
        secondary: `
      bg-white text-brand-teal border-2 border-brand-teal
      hover:bg-brand-teal hover:text-white hover:-translate-y-0.5
      focus:ring-brand-teal
    `,
        ghost: `
      bg-transparent text-text-main
      hover:bg-black/5 
      focus:ring-gray-400
    `,
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (isExternal) {
        return (
            <a
                href={finalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedClassName}
                onClick={handleClick}
            >
                {children}
                <span className="text-sm opacity-70">↗</span>
            </a>
        );
    }

    return (
        <Link href={finalUrl} className={combinedClassName} onClick={handleClick}>
            {children}
        </Link>
    );
}

// Convenience component for going back to mothership
export function MothershipLink({
    children = 'กลับบ้าน thipakjai.com',
    className = '',
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <LinkButton
            href={getMothershipUrl()}
            category="navigation"
            medium="cta"
            variant="ghost"
            className={className}
        >
            {children}
        </LinkButton>
    );
}
