import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [formData,setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if(data.success===false) {
        console.log("sign-in failure!!");
        return;
      }
      console.log("sign-in success!!");
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='container p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-weight-bold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Email'
            className='form-control'
            id='email'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            placeholder='Password'
            className='form-control'
            id='password'
            onChange={handleChange}
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
