import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/header'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
