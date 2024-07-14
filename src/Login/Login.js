import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  width: '400px',
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          {isLogin ? 'Login' : 'Create Account'}
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          {isLogin
            ? 'If you are already a member, easily log in'
            : 'Please fill in the form to create an account'}
        </Typography>
        <form>
          {!isLogin && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus={isLogin}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {!isLogin && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="confirm-password"
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            {isLogin ? 'Login' : 'Create Account'}
          </Button>
          <Divider sx={{ my: 2 }}>OR</Divider>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ mb: 2 }}
          >
            {isLogin ? 'Login with Google' : 'Sign up with Google'}
          </Button>
          {isLogin ? (
            <>
              <Typography align="center" variant="body2">
                <Link style={{ textDecoration: 'none', color: '#3f51b5' }}>
                  Forgot your password?
                </Link>
              </Typography>
              <Typography align="center" variant="body2" sx={{ mt: 1 }}>
                Don't have an account?{' '}
                <Link onClick={toggleForm} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                  Register
                </Link>
              </Typography>
            </>
          ) : (
            <Typography align="center" variant="body2">
              Already have an account?{' '}
              <Link  onClick={toggleForm} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                Login
              </Link>
            </Typography>
          )}
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
