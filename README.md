# Quran Chhattisgarhi 📖

> **القرآن الكريم** - A beautiful Quran reading application with Chhattisgarhi translation

A modern, responsive web application for reading the Holy Quran with Chhattisgarhi translation alongside Arabic text and English translations. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🌙 Dark/Light Theme** - Toggle between dark and light modes for comfortable reading
- **🔍 Smart Search** - Search surahs by Arabic name, English name, translation, or surah number
- **📖 Reading Progress** - Bookmark and resume reading from where you left off
- **🎨 Beautiful Typography** - Optimized Arabic text rendering with proper font support
- **⚡ Fast Performance** - Built with Next.js 15 and optimized for speed
- **🎯 Accessibility** - Designed with accessibility best practices in mind

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quran-chhattisgarhi.git
   cd quran-chhattisgarhi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Ready for [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any Node.js hosting

## 📁 Project Structure

```
quran-chhattisgarhi/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page - Surah list
│   ├── read/              # Reading interface
│   ├── settings/          # App settings
│   ├── surah/[id]/        # Individual surah pages
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── AyahCard.tsx      # Individual ayah display
│   ├── Icons.tsx         # Icon components
│   ├── NavBar.tsx        # Bottom navigation
│   ├── SearchBar.tsx     # Search functionality
│   ├── StickyHeader.tsx  # Surah header
│   ├── SurahListItem.tsx # Surah list item
│   └── ThemeToggle.tsx   # Dark/light theme toggle
├── lib/                   # Utility functions and data
│   └── surahData.ts      # Quran data and types
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Features in Detail

### 🏠 Home Page
- Complete list of all 114 surahs
- Search functionality across Arabic, English, and Chhattisgarhi names
- Resume reading from last position
- Beautiful Arabic typography with proper RTL support

### 📖 Reading Interface
- Side-by-side Arabic and Chhattisgarhi text
- English translation support
- Smooth scrolling and navigation
- Reading progress tracking
- Responsive design for all screen sizes

### ⚙️ Settings
- Theme toggle (Dark/Light mode)
- Font size adjustments
- Reading preferences
- Data management options

### 🔍 Search
- Real-time search across all surah metadata
- Search by surah number, Arabic name, English name, or translation
- Instant results with highlighting

## 🌐 Supported Languages

- **Arabic** (القرآن الكريم) - Original Quranic text
- **English** - Translation and interface
- **Chhattisgarhi** (छत्तीसगढ़ी) - Regional translation

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/quran-chhattisgarhi)

### Deploy on Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/quran-chhattisgarhi)

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow the existing code style and conventions
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design for all new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Quran Text**: The Arabic text of the Holy Quran
- **Translations**: Chhattisgarhi and English translations
- **Design Inspiration**: Modern Islamic app design principles
- **Open Source**: Built with love using open-source technologies

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/quran-chhattisgarhi/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🔄 Changelog

### Version 0.1.0
- Initial release
- Basic Quran reading functionality
- Chhattisgarhi translation support
- Dark/Light theme toggle
- Responsive design
- Search functionality
- Reading progress tracking

---

**Made with ❤️ for the Muslim community**

*"وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ"*

*"And We send down of the Quran that which is healing and mercy for the believers"* - Quran 17:82