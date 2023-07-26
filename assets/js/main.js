// ===== AOS ACTIVATION =====
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

// ===== Top Header Date Setting =====
const date = new Date();
const day = date.getDate();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = monthNames[date.getMonth()];
const year = date.getFullYear();

document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;

// ===== Swiper JS =====
new Swiper(".main-blog-slider", {
  spaceBetween: 30,
  speed: 600,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
});

// === Back to Top =====
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("buttonVisible");
  } else {
    backToTopBtn.classList.remove("buttonVisible");
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
