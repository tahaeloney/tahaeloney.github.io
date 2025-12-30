// Intro remove
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.transition = "opacity 0.8s ease";
    intro.style.opacity = "0";
    setTimeout(() => intro.remove(), 900);
  }, 2300);
});

// Scroll progress
window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const percent = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
  document.getElementById("progress").style.width = percent + "%";
});

// Animate skill bars
const skillBars = document.querySelectorAll(".skill-fill");
window.addEventListener("load", () => {
  skillBars.forEach(bar => {
    bar.style.width = bar.dataset.percent + "%";
  });
});
l