import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, TextField, Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import LogBG from '../../img/bg-login.jpg';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <HomePage style={{ backgroundImage: `url(${LogBG})` }}>
      <Container component="div" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
          }}
        >
          <Typography
            variant="h4"
            style={{ fontFamily: 'Fira Sans Condensed', fontWeight: '600' }}
          >
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="User name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              variant="standard"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: '#0f1111', background: '#87CEFA	' }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </HomePage>
    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};
const HomePage = styled.div`
   {
    background-size: cover;
    overflow -x: hidden;
    padding-top: 64px;
    background-repeat: no-repeat;
    height: calc(100vh - 70px);
  }
`;
