const header = document.getElementById("header");
const mybutton = document.getElementById("goToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
    mybutton.style.bottom = "4%";
  } else {
    header.classList.remove("scrolled");
    mybutton.style.bottom = "-50px";
  }
});

function goToTop() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
//
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-on-scroll");
      }
    });
  },
  { threshold: 0.01 }
);

const hiddenElements = document.querySelectorAll("section");
hiddenElements.forEach((el) => observer.observe(el));
