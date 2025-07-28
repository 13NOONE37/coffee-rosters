// // tailwind.config.js
// import defaultTheme from 'tailwindcss/defaultTheme';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './src/app/**/*.{js,ts,jsx,tsx}',
//     './src/components/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class', // or 'media'
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-barlow)', ...defaultTheme.fontFamily.sans],
//         display: ['var(--font-fraunces)', ...defaultTheme.fontFamily.serif],
//       },
//       fontSize: {
//         // Mobile first, override per screen size using @screen below or utility classes
//         'heading-h3': ['1.75rem', { lineHeight: '2rem' }], // 28/32
//         'heading-l': ['2.25rem', { lineHeight: '2.75rem' }],
//         'heading-m': ['2rem', { lineHeight: '2.5rem' }],
//         body: ['0.9375rem', { lineHeight: '1.5625rem' }],
//         caption: ['0.875rem', { lineHeight: '1.25rem' }],
//       },
//       screens: {
//         tablet: '768px',
//         desktop: '1024px',
//       },
//       colors: {
//         // Semantic color tokens
//         testColor: '#ff0000',
//         background: {
//           light: '#ffffff',
//           dark: '#111827',
//         },
//         text: {
//           light: '#111111',
//           dark: '#f9fafb',
//         },
//         brand: {
//           DEFAULT: '#3b82f6',
//           dark: '#1e40af',
//           light: '#bfdbfe',
//         },
//         gray: {
//           100: '#f3f4f6',
//           200: '#e5e7eb',
//           800: '#1f2937',
//         },
//       },
//       fontWeight: {
//         regular: '500',
//         bold: '700',
//         black: '900',
//       },
//     },
//   },
//   plugins: [
//     function ({ addComponents, theme }) {
//       addComponents({
//         '.text-heading-h3': {
//           fontSize: theme('fontSize.heading-h3')[0],
//           lineHeight: theme('fontSize.heading-h3')[1].lineHeight,
//         },
//         '@media (min-width: 1024px)': {
//           '.text-heading-h3': {
//             fontSize: '2rem', // 32px
//             lineHeight: '2.25rem', // 36px
//           },
//         },
//       });
//     },
//   ],
// };
