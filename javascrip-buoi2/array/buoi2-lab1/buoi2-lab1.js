  // Bài 1: Tìm số lớn nhất trong mảng
  function findMax(arr) {
    return Math.max(...arr);
}
// Bài 2: Tìm số nhỏ nhất trong mảng
function findMin(arr) 
{
    return Math.min(...arr);
}

// Bài 3: Lấy số dư khi chia cho 2
function getRemainders(arr) {
    return arr.map(num => num % 2);
}
// Bài 4: Lặp chuỗi 10 lần
function repeatString(str)
 {
    return Array(10).fill(str).join('');
}

// Bài 5: Lặp chuỗi 10 lần có dấu gạch ngang
function repeatStringWithDash(str) {
    return Array(10).fill(str).join('-');
}
// Bài 6: Kiểm tra chuỗi đối xứng
function isSymmetricString(string)
 {
    let cleaned = string.toLowerCase().replace(/\s/g, '');
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Bài 7: Sắp xếp chữ số thành số nhỏ nhất
function smallestNumber(num) {
    return parseInt(num.toString().split('').sort().join(''), 10);
}
 
// Kiểm tra kết quả trong console
console.log(findMax([4, 2, 5, 6, 2, 7])); // 7
console.log(findMin([4, 2, 5, 6, 2, 7])); // 2
console.log(getRemainders([4, 2, 5, 6, 2, 7])); // [0, 0, 1, 0, 0, 1]
console.log(repeatString('a')); // 'aaaaaaaaaa'
console.log(repeatStringWithDash('a')); // 'a-a-a-a-a-a-a-a-a-a'
console.log(isSymmetricString('Race car')); // true
console.log(isSymmetricString('hello world')); // false
console.log(smallestNumber(53751)); // 13557

console.log(smallestNumber(14350)); // 10345

