// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
  return (
    <div className=' flex justify-center align-middle text-3xl bg-gray-600 p-3 m-3 text-white'>
      User : {id}
    </div> 
  )
}
 
export default User
