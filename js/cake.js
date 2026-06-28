// ======================================
// Birthday Cake Interaction
// ======================================

const candles = document.querySelector(".candles");
const flames = document.querySelectorAll(".flame");

let blown = false;

candles.addEventListener("click", () => {

    if (blown) return;

    blown = true;

   flames.forEach((flame, index) => {

    setTimeout(() => {

        flame.classList.add("flame-out");

        const smoke = flame.nextElementSibling;

        smoke.classList.add("smoke-rise");

    }, index * 250);

});
 setTimeout(() => {

    startFireworks();

    startConfetti();

    startHearts();

    playCelebrationMusic();

},2200);

// Cake disappears after celebration
setTimeout(() => {

    document
        .querySelector(".cake-container")
        .classList.add("cake-fade");

},5500);

// Show message after cake fades
setTimeout(() => {

    showBirthdayMessage();

},7000);
});

