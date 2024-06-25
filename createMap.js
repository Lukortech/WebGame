import { adjustWindowSize } from "./window.js";
import { drawMapEdges } from "./mapa.js";

function createMap() {
    adjustWindowSize();
    drawMapEdges();
    requestAnimationFrame(createMap);
}

createMap()
