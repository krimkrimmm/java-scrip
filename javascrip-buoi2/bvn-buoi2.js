let products = [
    { name: "Iphone 13 Pro Max", price: 3000000, brand: "Apple", count: 2 },
    { name: "Samsung Galaxy Z Fold3", price: 41000000, brand: "Samsung", count: 1 },
    { name: "IPhone 11", price: 15500000, brand: "Apple", count: 1 },
    { name: "OPPO Find X3 Pro", price: 19500000, brand: "OPPO", count: 3 },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng
console.log("1. Product Information:");
products.forEach(product => {
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
});

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
const totalCost = products.reduce((sum, product) => sum + product.price * product.count, 0);
console.log("2. Total cost:", totalCost);

// 3. Tìm các sản phẩm của thương hiệu "Apple"
const appleProducts = products.filter(product => product.brand === "Apple");
console.log("3. Apple Products:", appleProducts);

// 4. Tìm các sản phẩm có giá > 20000000
const expensiveProducts = products.filter(product => product.price > 20000000);
console.log("4. Products with price > 20000000:", expensiveProducts);
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const proProducts = products.filter(product => product.name.toLowerCase().includes("pro"));

console.log("5. Products containing 'pro':", proProducts);

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
products.push({ name: "Xiaomi Mi 11 Ultra", price: 12000000, brand: "Xiaomi", count: 1 });
console.log("6. Products after adding new item:", products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products = products.filter(product => product.brand !== "Samsung");
console.log("7. Products after removing Samsung items:", products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);
console.log("8. Products sorted by price (ascending):", products);
// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.count - a.count);
console.log("9. Products sorted by count (descending):", products);
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 2);
console.log("10. Two random products:", randomProducts);

// Output to the webpage
const output = document.getElementById("output");
output.innerHTML = "<h3>Check the console for detailed results.</h3>";
 