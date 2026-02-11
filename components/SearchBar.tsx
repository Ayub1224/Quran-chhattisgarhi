import { Icons } from './Icons';

interface SearchBarProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Search Surah...' }: SearchBarProps) {
    return (
        <div className="relative mx-4 md:mx-6">
            {/* Search icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icons.Search className="w-5 h-5 text-text-tertiary" />
            </div>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-12 pr-4 py-3 md:py-3.5 rounded-2xl bg-bg-card border border-border text-text-primary placeholder:text-text-tertiary text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 shadow-sm"
            />

            {/* Clear button */}
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-tertiary hover:text-text-primary transition-colors"
                >
                    <Icons.Close className="w-5 h-5" />
                </button>
            )}
        </div>
    );
}
