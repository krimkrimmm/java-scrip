// 1. Truy cập thẻ h1 có id="heading" và thay đổi màu chữ thành đỏ, nội dung in hoa
let heading = document.getElementById("heading");
heading.style.color = "red";
heading.style.textTransform = "uppercase";

// 2. Thay đổi màu chữ của tất cả thẻ có class "para" thành màu "blue" và font-size = "20px"
let paras = document.querySelectorAll(".para");
paras.forEach(para => {
    para.style.color = "blue";
    para.style.fontSize = "20px";
});

// 3. Thêm thẻ <a> link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
let para3 = document.querySelector(".para-3");
let link = document.createElement("a");
link.href = "https://www.facebook.com";
link.textContent = " Facebook";
link.target = "_blank";  // Mở trong tab mới
para3.appendChild(link);

// 4. Thay đổi nội dung của thẻ có id="title" thành “Đây là thẻ tiêu đề”
document.getElementById("title").textContent = "Đây là thẻ tiêu đề";

// 5. Thêm class “text-bold” vào thẻ có class="description"
document.querySelector(".description").classList.add("text-bold");

// 6. Thay thế thẻ có class="para-3" thành thẻ <button> có nội dung là “Click me”
let button = document.createElement("button");
button.textContent = "Click me";
para3.replaceWith(button);

// 7. Copy thẻ có class="para-2" và hiển thị ngay đằng sau thẻ đó
let para2 = document.querySelector(".para-2");
let para2Clone = para2.cloneNode(true);
para2.parentNode.insertBefore(para2Clone, para2.nextSibling);

// 8. Xóa thẻ có class="para-1"
document.querySelector(".para-1").remove();
 