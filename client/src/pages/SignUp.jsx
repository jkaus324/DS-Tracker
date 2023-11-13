import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='container p-3'>
      <h1 className='text-center font-weight-bold my-4'>Signup</h1>
      <form  className='mb-4'>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Username'
            className='form-control'
            id='username'
          />
        </div>
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
            type='text'
            placeholder='Password'
            className='form-control'
            id='password'
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary btn-block'>
          Sign Up
        </button>
      </form>
      <div className='d-flex justify-content-center'>
        <p className='mr-2'>Have an account?</p>
        <Link to='/sign-in' className='text-primary'>
          Sign In
        </Link>
      </div>
    </div>
  );
}
