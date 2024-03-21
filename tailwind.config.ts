import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 2s ease-in-out forwards",
				title: "title 2s ease-out forwards",
				"fade-left": "fade-left 2s ease-in-out forwards",
				"fade-right": "fade-right 2s ease-in-out forwards",
				"spin-slow": "spin 8s linear infinite",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						opacity: "100%",
					},
				},
			},
			
		},
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }
		
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }
		
			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }
		
			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }
		
			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		
			xs: { max: "479px" },
			// => @media (max-width: 479px) { ... }
		},
	},
	plugins: [],
};
export default config;
