import React from "react"

const IngredientList = (ingredient) => {
    return <li>{ingredient.name}({ingredient.measures.metric.amount}{ingredient.measures.metric.unitShort})</li>
    }

export default IngredientList