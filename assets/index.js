// Add event listener to DOM
const submit = document.getElementById('btn');
submit.addEventListener('click', function(event){
    event.preventDefault()
    let meal = {
        mealName : event.target.mealName.value,
        mealImage : event.target.image_url.value,
        mealDescription : event.target.mealDescription.value
    }
    listDishes(meal)
    orderDish(meal)
});

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
    fetch("http://localhost:3000/categories")
    .then((resp) => resp.json())
    .then(recipeList => recipeList.forEach(recipe => listDishes(recipe)))
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