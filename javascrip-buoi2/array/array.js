let number =[];
//gán giá trị cho các ptu của array qua chỉ số
number[0]=1;
number[1]="ahien";
number[2]=true;


//kbao khởi tạo gtri cho array
let myArr = [1,2,3,4,true,false,"nguyễn văn A"];
console.log(myArr);

for(let i=0;i<myArr.length;i++){
    console.log(myArr[i]);
} 
//value=myArr[i]
myArr.forEach((Value,index) =>
     {
    if(index===3)return;

    console.log(value,index);
})
//value=myArr[i]
for(const value of myArr){
    console.log(value);
}
//array methods

//1.pop()
myArr.push(5);
console.log(myArr);
//2.pop()
myArr.pop();
console.log(myArr);
//splice
myArr.splice(2,9,10);
console.log(myArr);



