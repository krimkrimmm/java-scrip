    // Bài 1: Tính giai thừa của số nguyên dương
    function calculateFactorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = n; i > 1; i--) {
            result *= i;
        }
        return result;
    }
    console.log(calculateFactorial(5)); // 120

    // Bài 2: Đảo ngược chuỗi
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    console.log(reverseString('hello')); // 'olleh'

    // Bài 3: Dịch lời chào theo mã quốc gia
    function translate(countryCode) {
        switch (countryCode) {
            case 'VN': return "Xin chào";
            case 'EN': return "Hello";
            case 'FR': return "Bonjour";
            case 'JP': return "こんにちは";
            default: return "Không tìm thấy lời chào";
        }
    }
    console.log(translate('VN')); // 'Xin chào'
    console.log(translate('EN')); // 'Hello'

    // Bài 4: Cắt chuỗi dài hơn 15 ký tự
    function subString(str) {
        return str.length > 15 ? str.substring(0, 10) + '…' : str;
    }
    console.log(subString("xinchaocacbandenvoiTechmaster")); // 'xinchaocac…'




    