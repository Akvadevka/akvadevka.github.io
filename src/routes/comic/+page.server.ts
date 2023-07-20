const param: URLSearchParams = new URLSearchParams('email=k.voronova@innopolis.university');
const url = `https://fwd.innopolis.university/api/hw2?${param}`;
export async function load() {
	console.log(1);
	const response = await fetch(url);
	console.log(2);
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
	const info: Joke = await jokeByID.json();
	return {
		info
	};
}
