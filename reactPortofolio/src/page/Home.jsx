import React, { useState } from 'react'
import { useUser } from '../UserContext';


function Home() {

  const {user} =useUser();
  return (
    <>
    <div className='border-1 rounded p-1 m-1'>
      <h1 className='text-center font-bold font-4'>Blog App</h1>
      <p className='text-right pr-15 font-bold underline italic'>Hello: {user.name}</p>
      <h2 className='font-bold'>What is Lorem?</h2>
      <p className='text-left p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laudantium, illo blanditiis similique corporis accusamus omnis ipsam provident 
        ratione dolorum magni necessitatibus. Totam repellat doloremque eaque 
        id consequuntur delectus eligendi reprehenderit. Lorem ipsum dolor sit 
        amet consectetur adipisicing elit. Quidem, sint at nemo iste, 
        neque nesciunt consequuntur error
         molestias deleniti earum beatae harum cum rem aliquam ab perferendis,
          quam dolores nihil.</p>
        <h4 className='italic font-bold'>Written By: {user.name}</h4>
    </div>
    </>
  )
}

export default Home
