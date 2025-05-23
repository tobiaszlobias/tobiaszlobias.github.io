const navbar = document.getElementById("navbar");
function handleScroll() {
  if (window.scrollY > 10) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
}
window.addEventListener("scroll", handleScroll);
// Fix: Ensure correct state on page load
handleScroll();
