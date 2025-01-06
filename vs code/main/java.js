document.addEventListener("DOMContentLoaded", function () {
  const fireflyCursor = document.createElement("div");

  fireflyCursor.className = "firefly-cursor";

  document.body.appendChild(fireflyCursor);

  document.addEventListener("mousemove", function (e) {
    fireflyCursor.style.left = e.pageX + "px";

    fireflyCursor.style.top = e.pageY + "px";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0 }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".progress");

  function checkScroll() {
    skillBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        bar.style.width = bar.classList.contains("adobe")
          ? "90%"
          : bar.classList.contains("vscode")
          ? "80%"
          : bar.classList.contains("figma")
          ? "85%"
          : "0";
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
