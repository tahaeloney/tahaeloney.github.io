// Cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Intro
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
    }, 3500);
});

// Progress bar
window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const percent = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
});

// Skills hover
const skills = document.querySelectorAll(".skills-list span");
const texts = document.querySelectorAll(".skill-text");

skills.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        texts.forEach(t => t.style.display = "none");
        document.querySelector(`.${skill.dataset.skill}`).style.display = "block";
    });
});
