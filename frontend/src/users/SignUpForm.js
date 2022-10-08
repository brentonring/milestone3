import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#EC412F'),
  backgroundColor: '#EC412F',
  '&:hover': {
    backgroundColor: '#EC412F',
  },
}));

function SignUpForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
    navigate('/login')
	}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#EC412F' }}>
            <LockOutlinedIcon style={{ color: '#F7F7F7' }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  value={user.first_name}
                  onChange={e => setUser({ ...user, first_name: e.target.value })}
                  className="form-control"
                  id="first_name"
                  label="First Name"
                  color="warning"
                  focused
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={user.last_name}
                  onChange={e => setUser({ ...user, last_name: e.target.value })}
                  className="form-control"
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  color="warning"
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  required
                  fullWidth
                  value={user.email}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                  className="form-control"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="warning"
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={user.password}
                  onChange={e => (setUser({ ...user, password: e.target.value }))}
                  className='form-control'
                  id="password"
                  autoComplete="new-password"
                  color="warning"
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" style= {{ color:'#EC412F'}}/>}
                  label="I want to receive suggestions, marketing promotions and updates."
                />
              </Grid>
            </Grid>
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#0B295B' }}
              style={{ color: '#F7F7F7', fontWeight: 'bold' }}
            >
              Sign Up
            </ColorButton>
            <Grid container justifyContent="flex-end" sx={{ mb: 8 }}>
              <Grid item>
                <Link href="#" variant="body2" style= {{ color:'#EC412F', textDecoration: 'none'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignUpForm;