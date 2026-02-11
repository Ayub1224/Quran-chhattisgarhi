'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import StickyHeader from '@/components/StickyHeader';
import { useTheme } from '@/context/ThemeContext';
import { Icons } from '@/components/Icons';

export default function SettingsPage() {
    const { theme, toggleTheme } = useTheme();
    const [fontSize, setFontSize] = useState(50); // 0-100 slider

    return (
        <div className="pb-24">
            <StickyHeader
                title="Settings"
                showBack={true}
                showThemeToggle={false}
            />

            <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 space-y-5">

                {/* ── Appearance ── */}
                <section className="bg-bg-card rounded-2xl border border-border-light overflow-hidden shadow-sm">
                    <div className="px-5 pt-5 pb-1">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Appearance</h2>
                    </div>

                    <div className="px-5 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {theme === 'light' ? (
                                    <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center">
                                        <Icons.Sun className="w-5 h-5 text-accent" />
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center">
                                        <Icons.Moon className="w-5 h-5 text-accent" />
                                    </div>
                                )}
                                <div>
                                    <p className="text-base font-semibold text-text-primary">
                                        {theme === 'light' ? 'Day Mode' : 'Night Mode'}
                                    </p>
                                    <p className="text-xs text-text-tertiary">
                                        {theme === 'light' ? 'Warm parchment reading' : 'Easy on the eyes at night'}
                                    </p>
                                </div>
                            </div>

                            {/* Toggle switch */}
                            <button
                                onClick={toggleTheme}
                                className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-accent' : 'bg-border'
                                    }`}
                                aria-label="Toggle theme"
                            >
                                <span
                                    className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${theme === 'dark' ? 'left-7' : 'left-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── Language ── */}
                <section className="bg-bg-card rounded-2xl border border-border-light overflow-hidden shadow-sm">
                    <div className="px-5 pt-5 pb-1">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Language</h2>
                    </div>

                    <div className="px-5 py-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <p className="text-base text-text-primary font-medium">Translation Language</p>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-surface border border-border-light">
                                <span className="text-sm text-text-primary">छत्तीसगढ़ी (Chhattisgarhi)</span>
                            </div>
                        </div>

                        <p className="text-xs text-text-tertiary italic flex items-center gap-1.5">
                            <Icons.Info className="w-3.5 h-3.5" />
                            Coming soon: Urdu, Hindi, Tamil
                        </p>
                    </div>
                </section>

                {/* ── Reading ── */}
                <section className="bg-bg-card rounded-2xl border border-border-light overflow-hidden shadow-sm">
                    <div className="px-5 pt-5 pb-1">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Reading</h2>
                    </div>

                    <div className="px-5 py-4 space-y-5">
                        {/* Font size slider */}
                        <div>
                            <div className="flex items-center justify-between mb-2.5">
                                <p className="text-base text-text-primary font-medium">Font Size</p>
                                <span className="text-xs text-text-tertiary font-mono">{fontSize}%</span>
                            </div>
                            <input
                                type="range"
                                min="30"
                                max="100"
                                value={fontSize}
                                onChange={(e) => setFontSize(Number(e.target.value))}
                                className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-border accent-accent"
                            />
                            <div className="flex justify-between mt-1">
                                <span className="text-[10px] text-text-tertiary">A</span>
                                <span className="text-sm text-text-tertiary font-bold">A</span>
                            </div>
                        </div>

                        {/* Arabic font */}
                        <div className="flex items-center justify-between">
                            <p className="text-base text-text-primary font-medium">Arabic Font</p>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-surface border border-border-light">
                                <span className="text-sm text-text-primary arabic-text">Noto Naskh Arabic</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── About ── */}
                <section className="bg-bg-card rounded-2xl border border-border-light overflow-hidden shadow-sm">
                    <div className="px-5 pt-5 pb-1">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-accent">About</h2>
                    </div>

                    <div className="px-5 py-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-text-secondary">Version</p>
                            <span className="text-sm font-mono text-text-tertiary">1.0.0</span>
                        </div>
                        <div className="pt-2 border-t border-border-light">
                            <p className="text-sm text-text-tertiary text-center">
                                Made with ❤️ for the Chhattisgarhi community
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <NavBar activeTab="settings" />
        </div>
    );
}
