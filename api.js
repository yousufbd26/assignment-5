const search = document.getElementById('search');
search.addEventListener('click', function () {
    const Name = document.getElementById('foodInput').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ Name }`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('foods').innerHTML = "";
            document.getElementById('detailsFood').innerHTML = ' ';
            const foods = document.getElementById('foods');
            data.meals.forEach(element => {
                const food = document.createElement('div')
                food.innerHTML = `
            <img src="${ element.strMealThumb }" onClick="Click(${ element.idMeal })">
            <h1 onClick="Click(${ element.idMeal })" >${ element.strMeal }</h1>
            `;
                food.className = "card";
                foods.appendChild(food);
            });
        })
        
        
})

let Click = foodId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ foodId }`)
        .then(res => res.json())
        .then(data => {
            let foodData = document.getElementById('detailsFood');
            document.getElementById('detailsFood').innerHTML = ' ';
            document.getElementById('detailsFood').style.display = 'block';
            let foodDetails = document.createElement('div')
            foodDetails.innerHTML = `
            <img src="${ data.meals[0].strMealThumb }">
            <h1>${ data.meals[0].strMeal }</h1>
            <br>
            <h4>Category: ${ data.meals[0].strCategory }</h4>
            <br>
            <h5> ${ data.meals[0].strMeasure1 }</h5>
            <h5> ${ data.meals[0].strMeasure2 }</h5>
            <h5> ${ data.meals[0].strMeasure3 }</h5>
            <h5> ${ data.meals[0].strMeasure4 }</h3>
            <h5> ${ data.meals[0].strMeasure5 }</h3>
            <h5> ${ data.meals[0].strMeasure6 }</h3>
            `;
            foodDetails.className = "foodDetails";
            foodData.appendChild(foodDetails);
        })
}