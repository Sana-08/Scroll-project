// document.addEventListener("DOMContentLoaded", function() {
//   const links = document.querySelectorAll(".all li");
//   const pages = document.querySelectorAll(".page");
  
//   links.forEach((link, index) => {
//     link.addEventListener("click", () => {
//       pages[index].scrollIntoView({ behavior: "smooth" });
//     });
//   });
// });



document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".all li");
  const homeSection = document.querySelector("#home");
  const pages = document.querySelectorAll(".page");

  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      if (link.getAttribute("data-target") === "#home") {
        homeSection.scrollIntoView({ behavior: "smooth" });
      } else {
        pages[index - 1].scrollIntoView({ behavior: "smooth" }); // Adjust index for pages array
      }
    });
  });
});
