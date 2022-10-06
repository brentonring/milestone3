import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function UserProfile() {
  return (
    <ThemeProvider my={6} theme={theme}>
      <CssBaseline />
      <Toolbar>
        <Avatar mt={6} alt="Remy Sharp" src="../RHarris.jpeg" sx={{ width: 75, height: 75 }} />
          <Typography  m={4} variant="h4" color="inherit" noWrap>
            Remy Harris
          </Typography>
        </Toolbar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            flexDirection: 'row', justifyContent: 'center'
          }}
        >
        </Box>
        <Container maxWidth="md" >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"

                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 34, color: '#0B295B' }}>
                      Book Title
                    </Typography>
                    <Typography style={{ fontSize: 14, color: '#2F4858' }}>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
export default UserProfile
