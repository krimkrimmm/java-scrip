//Cho mã HTML sau
//<!DOCTYPE html>      
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document</title>
//</head>
//<body>
//    <input type="password" placeholder="Enter password">
//    <button>Show</button>
//</body>
//</html>
//Yêu cầu :

//Khi người dùng nhập password và bấm nút “Show”, lúc này hiển thị password và nội dung button chuyển từ “Show” ->“Hide”
//Ngược lại khi người dùng bấm vào nút “Hide”, lúc này ẩn password và nội dung button chuyển từ “Hide” -> “Show”
//Nếu làm được Show - Hide button -> chuyển qua làm với icon : https://fontawesome.com/search?q=eye&o=r&m=free
//Gợi ý : Thay đổi thuộc tính type của input để ẩn hiện password --></meta>
function togglePassword() {
    let passwordInput = document.getElementById("password");
    let toggleIcon = document.getElementById("toggleIcon");
    if (passwordInput.type === "password") 
        
        {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}



