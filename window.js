// It's never changing so should be kept const
const canvas = document.getElementById("canvas");

export function adjustWindowSize(){
  window.requestAnimationFrame(adjustWindowSize);
  const { innerHeight, innerWidth} = window
  
  canvas.height = innerHeight;
  canvas.width = innerWidth;
};
