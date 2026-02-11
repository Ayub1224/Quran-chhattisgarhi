'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { Icons } from './Icons';

interface NavBarProps {
    activeTab?: 'home' | 'read' | 'surah' | 'settings';
}

const tabs = [
    {
        id: 'home' as const,
        label: 'Home',
        href: '/',
        Icon: Icons.Home,
    },
    {
        id: 'read' as const,
        label: 'Read',
        href: '/read',
        Icon: Icons.Read,
    },
    {
        id: 'surah' as const,
        label: 'Surah',
        href: '/surah/1',
        Icon: Icons.Surah,
    },
    {
        id: 'settings' as const,
        label: 'Settings',
        href: '/settings',
        Icon: Icons.Settings,
    },
];

export default function NavBar({ activeTab }: NavBarProps) {
    const pathname = usePathname();

    const getActiveTab = () => {
        if (activeTab) return activeTab;
        if (pathname === '/') return 'home';
        if (pathname === '/read') return 'read';
        if (pathname.startsWith('/surah')) return 'surah';
        if (pathname === '/settings') return 'settings';
        return 'home';
    };

    const current = getActiveTab();

    return (
        <>
            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-nav-bg border-t border-nav-border backdrop-blur-sm md:hidden">
                <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-4">
                    {tabs.map((tab) => {
                        const isActive = current === tab.id;
                        return (
                            <Link
                                key={tab.id}
                                href={tab.href}
                                className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 ${isActive
                                    ? 'text-accent scale-105'
                                    : 'text-nav-inactive hover:text-text-secondary'
                                    }`}
                            >
                                <span className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                                    <tab.Icon className="w-6 h-6" />
                                </span>
                                <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                                    {tab.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Desktop Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/90 border-b border-nav-border backdrop-blur-md hidden md:block">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-8">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-accent">Quran Chhattisgarhi</span>
                    </div>

                    {/* Desktop Tabs & Actions */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            {tabs.map((tab) => {
                                const isActive = current === tab.id;
                                return (
                                    <Link
                                        key={tab.id}
                                        href={tab.href}
                                        className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-200 ${isActive
                                            ? 'text-accent bg-accent/5 font-semibold'
                                            : 'text-text-secondary hover:text-accent hover:bg-accent/5'
                                            }`}
                                    >
                                        <span className="w-5 h-5">
                                            <tab.Icon className="w-5 h-5" />
                                        </span>
                                        <span className="text-sm">
                                            {tab.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Divider */}
                        <div className="w-px h-6 bg-border-light"></div>

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </>
    );
}
