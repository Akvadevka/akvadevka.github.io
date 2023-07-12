<script>
	import comic from './comic/+page.svelte';
</script>

<div class="joke">
	<h3>I WANNA JOKE</h3>
	<form action={comic} target="_blank">
		<button class="btn_joke">See the joke</button>
	</form>
</div>
