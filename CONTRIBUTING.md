# Contributing to Quran Chhattisgarhi 🤝

Thank you for your interest in contributing to the Quran Chhattisgarhi project! We welcome contributions from developers, designers, translators, and anyone who wants to help improve this Islamic application.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Git
- A code editor (VS Code recommended)

### Setting Up Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/quran-chhattisgarhi.git
   cd quran-chhattisgarhi
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How to Contribute

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When submitting a bug report, include:**
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and device information
- Console errors (if any)

### 💡 Suggesting Features

We welcome feature suggestions! Please:
- Check existing issues for similar requests
- Provide detailed description of the feature
- Explain why it would be beneficial
- Include mockups or examples if possible

### 🔧 Code Contributions

#### Types of Contributions Welcome

- **Bug fixes** - Fix existing issues
- **New features** - Add functionality (discuss first in issues)
- **UI/UX improvements** - Enhance user experience
- **Performance optimizations** - Make the app faster
- **Accessibility improvements** - Make it more accessible
- **Documentation** - Improve or add documentation
- **Tests** - Add or improve test coverage
- **Translations** - Help with Chhattisgarhi or other translations

#### Development Workflow

1. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly:
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "feat: add dark mode toggle to settings page"
   # or
   git commit -m "fix: resolve search not working on mobile"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

#### Coding Standards

**TypeScript & React**
- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use functional components with hooks
- Implement proper error boundaries where needed

**Styling**
- Use Tailwind CSS for styling
- Follow the existing design system
- Ensure responsive design (mobile-first approach)
- Test on multiple screen sizes

**Code Quality**
- Write self-documenting code with clear variable names
- Add comments for complex logic
- Follow the existing code structure and patterns
- Ensure proper TypeScript types

**Performance**
- Optimize images and assets
- Use Next.js features appropriately (SSG, SSR, etc.)
- Minimize bundle size
- Implement proper loading states

#### Commit Message Format

We follow conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(search): add real-time search suggestions
fix(mobile): resolve navigation menu not closing
docs(readme): update installation instructions
style(components): improve button hover animations
```

### 📝 Translation Contributions

We especially welcome help with:
- **Chhattisgarhi translations** - Improve existing or add missing translations
- **Other regional languages** - Help add support for other Indian languages
- **UI text translations** - Translate interface elements

### 🎨 Design Contributions

- UI/UX improvements
- Icon design
- Color scheme suggestions
- Typography improvements
- Accessibility enhancements

## 📋 Pull Request Process

1. **Ensure your PR addresses an issue** (create one if needed)
2. **Update documentation** if you change functionality
3. **Add tests** for new features when applicable
4. **Ensure the build passes** (`npm run build`)
5. **Request review** from maintainers
6. **Address feedback** promptly and respectfully

### PR Checklist

- [ ] Code follows project conventions
- [ ] Changes are tested on multiple devices/browsers
- [ ] Documentation is updated (if needed)
- [ ] Commit messages follow conventional format
- [ ] No console errors or warnings
- [ ] Responsive design is maintained
- [ ] Accessibility is considered

## 🤔 Questions or Need Help?

- **GitHub Issues** - For bug reports and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Email** - For sensitive matters or direct contact

## 📜 Code of Conduct

### Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone, regardless of:
- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience, education, socio-economic status
- Nationality, personal appearance, race, religion
- Sexual identity and orientation

### Our Standards

**Positive behavior includes:**
- Being respectful and inclusive
- Being collaborative and helpful
- Focusing on what's best for the community
- Showing empathy towards others

**Unacceptable behavior includes:**
- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Publishing private information without permission
- Any conduct inappropriate in a professional setting

### Enforcement

Project maintainers are responsible for clarifying standards and will take appropriate action in response to unacceptable behavior.

## 🎉 Recognition

Contributors will be:
- Listed in the project's contributors section
- Mentioned in release notes for significant contributions
- Given credit in documentation they help create

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Thank you for contributing to the Quran Chhattisgarhi project! 🙏**

*May your contributions be a source of continuous reward (Sadaqah Jariyah) and benefit the Muslim community worldwide.*