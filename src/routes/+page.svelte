<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
</script>

<main class="bg-primary-100 dark:bg-primary-950 [&>*]:m-4">
	<ThemeSwitcher />
	<DarkModeToggle />
	<h1 class="text-primary-900 dark:text-primary-100 text-9xl md:p-48">Hello!</h1>
</main>

<Footer />

<style>
</style>
