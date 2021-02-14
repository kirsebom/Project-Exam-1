const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const formSent = document.querySelector("#formSent");

function checkForm(event) {
	event.preventDefault();

	if (checkLength(name.value, 0)) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
	}

	if (checkLength(subject.value, 12)) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	if (checkEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
}

form.addEventListener("submit", checkForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function checkEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}

function displayMessage() {
	if (
		checkLength(name.value, 0) &&
		checkLength(subject.value, 12) &&
		checkEmail(email.value)
	) {
		formSent.innerHTML = `<p class="sentForm">Your message has been sent</p>`;
		form.reset();
	} else {
		formSent.innerHTML = "";
	}
}

form.addEventListener("submit", displayMessage);
