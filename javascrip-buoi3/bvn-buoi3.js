document.addEventListener("DOMContentLoaded", function () {
    let paragraph = document.getElementById("content");
    let text = paragraph.innerHTML;

    // Thay thế dấu "," thành "🤔" và "." thành "😲"
    text = text.replace(/,/g, "🤔").replace(/\./g, "😲");

    // Highlight từ có độ dài >= 5 ký tự
    let words = text.split(" ");
    let highlightedText = words
        .map((word) => {
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
 






 