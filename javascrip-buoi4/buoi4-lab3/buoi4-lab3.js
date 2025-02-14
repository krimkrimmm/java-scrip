//<!-- Cho mã HTML như sau
//<!DOCTYPE html>       
//<html lang="en">
//    <head>
//        <meta charset="UTF-8" />
//        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
//        <title>Document</title>
//        <link rel="stylesheet" href="./style.css" />
//    </head>
//    <body>
//        <div class="main-container">
//            <h1 class="title">Đếm số</h1>
//            <h1 id="counter" style="color: #333333">0</h1>
//            <div class="btn-container">
//                <button class="btn counterBtn prevBtn">Trừ</button>
           
//                <button class="btn counterBtn nextBtn">Cộng</button>
//            </div>
//        </div>
//    </body>
//</html>
//* {      
//    margin: 0;
//    padding: 0;
//    box-sizing: border-box;
//}
//body {
//    height: 100vh;
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//    align-items: center;
//    color: #6c757d;
//    background-color: #fff;
//}

//.main-container {
//    width: 400px;
//    overflow: hidden;
//    background-color: #f4f4f4;
//    border-radius: 4px;
//    padding: 30px;
//}
//svg 

//{
//    width: 50px;
//    display: inline-block;
//    margin-right: 15px;
//}
//.btn-box {
//    text-align: center;
//}
//.btn {
//    width: 100px;
    
//    display: inline-block;
 //   padding: 15px 20px;
//    border: 2px solid #6c757d;
//    background-color: #6c757d;
//    color: #fff;
//    font-size: 18px;
//    text-transform: uppercase;
//    cursor: pointer;
//    outline: none;
    
//    transition: all 0.3s ease-in;
//    border-radius: 4px;
//}









//.btn:hover {
//    opacity: 0.7;
//}
//.title {
//    text-align: center;
//    font-size: 40px;
//    margin-bottom: 0;

//    text-transform: uppercase;
//}
//#counter {
//    font-size: 80px;
//    text-align: center;
//    margin-top: 20px;
//}
//.btn-container {
//    display: flex;

//    justify-content: space-around;
//}

//Yêu cầu
//Giá trị mặc định của counter ban đầu = 0
//Bấm vào Cộng tăng counter lên 1
//Bấm vào Trừ giảm counter đi 1
//Nếu counter > 0 có màu green
//Nếu counter = 0 có màu #333333

//Nếu counter < 0 có màu red-->
let counterValue = 0;
const counterElement = document.getElementById("counter");
function updateCounter() {
    counterElement.textContent = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = "green";
    } 
    else if (counterValue < 0) 
        {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "#333333";
    }
}
function increaseCounter() {
    counterValue++;
    updateCounter();
}

function decreaseCounter() {
    counterValue--;
    updateCounter();
}      








