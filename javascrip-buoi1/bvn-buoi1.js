// Bài 1: Tính giai thừa của một số nguyên dương
function calculateFactorial(n) {
    if (n < 0) return "Số không hợp lệ!";
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log("Bài 1: Giai thừa của 5 là:", calculateFactorial(5)); // 120

// Bài 2: In chuỗi đảo ngược
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Bài 2: Chuỗi đảo ngược của 'hello' là:", reverseString('hello')); // olleh

// Bài 3: Trả về lời chào theo mã quốc gia
function translate(countryCode) {
    switch (countryCode) {
        case 'VN':
            return "Xin chào";
        case 'EN':
            return "Hello";
        case 'FR':
            return "Bonjour";
        
            case 'ES':
            return "Hola";
        default:
            return "Không biết mã quốc gia này!";
    }
}
console.log("Bài 3: Lời chào khi nhập mã 'VN' là:", translate('VN')); // Xin chào
console.log("Bài 3: Lời chào khi nhập mã 'EN' là:", translate('EN')); // Hello


// Bài 4: Cắt chuỗi dài hơn 15 ký tự
function subString(str) {
    if (str.length > 15) {
        return str.substring(0, 10) + '...';
    }
    return str;
}
console.log("Bài 4: Chuỗi sau khi cắt:", subString("xinchaocacbandenvoiTechmaster")); // xinchaocac...




 