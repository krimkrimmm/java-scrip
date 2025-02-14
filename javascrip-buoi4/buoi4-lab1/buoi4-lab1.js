//Bài 1
document.addEventListener("keydown", function(event) {
    document.body.innerHTML = ""; // Xóa tất cả các hình hiện có
    let shape = document.createElement("div");
    shape.classList.add("shape");
    if (event.key === "Enter") 
        {
        shape.classList.add("circle");
    } else if (event.key === " ") {
        shape.classList.add("square");
    } else {
        document.body.style.backgroundColor = getRandomColor();
        return;
    }
    shape.style.left = Math.random() * (window.innerWidth - 50) + "px";
    shape.style.top = Math.random() * (window.innerHeight - 50) + "px";
    
    document.body.appendChild(shape);
});
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// Bài 2: Hình tròn di chuyển
let movingCircle = document.createElement("div");
movingCircle.classList.add("circle");
document.body.appendChild(movingCircle);

let x = window.innerWidth / 2 - 25;
let y = window.innerHeight / 2 - 25;
movingCircle.style.left = x + "px";
movingCircle.style.top = y + "px";

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        y -= 20;
    } else if (event.key === "ArrowDown")
        {
        y += 20;
    } else if (event.key === "ArrowLeft") {
        x -= 20;
    } else if (event.key === "ArrowRight") {
        x += 20;
    }
    movingCircle.style.left = x + "px";
    movingCircle.style.top = y + "px";
});      



