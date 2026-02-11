interface AyahCardProps {
    ayahNumber: number;
    arabic: string;
    english: string;
    chhattisgarhi: string;
    isHighlighted?: boolean;
}

export default function AyahCard({ ayahNumber, arabic, english, chhattisgarhi, isHighlighted = false }: AyahCardProps) {
    return (
        <div
            className={`relative py-8 md:py-12 px-6 transition-colors duration-200 border-b border-border-light last:border-0 ${isHighlighted ? 'bg-accent-soft/50' : ''
                }`}
            id={`ayah-${ayahNumber}`}
        >
            <div className="max-w-3xl mx-auto">
                {/* Ayah number badge */}
                <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-badge-bg/10 text-badge-bg border border-badge-bg/20 text-sm md:text-base font-bold">
                        {ayahNumber}
                    </span>
                </div>

                {/* Arabic text */}
                <p className="arabic-text text-3xl md:text-5xl text-center text-text-primary font-medium mb-8 leading-[2.5] md:leading-[2.2]">
                    {arabic}
                </p>

                {/* English translation */}
                <div className="mb-4">
                    <p className="text-base md:text-xl text-text-secondary leading-relaxed">
                        {english}
                    </p>
                </div>

                {/* Chhattisgarhi translation */}
                <div>
                    <p className="devanagari-text text-base md:text-xl text-text-tertiary leading-relaxed font-light">
                        {chhattisgarhi}
                    </p>
                </div>
            </div>
        </div>
    );
}
