window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav");
  const projectsSection = document.getElementById("Projects");

  // Adjust the scroll position threshold as needed
  const scrollThreshold = projectsSection.offsetTop;

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("hide-nav");
  } else {
    navbar.classList.remove("hide-nav");
  }
});
