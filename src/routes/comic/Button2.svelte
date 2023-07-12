<script lang="ts">
	let fillTheJoke: HTMLElement;
	const param: URLSearchParams = new URLSearchParams('email=k.voronova@innopolis.university');
	const url = `https://fwd.innopolis.university/api/hw2?${param}`;
	function clickJoke() {
		void (async () => {
			const response = await fetch(url);
			const id: string = await response.json();
			interface Joke {
				alt: string;
				day: number;
				img: string;
				month: number;
				safe_title: string;
				year: number;
			}
			console.log(url);

			const jokeByID = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
			const data: Joke = await jokeByID.json();

			const date: Date = new Date(data.year, data.month - 1, data.day);
			const dateOfJoke: string = date.toLocaleDateString();

			const title = document.createElement('h1') as HTMLHeadingElement;
			title.innerText = data.safe_title;

			const image = document.createElement('img') as HTMLImageElement;
			image.src = data.img;
			image.alt = data.alt;

			const dayjsElement = document.createElement('p') as HTMLParagraphElement;
			dayjsElement.style.color = '#518182';
			dayjsElement.style.marginTop = '15px';
			dayjsElement.innerText = 'Released: ' + (2023 - data.year) + ' years ago';

			const dateElement = document.createElement('p') as HTMLParagraphElement;
			dateElement.style.color = '#518182';
			dateElement.style.marginTop = '15px';
			dateElement.innerText = 'Date: ' + dateOfJoke;

			const container = fillTheJoke;
			container.innerHTML = '';
			container.appendChild(title);
			container.appendChild(image);
			container.appendChild(dateElement);
			container.appendChild(dayjsElement);
		})();
	}
</script>

<div class="flex_container">
	<h1>See the joke</h1>
	<button class="btn_joke" on:click|once={clickJoke}>Click</button>
	<div class="fillTheJoke" bind:this={fillTheJoke} />
</div>
