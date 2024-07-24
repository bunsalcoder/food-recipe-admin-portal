import React from 'react'
// import RecipeCard from '../components/card/recipe-card'
// import exampleImage from '../assets/images/example.jpg'

const Recipe: React.FC = () => {
  const recipe = {
    // image: exampleImage,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    instructions: "1. Cook the pasta... (add full instructions here)",
    ingredients: ["Spaghetti", "Eggs", "Cheese", "Pancetta", "Pepper"]
  }

  return (
    <div className="mt-4">
      {/* <RecipeCard image={recipe.image} title={recipe.title} description={recipe.description} /> */}
      <h2 className="text-2xl font-bold mt-6">Ingredients</h2>
      <ul className="list-disc ml-6 mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mt-6">Instructions</h2>
      <p className="text-gray-700 mt-2">{recipe.instructions}</p>
    </div>
  )
}

export default Recipe
