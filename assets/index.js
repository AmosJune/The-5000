fetch("http://www.themealdb.com/api/json/v1/1/categories.php")
.then((response) => response.json())
.then(data => {
    console.log(data.results);
    const meals = data.results
    return meals.map((result) => {
        const img = document.querySelector('#pokemon-image')
        img.src = pokemonData.sprites.front_default
      
        const name = document.querySelector('#pokemon-name')
        name.textContent = pokemonData.name 
    })
})