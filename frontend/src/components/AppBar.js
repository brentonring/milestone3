import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function RelitAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{bgcolor: '#0B295B'}} position="static">
            <Toolbar  style={{ height: '100px' }} variant="dense">
                <Typography sx={{ fontWeight: 400, flexGrow: 1 }} variant="h2" color='#EC412F' component="div" >
                Relit Books
                </Typography>
                <Button style={{ fontSize: 16, color: '#F7F7F7' }} sx={{ mr: 1 }}>Sign Up</Button>
                <Button style={{ fontSize: 16, color: '#F7F7F7' }} sx={{ mr: 1 }}>Login</Button>
            </Toolbar>
            </AppBar>
        </Box>
    );
}

export default RelitAppBar;