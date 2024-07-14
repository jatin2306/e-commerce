import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: !isLogin
        ? Yup.string()
            .required('Name is required')
        : null,
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: !isLogin
        ? Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        : null,
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      // Handle form submission
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          {!isLogin && (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus={isLogin}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {!isLogin && (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="confirm-password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
              <Link onClick={toggleForm} style={{ textDecoration: 'none', color: '#3f51b5' }}>
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
