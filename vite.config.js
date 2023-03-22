import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		UnoCSS({
			presets: [
				presetUno(),
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
					},
				}),
			],
			mode: "svelte-scoped",
		}),
		sveltekit(),
	],
});
