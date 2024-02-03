const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;

// Game Loop
function drawGame(){
  clearScrean();
  drawGreenBlob();
}

function drawGreenBlob(){
    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
}

function clearScrean(){
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawGame();