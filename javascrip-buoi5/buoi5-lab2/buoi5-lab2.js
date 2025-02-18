 // Bài 1: Tìm số lớn nhất trong mảng
 function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 10, 5])); // Output: 10


// Bài 2: Tìm số nhỏ nhất trong mảng
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 10, 5])); // Output: 1

// Bài 3: Mảng số dư khi chia cho 2
function getRemainders(arr) {
    return arr.map(num => num % 2);
}
console.log(getRemainders([4, 2, 5, 6, 2, 7])); // Output: [0, 0, 1, 0, 0, 1]

// Bài 4: Sao chép chuỗi 10 lần
function repeatStringTenTimes(str) {
    return Array(10).fill(str).join('');
}
console.log(repeatStringTenTimes('a')); // Output: 'aaaaaaaaaa'
// Bài 5: Sao chép chuỗi 10 lần cách nhau bởi dấu gạch ngang
function repeatStringWithDash(str) 
{
    return Array(10).fill(str).join('-');
}
console.log(repeatStringWithDash('a')); // Output: 'a-a-a-a-a-a-a-a-a-a'

// Bài 6: Kiểm tra chuỗi đối xứng
function isSymmetricString(string) {
    const cleanedString = string.replace(/\s+/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}
console.log(isSymmetricString("Race car")); // Output: true
console.log(isSymmetricString("hello world")); // Output: false

// Bài 7: Sắp xếp chữ số trong số nguyên để tạo số nhỏ nhất
function sortDigitsToMinNumber(num) { 
    const sortedDigits = String(num).split('').sort().join('');
    return parseInt(sortedDigits.replace(/^0+/, ''), 10); // Remove leading zeros
}


console.log(sortDigitsToMinNumber(53751)); // Output: 13557
console.log(sortDigitsToMinNumber(14350)); // Output: 10345
console.log(sortDigitsToMinNumber(203950)); // Output: 200359
