# Vue 3 + TypeScript + Vite Project Template

A starter template for Vue 3 projects with TypeScript, Tailwind CSS, Vue Router, and best practices baked in.

## Features

- ⚡️ [Vue 3](https://v3.vuejs.org/) with [Vite](https://vitejs.dev/)
- 🔒 TypeScript
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 📱 Responsive design ready
- 📁 Well-organized project structure
- 🧩 Component-driven architecture
- 🌙 Dark mode support
- 🧭 [Vue Router](https://router.vuejs.org/) configured
- 🧹 ESLint & Prettier configured
- 🏗️ Ready-to-use components and composables

## Getting Started

### Prerequisites

- Node.js (version 16.x or higher recommended)
- npm or yarn or pnpm

### Installation

1. Clone this repository or use it as a template
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:5173` to see your application.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Vue components
│   ├── composables/     # Composition API hooks
│   ├── data/            # Static data files
│   ├── router/          # Vue Router configuration
│   ├── store/           # State management
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   ├── main.ts          # Application entry point
│   └── style.css        # Global styles
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Changing the App Name

1. Update the name in `package.json`
2. Change the title in `index.html`
3. Update any references in the components

### Tailwind Configuration

Modify `tailwind.config.js` to customize your design system.

### Adding new Routes

Edit `src/router/index.ts` to add new routes to your application.

## Best Practices

This template follows Vue 3 and TypeScript best practices:

- Use Composition API with `<script setup>` for component logic
- Type all props and emits for better type safety
- Use composables for reusable logic
- Follow a component-based architecture
- Use Tailwind CSS for styling with consistent patterns

## License

This template is open source and available under the MIT License.
