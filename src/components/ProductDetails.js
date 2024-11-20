import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Row,
  Col,
  Container,
  ListGroup,
  Spinner
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Example of fetching product data (replace with actual API endpoint)
const fetchProductData = async (id) => {
  const response = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );
  const data = await response.json();
  return data;
};

const ProductDetail = () => {
  // Get the product ID from the URL parameters
  const { id } = useParams();

  // State to hold the product data
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details by ID
    const getProductDetails = async () => {
      try {
        const data = await fetchProductData(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product data');
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  // If loading, show a spinner
  if (loading) {
    return (
      <Container className='py-5'>
        <Row>
          <Col className='text-center'>
            <Spinner animation='border' variant='primary' />
            <p>Loading product details...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  // If error, show an error message
  if (error) {
    return (
      <Container className='py-5'>
        <Row>
          <Col className='text-center'>
            <p>{error}</p>
          </Col>
        </Row>
      </Container>
    );
  }

  // Render the product details
  return (
    <Container className='py-5'>
      <Row>
        {/* Product Image */}
        <Col md={6}>
          <Card.Img variant='top' src={product.image_link} alt={product.name} />
        </Col>

        {/* Product Info */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                {product.brand} - {product.product_type}
              </Card.Subtitle>
              <Card.Text className='text-muted'>
                {product.price_sign}
                {product.price} {product.currency}
              </Card.Text>
              <Card.Text>{product.description}</Card.Text>

              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <strong>Available Colors:</strong>
                </ListGroup.Item>
                {product.product_colors &&
                  product.product_colors.map((color, index) => (
                    <ListGroup.Item key={index}>
                      <span
                        style={{
                          backgroundColor: color.hex_value,
                          padding: '5px 10px',
                          borderRadius: '3px',
                          color: 'white'
                        }}>
                        {color.colour_name}
                      </span>
                    </ListGroup.Item>
                  ))}
              </ListGroup>

              <Button
                variant='outline-dark'
                className='mt-3'
                onClick={() => window.open(product.product_link, '_blank')}>
                View Product on Website
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col>
          <Button
            variant='secondary'
            onClick={() => (window.location.href = '/')}>
            Back to Shop
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
