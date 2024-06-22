import React from 'react'
import FreeCard from './FreeCard'

function Home() {
  return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(images/Home-bg.jpg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content flex-col md:flex-row mx-4">
    <div className='h-full md:w-1/3 mx-20 my-5'>
    {/* this is left section */}
     <div className=''>
        <img  className="shadow shadow-black drop-shadow-lg" src="/images/Logo.png" alt="" width= "400px" />
     </div>
     {/* left section ends here */}
    </div>
    <div className='w-full md:w-1/2 mx-20 my-5'>
    {/* This is right section */} 
    <div className='flex-col font-semibold p-2 text-2xl text-black'>
        <div>
            Welcome User , to your one place stop for ultimate reading experience with multiple categories and genres of books. <span className='text-rose-500'>"Happy Reading"</span>
        </div>
        <br />
        <div>
        “A reader lives a thousand lives before he dies. The man who never reads lives only one.”
        </div>
        <br />
        <div>
        George R.R. Martin
        </div>
     </div>
      
    </div>
  </div>
</div>
   <FreeCard/>
   </>
  )
}

export default Home
