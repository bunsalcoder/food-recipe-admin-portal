import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 fixed">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/recipes" className="hover:text-gray-400">Recipes</Link>
        </li>
        <li>
          <Link to="/category" className="hover:text-gray-400">Category</Link>
        </li>
        <li>
          <Link to="/favourites" className="hover:text-gray-400">Favourites</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
