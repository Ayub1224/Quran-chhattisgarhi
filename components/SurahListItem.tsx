import Link from 'next/link';

interface SurahListItemProps {
    number: number;
    arabicName: string;
    englishName: string;
    translation: string;
    ayahCount: number;
    revelationType: string;
}

export default function SurahListItem({
    number,
    arabicName,
    englishName,
    translation,
    ayahCount,
    revelationType,
}: SurahListItemProps) {
    return (
        <Link href={`/surah/${number}`} className="block group h-full">
            <div className="flex items-center gap-4 px-4 py-4 md:px-6 md:py-5 hover:bg-bg-surface transition-colors duration-150 rounded-xl border border-transparent hover:border-border-light h-full mx-2 md:mx-0">
                {/* Number badge */}
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-badge-bg text-badge-text flex items-center justify-center text-sm md:text-base font-bold shadow-sm">
                    {number}
                </div>

                {/* English info */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
                        {englishName}
                    </h3>
                    <p className="text-xs md:text-sm text-text-tertiary mt-0.5 truncate">
                        {translation} • {ayahCount} Ayahs
                    </p>
                </div>

                {/* Arabic name */}
                <div className="flex-shrink-0 text-right">
                    <p className="arabic-text text-xl md:text-2xl text-text-primary font-medium group-hover:text-accent transition-colors">
                        {arabicName}
                    </p>
                    <p className="text-[10px] text-text-tertiary md:hidden">
                        {revelationType}
                    </p>
                </div>
            </div>
        </Link>
    );
}
