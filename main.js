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
