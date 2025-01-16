
console.log('heloworld');
//alert('heloworld');
//document.write('heloworld');
//String name ="a";
//var name="b";

//let | const = final
let name;
console.log(typeof name);//underfined = primitive data type

name ="hien";
console.log(typeof name);//string = primitive data type

name =40;
console.log(typeof name);//number = primitive data type

let age = 30;
let fullname="a hien"
let year = 1999
//template string
console.log(`xin chao các bạn, mk tên la ${fullname}.nam nay ${2025-year}tuổi`);
console.log("xin chao các bạn, mk tên la "+fullname+ ".nam nay "+(2025-year)+"tuổi");

//function
//c1: regular function

function sum(a,b){
    return a+b;
}
//c2: function expression-> first-class function 
const sum1 = function(a,b){
    return a+b;
}
console.log(sum(30,40)); 


//c3: arrow function (ES6) - lambda expression java8(giống cú pháp)
const sum2 = (a,b)=>{
    console.log(a,b);
    return a+b;
    //return a(-*/)b;
}  

//const sum2 = (a,b)=>a+b;
console.log(sum2(40,"50"));//truyen tham số

//defaut parameter
const sum3 = (a=100,b=200)=>{
    if(a==undefined){
        a=100;
    }
    if(b==undefined){
        b=200;
    }
   console.log(a,b);

   return a/b;
   }
 console.log(sum3());
 {
    let firstname = "n";
    console.log(firstname);
 }
 console.log(firstname);
 


 