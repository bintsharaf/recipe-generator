function displayRecipe(response) {
    console.log("recipe generated");
    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    }); 
}
function generateRecipe(event) {
    event.preventDefault();
    /*alert("I am craving parfait right now! ya Allaah please make it easy for me");*/
    /*let recipe = document.querySelector(".form-output");
    recipe.innerHTML = "hey! hey!";*/
    let instructionInput = document.querySelector("#user-instructions");
    let key = "29583e5b03o3adtc2486edaf9f3af0e3";
    let context = "you are a recipe expert and love to explain recipe to a layman. Your mission is to use basic HTML ande separate each instruction with a <br/> and put each title inside a <strong>";
    let prompt = `User instructions: Generate an african recipe about ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
    
    let recipe = document.querySelector("#recipe");
    recipe.classList.remove("hidden");
    recipe.innerHTML = `<div class = "generating">Generating recipe for ${instructionInput.value}</div>`;

    console.log("Generating recipe");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayRecipe);
    
}
let recipeForm = document.querySelector("#form");
recipeForm.addEventListener("submit", generateRecipe);