import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';
import { Star, StarBorder, StarHalf } from '@mui/icons-material';

const products = [
  {
    id: 1,
    image: '/images/download1.jpg', // Replace with your image path
    title: 'Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB',
    rating: 3,
    reviews: 2,
    price: '$56.00',
    description: [
      'Bass and Stereo Sound.',
      'Display with 3088 x 1440 pixels resolution.',
      'Memory, Storage & SIM: 12GB RAM, 256GB.',
    ],
    isNew: true,
  },
  {
    id: 2,
    image: '/images/download1.jpg', // Replace with your image path
    title: 'Apple iPhone 11 Pro 256GB',
    rating: 5,
    price: '$210.00',
    oldPrice: '$220.00',
    discount: '-5%',
  },
  {
    id: 3,
    image: '/images/download1.jpg', // Replace with your image path
    title: 'Apple iPhone 13 Pro Max 128GB',
    rating: 5,
    price: '$120.00',
    oldPrice: '$150.00',
    discount: '-20%',
  },
  {
    id: 4,
    image: '/images/download1.jpg', // Replace with your image path
    title: 'Apple iPhone 13 Mini 128GB Pink',
    rating: 5,
    price: '$150.00',
  },
  {
    id: 5,
    image: '/images/download1.jpg', // Replace with your image path
    title: 'Apple Watch Aluminum Case',
    rating: 5,
    price: '$49.00',
  },
  {
    id: 6,
    image: '/images/download1.jpg', // Replace with your image path
    title: 'Apple Watch Aluminum Case',
    rating: 5,
    price: '$100.00',
    oldPrice: '$128.00',
    discount: '-22%',
  },
  {
    id: 7,
    image: '/images/download1.jpg', // Replace with your image path
    title: 'Apple Watch Magnetic Fast Charger',
    rating: 5,
    price: '$69.00',
    oldPrice: '$100.00',
    discount: '-31%',
  },
];

const ProductComponent = () => {
  const renderRating = (rating) => {
    return (
      <Box display="flex" alignItems="center">
        {[...Array(5)].map((_, index) => {
          if (index < rating) return <Star key={index} color="primary" />;
          if (index < rating + 0.5) return <StarHalf key={index} color="primary" />;
          return <StarBorder key={index} color="primary" />;
        })}
      </Box>
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 4 }}>
        Top Featured Products
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {/* Left main product card without carousel */}
          <Card sx={{ borderRadius: 2, display: 'flex', flexDirection: 'row', height: '100%' }}>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image={products[0].image}
              alt={products[0].title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              {products[0].isNew && <Chip label="New" color="primary" sx={{ marginBottom: 1 }} />}
              <Typography variant="h6">{products[0].title}</Typography>
              {renderRating(products[0].rating)}
              <Typography variant="body2" color="textSecondary">
                ({products[0].reviews} reviews)
              </Typography>
              <Typography variant="h5" color="primary" sx={{ margin: '10px 0' }}>
                {products[0].price}
              </Typography>
              <ul>
                {products[0].description.map((desc, index) => (
                  <li key={index}>
                    <Typography variant="body2">{desc}</Typography>
                  </li>
                ))}
              </ul>
              <Button variant="contained" color="primary">Add To Cart</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {products.slice(1).map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card sx={{ borderRadius: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    {product.discount && <Chip label={product.discount} color="success" sx={{ marginBottom: 1 }} />}
                    <Typography variant="body2">{product.title}</Typography>
                    {renderRating(product.rating)}
                    <Typography variant="h6" color="primary" sx={{ margin: '10px 0' }}>
                      {product.price}
                      {product.oldPrice && (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ textDecoration: 'line-through', marginLeft: 1 }}
                          component="span"
                        >
                          {product.oldPrice}
                        </Typography>
                      )}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductComponent;
