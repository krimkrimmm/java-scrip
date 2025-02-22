async function searchMeals() {
    const query = document.getElementById('search').value;
    if (!query) return;
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        displayMeals(response.data.meals);
    } 
    catch (error) {
        console.error("Error fetching meals:", error);
    }
}

async function getMealDetail(id) {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayMealDetail(response.data.meals[0]);
    } 
    catch (error) {
        console.error("Error fetching meal details:", error);
    }
}

async function getRandomMeal() {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
        displayMealDetail(response.data.meals[0]);
    } 
    catch (error) {
        console.error("Error fetching random meal:", error);
    }
}

function displayMeals(meals) {
    const mealList = document.getElementById("meal-list");
    mealList.innerHTML = "";
    if (!meals) 
        {
        mealList.innerHTML = "<p>Không tìm thấy món ăn nào.</p>";
        return;
    }
    meals.forEach(meal => {
        const mealItem = document.createElement("div");
        mealItem.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" width="150">
            <button onclick="getMealDetail(${meal.idMeal})">Xem chi tiết</button>
        `;
        mealList.appendChild(mealItem);
    });
}
function displayMealDetail(meal) {
    const mealDetail = document.getElementById("meal-detail");
    mealDetail.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" width="300">
        <p>${meal.strInstructions}</p>
        
        <a href="${meal.strYoutube}" target="_blank">Xem video</a>
    `;
}








