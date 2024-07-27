import React from 'react';
import { Box, Grid, Typography, Button, IconButton, Card, CardMedia, CardContent, CardActions, Divider, LinearProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AppleIcon from '@mui/icons-material/Apple';
import Countdown from 'react-countdown';
import { styled } from '@mui/system';

// Replace these with your image paths
const deals = [
  {
    id: 1,
    image: '/images/image-140x140.jpg', // Update the path as needed
    name: 'Apple iPhone 11 Pro 256GB Space Gray – Unlocked',
    discount: '5%',
    price: '$210.00',
    originalPrice: '$220.00',
    rating: 5,
    reviews: 2,
    details: [
      'Screen Size 10.9 inch',
      'Operating System iOS 14.0',
      'Product Length 9.74 inch',
    ],
    sold: 85,
    stock: 100,
  },
  {
    id: 2,
    image: '/mnt/data/image.png', // Update the path as needed
    name: 'Apple iPhone 13 Pro Max 128GB – Unlocked (with 3D, Video)',
    discount: '20%',
    price: '$120.00',
    originalPrice: '$150.00',
    rating: 5,
    reviews: 1,
    details: [
      'Bass and Stereo Sound',
      'Display with 3088 x 1440 pixels resolution',
      'Memory, Storage & SIM: 12GB RAM, 256GB',
    ],
    sold: 50,
    stock: 100,
  },
];

const Completionist = () => <span>Offer ended!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        {days} days {hours} hrs {minutes} mins {seconds} secs
      </span>
    );
  }
};

const HoverIcons = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  padding: theme.spacing(1),
  opacity: 0,
  transition: 'opacity 0.3s',
}));

const HoverCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    [`& ${HoverIcons}`]: {
      opacity: 1,
    },
  },
}));

const DealsOfTheDay = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Top Deals Of The Day
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4}>
        {deals.map((deal) => (
          <Grid item xs={12} md={6} key={deal.id}>
            <HoverCard sx={{ display: 'flex', height: '100%' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 200, objectFit: 'contain', bgcolor: 'grey.200', p: 2 }}
                  image={deal.image}
                  alt={deal.name}
                />
                <HoverIcons>
                  <IconButton sx={{ color: 'white' }}>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton sx={{ color: 'white' }}>
                    <CompareIcon />
                  </IconButton>
                  <IconButton sx={{ color: 'white' }}>
                    <VisibilityIcon />
                  </IconButton>
                </HoverIcons>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: '1 0 auto', pl: 2 }}>
                  <Typography component="div" variant="h6">
                    {deal.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AppleIcon sx={{ color: '#ffd700', mr: 1 }} />
                    {deal.rating} ({deal.reviews} reviews)
                  </Typography>
                  <Typography variant="h6" color="error" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {deal.price}
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'line-through', ml: 1 }}
                    >
                      {deal.originalPrice}
                    </Typography>
                  </Typography>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <ul style={{ paddingLeft: '16px', margin: 0 }}>
                      {deal.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={(deal.sold / deal.stock) * 100}
                      sx={{ height: 10, borderRadius: 5, mb: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Sold: {deal.sold}/{deal.stock} products
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Button variant="contained" color="primary">
                    Add To Cart
                  </Button>
                </CardActions>
              </Box>
            </HoverCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Typography variant="h6" color="error">
          Hurry up! Offer ends in: <Countdown date={Date.now() + 1000000} renderer={renderer} />
        </Typography>
      </Box>
    </Box>
  );
};

export default DealsOfTheDay;
