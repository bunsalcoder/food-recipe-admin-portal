import React from 'react'

interface RecipeCardProps {
  image: string
  title: string
  description: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  )
}

export default RecipeCard
