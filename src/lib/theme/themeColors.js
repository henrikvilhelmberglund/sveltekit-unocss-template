import { createThemes } from "./createThemes";
import { colors } from "@unocss/preset-mini";

// add colors here, then create an object inside presetTheme({theme: {} in uno.config.js
export const themes = createThemes([
	{ name: "blue", primary: colors.blue, secondary: colors.purple, gray: colors.slate },
	{ name: "green", primary: colors.green, secondary: colors.orange, gray: colors.gray },
	{ name: "yellow", primary: colors.yellow, secondary: colors.pink, gray: colors.stone },
	{ name: "pink", primary: colors.pink, secondary: colors.rose, gray: colors.stone },
]);
export const themeColors = Object.entries(themes).map((theme) => {
	// console.log(theme[0]);
	return theme[0];
});
