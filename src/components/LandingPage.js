import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to signup page
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className='min-vh-100 bg-light'>
      {/* Hero Section */}
      <section className='bg-gradient bg-primary text-white py-5'>
        <div className='container text-center'>
          <h1 className='display-4 fw-bold'>Welcome to Our Beauty Shop</h1>
          <p className='lead'>
            Discover a world of premium beauty products just for you
          </p>
          <div>
            <Button
              variant='outline-light'
              onClick={handleSignUp}
              className='mx-2'>
              Sign Up
            </Button>
            <Button
              variant='outline-light'
              onClick={handleLogin}
              className='mx-2'>
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-5'>
        <Container>
          <h2 className='text-center mb-4'>Why Choose Us?</h2>
          <p className='lead text-center'>
            We offer the best quality beauty products at unbeatable prices. Shop
            with confidence and enhance your beauty regimen today.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;
