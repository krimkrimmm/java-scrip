//c1: html atribute
const sayhello = ()=>{
    alert("xin chao các bạn 1");
};
//c2:dom property
const btn2 = document.getElementById("btn2");

//btn2.onclick = ()=>{
//    alert("xin chao các bạn 2");
//};
const sayhello2 = ()=>{
    alert("xin chao các bạn 2");
};
btn2.onclick = sayhello2;
//c3:method addeventlistener
const btn3 = document.getElementById("btn3");

//btn3.addEventListener("click",()=>{
//    alert("xin chao các bạn 3");
//})
const sayhello3 = ()=>{
    alert("xin chao các bạn 3");
};
btn3.addEventListener("click",sayhello3);



//Yêu cầu:
//Lắng nghe sự kiện click ở 3 nút button theo 3 cách sau :
//Button “Change content” sử dụng “HTML-attribute”
//Button “Change color” sử dụng “DOM property”
//Button “Change background” sử dụng “addEventListener”
//Thực hiện các chức năng sau:
//Yêu cầu 1:
//Khi nhấn vào button “Change content” hiển thị một nội dung
//quote bất kỳ

//tạo mảng chứa các quote-> random 1 quote trong mảng đó 
function getRandomElement(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
//Yêu cầu 2:
//Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p 
//(sử dụng màu HEX - cần viết 1 function để random màu HEX)
//ham random mau HEX -> lên ggsearch 
function getRandomHexColor()
{
    return `#${Math.floor(Math.random()*16777215).toString(16)}.
    padStart(6,'0')}`;
} 
//Yêu cầu 3:
//Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p 
//(sử dụng màu RGB - cần viết 1 function để random màu RGB)
//ham random mau RGB->lên ggsearch



function getRandomRgbColor(){
    const r = Math.floor(Math.random()*256); 
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}





