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
import { CurrentBooksContext } from '../contexts/BooksContext';
import { useContext } from 'react'
import { Link } from 'react-router-dom';


const theme = createTheme();

function HomeBody() {
    const { currentBooks, setShownBook } = useContext(CurrentBooksContext)
    console.log('consume', currentBooks)

    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
        <Container maxWidth="lg" >
            <Grid container spacing={3}>
            {currentBooks?.map((book) => (
                <Grid item key={book?.id} xs={12} sm={6} md={4}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardMedia
                            component="img"
                            image={book?.volumeInfo?.imageLinks?.thumbnail}
                            alt={`${book?.volumeInfo?.title} book cover`}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 34, color: '#0B295B' }}>
                                {book?.volumeInfo?.title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h3" style={{ fontSize: 24, color: '#0B295B' }}>
                                {book?.volumeInfo?.authors?.join(', ')}
                            </Typography>
                            <Typography style={{ fontSize: 14, color: '#2F4858', maxHeight: '30vh', overflowY: 'scroll' }}>
                                {book?.volumeInfo?.description}
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button style={{ color: '#EC412F' }} size="small" to={`/books/${book?.id}`} onClick={() => setShownBook(book?.id)} >
                                <AutoStoriesIcon/>
                            </Button>
                            <Button style={{ color: '#EC412F' }} size='small'>
                                <FavoriteIcon />
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
