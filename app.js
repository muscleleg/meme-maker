const modeBtn = document.getElementById("mode-btn");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
let colorValue = color.value;
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event) {
    if (isPainting&&!isFilling) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    // setTimeout(function (){},1000);
    ctx.moveTo(event.offsetX, event.offsetY);

}

function startPainting(event) {
    ctx.beginPath();
    isPainting = true;
}

function cancelPainting(event) {
    isPainting = false;

}

function onLineWidthChange(event) {
    console.log(event);
    ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
    colorValue = event.target.dataset.color;
    console.log(colorValue);
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue
}

function onModeClick() {
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick() {
    ctx.fillStyle=colorValue;
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function onDestroyClick() {
    // const tmp = ctx.fillStyle;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

}

function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling =false;
    modeBtn.innerText = "Fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange)


color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//
// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff",
// ];
// function onClick(event){
//     ctx.beginPath();
//     ctx.moveTo(400,400);
//     const color = colors[Math.floor(Math.random()*colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX,event.offsetY);
//     ctx.stroke();
// }
//
// canvas.addEventListener("mousemove", onClick);
//↑================painting board================//
// ctx.fillRect(50,50,100,200);
// ctx.rect(50,50,100,100);
// ctx.rect(150,150,100,100);
// ctx.fill();
//
// ctx.beginPath();
// ctx.rect(250,250,100,100);
// ctx.rect(350,350,100,100);
// ctx.fillStyle="blue";
// ctx.fill();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(150,150);
// ctx.lineTo(50,150);
// ctx.lineTo(50,50);
// ctx.stroke();

// ctx.fillRect(200,200,50,200);
// ctx.fillRect(400,200,50,200);
// ctx.lineWidth = 20;
// ctx.strokeRect(300,300,50,100);
// ctx.fillRect(200,200,200,20);
// //지붕
// ctx.moveTo(200,200);
// ctx.lineTo(325,100)
// ctx.lineTo(450,200)
// ctx.fill();

// ctx.fillRect(200 - 40,200-30,15,100);
// ctx.fillRect(365 - 40,200-30,15,100);
// ctx.fillRect(260 - 40,200-30,60,200);
// //radius가 의미하는 것은 반지름임
// ctx.arc(250,100,50,0,2*Math.PI);
// ctx.fill();
//
// ctx.beginPath();
// ctx.fillStyle="white";
// ctx.arc(260,80,5,0,2*Math.PI);
// ctx.arc(220,80,5,0,2*Math.PI);
//
// ctx.moveTo(240,110);
// ctx.fillStyle="white"
// ctx.arc(240,110,20,0,1*Math.PI);
// ctx.fill();

