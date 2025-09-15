function generateRecipe(event) {
    event.preventDefault();
    /*alert("I am craving parfait right now! ya Allaah please make it easy for me");*/
    /*let recipe = document.querySelector(".form-output");
    recipe.innerHTML = "hey! hey!";*/
    new Typewriter('#recipe', {
        strings: ['hey! hey!'],
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}
let recipeForm = document.querySelector("#form");
recipeForm.addEventListener("submit", generateRecipe);