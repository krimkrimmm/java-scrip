/*1.api la gi?
api(application programming interface):tphan sdung để giao tiếp giữa các ứng dụng, hoặc các dịch vụ trong ưd
khach hang: client - gui yc
nvien: trung gian,gui yc,nhận kq(api)
nha bêp: server - xu li yc
2.cấu tạo của 1 api bao gôm nhg gi?

api url: đg dẫn api:https://dog.ceo//api//breeds//image//random
http method: hdong tác động lên tnguyen (resource): get,post,put,patch delete-curd
request: chứa thog tin yc
- headers: thg tin ve request
- body: thg tin gửi kem theo
respone: chứa thg tin trả vê
- headers: thg tin vê respone
- body: thg tin trả vê
 */

//https://dog.ceo/api/breeds/image/random
const btn = document.getElementById('btn');
const img = document.getElementById('img'); 
//c1: sdung build-in fetch trong js
//c1.1:sdung promise
btn.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(respone=>{
        console.log(respone);
    })
    //{message: "https://images.dog.ceo/breeds/terrier-irish/n02093991_1003.jpg",status:"success"}
    //image.src = data.message;
    //})
    .catch(error=>{
        console.log(error);
    })
});
//c1.2:sdung async await
btn.addEventListener('click',async()=>
    {
      try{
        let respone = await fetch("https:/dog.ceo/api/breeds/image/random");
        console.log(respone);
        let data = await respone.json();
        console.log(data); 
        image.src = data.message;
    }
      catch(error){
        console.log(error);
      }

});
//c2: sdung tvien axios
btn.addEventListener('click',async()=>{
    try{
        let respone=await axios.get("https://dog.ceo/api/breeds/image/random")

        console.log(respone);
        image.src=respone.data.message;
    }
    catch(error)
    {
        console.log(error);
    }
 })

