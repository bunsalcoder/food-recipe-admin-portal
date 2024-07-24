import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Recipe from './pages/recipe'
import Ingredients from './pages/ingredient'
import Category from './pages/category'
import Favourite from './pages/favourite'
import MainLayout from './layout/MainLayout'

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/category" element={<Category />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </MainLayout>
  )
}

export default App
