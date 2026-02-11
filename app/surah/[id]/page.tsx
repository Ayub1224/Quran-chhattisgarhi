'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import StickyHeader from '@/components/StickyHeader';
import AyahCard from '@/components/AyahCard';
import { Icons } from '@/components/Icons';
import { Ayah, surahList, getReadingPosition, setReadingPosition, loadSurahAyahs } from '@/lib/surahData';

export default function SurahPage() {
    const params = useParams();
    const surahId = Number(params.id);
    const [ayahs, setAyahs] = useState<Ayah[]>([]);
    const [loading, setLoading] = useState(true);

    const surah = surahList.find((s) => s.number === surahId) ?? surahList[0];
    const readingPosition = getReadingPosition();

    useEffect(() => {
        loadSurahAyahs(surahId).then((data) => {
            setAyahs(data);
            setLoading(false);
        });
    }, [surahId]);

    // Track reading position via IntersectionObserver
    useEffect(() => {
        if (!ayahs.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const ayahNum = parseInt(entry.target.id.replace('ayah-', ''));
                        if (!isNaN(ayahNum)) {
                            setReadingPosition({
                                surah: surahId,
                                ayah: ayahNum,
                                surahName: surah.englishName,
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
    }, [ayahs, surahId, surah.englishName]);

    // Navigation helpers
    const prevSurah = surahList.find((s) => s.number === surahId - 1);
    const nextSurah = surahList.find((s) => s.number === surahId + 1);

    return (
        <div className="pb-32">
            <StickyHeader
                title={surah.englishName}
                arabicTitle={surah.arabicName}
                subtitle={`${surah.ayahCount} Ayahs • ${surah.revelationType}`}
            />

            {/* Surah info card */}
            <div className="px-4 md:px-6 mt-4 mb-4 max-w-4xl mx-auto">
                <div className="bg-accent-soft rounded-2xl p-5 border border-accent/15">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                                Surah {surah.number}
                            </p>
                            <h2 className="text-lg font-bold text-text-primary">{surah.englishName}</h2>
                            <p className="text-sm text-text-secondary mt-0.5">{surah.translation}</p>
                        </div>
                        <div className="text-right">
                            <p className="arabic-text text-3xl text-text-primary font-semibold">{surah.arabicName}</p>
                            <div className="flex items-center gap-2 mt-1 justify-end">
                                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                                    {surah.revelationType}
                                </span>
                                <span className="text-xs text-text-tertiary">{surah.ayahCount} Ayahs</span>
                            </div>
                        </div>
                    </div>
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
                        />
                    ))}
                </div>
            )}

            {/* Surah navigation */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 gap-3 max-w-4xl mx-auto">
                {prevSurah ? (
                    <Link
                        href={`/surah/${prevSurah.number}`}
                        className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-bg-surface hover:bg-border text-text-secondary text-sm font-medium transition-colors"
                    >
                        <Icons.Prev className="w-4 h-4" />
                        {prevSurah.englishName}
                    </Link>
                ) : <div />}
                {nextSurah ? (
                    <Link
                        href={`/surah/${nextSurah.number}`}
                        className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-bg-surface hover:bg-border text-text-secondary text-sm font-medium transition-colors"
                    >
                        {nextSurah.englishName}
                        <Icons.Next className="w-4 h-4" />
                    </Link>
                ) : <div />}
            </div>

            {/* Floating Resume Reading button */}
            {readingPosition && readingPosition.surah !== surahId && (
                <div className="fixed bottom-20 left-4 right-4 z-40 max-w-lg mx-auto">
                    <Link
                        href={`/surah/${readingPosition.surah}#ayah-${readingPosition.ayah}`}
                        className="block w-full bg-accent hover:bg-accent-hover text-badge-text text-center py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-accent/30 transition-all duration-200"
                    >
                        Resume: {readingPosition.surahName} — Ayah {readingPosition.ayah}
                    </Link>
                </div>
            )}

            <NavBar activeTab="surah" />
        </div>
    );
}
