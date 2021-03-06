const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const navLinks = document.querySelectorAll(".nav__list-link");
const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__toggle");

window.addEventListener("scroll", navFix);

function navFix() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("active");
    navToggle.classList.add("active");
  } else {
    nav.classList.remove("active");
    navToggle.classList.remove("active");
  }
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navLinks.forEach((el) => {
      el.classList.remove("active");
    });
    navLinks[i].classList.add("active");
    console.log(navLinks[i]);
  });
}

navToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  console.log(navToggle);
});

console.log(navLinks);
