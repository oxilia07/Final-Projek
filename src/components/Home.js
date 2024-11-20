import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useUserAuth } from '../context/UserAuthContext';

// Import the products data from the external file
import data from '../data';

const Home = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/'); // Navigate to the home/login page after logging out
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='min-vh-100 bg-light'>
      {/* Hero Section */}
      <section className='bg-gradient bg-primary text-white py-5'>
        <div className='container text-center'>
          <h1 className='display-4 fw-bold'>Welcome to Our Beauty Shop</h1>
          <p className='lead'>
            Explore our collection of premium beauty products
          </p>
        </div>
      </section>

      {/* Products List Section */}
      <section className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>Our Products</h2>
          <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
            {data.map((product) => (
              <Col key={product.id}>
                <Card className='shadow-sm border-light d-flex flex-column'>
                  <Card.Img
                    variant='top'
                    src={product.image_link}
                    alt={product.name}
                    className='product-image'
                  />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title className='text-truncate'>
                      {product.name}
                    </Card.Title>
                    <Card.Text className='text-muted'>
                      {product.price_sign}
                      {product.price} {product.currency}
                    </Card.Text>
                    <Card.Text className='text-muted text-truncate'>
                      {product.description}
                    </Card.Text>
                    <Button
                      variant='outline-dark'
                      className='w-100 mt-auto'
                      onClick={() => navigate(`/product/${product.id}`)} // Navigate to product details page
                    >
                      View Product
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Logout Button */}
      <section className='py-4 bg-white'>
        <div className='container text-center'>
          <Button
            variant='secondary'
            onClick={handleLogout}
            className='w-100 py-2'>
            Log Out
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
