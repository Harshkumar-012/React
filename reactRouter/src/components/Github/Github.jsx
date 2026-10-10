import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState({})
// useEffect(()=>{
//     fetch('https://api.github.com/Users/Harshkumar-012')
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
//         setData(data)
//     })
// },[])
// Callback

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers:{data.followers}
      <img className='' src={data.avatar_url} alt='Github Picture ' />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch(
        'https://api.github.com/users/Harshkumar-012'
    )
    return response.json()
}
