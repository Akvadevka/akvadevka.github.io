<script>
	import Footer from './Footer.svelte';
	import '../../css/style.css';
	import Header from './Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
