import React from 'react'
import Button from './Button';

const Body = () => {
  return (
    <div className="max-w- [60rem] m-auto text-center py-[8 rem]">
      <h1 className="text-7xl font-sans font-bold">The best way to <span className="bg-red-300 rounded-2xl px-3">review</span> creative assets</h1>
      <div className="text-2xl my-5">
        <Button title="Join Subscription"/>
      </div>
      
    </div>
  )
}

export default Body;
