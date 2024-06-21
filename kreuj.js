import { dostosujRozmiar } from "./okno.js";
import { drawMapEdges } from "./mapa.js";
function kreuj() {
    dostosujRozmiar();
    drawMapEdges();
    requestAnimationFrame(kreuj);
}
kreuj()