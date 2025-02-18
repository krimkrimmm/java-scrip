//Cho giao diện như sau
//<!DOCTYPE html>
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
//    <title>Document</title>
//    <style>
//        .box {display: block;
//            background-color: #f3f3f3;
//            width: 100px;
//            height: 100px;
//            border-radius: 10px;
//            float: left;
//            margin: 5px;
//        }
//        .box:hover {
//            transform: scale(.9);
//            transition-duration: .5s;
//            opacity: .8;
//            cursor: pointer;
//        }
//        .box:active {
//            transform: scale(1.5);
//           transition-duration: .5s;
//        }
//    </style>
//</head>
//<body>
//     <div class="wrap">
//         <h1> JS DOM</h1>
//         <button id="btn">More boxes</button>
//         <h4 id="score"> Total box:<span class="points"></span></h4>
//         <div class="boxes">
//         </div>
//    
//        </div>
//</body>
//</meta></html>
//Cho mảng màu:
//let colors = ['#3498db',
//    '#9b59b6',
//    '#e74c3c',
//    '#2c3e50',
//    '#d35400',
//]
//Yêu cầu
//Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
//Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
//</head>Cập nhật số lượng total box trong thẻ <span> có class “points”
//Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
//Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5-->

 


let colors = ['#3498db', '#9b59b6', '#e74c3c', '#2c3e50', '#d35400'];
let boxContainer = document.querySelector(".boxes");
let points = document.querySelector(".points");
function updateTotalBoxes() {
    points.textContent = boxContainer.children.length;
}
function createBox(color) {
    let box = document.createElement("div");
    box.classList.add("box");
   
    box.style.backgroundColor = color;
    box.addEventListener("click", function () {
    
    
    
    
    
    
    
    
    
    
        box.remove();
        updateTotalBoxes();
    });
    return box;
}
function addBoxes() {
    colors.forEach(color => 
        {
        let box = createBox(color);
        boxContainer.appendChild(box);
    });
    updateTotalBoxes();
}
document.getElementById("btn").addEventListener("click", addBoxes);
// Initial render
addBoxes();       



