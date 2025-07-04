export default function BodyDiv() {
       const ingredients = ["Chicken", "Oregano", "Tomatoes"]
       const listedingredients = ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
       ))
   
       function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients);
      }


    return (
    <main>
             <form onSubmit={handleSubmit} className="BodyDiv"  >
                <input type="text" 
                className="BodyDivInput" 
                placeholder="e.g. paprika"
                name = "ingredient"
                />
  
                <button type = "submit" className="BodyDivButton">
                    + Add Ingredient
                </button>
            </form>

            <ul>
                {listedingredients}
            </ul>
    
    </main>
    );
}

