import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

const categories = [
  { name: 'Decor & Furniture', products: 11, image: 'decor.jpg' },
  { name: 'Smart Phones', products: 21, image: 'smartphones.jpg' },
  { name: 'Fashion & Clothing', products: 8, image: 'fashion.jpg' },
  { name: 'Home Kitchen', products: 10, image: 'kitchen.jpg' },
  { name: 'Camera & Photo', products: 0, image: 'camera.jpg' }
];

const CategoryCard = styled(Card)(({ theme }) => ({
  width: 220, // Adjust the width as needed
  margin: theme.spacing(2),
  borderRadius: theme.spacing(2), // Adjust the border-radius as needed
  textAlign: 'center',
  boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
}));

const PopularCategories = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
        Popular Categories
      </Typography>
      <Divider sx={{ marginBottom: 4, borderBottomWidth: 3, width: '10%', borderColor: 'blue', marginX: 'auto' }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <CardMedia
              component="img"
              height="140"
              image={category.image} // Replace with actual image paths
              alt={category.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.products} Products
              </Typography>
            </CardContent>
          </CategoryCard>
        ))}
      </Box>
    </Box>
  );
};

export default PopularCategories;
