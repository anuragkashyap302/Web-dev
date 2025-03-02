import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const [data , setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/anuragkashyap302')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src='/src/assets/anu.jpg' alt="Git picture" width={300}  height={200}/>
    </div>
  )
}

export default Github
// antoehr method to loead
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anuragkashyap302')
    return response.json()
}