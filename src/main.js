const mealsEl = document.getElementById("meals");
const favoriteContainer = document.getElementById("fav-meals");
const mealPopup = document.getElementById("meal-popup");
const mealInfoEl = document.getElementById("meal-info");
const popupCloseBtn = document.getElementById("close-popup");
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");
getRandomMeal();

async function getRandomMeal() {
 fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );    
    const randomMeal = await resp.json();

    console.log(randomMeal.meals[0])
}

async function getMealById(id){
    const meal = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
}

async function getMealsBySearch(term){
    const meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?s="+term)
}