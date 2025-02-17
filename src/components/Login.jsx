import React, { useState } from 'react'

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ pass, setPassword ] = useState("");
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-200 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          {/* Input component Started*/}
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">EmailId: { email }</span>
              </div>
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="label">
              </div>
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password: { pass }</span>
              </div>
              <input
                type="text"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="label">
              </div>
            </label> 
          </div>
          {/* Input component Ended*/}
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login