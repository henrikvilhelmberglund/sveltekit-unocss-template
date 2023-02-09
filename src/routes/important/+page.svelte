<script>
	import { base } from "$app/paths";
	import Example from "../+page.svelte?raw";
	import BaseImportExample from "$lib/BaseImportExample.svelte?raw";
	import Prism from "prismjs";
	import "prism-svelte";
	let myExample = Example.split("<b />")[1];
	myExample = myExample.split("<strong />")[0];
	let highlighted2 = Prism.highlight(BaseImportExample, Prism.languages.svelte, "svelte");
	let highlighted = Prism.highlight(myExample, Prism.languages.svelte, "svelte");
	highlighted = highlighted.split("example")[0];
</script>

<main class="[&>*]:m-4">
	<p>Don't forget to import the base alias</p>
	<div>
		<code class="language-svelte">{@html highlighted2}</code>
	</div>
	<p>and use it before local links for them to work on Github Pages! (see /routes/+page.svelte):</p>

	<!-- example -->
	<div>
		<code class="language-svelte">
			{@html highlighted}
			<!-- {highlighted} -->
		</code>
	</div>
</main>

<style>
</style>
