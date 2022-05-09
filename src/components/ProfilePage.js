import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage() {
    const {username} = useParams()
  return (
    <div>ProfilePage {username}</div>
  )
}
