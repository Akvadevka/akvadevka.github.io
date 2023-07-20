<script>
	export let data;
</script>

<svelte:head>
	<title>Joke</title>
	<meta name="author" content="Kseniia Voronova" />
	<meta name="description" content="Comic content" />
</svelte:head>
<div class="jokeList">
	<div class="jokeTitle">
		{data.info.safe_title}
	</div>
	<div>
		<img src={data.info.img} alt={data.info.alt} />
	</div>
	<div class="jokeDateItem">
		{'Date:' + new Date(data.info.year, data.info.month - 1, data.info.day).toLocaleDateString()}
	</div>
	<div class="jokeDateItem">
		{'Released: ' + (2023 - data.info.year) + ' years ago'}
	</div>
</div>
