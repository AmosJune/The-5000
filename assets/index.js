// Add event listener to DOM
const submit = document.getElementById('btn');
submit.addEventListener('click', function(event){
    event.preventDefault()
    let meal = {
        mealName : event.target.strCategory.value,
        mealImage : event.target.strCategoryThumb_url.value,
        mealDescription : event.target.strCategoryDescription.value
    }
    listDishes(meal)
    orderDish(meal)
});

// const search = document.getElementsByTagName('form')
// document.addEventListener('DOMContentLoaded', event => {
//     allRecipes()
// })


// DOM Functions
function listDishes(recipe){
    let meal = document.createElement('li')
    meal.id = 'meal'
    meal.innerHTML = `
     <div class = mealTime>
    
       <h3>${recipe.mealName}</h3>
       <img src = '${recipe.mealImage}'>
       <p>${recipe.mealDescription}</p>
      
     </div>`
//Append it to the DOM
   document.getElementById('menuList').appendChild(meal)
}

//Fetch request
function allRecipes(){
    fetch('http://www.themealdb.com/api/json/v1/1/categories.php')
    .then((resp) => resp.json())
    .then(recipeList => recipeList.forEach(recipe => listDishes(recipe)))
    .catch(e => {
        console.log(e);
    })
 };
 
 // POST Request - Adding a meal
function orderDish(meal){
    fetch('http://www.themealdb.com/api/json/v1/1/categories.php', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(meal)
    })
    .then(resp => resp.json())
    .then(recipe => console.log(recipe))
 };

 // After fetch, render data to DOM
function init(){
    allRecipes()
 };
 init();

 function findMeal(searchMeal) {
     fetch(`http://www.themealdb.com/api/json/v1/1/categories/${searchMeal.toLowerCase()}.php`)
     .then(resp => resp.json())
     .then(data => {
         listDishes(data.recipe)})
 }