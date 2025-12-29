// Cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Intro remove
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.transition = "opacity 0.9s ease";
    intro.style.opacity = "0";
    setTimeout(() => intro.remove(), 1000);
  }, 2600);
});

// Scroll progress
window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const percent = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
  document.getElementById("progress").style.width = percent + "%";
});

// Skills hover
const buttons = document.querySelectorAll(".skills-buttons button");
const texts = document.querySelectorAll(".skill-text");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    texts.forEach(t => t.classList.remove("active"));
    document.querySelector("." + btn.dataset.skill).classList.add("active");
  });
});
