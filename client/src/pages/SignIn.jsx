import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='container p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-weight-bold my-7'>Sign In</h1>
      <form className='mb-4'>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Email'
            className='form-control'
            id='email'
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            placeholder='Password'
            className='form-control'
            id='password'
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary btn-block'
        >
          Sign In
        </button>
      </form>
      <div className='d-flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to='/sign-up' className='text-primary'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
