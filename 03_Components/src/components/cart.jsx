// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Cart({ productName , price  , imgSrc}) {
  return (
    <div className='bg-white m-10'>
      <div className="w-[300px] rounded-md border">
  <img     src= {imgSrc}
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4 mr-5">
    <h1 className="text-lg font-semibold"> {productName} </h1>
    <p className="mt-3 text-sm text-gray-600">
      {price}
    </p>
    <button
      type="button"
      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
     More info</button>
  </div>
</div>

    </div>
  )
}

export default Cart
