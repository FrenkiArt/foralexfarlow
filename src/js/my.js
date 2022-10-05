console.log("hello from my.js");

window.addEventListener("resize", function (e) {
  console.log(window.innerWidth);
});

/* if (document.querySelector('#menu-trigger')) {
  document
    .querySelector('#menu-trigger')
    .addEventListener('click', function (e) {
      this.classList.toggle('active');

      document.querySelector('#menu').classList.toggle('active');
    });
}

if (document.querySelector('#menu')) {
  document.querySelector('#menu').addEventListener('click', function (e) {
    if (window.innerWidth < 800) {
      document.querySelector('#menu-trigger').classList.toggle('active');
      document.querySelector('#menu').classList.toggle('active');
    }
  });
} */

document.addEventListener("DOMContentLoaded", function (e) {
  if (document.querySelector(".card__more")) {
    document.querySelectorAll(".card__more").forEach((el) => {
      el.addEventListener("click", toggleCardMore);
    });
  }
});

const toggleCardMore = (e) => {
  const parent = e.target.closest(".card");

  parent.classList.toggle("active");
};
