'use client';

import { useEffect, useState, useRef } from 'react';
import NavBar from '@/components/NavBar';
import StickyHeader from '@/components/StickyHeader';
import AyahCard from '@/components/AyahCard';
import { Icons } from '@/components/Icons';
import { Ayah, surahList, getReadingPosition, setReadingPosition, loadSurahAyahs } from '@/lib/surahData';

export default function ReadPage() {
    const [ayahs, setAyahs] = useState<Ayah[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentSurah, setCurrentSurah] = useState(surahList[0]);
    const [currentAyah, setCurrentAyah] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pos = getReadingPosition();
        const surahNum = pos?.surah ?? 1;
        const ayahNum = pos?.ayah ?? 1;

        const meta = surahList.find((s) => s.number === surahNum) ?? surahList[0];
        setCurrentSurah(meta);
        setCurrentAyah(ayahNum);

        loadSurahAyahs(surahNum).then((data) => {
            setAyahs(data);
            setLoading(false);
            // Scroll to the saved ayah position after data loads
            setTimeout(() => {
                const el = document.getElementById(`ayah-${ayahNum}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });
    }, []);

    // Save reading position on scroll
    useEffect(() => {
        if (!ayahs.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const ayahNum = parseInt(entry.target.id.replace('ayah-', ''));
                        if (!isNaN(ayahNum)) {
                            setCurrentAyah(ayahNum);
                            setReadingPosition({
                                surah: currentSurah.number,
                                ayah: ayahNum,
                                surahName: currentSurah.englishName,
                            });
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        ayahs.forEach((a) => {
            const el = document.getElementById(`ayah-${a.ayah}`);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [ayahs, currentSurah]);

    return (
        <div className="pb-24" ref={scrollRef}>
            <StickyHeader
                title={currentSurah.englishName}
                arabicTitle={currentSurah.arabicName}
                subtitle={`${currentSurah.ayahCount} Ayahs • ${currentSurah.revelationType}`}
            />

            {/* Reading position indicator */}
            <div className="px-4 md:px-6 mt-4 mb-2 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-accent-soft rounded-xl border border-accent/20">
                    <Icons.Bookmark className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-accent">
                        Continuing from Ayah {currentAyah}
                    </span>
                </div>
            </div>

            {/* Ayah list */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                    <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                    <p className="text-sm text-text-tertiary">Loading ayahs...</p>
                </div>
            ) : (
                <div>
                    {ayahs.map((ayah) => (
                        <AyahCard
                            key={ayah.ayah}
                            ayahNumber={ayah.ayah}
                            arabic={ayah.arabic}
                            english={ayah.english}
                            chhattisgarhi={ayah.chhattisgarhi}
                            isHighlighted={ayah.ayah === currentAyah}
                        />
                    ))}
                </div>
            )}

            <NavBar activeTab="read" />
        </div>
    );
}
