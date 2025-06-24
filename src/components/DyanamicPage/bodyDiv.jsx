export default function BodyDiv() {
       const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    return <>
        
            <form className="BodyDiv">
                <input type="text" className="BodyDivInput" placeholder="e.g. paprika" />
                <button className="BodyDivButton">+ Add Ingredient</button>
            </form>

            <ul>
    {ingredients.map((ingredient, index)=>(
                <li key={index} className="BodyDivListItem">
                    <span className="BodyDivListItemText">{ingredient}</span>
                    <button className="BodyDivListItemButton">X</button>
                </li>
    ))}
            </ul>
    
    </>
}