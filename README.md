# RIZ7Z Crypto Landing Page

A modern, responsive landing page for the RIZ7Z cryptocurrency project built with React and Tailwind CSS.

## 📋 Changelog

For detailed information about recent changes, updates, and new features, please see [CHANGELOG.md](./CHANGELOG.md).

## Features

- 🌙 **Dark Mode Design** - Modern dark theme with blue, red, and white color scheme
- 🌍 **Multi-language Support** - Auto-detect language (Indonesian/English) with manual toggle
- ✨ **Particle Animation** - Interactive cosmic particle background effect
- 📱 **Mobile First** - Fully responsive design optimized for all devices
- 🎭 **Smooth Animations** - Scroll reveal animations and hover effects using Framer Motion
- 🎨 **Modern UI** - Flat design with gradient effects and glowing elements
- 🔔 **Notification System** - Toast notifications for user interactions
- 📋 **Copy to Clipboard** - Easy copying of token addresses and contract information

## Sections

1. **Hero Section** - Logo, tagline, token symbol, and community links
2. **About RIZ7Z** - Project description and key features
3. **Token Information** - Symbol, blockchain details, supply, addresses, and PancakeSwap link
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
- Docker (optional, for containerized deployment)

### Installation

#### Option 1: Traditional Installation

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

#### Option 2: Docker Installation

1. Clone the repository
2. Build and run with Docker Compose:
   ```bash
   # Production build
   docker-compose up --build
   
   # Development mode
   docker-compose --profile dev up --build
   ```

3. Access the application:
   - Production: [http://localhost:3000](http://localhost:3000)
   - Development: [http://localhost:3001](http://localhost:3001)

#### Docker Commands

```bash
# Build production image
docker build -t riz7z-web .

# Run production container
docker run -p 3000:80 riz7z-web

# Build development image
docker build -f Dockerfile.dev -t riz7z-web-dev .

# Run development container
docker run -p 3001:3000 -v $(pwd):/app -v /app/node_modules riz7z-web-dev

# Stop all containers
docker-compose down

# View logs
docker-compose logs -f
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── LanguageContext.js      # Language management
│   ├── NotificationContext.js  # Notification state management
│   ├── Notification.js         # Toast notification component
│   ├── ParticleBackground.js   # Animated background
│   ├── Navbar.js              # Navigation bar
│   ├── Hero.js                # Hero section
│   ├── About.js               # About section
│   ├── TokenInfo.js           # Token information
│   ├── Roadmap.js             # Project roadmap
│   ├── Tokenomics.js          # Tokenomics section
│   ├── FAQ.js                 # FAQ section
│   ├── Community.js           # Community links
│   └── Footer.js              # Footer
├── App.js                     # Main app component
├── index.js                   # App entry point
└── index.css                  # Global styles with Tailwind
```

## Customization

The project uses a custom color scheme defined in `tailwind.config.js`:
- `r7z-blue`: #3B82F6
- `r7z-red`: #EF4444
- `r7z-dark`: #0F0F23
- `r7z-darker`: #0A0A1A

## License

This project is licensed under the **GNU Lesser General Public License v2.1 (LGPLv2.1)**.

### What this means:
- ✅ **Free to use** - You can use this code for any purpose
- ✅ **Free to modify** - You can modify and customize the code
- ✅ **Free to distribute** - You can share and redistribute the code
- ✅ **Commercial use allowed** - You can use it in commercial projects
- ✅ **Linking allowed** - You can link it with proprietary software

### Requirements:
- 📋 **Attribution** - You must include the original copyright notice
- 📋 **License inclusion** - You must include a copy of the LGPLv2.1 license
- 📋 **Source code** - If you distribute the library, you must provide source code

For the complete license terms, see [LICENSE.md](./LICENSE.md).

**Copyright © 2025 RIZ7Z - MingguDev**

---

## Recent Updates

- **v1.2.0**: Enhanced branding with RIZ7Z name, added notification system, comprehensive translations, footer fixes, and LGPLv2.1 license
- **v1.1.0**: Multi-language support (Indonesian/English)
- **v1.0.0**: Initial release with core features

For complete changelog, see [CHANGELOG.md](./CHANGELOG.md).