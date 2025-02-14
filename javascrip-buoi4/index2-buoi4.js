//document.addEventListener('click',function(){
//    console.log('click');
//})
//document.addEventListener('mousedown',function(){
//    console.log('mousedown');
//})

//document.addEventListener('mousemove',function(){
//console.log('mousemove');
//})
//document.addEventListener('mouseup',function(){
//    console.log('mouseup');
//})
//document.addEventListener('click',function(event)
//{
//    console.log(event);
//})
//document.addEventListener("keydown",function(event){
//    console.log(event);
//});
const users = [
    {id:1,name:"nguyễn văn A"},
    {id:2,name:"nguyễn văn B"},
    {id:3,name:"nguyễn văn C"},

    {id:4,name:"nguyễn văn D"},
];
//hiển thị danh sách user
const ul = document.getElementById("list-user");
const input = document.getElementById("input");
const btnSearch = document.getElementById("search");
const btnReset = document.getElementById("reset");
const renderUsers =(users)=>
    {if(users.length===0){
            ul.innerHTML = "<li>không tim thấy user</li>";
            return;    
        }
    let html = "";
    users.forEach (user=>{
     html+=`<li>${user.name}</li>`;
     });
     ul.innerHTML=html;
}
input.addEventListener("keydown",(e)=>
    {
    if(e.key==="enter")
    {
        searchUser(input.value);
    }
})
btnSearch.addEventListener("click",()=>{
    searchUser(input.value);
})
btnReset.addEventListener("click",()=>{
    input.value = "";
    renderUsers(users);
})
const searchUser=(value)=>{
    if(value.trim().length===0){
        alert("vui long nhâp tên user");
        return;
    }
    //fitler = for + if
    let result = users.filter(user=>user.name.toLowerCase().includes(value.toLowerCase()));
    renderUsers(result);
}

renderUsers(users);











//back to top
const btnTop = document.getElementById("btn-top");
window.addEventListener("scroll",()=>{
    console.log("scroll"+Math.random());
    if(document.documentElement.scrollTop>200){
    
        btnTop.style.display="inline-block";
    }
    else{
        btnTop.style.display="none";
    }
})
btnTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,

        behavior: "smooth"
    });
})
