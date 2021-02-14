// Picture in section 1

const resultsContainer = document.querySelector(".text");
const explanationContainer = document.querySelector(".explanation");

const url =
	"https://api.nasa.gov/planetary/apod?api_key=JexI4LTnenw7gYkMu92e208Mg4Ks1RRUgY6gnMxg";

async function fetchImage() {
	function removeClass() {
		const element = document.getElementById("test");
		element.classList.remove("loader");
	}
	try {
		const response = await fetch(url);
		const json = await response.json();

		const image = json;
		console.log(image);

		document.getElementById(
			"section1"
		).style.backgroundImage = `url("${image.url}")`;

		removeClass();
	} catch (error) {
		resultsContainer.innerHTML = message("error", error);
	}
}

fetchImage();

// Button section 1, image description

const descriptionContainer = document.querySelector(".imgDescription");
const btnDescription = document.querySelector(".btnDescription");

btnDescription.addEventListener("click", async function fetchDescription() {
	try {
		const response = await fetch(url);
		const json = await response.json();

		const getDescription = json;

		descriptionContainer.innerHTML = "";
		descriptionContainer.innerHTML = `<p class="explanation">${getDescription.explanation}</p>`;
	} catch (error) {
		resultsContainer.innerHTML = message("error", error);
	}
});

// Button section 1, People in space

const btnPeopleInSpace = document.querySelector(".btnPeopleInSpace");

btnPeopleInSpace.addEventListener("click", async function fetchPeopleInfo() {
	try {
		const response = await fetch(urlPeopleInSpace);
		const json = await response.json();

		const getInfo = json.people;
		console.log(getInfo);
		descriptionContainer.innerHTML = "";

		for (let i = 0; i < getInfo.length; i++) {
			const name = getInfo[i].name;
			const location = getInfo[i].craft;

			descriptionContainer.innerHTML += `<div class="divPeopleInfo">
											<p class="peopleInfo">${name}, stationed at the ${location}<p>
											</div>
                                        `;
		}
	} catch (error) {
		resultsContainer.innerHTML = message("error", error);
	}
});

// Text in section 1, number of people in space

const urlPeopleInSpace = "http://api.open-notify.org/astros.json";
const peopleInSpace = document.querySelector(".peopleInSpace");

async function fetchPeople() {
	try {
		const response = await fetch(urlPeopleInSpace);
		const json = await response.json();

		const people = json;

		peopleInSpace.innerHTML = "";
		peopleInSpace.innerHTML = `<p>Right now there are ${people.number} humans in space.</p>`;
	} catch (error) {
		peopleInSpace.innerHTML = message("error", error);
	}
}

fetchPeople();

// Text in section 1, the location of the international space station
const urlISSlocation = "http://api.open-notify.org/iss-now.json";
const locationContainer = document.querySelector(".locationOfISS");

async function fetchLocation() {
	try {
		const response = await fetch(urlISSlocation);
		const json = await response.json();

		const location = json;

		locationContainer.innerHTML = "";
		locationContainer.innerHTML = `<p>The International Space Station is moving at close to 28000 km/h so its location changes all the time.<br>
		  Right know the location of the ISS is ${location.iss_position.latitude}° N, ${location.iss_position.longitude}° E</p>`;
	} catch (error) {
		locationContainer.innerHTML = message("error", error);
	}
}
fetchLocation();

setInterval(fetchLocation, 3000);
