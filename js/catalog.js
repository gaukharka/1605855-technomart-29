const buyButton = document.querySelectorAll(".goods-buy");
const messagePopup = document.querySelector(".modal-cart");
const messageClose = messagePopup.querySelector(".close-cart");


buyButton.forEach(item => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
  });

});

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
    }
  }
});

