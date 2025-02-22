let currentPage = 1;
let searchQuery = "";
async function fetchUsers(page = 1) {
    try {
        const response = await axios.get(`https://api.github.com/users?per_page=10&page=${page}`);
        displayUsers(response.data, page);
    }
     catch (error) {
        console.error("Error fetching users:", error);
    }
}

async function searchUsers(page = 1) {
    searchQuery = document.getElementById('search').value;
    if (!searchQuery) return;
    currentPage = page;
    
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}&per_page=10&page=${page}`);
        displayUsers(response.data.items, page);
    } catch (error) {
        console.error("Error searching users:", error);
    }
}

function displayUsers(users, page)
 {
    const userList = document.getElementById("user-list");
    if (page === 1) {
        userList.innerHTML = "";
    }
    users.forEach(user => {
        const userItem = document.createElement("div");
        userItem.innerHTML = `
            <h3>${user.login}</h3>
            <img src="${user.avatar_url}" width="100">
            
            <a href="${user.html_url}" target="_blank">Xem hồ sơ</a>
        `;
        userList.appendChild(userItem);
    });
    
    document.getElementById("load-more").style.display = users.length === 10 ? "block" : "none";
}

function loadMoreUsers() 
{
    currentPage++;
    searchQuery ? searchUsers(currentPage) : fetchUsers(currentPage);
}
fetchUsers();







