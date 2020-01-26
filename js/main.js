
(() => {

console.log("startup message")
//defining svgImage
let svgImage = document.querySelector(".iconscont");

//afunction 
function logSVG() {
  console.log("icon was clicked");
}

svgImage.addEventListener("click", logSVG);




})();