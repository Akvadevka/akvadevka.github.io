
const param = new URLSearchParams('email=k.voronova@innopolis.university');
const url = new URL(`https://fwd.innopolis.university/api/hw2?${param}`);
let temp;
const button = document.getElementById("btn_click");
button.addEventListener("click", async() => {
        const response = await fetch(url);
        const id = await response.json();

        const jokeByID = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
        const data = await jokeByID.json();
        console.log(data);
        console.log(data['month']);
        const month = data['month'] - 1;
        const day = data['day'];
        const year = data['year'];
        const img = data['img'];
        const alt = data['alt'];
        const safe_title = data['safe_title'];

        const date = new Date(year, month, day);
        const dateOfJoke = date.toLocaleDateString();
        console.log(dateOfJoke);

        const title = document.createElement('h1');
        title.innerText = safe_title;

        const image = document.createElement('img');
        image.src = img;
        image.alt = alt;

        const dateElement = document.createElement('p');
        dateElement.style.color = '#518182';
        dateElement.style.marginTop = '15px';
        dateElement.innerText = "Date: " + dateOfJoke;

        const container = document.getElementById('fillTheJoke');
        container.innerHTML = '';
        container.appendChild(title);
        container.appendChild(image);
        container.appendChild(dateElement);


    }
)
