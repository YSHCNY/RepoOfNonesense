export default function BodyDiv() {
       const ingredients = ["Chicken", "Oregano", "Tomatoes"]
       const listedingredients = ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
       ))
   
       function handleSubmit(event){
        event.preventDefault();
        console.log("iwas clicked");
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

