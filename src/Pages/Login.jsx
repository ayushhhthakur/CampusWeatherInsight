import React from 'react'

const Login = () => {
  return (
    <>
      <div class="alert alert-primary" role="alert" style={{textAlign: 'center'}}>
        For Admin Use Only
      </div>
      <div className="login">
        <div className="login-container">
          <div className="login-form">
            <form>
              <h1>Login</h1>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter your password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login