const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("scroll", function (event) {
  var top = window.scrollY;
  if (top === 0) {
    scrollToTopBtn.style.visibility = "hidden";
  } else {
    scrollToTopBtn.style.visibility = "visible";
  }
});
scrollToTopBtn.addEventListener("click", scrollToTop);
