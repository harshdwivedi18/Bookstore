import React from 'react'

function Card({ item }) {
    console.log(item);
  return (
    <>
    <div className="card w-[50vh] glass m-2 h-[80vh] m-2 dark:text-white">
  <figure className='h-80 w-70 flex '><img src={item.image} alt="car" className="h-full w-full"/></figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <hr/>
    <p>{item.name}</p>
    <p>Price : ${item.price}</p>
    <div className="card-actions justify-end">
      <button className="btn text-black  hover:text-green-500 hover:bg-lime-400 bg-yellow-50">Read now</button>
    </div>
  </div>
  </div>
    </>
  )
}

export default Card
