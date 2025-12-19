// Soul Spectrum - Utility Functions

const MOTHERSHIP_URL = 'https://thipakjai.com';

/**
 * Append UTM parameters to a URL for tracking
 */
export function appendUTM(
    url: string,
    category: string,
    medium: 'oracle_card' | 'article' | 'cta' = 'oracle_card'
): string {
    const targetUrl = url.startsWith('http') ? url : `${MOTHERSHIP_URL}${url}`;
    const separator = targetUrl.includes('?') ? '&' : '?';

    const utmParams = new URLSearchParams({
        utm_source: 'soul_spectrum',
        utm_medium: medium,
        utm_campaign: category,
    });

    return `${targetUrl}${separator}${utmParams.toString()}`;
}

/**
 * Get the full URL to the mothership
 */
export function getMothershipUrl(path: string = ''): string {
    return `${MOTHERSHIP_URL}${path}`;
}

/**
 * Format date for Thai locale
 */
export function formatDateThai(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Get a random item from an array
 */
export function getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Shuffle an array (Fisher-Yates)
 */
export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Delay function for animations
 */
export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate reading time estimate
 */
export function getReadingTime(text: string): number {
    const wordsPerMinute = 200; // Thai reading speed
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}
