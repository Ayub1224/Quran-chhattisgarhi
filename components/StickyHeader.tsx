'use client';

import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { Icons } from './Icons';

interface StickyHeaderProps {
    title: string;
    arabicTitle?: string;
    subtitle?: string;
    showBack?: boolean;
    showThemeToggle?: boolean;
}

export default function StickyHeader({
    title,
    arabicTitle,
    subtitle,
    showBack = true,
    showThemeToggle = true,
}: StickyHeaderProps) {
    const router = useRouter();

    return (
        <header className="sticky top-0 md:top-[64px] z-40 bg-bg-primary/95 backdrop-blur-md border-b border-border-light transition-all">
            <div className="max-w-lg mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* Left: Back button */}
                <div className="w-10">
                    {showBack && (
                        <button
                            onClick={() => router.back()}
                            className="p-2 -ml-2 rounded-xl hover:bg-bg-surface transition-colors"
                            aria-label="Go back"
                        >
                            <Icons.Back className="w-5 h-5 text-text-primary" />
                        </button>
                    )}
                </div>

                {/* Center: Title */}
                <div className="flex-1 text-center">
                    {arabicTitle && (
                        <p className="arabic-text text-lg md:text-xl text-text-primary font-semibold leading-tight">
                            {arabicTitle}
                        </p>
                    )}
                    <h1 className="text-sm md:text-base font-semibold text-text-primary">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xs text-text-tertiary mt-0.5">{subtitle}</p>
                    )}
                </div>

                {/* Right: Theme toggle */}
                <div className="w-10 flex justify-end md:hidden">
                    {showThemeToggle && <ThemeToggle />}
                </div>
            </div>
        </header>
    );
}
