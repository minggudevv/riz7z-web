# R7Z Crypto Landing Page

A modern, responsive landing page for the R7Z cryptocurrency project built with React and Tailwind CSS.

## Features

- 🌙 **Dark Mode Design** - Modern dark theme with blue, red, and white color scheme
- 🌍 **Multi-language Support** - Auto-detect language (Indonesian/English) with manual toggle
- ✨ **Particle Animation** - Interactive cosmic particle background effect
- 📱 **Mobile First** - Fully responsive design optimized for all devices
- 🎭 **Smooth Animations** - Scroll reveal animations and hover effects using Framer Motion
- 🎨 **Modern UI** - Flat design with gradient effects and glowing elements

## Sections

1. **Hero Section** - Logo, tagline, and community links
2. **About R7Z** - Project description and key features
3. **Token Information** - Blockchain details, supply, addresses, and PancakeSwap link
4. **Roadmap** - Project milestones and progress tracking
5. **Tokenomics** - Coming soon placeholder
6. **FAQ** - Frequently asked questions with expandable answers
7. **Community & Contact** - Social media links and contact information
8. **Footer** - Navigation and additional links

## Technology Stack

- **React 19** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll-triggered animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── LanguageContext.js    # Language management
│   ├── ParticleBackground.js # Animated background
│   ├── Navbar.js            # Navigation bar
│   ├── Hero.js              # Hero section
│   ├── About.js             # About section
│   ├── TokenInfo.js         # Token information
│   ├── Roadmap.js           # Project roadmap
│   ├── Tokenomics.js        # Tokenomics section
│   ├── FAQ.js               # FAQ section
│   ├── Community.js         # Community links
│   └── Footer.js            # Footer
├── App.js                   # Main app component
├── index.js                 # App entry point
└── index.css                # Global styles with Tailwind
```

## Customization

The project uses a custom color scheme defined in `tailwind.config.js`:
- `r7z-blue`: #3B82F6
- `r7z-red`: #EF4444
- `r7z-dark`: #0F0F23
- `r7z-darker`: #0A0A1A

## License

This project is private and proprietary to R7Z.