function goto(node) {
  node.scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll(".section-link").forEach(function (node) {
  node.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = node.getAttribute("href").substring(1);
    const targetNode = document.getElementById(targetId);
    goto(targetNode);
  });
});
