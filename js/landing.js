// ========================================
// Landing Page Controller
// ========================================

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

// Cursor Glow
const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}

if (window.innerWidth <= 768 && glow) {

    glow.style.display = "none";

}

// Start Button
startBtn.addEventListener("click", () => {

    bgMusic.volume = 0;

    bgMusic.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        bgMusic.volume = volume;

        if(volume >= 0.35){

            clearInterval(fade);

        }

    },120);

    // Fade the page
    document.querySelector(".hero").classList.add("fade-out");

    // Dark Overlay
    const overlay = document.querySelector(".page-transition");

    overlay.style.visibility = "visible";

    setTimeout(()=>{

        overlay.style.opacity = "1";

    },200);

    // Go to next page
    setTimeout(()=>{

        window.location.href = "cake.html";

    },1500);

});