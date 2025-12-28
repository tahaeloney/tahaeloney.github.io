// Intro hide & show content
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("content").style.opacity = "1";
    }, 2500);
});

// Scroll progress bar
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});
