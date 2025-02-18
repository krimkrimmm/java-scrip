const users = [
    { name: "John Doe", quote: "Life is beautiful!", image: "https://randomuser.me/api/portraits/men/41.jpg", color: "#ffddcc" },
    { name: "Jane Smith", quote: "Believe in yourself!", image: "https://randomuser.me/api/portraits/women/50.jpg", color: "#ccffcc" },
    { name: "Alice Brown", quote: "Never give up!", image: "https://randomuser.me/api/portraits/women/22.jpg", color: "#ccccff" },
    { name: "Emily White", quote: "Keep pushing forward!", image: "https://randomuser.me/api/portraits/women/76.jpg", color: "#ffccff" },
    { name: "Michael Green", quote: "Stay positive!", image: "https://randomuser.me/api/portraits/men/17.jpg", color: "#ffffcc" }
];

const authorsContainer = document.getElementById("authors");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("name");
const testimonials = document.getElementById("testimonials");
users.forEach((user, index) => {
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    if (index === 0) authorDiv.classList.add("selected");
    
    const img = document.createElement("img");
    img.src = user.image;
    img.alt = user.name;
    
    authorDiv.appendChild(img);
    authorsContainer.appendChild(authorDiv);
    
    authorDiv.addEventListener("click", () => {
        document.querySelectorAll(".author").forEach(a => a.classList.remove("selected"));

        authorDiv.classList.add("selected");
        quoteText.textContent = user.quote;
        authorName.textContent = user.name;
        testimonials.style.background = user.color;
    });
});






