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

function LoginForm() {
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        email:'',
        password:''
    })


    async function handleSubmit(e) {
		e.preventDefault()

    await fetch(`http://localhost:5000/users/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
navigate('/profile')
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
                    Welcome Back!
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <TextField
                    margin="normal"
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={e => (setUser({ ...user, password: e.target.value }))}
                    className='form-control'
                    id="password"
                    autoComplete="current-password"
                    color="warning"
                    focused
                />
                <FormControlLabel
                    control={<Checkbox value="remember" style= {{ color:'#EC412F'}} />}
                    label="Remember me"
                />
                <ColorButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: '#0B295B' }}
                    style={{ color: '#F7F7F7', fontWeight: 'bold' }}
                >
                    Log In
                </ColorButton>
                <Grid container sx={{ mb: 8 }} >
                    <Grid item xs>
                    <Link href="#" variant="body2" style= {{ color:'#EC412F', textDecoration: 'none'}} >
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item >
                    <Link href="#" variant="body2" style= {{ color:'#EC412F', textDecoration: 'none'}}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
    );
}
export default LoginForm;
