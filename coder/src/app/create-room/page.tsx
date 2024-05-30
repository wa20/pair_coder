import React from 'react'
import CreateRoomForm from './CreateRoomForm'




function page() {
  return (
    <div className='p-10 m-5 pb-20'>
        <h1 className='font-semibold text-4xl'>Create Room</h1>
        <CreateRoomForm />
    </div>
    
  )
}

export default page