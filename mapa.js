let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let skala = 1;

export function drawMapEdges() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(1000 * skala, 0);
    ctx.lineTo(1000 * skala, 1000 * skala);
    ctx.lineTo(0, 1000 * skala);
    ctx.closePath();
    ctx.stroke();
    console.log("rysowanie")
}