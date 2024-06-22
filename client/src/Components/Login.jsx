import React, { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { SiSpinrilla } from "react-icons/si";
function Login() {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const handleLogin = () => {
    setLoading(true);
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal" >
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
            <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="  Enter your email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="  Enter your password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={handleLogin}
                      type="submit"
                      className="flex w-full justify-center items-center gap-2 rounded-md bg-stone-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {loading && <SiSpinrilla className="animate-spin" />}
                      <p>Login</p>
                    </button>
                  </div>
                </form>

                <div className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{" "}
                  <NavLink
                    to="/signup"
                    onClick={()=>document.getElementById("my_modal_3").closeModal()}
                    className="font-semibold leading-6 text-blue-900 hover:text-indigo-500"
                  >
                    Sign Up & Register
                  </NavLink>
                </div>
              </div>
            </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
