<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import { color } from "$lib/stores";
</script>

<main
	class="dark:bg-primary-950 bg-primary-100 min-w-screen flex min-h-screen flex-col items-center [&>*]:m-4">
	<header>
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>
	<h1 class="text-primary-900 dark:text-primary-100 text-9xl md:p-48 md:pb-0">Hello!</h1>
	<p class="text-primary-900 dark:text-primary-100">This is the {$color} theme.</p>
	<button class="btn-primary">A {$color} button</button>
	<button class="btn-secondary">A {$color} secondary button</button>
</main>

<Footer />

<style>
</style>
