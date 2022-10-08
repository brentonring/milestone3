import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';


function RelitAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{bgcolor: '#0B295B'}} position="static">
                <Toolbar style={{ height: '100px', width: '100%' }} variant="dense">
                    <Button href="/">
                        <AutoStoriesOutlinedIcon style={{ fontSize: 50, color: '#F7F7F7' }} sx={{ mr: 5 }} />
                    </Button>
                    <Typography sx={{ fontWeight: 350, flexGrow: 1 }} variant="h4" color='#EC412F' component="div">
                        ReLit
                    </Typography>
                    <Button 
                        style={{ fontSize: 14, color: '#F7F7F7' }}
                        sx={{ mr: 2 }}
                        href="/sign-up">
                            Sign Up
                    </Button>
                    <Button
                        style={{ fontSize: 14, color: '#F7F7F7' }}
                        sx={{ mr: 8 }} href="/login">
                            Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default RelitAppBar;