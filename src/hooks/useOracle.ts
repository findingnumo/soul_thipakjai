'use client';

import { useState, useCallback } from 'react';
import oracleData from '@/data/oracle_data.json';
import { OracleCard, OracleCategory, OracleData, CATEGORIES } from '@/types/oracle';
import { getRandomItem } from '@/lib/utils';

export type OracleState = 'idle' | 'selecting' | 'ritual' | 'revealing' | 'revealed';

interface UseOracleReturn {
    // State
    state: OracleState;
    selectedCategory: OracleCategory | null;
    currentCard: OracleCard | null;

    // Actions
    selectCategory: (category: OracleCategory) => void;
    startRitual: () => void;
    revealCard: () => void;
    drawCard: () => void;
    reset: () => void;

    // Helpers
    getCategoryInfo: (category: OracleCategory) => typeof CATEGORIES[number] | undefined;
}

export function useOracle(): UseOracleReturn {
    const [state, setState] = useState<OracleState>('idle');
    const [selectedCategory, setSelectedCategory] = useState<OracleCategory | null>(null);
    const [currentCard, setCurrentCard] = useState<OracleCard | null>(null);

    const data = oracleData as OracleData;

    const selectCategory = useCallback((category: OracleCategory) => {
        setSelectedCategory(category);
        setState('selecting');
    }, []);

    const startRitual = useCallback(() => {
        if (!selectedCategory) return;
        setState('ritual');
    }, [selectedCategory]);

    const drawCard = useCallback(() => {
        if (!selectedCategory) return;

        const categoryCards = data[selectedCategory];

        if (categoryCards.length === 0) {
            // If no cards in category, create a placeholder response
            const placeholderCard: OracleCard = {
                id: `${selectedCategory}_placeholder`,
                category: selectedCategory,
                gradient_theme: `gradient-${selectedCategory}`,
                message_title: 'กำลังเตรียมไพ่...',
                message_body: 'ไพ่ในหมวดนี้กำลังถูกสร้างขึ้น เร็วๆนี้คุณจะได้พบกับคำตอบมากมาย ขอบคุณที่รอคอย 💫',
                product_mapping: {
                    cta_text: 'สำรวจที่พักใจเพิ่มเติม →',
                    target_url: '/shop'
                }
            };
            setCurrentCard(placeholderCard);
        } else {
            const card = getRandomItem(categoryCards);
            setCurrentCard(card);
        }

        setState('revealing');
    }, [selectedCategory, data]);

    const revealCard = useCallback(() => {
        setState('revealed');
    }, []);

    const reset = useCallback(() => {
        setState('idle');
        setSelectedCategory(null);
        setCurrentCard(null);
    }, []);

    const getCategoryInfo = useCallback((category: OracleCategory) => {
        return CATEGORIES.find(c => c.id === category);
    }, []);

    return {
        state,
        selectedCategory,
        currentCard,
        selectCategory,
        startRitual,
        revealCard,
        drawCard,
        reset,
        getCategoryInfo,
    };
}
