// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const contactOption = document.querySelectorAll(".contact-us__form-option");

if (contactOption) {
  contactOption.forEach((option) => {
    option.addEventListener("click", function () {
      document
        .querySelector(".contact-us__form-option-selected")
        .classList.remove("contact-us__form-option-selected");
      this.classList.add("contact-us__form-option-selected");
    });
  });
}
