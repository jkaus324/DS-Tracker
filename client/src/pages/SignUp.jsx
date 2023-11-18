import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

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
        console.log("Signup failed!!");
        return;
      }
      console.log("Signup success!!!");
      navigate('/signin');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              className="form-input"
              id="username"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Email"
              className="form-input"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              id="password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="form-button">
            Sign Up
          </button>
        </form>

        <div className="text-center">
          <p>Already have an account?</p>
          <Link to="/signin" className="text-primary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}