'use client';

import { useTheme } from '@/context/ThemeContext';
import { Icons } from './Icons';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl bg-bg-surface hover:bg-border transition-all duration-200 group"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'Night' : 'Day'} mode`}
        >
            {/* Sun icon (visible in light mode) */}
            <Icons.Sun
                className={`w-5 h-5 transition-all duration-300 ${theme === 'light' ? 'text-accent rotate-0 scale-100' : 'text-accent rotate-90 scale-0 absolute'
                    }`}
            />

            {/* Moon icon (visible in dark mode) */}
            <Icons.Moon
                className={`w-5 h-5 transition-all duration-300 ${theme === 'dark' ? 'text-accent rotate-0 scale-100' : 'text-accent -rotate-90 scale-0 absolute'
                    }`}
            />
        </button>
    );
}
