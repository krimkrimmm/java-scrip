//tạo mảng todos (mockup data)
let todos =[
    {id:1,name:"đi chơi với bạn",status:true},
    {id:2,name:"đá bóng",status:false},
    {id:3,name:"lam bai tâp js",status:true},
];

//hiển thị ds todo ra ngoai giao diện
const ul = document.querySelector("ul");
const renderTodos = (todos)=>{
    if(todos.length===0){
        ul.innerHTML="<li>ds công việc trống</li>";
        return;
    }
    let html="";
    todos.forEach(todo=>
        {
            html+=` <li>
                <input type="checkbox"${todo.status?"checked":""} />
                <span>Đi chơi</span>
                <button>Edit</button>
                <button>Delete</button>
            </li>`;       
    });
    ul.innerHTML=html;
}

const deleteTodo = (id)=>{
    const todos = todos.filter(todo=> todo.id!==id);
    renderTodos(todos)
};
const toggleStatus=(id)=>{};

renderTodos(todos);