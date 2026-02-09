const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const mensaje = document.getElementById("mensaje");
const imagen = document.getElementById("imagen");
const sonidoNo = document.getElementById("sonidoNo");
const sonidoSi = document.getElementById("sonidoSi");

let tamañoSi = 1;
let contadorNo = 0;

const imagenesNo = [
    "Minion.jpg",
    "Gato.jpg",
    "Pou.jpg",
	"Emoji.jpg",
	"Esponja.jpg",
	"Hamster.jpg",
	"Chango.jpg",
	"Lindo.jpg",
	"Gatotriste.jpg",
	"Mono.jpg",
	"Changotriste.jpg",
	"Panda.jpg",
	"emojitriste.jpg"
];


const imagenSi = "Perrofeliz.jpg";


// 💔 Botón NO
btnNo.addEventListener("click", () => {
    contadorNo++;
    tamañoSi += 0.2;
    btnSi.style.transform = `scale(${tamañoSi})`;

    imagen.src = imagenesNo[contadorNo % imagenesNo.length];
    sonidoNo.play();
});


// 💖 Botón SÍ
btnSi.addEventListener("click", () => {
    imagen.src = imagenSi;
    mensaje.textContent = "💘 MUCHAS GRACIAS MIAMO, TE AMIO";
    sonidoSi.play();

    imagen.style.transform = "scale(1.4)";
    btnNo.style.display = "none";
    btnSi.style.display = "none";

    // 👇 OCULTAR LA PREGUNTA
    document.getElementById("pregunta").style.display = "none";
});



// 💕 Lluvia de corazones
function crearCorazon() {
    const corazon = document.createElement("span");
    corazon.innerHTML = "💖";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => corazon.remove(), 5000);
}


setInterval(crearCorazon, 300);
