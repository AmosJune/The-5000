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

