document
  .getElementById("our-services")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
document
  .getElementById("Partnership")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
