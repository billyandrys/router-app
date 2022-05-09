import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CatergoryPage() {
    const location = useLocation()
    
    const query = new URLSearchParams(location.search)
    const skip = query.get('skip') || 0
    const limit = query.get('limit') || 15
    console.log()
    
  return (
    <div>CatergoryPage</div>
  )
}


//10.206.185.9