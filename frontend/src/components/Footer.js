import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
return (
<Typography variant="body2" color="#0B295B" align="center">
    {'Copyright © '}
    <Link color="#0B295B" href="https://relitbooks.us/" target="_blank">
        Relit Books
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
</Typography>
);
}

function Footer() {
    return (
    <Box sx={{ bgcolor: '#F7F7F7', p: 5 }} component="footer">
        <Typography color="#0B295B" variant="h5" align="center" gutterBottom>
            Relit Books
        </Typography>
        <Typography
            variant="subtitle2"
            align="center"
            color="#EC412F"
            component="p"
        >
            A place to share our passion for books
        </Typography>
        <Copyright />
    </Box>
    );
}

export default Footer