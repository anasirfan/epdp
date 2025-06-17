# EPDP Next.js Application

## Overview

This is a modern, interactive Engineering & Product Development Procedure (EPDP) application built with Next.js, React, and Tailwind CSS. The application provides a comprehensive framework for product development from concept to mass production, with detailed phase information, role-based content highlighting, and reference materials.

## Features

- **Interactive Phase Flow**: Visual representation of the product development lifecycle with interactive phase cards
- **Detailed Phase Information**: Comprehensive information about each phase including objectives, inputs, actions, and outputs
- **Role-Based Content**: Content highlighting based on selected user role (PM, LE, DE, etc.)
- **Multilingual Support**: Full support for English and Chinese languages
- **Reference Tabs**: Access to roles, governance, special cases, FAQs, and glossary information
- **Project Utilities**: Tools for generating project folder structures
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Modern Animations**: Smooth transitions and animations using Framer Motion and AOS
- **Performance Optimized**: Code splitting, lazy loading, and optimized rendering

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **React**: UI library for building component-based interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **Chart.js**: JavaScript charting library for data visualization
- **AOS**: Animate On Scroll library for scroll-based animations
- **React Modal**: Accessible modal dialog component

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- `/src/components`: React components organized by feature
- `/src/context`: React context for global state management
- `/src/data`: Data files for translations and phase information
- `/src/pages`: Next.js pages
- `/src/styles`: Global styles and Tailwind CSS configuration

## Key Components

- **AppContext**: Global state management for language, current phase, selected role, etc.
- **Layout**: Main layout component with header and content areas
- **PhaseFlow**: Visual representation of the product development lifecycle
- **PhaseDetails**: Detailed information about the selected phase
- **TabContent**: Content for reference tabs (roles, governance, etc.)

## License

This project is proprietary and confidential.

## Acknowledgements

- Original EPDP content developed by Limi Lighting
- Next.js application developed by TL Innovation
