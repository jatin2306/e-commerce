import React from 'react';
import { Container, Box, Card, CardMedia, CardContent, Typography, Button, Chip } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Apple iPad Air 4 10.9-inch Wi-Fi 256GB',
    price: '$49.00',
    image: 'https://via.placeholder.com/140',
    isNew: true,
  },
  {
    id: 2,
    name: 'Apple iPad Mini 6 Wi-Fi Cellular 64GB/128GB',
    price: '$56.00',
    image: 'https://via.placeholder.com/140',
    isNew: true,
  },
  {
    id: 3,
    name: 'Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB',
    price: '$56.00',
    image: 'https://via.placeholder.com/140',
    isNew: true,
  },
  {
    id: 4,
    name: 'Apple iPhone 11 Pro 256GB Space Gray',
    price: '$210.00',
    discountPrice: '$220.00',
    image: 'https://via.placeholder.com/140',
    discount: 5,
  },
  {
    id: 5,
    name: 'Apple iPhone 12 Pro Max 128GB - Unlocked',
    price: '$120.00',
    image: 'https://via.placeholder.com/140',
    isNew: true,
  },
  {
    id: 6,
    name: 'Apple iPhone 13 Mini 128GB Pink - Unlocked',
    price: '$150.00',
    image: 'https://via.placeholder.com/140',
    isNew: true,
  },
];

const TrendingProducts = () => {
  return (
    <Container maxWidth="xl" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Hot Trending Products
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="nowrap"
        overflow="auto"
        paddingBottom="20px"
        sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {products.map((product) => (
          <Card key={product.id} sx={{ minWidth: 250, margin: '0 10px', position: 'relative', borderRadius: '16px' }}>
            {product.isNew && (
              <Chip
                label="New"
                color="primary"
                size="small"
                sx={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}
              />
            )}
            {product.discount && (
              <Chip
                label={`-${product.discount}%`}
                color="secondary"
                size="small"
                sx={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}
              />
            )}
            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
            <CardContent sx={{ paddingBottom: '16px' }}>
              <Typography variant="h6" component="div" noWrap>
                {product.name}
              </Typography>
              <Typography variant="h5" component="div" sx={{ marginTop: '8px', marginBottom: '8px' }}>
                {product.discountPrice ? (
                  <>
                    <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>
                      {product.discountPrice}
                    </span>
                    {product.price}
                  </>
                ) : (
                  product.price
                )}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '20px' }}
              >
                {product.discountPrice ? 'Pre-Order' : 'Add to Cart'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default TrendingProducts;
