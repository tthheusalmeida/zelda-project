const trailerButton = document.querySelector(".container__trailer-button");
const buttonCloseModal = document.querySelector(".modal__close");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const videoLink = video.src;

function toggleModal(){
	modal.classList.toggle("modal__open");
}

trailerButton.addEventListener("click", () => {
	toggleModal();
	video.setAttribute("src", videoLink);
});

buttonCloseModal.addEventListener("click", () => {
	toggleModal();
	video.setAttribute("src", "");
});