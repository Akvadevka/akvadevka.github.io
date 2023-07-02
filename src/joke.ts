import dayjs from 'dayjs/esm';
import relativeTime from 'dayjs/esm/plugin/relativeTime';

dayjs.extend(relativeTime);


const param: URLSearchParams = new URLSearchParams('email=k.voronova@innopolis.university');
const url: string = (`https://fwd.innopolis.university/api/hw2?${param}`);
const button: HTMLButtonElement = document.getElementById("btn_click") as HTMLButtonElement;
button.addEventListener("click", (event) => {
    event.preventDefault();
    void(async () => {
        const response = await fetch(url);
        const id = await response.json();
        interface Joke {
            alt: string,
                day: number,
                img: string,
                month: number,
                safe_title: string,
                year: number,
        }
        console.log(url);
        const jokeByID = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
        const data: Joke = await jokeByID.json();


        const date: Date = new Date(data.year, data.month-1, data.day);
        const dateOfJoke: string = date.toLocaleDateString();


        const title = document.createElement('h1') as HTMLHeadingElement;
        title.innerText = data.safe_title;

        const image = document.createElement('img') as HTMLImageElement;
        image.src = data.img;
        image.alt = data.alt;

        const dayjsElement = document.createElement('p') as HTMLParagraphElement;
        dayjsElement.style.color = '#518182';
        dayjsElement.style.marginTop = '15px';
        dayjsElement.innerText = "Released: " + dayjs(new Date(data.year, data.month - 1, data.day)).fromNow();

        const dateElement = document.createElement('p') as HTMLParagraphElement;
        dateElement.style.color = '#518182';
        dateElement.style.marginTop = '15px';
        dateElement.innerText = "Date: " + dateOfJoke;

        const container = document.getElementById('fillTheJoke');
        container.innerHTML = '';
        container.appendChild(title);
        container.appendChild(image);
        container.appendChild(dateElement);
        container.appendChild(dayjsElement);
    })();
})
