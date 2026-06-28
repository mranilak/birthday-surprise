// ======================================
// Confetti Effect
// ======================================

const confettiContainer = document.getElementById("confetti");

function startConfetti(){

    const colors = [

        "#ff4d8d",
        "#ffd700",
        "#00e5ff",
        "#7CFC00",
        "#ff9800",
        "#ffffff"

    ];

    for(let i=0;i<150;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animation=
        `confettiFall ${4+Math.random()*3}s linear forwards`;

        piece.style.animationDelay=
        Math.random()*1+"s";

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },8000);

    }

}