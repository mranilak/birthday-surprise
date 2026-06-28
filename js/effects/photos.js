// ===========================================
// Floating Memory Photos
// ===========================================

const photoContainer = document.getElementById("photos");

const images = [
    "assets/images/photo1.jpg",
    "assets/images/photo2.jpg",
    "assets/images/photo3.jpg",
    "assets/images/photo4.jpg",
    "assets/images/photo5.jpg"
];

// Fixed positions around the card
const positions = [

    { left: "5%", top: "18%" },   // Left Top

    { left: "78%", top: "15%" },  // Right Top

    { left: "8%", top: "68%" },   // Left Bottom

    { left: "74%", top: "66%" },  // Right Bottom

    { left: "42%", top: "2%" }    // Top Center

];

let previousImage = -1;
let previousPosition = -1;

function randomIndex(max, previous) {

    let value;

    do {

        value = Math.floor(Math.random() * max);

    } while (value === previous);

    return value;

}

function createPhoto() {

    // Random Photo
    const imageIndex = randomIndex(images.length, previousImage);

    previousImage = imageIndex;

    // Random Position
    const positionIndex = randomIndex(positions.length, previousPosition);

    previousPosition = positionIndex;

    const img = document.createElement("img");

    img.src = images[imageIndex];

    img.className = "photo";

    img.style.left = positions[positionIndex].left;

    img.style.top = positions[positionIndex].top;

    // Random Rotation
    img.style.transform =
        `rotate(${Math.random() * 20 - 10}deg)`;

    photoContainer.appendChild(img);

    setTimeout(() => {

        img.remove();

    }, 8000);

}

createPhoto();

setInterval(createPhoto, 2500);