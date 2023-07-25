import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import { colors } from "@unocss/preset-mini";
import { createSafeList } from "./safelist.js";
import { themes } from "./src/lib/theme/theme.js";
import presetTheme from "unocss-preset-theme";

export default defineConfig({
	shortcuts: {
		"btn-primary":
			"bg-primary-400 outline-primary-500 outline-2 text-base-100 dark:bg-primary-700 dark:active:(bg-primary-600 translate-y-1) transition-transform active:(bg-primary-100 translate-y-1) dark:hover:bg-primary-600 hover:bg-primary-300 p-2 rounded-lg shadow-md",
		"btn-secondary":
			"bg-secondary-400 outline-secondary-500 outline-2 text-base-100 dark:bg-secondary-700 dark:active:(bg-secondary-600 translate-y-1)  transition-transform active:(bg-secondary-100 translate-y-1)  dark:hover:bg-secondary-600 hover:bg-secondary-300 p-2 rounded-lg shadow-md",
	},
	safelist: [
		...Array.from({ length: 26 }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i)).map(
			(char) => `font-${char}`
		),
		...createSafeList(),
		`font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
        btn-primary btn-secondary`,
	],
	theme: {},
	presets: [
		presetUno({ dark: "class" }),
		presetForms(),
		presetTheme({
			theme: themes,
		}),
		presetHeroPatterns(),
		presetWebFonts({
			provider: "google", // default provider
			fonts: {
				// these will extend the default theme
				sans: "Roboto",
				mono: ["Fira Code", "Fira Mono:400,700"],
				// custom ones
				lobster: "Lobster",
				lato: [
					{
						name: "Lato",
						weights: ["400", "700"],
						italic: true,
					},
					{
						name: "sans-serif",
						provider: "none",
					},
				],
				a: "Playfair Display",
				b: "Lora",
			},
		}),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				// ...
			},
		}),
	],
});
