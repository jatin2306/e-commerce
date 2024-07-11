  import React from 'react';
  import Slider from 'react-slick';
  import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';

  const sliderImages = [
    {
      src: 'https://via.placeholder.com/800x400',
      title: 'Gaming Headset Brilliant Lighting Effect',
      description: 'Wireless Connection With TV, Computer, Laptop...'
    },
    {
      src: 'https://via.placeholder.com/800x400',
      title: 'High-Quality Headphones',
      description: 'Experience the best sound quality'
    },
    {
      src: 'https://via.placeholder.com/800x400',
      title: 'Stylish Gaming Chair',
      description: 'Comfortable and ergonomic design'
    },
  ];

  function HeroSection() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <Grid container spacing={3} style={{ padding: '20px' }}>
        {/* One Card with Slider on the Left */}
        <Grid item xs={12} md={8}>
          <Card style={{ marginBottom: '20px' }}>
            <Slider {...settings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <CardMedia
                    component="img"
                    alt={image.title}
                    height="400"
                    image={image.src}
                  />
                  <CardContent>
                    <Typography variant="h5">{image.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {image.description}
                    </Typography>
                  </CardContent>
                  <Button size="small" color="primary" style={{ margin: '10px' }}>
                    Discover Now
                  </Button>
                </div>
              ))}
            </Slider>
          </Card>
        </Grid>
        
        {/* Four Cards in a Square on the Right */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card style={{ marginBottom: '20px' }}>
                <CardMedia
                  component="img"
                  alt="Product 1"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
                <CardContent>
                  <Typography variant="h6">Canyon Star Raider</Typography>
                  <Typography variant="body2" color="textSecondary">Headphone & Audio</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card style={{ marginBottom: '20px' }}>
                <CardMedia
                  component="img"
                  alt="Product 2"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
                <CardContent>
                  <Typography variant="h6">Phone Galaxy S20</Typography>
                  <Typography variant="body2" color="textSecondary">Cellphone & Tablets</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card style={{ marginBottom: '20px' }}>
                <CardMedia
                  component="img"
                  alt="Product 3"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
                <CardContent>
                  <Typography variant="h6">Galaxy Buds Plus</Typography>
                  <Typography variant="body2" color="textSecondary">Wireless Earbuds</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card style={{ marginBottom: '20px' }}>
                <CardMedia
                  component="img"
                  alt="Product 4"
                  height="200"
                  image="https://via.placeholder.com/300x200"
                />
                <CardContent>
                  <Typography variant="h6">Chair Swoon Lounge</Typography>
                  <Typography variant="body2" color="textSecondary">Decor & Furniture</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  export default HeroSection;
