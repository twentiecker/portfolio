const toggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
toggle.addEventListener("click", function () {
  navList.classList.toggle("collapse");
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", activeNavList);
function activeNavList() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;

    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      if (document.querySelector("li a[href*=" + sectionId + "]")) {
        document
          .querySelector("li a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", navBackgroundColor);
function navBackgroundColor() {
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if (scrollY >= 672) {
    document.querySelector("ul").classList.add("active");
  } else {
    document.querySelector("ul").classList.remove("active");
  }
}
