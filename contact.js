const contactLink = document.querySelector(".button-contact");
const contactPopup = document.querySelector(".modal-contact");
const contactForm = contactPopup.querySelector(".contact-form");
const contactClose = contactPopup.querySelector(".close-contact");
const contactName = contactPopup.querySelector("#name-contact");
const contactEmail = contactPopup.querySelector('#email-contact');



let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.offsetWidth = contactPopup.offsetWidth;
  contactPopup.classList.remove("modal-error");
});


contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value) {
    evt.preventDefault();
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactName.value);
      localStorage.setItem("email", contactEmail.value);
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});




