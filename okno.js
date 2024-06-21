let canvas = document.getElementById("canvas");
export function dostosujRozmiar(){
window.requestAnimationFrame(dostosujRozmiar)
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
};
