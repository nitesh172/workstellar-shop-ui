import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        'open-sans': 'var(--font-open-sans)',
        pacifico: 'var(--font-pacifico)',
      },
      colors: {
        black: '#1E1F22',
        imagebg: '#DEDEDE',
        grey: '#6C6D73',
        bgbule: '#6EA6E8',
        footerbg: '#F7F7F8',
        chipColor: '#EEEEF0',
      },
    },
  },
  plugins: [],
}
export default config
