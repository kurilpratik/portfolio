/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		fontFamily: {
    			poppins: [
    				'Poppins',
    				'sans-serif'
    			]
    		},
    		screens: {
    			xl: {
    				max: '1279px'
    			},
    			lg: {
    				max: '1023px'
    			},
    			md: {
    				max: '767px'
    			},
    			sm: {
    				max: '639px'
    			},
				xs: {
					max: '400px'
				}
    		},
    		colors: {
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
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
    			},
    			'color-1': 'hsl(var(--color-1))',
    			'color-2': 'hsl(var(--color-2))',
    			'color-3': 'hsl(var(--color-3))',
    			'color-4': 'hsl(var(--color-4))',
    			'color-5': 'hsl(var(--color-5))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			rainbow: 'rainbow var(--speed, 2s) infinite linear',
    			grid: 'grid 15s linear infinite'
    		},
    		keyframes: {
    			rainbow: {
    				'0%': {
    					'background-position': '0%'
    				},
    				'100%': {
    					'background-position': '200%'
    				}
    			},
    			grid: {
    				'0%': {
    					transform: 'translateY(-50%)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
