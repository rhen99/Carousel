const inds = document.querySelectorAll(".indicators");
const slides = document.querySelectorAll(".slide");
let slideCount = 0;
let setSlide;

setSlide = setInterval(() => slide(slides, inds), 2000);
inds.forEach(clickIndicators);
function slide(slides, inds) {
	if (slideCount < slides.length) {
		slides[slideCount].classList.add("pull");
		inds[slideCount].classList.add("blue");
		slideCount++;
	} else {
		slideCount = 0;
		slides.forEach(removePull);
		inds.forEach(removeInd);
		inds[0].classList.add("blue");
		slides[0].classList.add("pull");
	}
}
function removePull(el) {
	el.classList.remove("pull");
}
function removeInd(el) {
	el.classList.remove("blue");
}
function clickIndicators(el) {
	el.addEventListener("click", navigate);
}
function navigate(e) {
	e.preventDefault();
	clearInterval(setSlide);
	targetSlide(e.target);
}
function targetSlide(target) {
	inds.forEach(removeInd);
	target.classList.add("blue");
	return slides.forEach((slide, index) => {
		if (index <= parseInt(target.dataset["target"])) {
			slide.classList.add("pull");
		} else {
			slide.classList.remove("pull");
		}
	});
}
