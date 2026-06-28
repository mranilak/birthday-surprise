// ======================================
// Fireworks Effect
// ======================================

const fireworksContainer = document.getElementById("fireworks");

function createFirework(x, y){

    const colors = [
        "#ff4d8d",
        "#ffd700",
        "#00e5ff",
        "#7CFC00",
        "#ff9800",
        "#ffffff"
    ];

    for(let i = 0; i < 30; i++){

        const particle = document.createElement("div");

        particle.className = "firework";

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 100;

        particle.animate([
            {
                transform: "translate(0,0) scale(1)",
                opacity:1
            },
            {
                transform:`translate(
                    ${Math.cos(angle)*distance}px,
                    ${Math.sin(angle)*distance}px
                ) scale(0)`,
                opacity:0
            }
        ],{

            duration:1200,
            easing:"ease-out"

        });

        fireworksContainer.appendChild(particle);

        setTimeout(()=>{

            particle.remove();

        },1200);

    }

}

function startFireworks(){

    createFirework(
        window.innerWidth*0.25,
        window.innerHeight*0.3
    );

    setTimeout(()=>{

        createFirework(
            window.innerWidth*0.75,
            window.innerHeight*0.25
        );

    },400);

    setTimeout(()=>{

        createFirework(
            window.innerWidth*0.5,
            window.innerHeight*0.18
        );

    },800);

}