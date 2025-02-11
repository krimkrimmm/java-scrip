document.addEventListener("DOMContentLoaded", function () {
    // Danh sách sản phẩm
    const products = [
        {
            id: 1,
            name: "Điện thoại iPhone 14",
           
            price: 25000000,
            brand: "Apple",
            thumbnail: "https://via.placeholder.com/150",
            rating: 5
        },
        {
            id: 2,
            name: "Laptop Dell XPS 15",
            price: 35000000,
           
            brand: "Dell",
            thumbnail: "https://via.placeholder.com/150",
            rating: 4
        },
        {
            id: 3,
            name: "Samsung Galaxy S23",
            price: 23000000,
            brand: "Samsung",
            
            thumbnail: "https://via.placeholder.com/150",
            rating: 4
        },
        {
            id: 4,
            name: "MacBook Air M2",
            price: 28000000,
            brand: "Apple",
            thumbnail: "https://via.placeholder.com/150",
           
            rating: 5
        },
        {
            id: 5,
            name: "Sony WH-1000XM5",
            price: 8500000,
            brand: "Sony",
            thumbnail: "https://via.placeholder.com/150",
            rating: 5
        }
    ];
    // Render danh sách sản phẩm
    function renderProducts() {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";
        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");
            productItem.innerHTML = `
            
            <img src="${product.thumbnail}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Thương hiệu: ${product.brand}</p>
                <p>Giá: ${product.price.toLocaleString()} VND</p>
                <p>Đánh giá: ${"⭐".repeat(product.rating)}</p>
            `;

            productList.appendChild(productItem);
        });
    }
    renderProducts();
});