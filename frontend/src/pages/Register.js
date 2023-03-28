import React from 'react'

const Register = () => {
  return (
    <div>
      <h1 className='logintitle'>&#9782; Register</h1>
      <div className='loginform'>
        <form className='form'>
          <div>
            <label className='labelform'>Email</label>
            <input type='email' className='inputarea'></input>
          </div>
          <div>
            <label className='labelform'>password</label>
            <input type='password' className='inputarea'></input>
          </div>
          <button className='buttonsubmit' type='submit'>Login</button>
        </form>
      </div>  
    </div>
  )
}

export default Register
