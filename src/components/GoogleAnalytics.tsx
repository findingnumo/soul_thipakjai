'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
    measurementId?: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
    // If no measurement ID provided, don't render analytics
    if (!measurementId) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}

// Helper function to track custom events
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, eventParams);
    }
}

// Specific tracking functions
export function trackOracleCardDraw(category: string, cardId: string) {
    trackEvent('oracle_card_draw', {
        category,
        card_id: cardId,
    });
}

export function trackCTAClick(source: string, destination: string, context?: string) {
    trackEvent('cta_click', {
        source,
        destination,
        context,
    });
}

export function trackBlogRead(slug: string, title: string, readingTime: number) {
    trackEvent('blog_read', {
        slug,
        title,
        reading_time: readingTime,
    });
}
