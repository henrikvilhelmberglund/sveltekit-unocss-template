<script>
	import { color } from "$lib/stores";
	import { themeColors } from "./themeColors";

	let selectedTheme;

	$: {
		if (selectedTheme) {
			themeColors.forEach((theme) => {
				document.documentElement.classList.remove(theme);
			});
			$color = selectedTheme;
			document.documentElement.classList.add(selectedTheme);
		}
	}
</script>

{#each themeColors as themeColor}
	<button
		on:click={() => (selectedTheme = themeColor)}
		class="rounded p-2 text-transparent bg-{themeColor}-500">{themeColor}</button>
{/each}

<style>
</style>
