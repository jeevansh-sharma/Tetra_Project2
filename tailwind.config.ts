const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
  	extend: {
		animation: {
			first: "moveVertical 30s ease infinite",
			second: "moveInCircle 20s reverse infinite",
			third: "moveInCircle 40s linear infinite",
			fourth: "moveHorizontal 40s ease infinite",
			fifth: "moveInCircle 20s ease infinite",
		  },
		  keyframes: {
			moveHorizontal: {
			  "0%": {
				transform: "translateX(-50%) translateY(-10%)",
			  },
			  "50%": {
				transform: "translateX(50%) translateY(10%)",
			  },
			  "100%": {
				transform: "translateX(-50%) translateY(-10%)",
			  },
			},
			moveInCircle: {
			  "0%": {
				transform: "rotate(0deg)",
			  },
			  "50%": {
				transform: "rotate(180deg)",
			  },
			  "100%": {
				transform: "rotate(360deg)",
			  },
			},
			moveVertical: {
			  "0%": {
				transform: "translateY(-50%)",
			  },
			  "50%": {
				transform: "translateY(50%)",
			  },
			  "100%": {
				transform: "translateY(-50%)",
			  },
			},
		  },
		clipPath: {
			'custom-polygon': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		  },
		borderWidth: {
			'0.2': '0.2px', // Adds a very thin border option
		  },
		  boxShadow: {
			bottom: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Custom bottom shadow
		  },
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
  	}
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate"),require('tailwind-scrollbar'),require('tailwind-clip-path'),],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}