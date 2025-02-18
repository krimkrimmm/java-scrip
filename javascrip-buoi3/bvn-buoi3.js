//<!--PARAGRAPH
//<!DOCTYPE html>
//<html lang="en">
//    <head>     
//        <meta charset="UTF-8" />
//        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//        
//        <title>DOM Practice</title>
//    </head>
//    <body>
//        <h1>Thực hành DOM</h1>
//        <p>
//            Với các du khách mới chập chững trong môn đi bộ đường dài , vùng miền nam dãy Ural ( từ thung lũng sông Ural đến thung lũng sông Ufa
//            ) sẽ là lựa chọn phù hợp . Địa hình núi nơi đây không quá hiểm trở ,
//            hơn 8 tháng trong năm thường có người đi bộ đường dài tại đây . Rất
//            nhiều khách bộ hành lựa chọn tuyến đường đi qua Công viên quốc gia
//          
//            Taganai . Điểm cao nhất trên tuyến đường dài 52km này là đỉnh núi
//           Kruglitsa cũng chỉ cao 1178m . Ở hai bên đường có một số trạm nghỉ
//            đầy đủ tiện nghi nên du khách không phải lo nghĩ đến việc phải ngủ
//            lều . Công viên quốc gia Zyuratkul là điểm đến ưa thích khác của
//            người đi bộ đường dài . Điểm nhấn của hành trình này là hồ Zyuratkul
//            cao 724m so với mặt nước biển . Nhiều du khách đã phải lòng hồ
//            Zyuratkul vì thắng cảnh ở hai bên và điều kiện hoàn hảo để tham gia
//            các hoạt động thể thao dưới nước . Khách bộ hành chỉ cần chú ý đem
//            theo đầy đủ đồ ăn , nước uống , lều trại và các trang thiết bị khác vì không có nhiều cơ sở lưu trú ở Công viên quốc gia Zyuratkul .
//        </p>
//    </body>
//</html>
//Yêu cầu
//Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
//Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
//Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
//Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
//-->
document.addEventListener("DOMContentLoaded", function () 
{
    let paragraph = document.getElementById("content");
    let text = paragraph.innerHTML;

    // Thay thế dấu "," thành "🤔" và "." thành "😲"
    text = text.replace(/,/g, "🤔").replace(/\./g, "😲");
    // Highlight từ có độ dài >= 5 ký tự
    let words = text.split(" ");
    let highlightedText = words
        .map((word) => 
            {
            let cleanWord = word.replace(/[^a-zA-ZÀ-ỹ0-9]/g, ""); // Loại bỏ ký tự đặc biệt
            return cleanWord.length >= 5 ? `<span class="highlight">${word}</span>` : word;
        })
        .join(" ");
    paragraph.innerHTML = highlightedText;
    // Đếm số từ
    let wordCount = words.filter(word => word.trim() !== "").length;
    let wordCountDiv = document.getElementById("wordCount");
    wordCountDiv.innerText = `Số từ trong đoạn văn: ${wordCount}`;

});
 