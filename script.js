// Cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Progress bar
window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const percent = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
  document.getElementById("progress").style.width = percent + "%";
});

// Skills logic
const buttons = document.querySelectorAll(".skills-list button");
const texts = document.querySelectorAll(".skill-text");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    texts.forEach(t => t.classList.remove("active"));
    document.querySelector("." + btn.dataset.skill).classList.add("active");
  });
});
