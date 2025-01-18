let user={
    name: "nguyễn văn A",
    age:40,
    email: "abc@gmail.com",
    languages: [english,chinese],
    address:
    {
        province:"hanoi",
        district:"thanh xuan",
        ward:"nhân chính",
    },
    work:function() {
    console.log("working--");
    },
    eat: function(foodname){
    console.log("eating"+foodname);
    }
}

console.log(user.name);
console.log(user,languages[1]);
console,log(user,address,ward);
user.work();
user.eat("buncha");
for (const key in user){
    console.log(user[key]);
}
//viet ham cho phép truyen vao một mảng các số
//kqua trả ve la một mảng mới với các số la số du tương ứng khi chia mảng cũ cho 2
//vd: modulo2([4,2,5,6,7])=>[0,0,1,0,0,1] 
const modulo2=(arr)=>{
    const rs=[];
    arr.forEach(e=>{
        rs.push(e%2);
    });
    return rs;
};
console.log(modulo2([4,2,5,6,7]))
