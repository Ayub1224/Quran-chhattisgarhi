'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import SurahListItem from '@/components/SurahListItem';
import ThemeToggle from '@/components/ThemeToggle';
import { Icons } from '@/components/Icons';
import { surahList, getReadingPosition, ReadingPosition } from '@/lib/surahData';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [readingPosition, setReadingPosition] = useState<ReadingPosition | null>(null);

  useEffect(() => {
    setReadingPosition(getReadingPosition());
  }, []);

  const filteredSurahs = useMemo(() => {
    if (!search.trim()) return surahList;
    const q = search.toLowerCase();
    return surahList.filter(
      (s) =>
        s.englishName.toLowerCase().includes(q) ||
        s.translation.toLowerCase().includes(q) ||
        s.arabicName.includes(search) ||
        String(s.number) === q
    );
  }, [search]);

  return (
    <div className="pb-24">
      {/* ── Header / Branding ── */}
      <header className="relative overflow-hidden pt-12 md:pt-28 pb-10 px-6 text-center">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/60 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Theme toggle in corner - HIDDEN on desktop as it is in Nav */}
          <div className="absolute top-0 right-0 md:hidden">
            <ThemeToggle />
          </div>

          {/* Arabic title */}
          <h1 className="arabic-text text-5xl md:text-7xl text-text-primary font-bold mb-3 md:mb-6 leading-tight drop-shadow-sm">
            القرآن الكريم
          </h1>

          {/* App name */}
          <p className="text-lg md:text-2xl font-bold text-accent tracking-wide uppercase">
            Quran Chhattisgarhi
          </p>
          <p className="text-sm md:text-base text-text-tertiary mt-2 font-medium">
            छत्तीसगढ़ी अनुवाद के साथ
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-border" />
            <Icons.Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent opacity-60" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </header>

      {/* ── Resume Reading ── */}
      <div className="px-4 md:px-6 mb-6">
        <Link
          href={readingPosition ? `/surah/${readingPosition.surah}#ayah-${readingPosition.ayah}` : '/surah/1'}
          className="block w-full bg-accent hover:bg-accent-hover text-badge-text text-center py-4 rounded-2xl font-semibold text-base md:text-lg shadow-lg shadow-accent/20 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
        >
          {readingPosition ? (
            <span className="flex items-center justify-center gap-2">
              <Icons.Bookmark className="w-5 h-5" />
              Resume: {readingPosition.surahName} — Ayah {readingPosition.ayah}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Icons.Play className="w-5 h-5" />
              Start Reading
            </span>
          )}
        </Link>
      </div>

      {/* ── Search ── */}
      <div className="max-w-xl mx-auto mb-8 px-4">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* ── Surah count ── */}
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
          {filteredSurahs.length} Surahs
        </p>
      </div>

      {/* ── Surah List ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pb-12">
          {filteredSurahs.map((surah) => (
            <SurahListItem
              key={surah.number}
              number={surah.number}
              arabicName={surah.arabicName}
              englishName={surah.englishName}
              translation={surah.translation}
              ayahCount={surah.ayahCount}
              revelationType={surah.revelationType}
            />
          ))}
        </div>

        {filteredSurahs.length === 0 && (
          <div className="text-center py-16 px-6">
            <p className="text-text-tertiary text-lg">No surahs found</p>
            <p className="text-text-tertiary text-sm mt-1">Try a different search term</p>
          </div>
        )}
      </div>

      <NavBar activeTab="home" />
    </div>
  );
}
