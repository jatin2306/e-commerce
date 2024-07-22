  import React from 'react';
  import Slider from 'react-slick';
  import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';

  const sliderImages = [
    {
      src: '/images/download.jpg', // Update with real image path
      title: 'Sport Edition Red Special Edition',
      description: 'Wireless Connection With TV, Computer, Laptop...'
    },
    {
      src: '/images/download1.jpg', // Update with real image path
      title: 'High-Quality Headphones',
      description: 'Experience the best sound quality'
    },
    {
      src: '/images/download.jpg', // Update with real image path
      title: 'Stylish Gaming Chair',
      description: 'Comfortable and ergonomic design'
    },
  ];

  const productImages = [
    {
      src: '/images/download.jpg', // Update with real image path
      title: 'Canyon Star Raider',
      category: 'Headphone & Audio'
    },
    {
      src: '/images/download1.jpg', // Update with real image path
      title: 'Phone Galaxy S20',
      category: 'Cellphone & Tablets'
    },
    {
      src: '/images/download1.jpg', // Update with real image path
      title: 'Galaxy Buds Plus',
      category: 'Wireless Earbuds'
    },
    {
      src: '/images/download.jpg', // Update with real image path
      title: 'Chair Swoon Lounge',
      category: 'Decor & Furniture'
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
        <Grid item xs={12} md={7} style={{ height: '500px' }}>
          <Card style={{ marginBottom: '20px', height: '100%', borderRadius: '15px' }}>
            <Slider {...settings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <CardMedia
                    component="img"
                    alt={image.title}
                    height="500"
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
        <Grid item xs={12} md={5}>
          <Grid container spacing={3} style={{ height: '100%' }}>
            {productImages.map((product, index) => (
              <Grid item xs={6} key={index} style={{ height: '250px' }}>
                <Card style={{ height: '100%', borderRadius: '15px' }}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="150"
                    image={product.src}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{product.category}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }

  export default HeroSection;
