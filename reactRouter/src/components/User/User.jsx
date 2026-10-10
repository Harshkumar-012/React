import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-800 p-4 text-white flex justify-center text-2xl'>
      User:{userid}
    </div>
  )
}

export default User
