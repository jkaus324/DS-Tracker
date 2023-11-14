import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        console.log("Login failed!!");
        return;
      }
      console.log("Login success!!!");
      navigate('/signin')
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='container p-3'>
      <h1 className='text-center font-weight-bold my-4'>Signup</h1>
      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='username'
            className='form-control'
            id='username'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='email'
            className='form-control'
            id='email'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            placeholder='password'
            className='form-control'
            id='password'
            onChange={handleChange}
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
