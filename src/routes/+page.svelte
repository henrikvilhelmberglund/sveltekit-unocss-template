<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/DarkModeToggle.svelte";
	import { browser } from "$app/environment";

	let selectedTheme;

	$: {
		if (browser) {
			if (selectedTheme) {
				themes.forEach((theme) => {
					document.documentElement.classList.remove(theme);
				});
				localStorage.color = selectedTheme;
				document.documentElement.classList.add(selectedTheme);
			}
		}
	}

	let themes = ["blue", "yellow"];
</script>

<main class="bg-primary-100 dark:bg-primary-900 [&>*]:m-4">
	{#each themes as theme}
		<button on:click={() => (selectedTheme = theme)} class="btn-primary">{theme}</button>
	{/each}
	<DarkModeToggle />
	<h1 class="text-primary-900 dark:text-primary-100 text-9xl md:p-48">Hello!</h1>
</main>

<Footer />

<style>
</style>
