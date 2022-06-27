// Add event listener to DOM
const submit = document.getElementById('btn');
submit.addEventListener('click', function(event){
    event.preventDefault()
    let meal = {
        name:event.target.strCategory.value,
        image:event.target.strCategoryThumb.src,
        description:event.target.strCategoryDescription.value
    };
    listDishes(meal)
    orderDish(meal)
});

// Search for a meal 
const search = document.getElementsByTagName('form')
document.addEventListener('DOMContentLoaded', event => {
    allRecipes()
let findMeal = function findMeal(searchMeal) {
        fetch(`http://localhost:3000/categories${searchMeal.toLowerCase()}`)
        .then(resp => resp.json())
        .then(data => {
            listDishes(data.recipe)})
    }
})


// DOM Functions
function listDishes(recipe){
    let meal = document.createElement('li')
    meal.id = 'meal'
    meal.innerHTML = `
     <div class = mealTime>
    
       <h3>${recipe.strCategory}</h3>
       <img src = '${recipe.strCategoryThumb}'>
       <p>${recipe.strCategoryDescription}</p>
     </div>`
//Append it to the DOM
   document.getElementById('menuList').appendChild(meal)
}

//Fetch request
function allRecipes(){
    fetch('http://localhost:3000/categories')
    .then((resp) => resp.json())
    .then(recipeList => recipeList.forEach(recipe => listDishes(recipe)))
    .catch(e => {
        console.log(e);
    })
 };
 
 // POST Request - Adding a meal
function orderDish(meal){
    fetch('http://localhost:3000/categories', {
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
// function init(){
//     allRecipes()
//  };
//  init();

 //Search for an individual meal
//  function findMeal(searchMeal) {
//      fetch(`http://localhost:3000/categories${searchMeal.toLowerCase()}`)
//      .then(resp => resp.json())
//      .then(data => {
//          listDishes(data.recipe)})
//  }