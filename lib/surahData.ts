export interface Ayah {
    surah: number;
    ayah: number;
    arabic: string;
    english: string;
    chhattisgarhi: string;
}

export interface SurahMeta {
    number: number;
    arabicName: string;
    englishName: string;
    translation: string;
    ayahCount: number;
    revelationType: 'Meccan' | 'Medinan';
}

export interface ReadingPosition {
    surah: number;
    ayah: number;
    surahName: string;
}

// Surah metadata for surahs 1–73
export const surahList: SurahMeta[] = [
    { number: 1, arabicName: 'الفاتحة', englishName: 'Al-Fatihah', translation: 'The Opening', ayahCount: 7, revelationType: 'Meccan' },
    { number: 2, arabicName: 'البقرة', englishName: 'Al-Baqarah', translation: 'The Cow', ayahCount: 286, revelationType: 'Medinan' },
    { number: 3, arabicName: 'آل عمران', englishName: "Ali 'Imran", translation: 'Family of Imran', ayahCount: 200, revelationType: 'Medinan' },
    { number: 4, arabicName: 'النساء', englishName: 'An-Nisa', translation: 'The Women', ayahCount: 176, revelationType: 'Medinan' },
    { number: 5, arabicName: 'المائدة', englishName: "Al-Ma'idah", translation: 'The Table Spread', ayahCount: 120, revelationType: 'Medinan' },
    { number: 6, arabicName: 'الأنعام', englishName: "Al-An'am", translation: 'The Cattle', ayahCount: 165, revelationType: 'Meccan' },
    { number: 7, arabicName: 'الأعراف', englishName: "Al-A'raf", translation: 'The Heights', ayahCount: 206, revelationType: 'Meccan' },
    { number: 8, arabicName: 'الأنفال', englishName: 'Al-Anfal', translation: 'The Spoils of War', ayahCount: 75, revelationType: 'Medinan' },
    { number: 9, arabicName: 'التوبة', englishName: 'At-Tawbah', translation: 'The Repentance', ayahCount: 129, revelationType: 'Medinan' },
    { number: 10, arabicName: 'يونس', englishName: 'Yunus', translation: 'Jonah', ayahCount: 109, revelationType: 'Meccan' },
    { number: 11, arabicName: 'هود', englishName: 'Hud', translation: 'Hud', ayahCount: 123, revelationType: 'Meccan' },
    { number: 12, arabicName: 'يوسف', englishName: 'Yusuf', translation: 'Joseph', ayahCount: 111, revelationType: 'Meccan' },
    { number: 13, arabicName: 'الرعد', englishName: "Ar-Ra'd", translation: 'The Thunder', ayahCount: 43, revelationType: 'Medinan' },
    { number: 14, arabicName: 'إبراهيم', englishName: 'Ibrahim', translation: 'Abraham', ayahCount: 52, revelationType: 'Meccan' },
    { number: 15, arabicName: 'الحجر', englishName: 'Al-Hijr', translation: 'The Rocky Tract', ayahCount: 99, revelationType: 'Meccan' },
    { number: 16, arabicName: 'النحل', englishName: 'An-Nahl', translation: 'The Bee', ayahCount: 128, revelationType: 'Meccan' },
    { number: 17, arabicName: 'الإسراء', englishName: "Al-Isra'", translation: 'The Night Journey', ayahCount: 111, revelationType: 'Meccan' },
    { number: 18, arabicName: 'الكهف', englishName: 'Al-Kahf', translation: 'The Cave', ayahCount: 110, revelationType: 'Meccan' },
    { number: 19, arabicName: 'مريم', englishName: 'Maryam', translation: 'Mary', ayahCount: 98, revelationType: 'Meccan' },
    { number: 20, arabicName: 'طه', englishName: 'Ta-Ha', translation: 'Ta-Ha', ayahCount: 135, revelationType: 'Meccan' },
    { number: 21, arabicName: 'الأنبياء', englishName: "Al-Anbiya'", translation: 'The Prophets', ayahCount: 112, revelationType: 'Meccan' },
    { number: 22, arabicName: 'الحج', englishName: 'Al-Hajj', translation: 'The Pilgrimage', ayahCount: 78, revelationType: 'Medinan' },
    { number: 23, arabicName: 'المؤمنون', englishName: "Al-Mu'minun", translation: 'The Believers', ayahCount: 118, revelationType: 'Meccan' },
    { number: 24, arabicName: 'النور', englishName: 'An-Nur', translation: 'The Light', ayahCount: 64, revelationType: 'Medinan' },
    { number: 25, arabicName: 'الفرقان', englishName: 'Al-Furqan', translation: 'The Criterion', ayahCount: 77, revelationType: 'Meccan' },
    { number: 26, arabicName: 'الشعراء', englishName: "Ash-Shu'ara'", translation: 'The Poets', ayahCount: 227, revelationType: 'Meccan' },
    { number: 27, arabicName: 'النمل', englishName: 'An-Naml', translation: 'The Ant', ayahCount: 93, revelationType: 'Meccan' },
    { number: 28, arabicName: 'القصص', englishName: 'Al-Qasas', translation: 'The Stories', ayahCount: 88, revelationType: 'Meccan' },
    { number: 29, arabicName: 'العنكبوت', englishName: "Al-'Ankabut", translation: 'The Spider', ayahCount: 69, revelationType: 'Meccan' },
    { number: 30, arabicName: 'الروم', englishName: 'Ar-Rum', translation: 'The Romans', ayahCount: 60, revelationType: 'Meccan' },
    { number: 31, arabicName: 'لقمان', englishName: 'Luqman', translation: 'Luqman', ayahCount: 34, revelationType: 'Meccan' },
    { number: 32, arabicName: 'السجدة', englishName: 'As-Sajdah', translation: 'The Prostration', ayahCount: 30, revelationType: 'Meccan' },
    { number: 33, arabicName: 'الأحزاب', englishName: 'Al-Ahzab', translation: 'The Combined Forces', ayahCount: 73, revelationType: 'Medinan' },
    { number: 34, arabicName: 'سبأ', englishName: "Saba'", translation: 'Sheba', ayahCount: 54, revelationType: 'Meccan' },
    { number: 35, arabicName: 'فاطر', englishName: 'Fatir', translation: 'Originator', ayahCount: 45, revelationType: 'Meccan' },
    { number: 36, arabicName: 'يس', englishName: 'Ya-Sin', translation: 'Ya-Sin', ayahCount: 83, revelationType: 'Meccan' },
    { number: 37, arabicName: 'الصافات', englishName: 'As-Saffat', translation: 'Those who set the Ranks', ayahCount: 182, revelationType: 'Meccan' },
    { number: 38, arabicName: 'ص', englishName: 'Sad', translation: 'Sad', ayahCount: 88, revelationType: 'Meccan' },
    { number: 39, arabicName: 'الزمر', englishName: 'Az-Zumar', translation: 'The Troops', ayahCount: 75, revelationType: 'Meccan' },
    { number: 40, arabicName: 'غافر', englishName: 'Ghafir', translation: 'The Forgiver', ayahCount: 85, revelationType: 'Meccan' },
    { number: 41, arabicName: 'فصلت', englishName: 'Fussilat', translation: 'Explained in Detail', ayahCount: 54, revelationType: 'Meccan' },
    { number: 42, arabicName: 'الشورى', englishName: 'Ash-Shura', translation: 'The Consultation', ayahCount: 53, revelationType: 'Meccan' },
    { number: 43, arabicName: 'الزخرف', englishName: 'Az-Zukhruf', translation: 'The Ornaments of Gold', ayahCount: 89, revelationType: 'Meccan' },
    { number: 44, arabicName: 'الدخان', englishName: 'Ad-Dukhan', translation: 'The Smoke', ayahCount: 59, revelationType: 'Meccan' },
    { number: 45, arabicName: 'الجاثية', englishName: 'Al-Jathiyah', translation: 'The Crouching', ayahCount: 37, revelationType: 'Meccan' },
    { number: 46, arabicName: 'الأحقاف', englishName: 'Al-Ahqaf', translation: 'The Wind-Curved Sandhills', ayahCount: 35, revelationType: 'Meccan' },
    { number: 47, arabicName: 'محمد', englishName: 'Muhammad', translation: 'Muhammad', ayahCount: 38, revelationType: 'Medinan' },
    { number: 48, arabicName: 'الفتح', englishName: 'Al-Fath', translation: 'The Victory', ayahCount: 29, revelationType: 'Medinan' },
    { number: 49, arabicName: 'الحجرات', englishName: 'Al-Hujurat', translation: 'The Rooms', ayahCount: 18, revelationType: 'Medinan' },
    { number: 50, arabicName: 'ق', englishName: 'Qaf', translation: 'Qaf', ayahCount: 45, revelationType: 'Meccan' },
    { number: 51, arabicName: 'الذاريات', englishName: 'Adh-Dhariyat', translation: 'The Winnowing Winds', ayahCount: 60, revelationType: 'Meccan' },
    { number: 52, arabicName: 'الطور', englishName: 'At-Tur', translation: 'The Mount', ayahCount: 49, revelationType: 'Meccan' },
    { number: 53, arabicName: 'النجم', englishName: 'An-Najm', translation: 'The Star', ayahCount: 62, revelationType: 'Meccan' },
    { number: 54, arabicName: 'القمر', englishName: 'Al-Qamar', translation: 'The Moon', ayahCount: 55, revelationType: 'Meccan' },
    { number: 55, arabicName: 'الرحمن', englishName: 'Ar-Rahman', translation: 'The Beneficent', ayahCount: 78, revelationType: 'Medinan' },
    { number: 56, arabicName: 'الواقعة', englishName: "Al-Waqi'ah", translation: 'The Inevitable', ayahCount: 96, revelationType: 'Meccan' },
    { number: 57, arabicName: 'الحديد', englishName: 'Al-Hadid', translation: 'The Iron', ayahCount: 29, revelationType: 'Medinan' },
    { number: 58, arabicName: 'المجادلة', englishName: 'Al-Mujadila', translation: 'The Pleading Woman', ayahCount: 22, revelationType: 'Medinan' },
    { number: 59, arabicName: 'الحشر', englishName: 'Al-Hashr', translation: 'The Exile', ayahCount: 24, revelationType: 'Medinan' },
    { number: 60, arabicName: 'الممتحنة', englishName: 'Al-Mumtahanah', translation: 'She that is to be Examined', ayahCount: 13, revelationType: 'Medinan' },
    { number: 61, arabicName: 'الصف', englishName: 'As-Saf', translation: 'The Ranks', ayahCount: 14, revelationType: 'Medinan' },
    { number: 62, arabicName: 'الجمعة', englishName: "Al-Jumu'ah", translation: 'The Congregation', ayahCount: 11, revelationType: 'Medinan' },
    { number: 63, arabicName: 'المنافقون', englishName: 'Al-Munafiqun', translation: 'The Hypocrites', ayahCount: 11, revelationType: 'Medinan' },
    { number: 64, arabicName: 'التغابن', englishName: 'At-Taghabun', translation: 'The Mutual Disillusion', ayahCount: 18, revelationType: 'Medinan' },
    { number: 65, arabicName: 'الطلاق', englishName: 'At-Talaq', translation: 'The Divorce', ayahCount: 12, revelationType: 'Medinan' },
    { number: 66, arabicName: 'التحريم', englishName: 'At-Tahrim', translation: 'The Prohibition', ayahCount: 12, revelationType: 'Medinan' },
    { number: 67, arabicName: 'الملك', englishName: 'Al-Mulk', translation: 'The Sovereignty', ayahCount: 30, revelationType: 'Meccan' },
    { number: 68, arabicName: 'القلم', englishName: 'Al-Qalam', translation: 'The Pen', ayahCount: 52, revelationType: 'Meccan' },
    { number: 69, arabicName: 'الحاقة', englishName: 'Al-Haqqah', translation: 'The Reality', ayahCount: 52, revelationType: 'Meccan' },
    { number: 70, arabicName: 'المعارج', englishName: "Al-Ma'arij", translation: 'The Ascending Stairways', ayahCount: 44, revelationType: 'Meccan' },
    { number: 71, arabicName: 'نوح', englishName: 'Nuh', translation: 'Noah', ayahCount: 28, revelationType: 'Meccan' },
    { number: 72, arabicName: 'الجن', englishName: 'Al-Jinn', translation: 'The Jinn', ayahCount: 28, revelationType: 'Meccan' },
    { number: 73, arabicName: 'المزمل', englishName: 'Al-Muzzammil', translation: 'The Enshrouded One', ayahCount: 20, revelationType: 'Meccan' },
];

// Reading position helpers
export function getReadingPosition(): ReadingPosition | null {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('quran-reading-position');
    if (!stored) return null;
    try {
        return JSON.parse(stored);
    } catch {
        return null;
    }
}

export function setReadingPosition(position: ReadingPosition): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('quran-reading-position', JSON.stringify(position));
}

// Load ayah data for a surah
export async function loadSurahAyahs(surahNumber: number): Promise<Ayah[]> {
    const res = await fetch(`/data/surah-${surahNumber}.json`);
    if (!res.ok) return [];
    return res.json();
}
