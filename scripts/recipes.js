//Exercise
//Use JavaScript to show the list of recipes. Be sure to output all the info for each recipe.
//Create a function to render recipes by:
// TODO 1. Iterating through the recipes data array,
// TODO 2. Plugging information from the dataset into an HTML recipe "template" (note: don't forget to join recipe cards for aligned display purposes),
// TODO 3. Plug that filled in HTML collection into the existing grid div in the index file.
function renderRecipes(recipesList) {
  const recipesHTML = recipesList
    .map(
      (recipe) => `
      <div class="recipe-container">
        <div class="recipe-image-container">
              <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}"></div>
        <div class="recipe-details">
          <div class="recipe-title">${recipe.title}</div>
          <div class="recipe-description">${recipe.description}</div>
        </div>
        <button class="add-to-favorites-button" data-recipe-id="${recipe.id}">Favorite</button>
      </div>`
    )
    .join("");
  const recipesGrid = document.querySelector(".js-recipes-grid");
  recipesGrid.innerHTML = recipesHTML;
}

renderRecipes(recipes);
//Add an image path to each recipe. You're welcome to add your own images into the project folder or use image addresses from the web. Be sure to show the image for each recipe.
