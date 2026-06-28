// ======================================
// Video Scene Controller
// ======================================

const introScreen = document.getElementById("introScreen");

const memoryVideo = document.getElementById("memoryVideo");

const fadeScreen = document.getElementById("fadeScreen");

// Wait 3 seconds

setTimeout(() => {

    // Hide intro

    introScreen.classList.add("hide");

    // Show video

    memoryVideo.classList.add("show");

    // Play video

    memoryVideo.play();

    document.querySelector(".video-blur").play();

},1200);

// When video ends

memoryVideo.addEventListener("ended",()=>{

    fadeScreen.classList.add("show");

    setTimeout(()=>{

        window.location.href="letter.html";

    },2000);

});

setTimeout(()=>{ if(skipBtn) skipBtn.style.opacity="1";},2000);

const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", () => {

    fadeScreen.classList.add("show");

    setTimeout(() => {

        window.location.href = "letter.html";

    }, 1200);

});