window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.opacity = "0";
    setTimeout(() => intro.remove(), 900);
  }, 2300);

  document.querySelectorAll(".skill-fill").forEach(bar => {
    bar.style.width = bar.dataset.percent + "%";
  });
});

window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const percent = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
  document.getElementById("progress").style.width = percent + "%";
});