const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".close-map");


mapLink.addEventListener("click", function () {
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function () {
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
    }
  }
});