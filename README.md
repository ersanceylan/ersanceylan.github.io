# Ersan Ceylan Portfolio

A modern, responsive portfolio website built with Next.js featuring smooth scrolling sections and swipe navigation.

## Features

- ✨ **Smooth Scrolling**: Navigate between sections with smooth scrolling animations
- 📱 **Swipe Navigation**: Touch/swipe gestures for mobile navigation
- ⌨️ **Keyboard Navigation**: Arrow keys, space, home/end key support
- 🎨 **Modern Design**: Clean, contemporary design with Tailwind CSS
- 🌙 **Dark Mode Ready**: Built-in dark mode support
- 📱 **Responsive**: Optimized for all screen sizes
- ⚡ **Performance**: Optimized with Next.js 14 and static export
- 🔧 **TypeScript**: Fully typed for better development experience

## Sections

1. **Hero** - Introduction and personal branding
2. **About** - Personal journey and experience timeline
3. **Skills** - Technical skills with progress indicators
4. **Projects** - Featured and other notable projects
5. **Contact** - Contact form and social links

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Static export for GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ersanceylan/ersanceylan.github.io.git
   cd ersanceylan.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized static build in the `out` directory.

## Navigation Controls

- **Mouse**: Scroll wheel to navigate between sections
- **Touch**: Swipe up/down on mobile devices
- **Keyboard**:
  - ↑/↓ Arrow keys to navigate
  - Space bar to go to next section
  - Home key to go to first section
  - End key to go to last section

## Customization

### Update Personal Information

Edit `/src/lib/data.ts` to update:

- Personal info (name, title, bio, avatar)
- Skills and technologies
- Project details
- Experience timeline
- Contact information

### Modify Sections

Individual section components are located in `/src/components/`:

- `HeroSection.tsx`
- `AboutSection.tsx`
- `SkillsSection.tsx`
- `ProjectsSection.tsx`
- `ContactSection.tsx`

### Styling

- Global styles: `/src/app/globals.css`
- Tailwind config: `/tailwind.config.js`
- Component-specific styles are inline with Tailwind classes

## Deployment

The portfolio is configured for static export and can be deployed to:

- **GitHub Pages**: Push to your repository and enable Pages
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder after building

### GitHub Pages Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Configure your repository settings to deploy from the `out` folder

## Performance

- ⚡ Lighthouse Score: 95+
- 📦 First Load JS: ~132 kB
- 🎯 Core Web Vitals optimized
- 🚀 Static generation for fast loading

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)
