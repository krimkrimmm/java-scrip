function checkElementExist(arr, value) {
    return arr.includes(value);
}

function getElementGreater(arr, value) {
    return arr.filter(num => num > value);
}

function randomHexCode() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
function randomRgbCode() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function testFunctions() {
    let output = document.getElementById("output");
    let result = "";
    result += `checkElementExist([1,2,3,4,5], 5) => ${checkElementExist([1,2,3,4,5], 5)}<br>`;
    result += `checkElementExist([1,2,3,4,5], 6) => ${checkElementExist([1,2,3,4,5], 6)}<br>`;
    result += `getElementGreater([1,2,3,4,5], 3) => [${getElementGreater([1,2,3,4,5], 3)}]<br>`;
    result += `getElementGreater([1,2,3,4,5], 5) => [${getElementGreater([1,2,3,4,5], 5)}]<br>`;
    result += `randomHexCode() => ${randomHexCode()}<br>`;
    
    result += `randomRgbCode() => ${randomRgbCode()}<br>`;
    output.innerHTML = result;
}









