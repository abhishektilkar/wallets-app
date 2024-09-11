import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'dark-blue': '#002D72',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.text-gradient': {
            background: 'linear-gradient(to right, #FF6F61, #FFD95A, #4ECDC4, #008000)', 
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-purple-blue': {
            background: 'linear-gradient(to bottom, #3A0066, #5A00A1, #0072F5)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-green-blue1': {
            background: 'linear-gradient(to right, #34d399, #3B9A6C, #7F1DFF)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-hover': {
          background: 'linear-gradient(to right, #FF6F61, #FFD95A, #4ECDC4, #008000)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          transition: 'background 0.5s ease',
            '&:hover': {
                background:  '#d1d5db', 
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
            }
        },
      });
    },
  ],
} satisfies Config

export default config
