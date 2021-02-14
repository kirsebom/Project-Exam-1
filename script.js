// Scroll animation

const sections = document.querySelectorAll("section");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const anitmationDuration = 1500;
let lastTime = 0;

const toggleText = (index, state) => {
	if (state === "show") {
		sections.forEach((section, i) => {
			if (i === index) {
				section.querySelector(".text").classList.add("show");
			}
		});
	} else {
		sections.forEach((section, i) => {
			if (i === index) {
				section.querySelector(".text").classList.remove("show");
			}
		});
	}
};

toggleText(0, "show");

nextBtn.addEventListener("click", () => {
	if (index > 5) return;
	toggleText(index, "hide");
	index++;
	sections.forEach((section, i) => {
		if (i === index) {
			toggleText(i, "show");
			section.scrollIntoView({ behavior: "smooth" });
		}
	});
});

prevBtn.addEventListener("click", () => {
	if (index < 1) return;
	toggleText(index, "hide");
	index--;
	sections.forEach((section, i) => {
		if (i === index) {
			toggleText(i, "show");
			section.scrollIntoView({ behavior: "smooth" });
		}
	});
});

window.addEventListener("wheel", (e) => {
	const delta = e.wheelDelta;
	const currentTime = new Date().getTime();

	if (currentTime - lastTime < anitmationDuration) {
		e.preventDefault();
		return;
	}

	if (delta < 0) {
		const nextBtnClick = new Event("click");
		nextBtn.dispatchEvent(nextBtnClick);
	} else {
		const prevBtnClick = new Event("click");
		prevBtn.dispatchEvent(prevBtnClick);
	}
	lastTime = currentTime;
});
