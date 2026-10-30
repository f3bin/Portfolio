import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#080b12', panel: '#101622', accent: '#b8f36b' } } },
  plugins: []
};
export default config;
