const fs = require('fs');
const posts = require('./src/data/blog_posts.json');

// Mapping: old category -> slug -> new category
const slugToCategory = {
    // Love & Relations
    'toxic-relationship-signs': 'love-relations',
    'family-boundaries': 'love-relations',
    'communication-tips': 'love-relations',
    'healthy-relationship': 'love-relations',
    'parent-child-relationship': 'love-relations',
    'loneliness-guide': 'love-relations',
    'grief-and-loss': 'love-relations',
    'how-to-say-no': 'love-relations',

    // Work & Growth
    'burnout-recovery-guide': 'work-growth',
    'work-life-balance-myth': 'work-growth',
    'imposter-syndrome-guide': 'work-growth',
    'career-change-guide': 'work-growth',
    'productivity-vs-rest': 'work-growth',
    'perfectionism-trap': 'work-growth',
    'emotional-intelligence': 'work-growth',

    // Life & Balance
    'anxiety-management-tips': 'life-balance',
    'financial-anxiety-tips': 'life-balance',
    'letting-go-past': 'life-balance',
    'new-year-no-pressure': 'life-balance',
    'financial-goals-2025': 'life-balance',
    'social-media-mental-health': 'life-balance',
    'digital-detox': 'life-balance',
    'mindfulness-beginners': 'life-balance',

    // Self Care
    'self-love-for-beginners': 'self-care',
    'morning-routine-selfcare': 'self-care',
    'sleep-quality-tips': 'self-care',
    'gratitude-practice': 'self-care',
    'self-compassion': 'self-care',
    'stress-relief-quick': 'self-care',
    'self-reflection': 'self-care',
    'mental-health-checkup': 'self-care'
};

const oracleMap = {
    'love-relations': 'love',
    'work-growth': 'work',
    'life-balance': 'life',
    'self-care': 'self'
};

posts.forEach(p => {
    if (slugToCategory[p.slug]) {
        p.category = slugToCategory[p.slug];
    }
    p.relatedOracleCategory = oracleMap[p.category] || 'self';
});

fs.writeFileSync('./src/data/blog_posts.json', JSON.stringify(posts, null, 4));
console.log('Updated', posts.length, 'posts');
