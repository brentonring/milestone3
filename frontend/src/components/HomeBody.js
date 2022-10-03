import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


function HomeBody({books, setBooks}) {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
        <Container sx={{ py: 3, bgcolor: '#F7F7F7', width: 'auto'}}>
            <Grid container spacing={4}>
            {books.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random image from unsplashed"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2" style={{ color: '#0B295B' }}>
                            {/* Book Title */}
                            {card.title}
                        </Typography>
                        <Typography style={{ fontSize: 14, color: '#2F4858' }}>
                        {/* Narwhal mustache before they sold out celiac, iceland plaid bicycle  distillery.
                        Hella humblebrag meh fixie shabby chic edison bulb art party thundercats
                        roof party. Snackwave pug chia deep vibecession. Selfies biodiesel
                        aesthetic meditation, chambray lumbersexual etsy semiotics. */}
                        {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button sx={{ color: '#EC412F' }} size="small" href="https://google.com">
                            <AutoStoriesIcon/>
                        </Button>
                        <Button>
                            <FavoriteIcon sx={{ color: '#EC412F' }} />
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
        </main>
    </ThemeProvider>
    );
}

export default HomeBody;
