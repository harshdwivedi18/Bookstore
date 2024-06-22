import React from 'react'

function Signup() {
  return (
    <>
     <div className="hero min-h-screen" style={{backgroundImage: 'url(images/Signup-BG.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
 
  <div className="hero-content flex-col lg:flex-row-reverse space-x-10">
    <div className="text-center lg:text-left spc">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6 text-2xl text-stone-700 bg-white opacity-80">Signup to become a member of reader's zone and get complete access to all the books in the marketplace</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-slate-950 dark:text-white mt-10">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Username</span>
          </label>
          <input type="text" placeholder="Username" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white ">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span>Already have an account </span>
            <a href="#" className="label-text-alt link link-hover text-lg text-blue-700 dark:text-cyan-100 dark:hover:text-white">Login</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-blue-400 hover:bg-blue-800 hover:text-white">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
  

    </>
   

  )
}

export default Signup
