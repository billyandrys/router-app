import { paste } from '@testing-library/user-event/dist/paste'
import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

export default function CatergoryPage() {
    const location = useLocation()
    const history = useHistory()
    
    const query = new URLSearchParams(location.search)
    const skip = parseInt(query.get('skip')) || 0
    const limit = parseInt(query.get('limit')) || 15
    console.log(`${limit}  ${skip}`)
    const handleNext =()=>{
      query.set('skip', skip + limit)
     
      history.push({search:query.toString()})
    }
    
  return (
    <div>
      <h1>{query.get('limit')}</h1>
      <h2>{skip}</h2>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}


//10.206.185.9