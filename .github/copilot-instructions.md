# GitHub Copilot Instructions

This document provides guidelines and context to help GitHub Copilot generate more effective and relevant code suggestions for this project and future projects.

## Project Stack and Technologies

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Linting/Formatting**: ESLint, Prettier
- **Package Manager**: npm
- **Routing**: Vue Router

## Code Style and Patterns

### Vue Component Structure

- Use Vue 3 Single File Components (.vue files)
- Use script setup syntax
- Component naming follows PascalCase (e.g., `EntityGrid.vue`, `AppHeader.vue`)
- Prefer Composition API with `<script setup lang="ts">` over Options API
- Define props and emits types using TypeScript

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { SomeType } from '../types/someType'

// Define props with TypeScript
const props = defineProps<{
  items: SomeType[]
}>()

// Define emits with TypeScript
const emit = defineEmits<{
  (e: 'update', value: string): void
  (e: 'select', id: number): void
}>()

// Reactive variables using ref
const isOpen = ref(false)

// Computed properties
const filteredItems = computed(() => {
  return props.items.filter(item => /* condition */)
})

// Methods
const handleClick = () => {
  isOpen.value = !isOpen.value
  emit('update', 'newValue')
}
</script>
```

### File Structure

- `/src/components/` - Reusable UI components
- `/src/composables/` - Reusable composition functions
- `/src/utils/` - Utility functions
- `/src/types/` - TypeScript type definitions
- `/src/data/` - Static data files
- `/src/store/` - State management (using refs + reactive + provide/inject pattern)
- `/src/views/` - Page components for routing
- `/src/router/` - Vue Router configuration
- `/public/` - Static assets

### TypeScript Usage

- Define interfaces for data structures
- Use type annotations for function parameters and return values
- Prefer interfaces for object types and type aliases for function types and unions

### Styling Conventions

- Use TailwindCSS for styling
- Organize Tailwind classes by:
  1. Layout (display, position)
  2. Spacing/sizing (padding, margin, width, height)
  3. Appearance (colors, borders, shadows)
  4. Typography
  5. States (hover, focus, etc.)
- Dark mode using classes (`dark:` prefix)
- Use responsive classes for different screen sizes
- Custom transitions for UI components

### State Management

- For simpler applications: Composition API with `ref`, `reactive`, and `provide`/`inject`
- Composables for reusable stateful logic (e.g., `useEntitySelector`, `useConfig`, `useTheme`)
- Store pattern with ref/reactive + watchers for persistent state with browser storage

```ts
// Example store pattern (theme.ts)
import { ref, watch } from 'vue'
import { getCookie, setCookie } from '../utils/cookies'

const isDark = ref(getCookie('theme') !== 'light')

watch(isDark, newValue => {
  setCookie('theme', newValue ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', newValue)
})

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
```

## Specific Code Style Rules

### JavaScript/TypeScript Style

- **No semicolons**: Don't add trailing semicolons at the end of statements
- Use ES6+ features where appropriate
- Prefer arrow functions for callbacks and anonymous functions
- Use const for variables that don't need reassignment

### Router Configuration

- Always include a default route for the root path ("/")
- Configure router with createWebHistory for clean URLs
- Example router setup:

```ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Additional routes
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
```

## Common Patterns

### UI Components

- Header/Footer components are typically app-wide and imported in App.vue
- Button variations follow consistent class structure with dynamic classes
- Grid layouts using CSS Grid with responsive adjustments
- Consistent animation/transition classes for UI interactions
- Filter components for data filtering

### Data Handling

- Use fetch or axios for API calls (wrap in composables)
- Loading states and error handling for async operations
- Data transformation and computed properties for derived data
- Type-safe approach to handling JSON data

### Navigation and Routing

- Vue Router with named routes
- History API for clean URLs
- Protect routes if needed with navigation guards
- Page transitions between routes

### Forms and User Input

- Form validation with computed properties or dedicated libraries
- Debounce input for search/filter functionality
- Form submission handling with proper error states

## Project-Specific Guidelines

### Animation Principles

- Use transition component for element entering/leaving
- Consistent animation curves (cubic-bezier)
- Subtle animations for UI feedback
- Performance considerations (transform/opacity for animations)

### Error Handling

- Graceful error states for users
- Detailed error logging for development
- Fallbacks for missing data

## Testing (when applicable)

- Vitest for unit tests
- Component testing with Vue Test Utils
- E2E testing with Cypress

## Performance Considerations

- Lazy loading components and routes
- Optimize asset loading (images, fonts)
- Use v-once for static content
- Consider v-memo for optimizing v-for rendering

## Accessibility

- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast requirements
- Focus management for modals and dropdowns

## Documentation

- Clear component props documentation
- JSDocs for utility functions
- README.md with setup and usage instructions
