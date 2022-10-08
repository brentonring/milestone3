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
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { CurrentUser } from '../contexts/CurrentUser';

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

    const { setCurrentUser } = useContext(CurrentUser)
    
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
		e.preventDefault()

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/profile')
        } else {
            setErrorMessage(data.message)
        }
        
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
                    type="email"
                    value={credentials.email}
                    onChange={e => setCredentials({ ...credentials, email: e.target.value })}
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
                    value={credentials.password}
                    onChange={e => (setCredentials({ ...credentials, password: e.target.value }))}
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
