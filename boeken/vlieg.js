document.addEventListener("DOMContentLoaded", function () {
  const fireflyCursor = document.createElement("div");

  fireflyCursor.className = "firefly-cursor";

  document.body.appendChild(fireflyCursor);

  document.addEventListener("mousemove", function (e) {
    fireflyCursor.style.left = e.pageX + "px";

    fireflyCursor.style.top = e.pageY + "px";
  });
});
