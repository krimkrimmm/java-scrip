 // Bài 1: Kiểm tra giá trị có nằm trong mảng
 function checkElementExist() {
    const array = document.getElementById('array1').value.split(',').map(Number);
    const value = Number(document.getElementById('value1').value);
    const result = array.includes(value);
    document.getElementById('result1').innerText = result ? 'true' : 'false';
}

// Bài 2: Lọc giá trị lớn hơn
function getElementGreater() {
    const array = document.getElementById('array2').value.split(',').map(Number);
    const value = Number(document.getElementById('value2').value);
    const result = array.filter(num => num > value);
    document.getElementById('result2').innerText = JSON.stringify(result);
}


// Bài 3: Tạo mã màu HEX ngẫu nhiên
function randomHexCode() {
    const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.getElementById('result3').innerText = hex;
}


// Bài 4: Tạo mã màu RGB ngẫu nhiên
function randomRgbCode() 
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r},${g},${b})`;
    document.getElementById('result4').innerText = rgb;
}     






