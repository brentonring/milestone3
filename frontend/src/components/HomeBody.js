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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CurrentBooksContext } from '../contexts/BooksContext';
import { useContext, useEffect, useState } from 'react'

const theme = createTheme();

function HomeBody({ searchResults }) {
    // const [fullDesc, setFullDesc] = useState(false)
    const { currentBooks } = useContext(CurrentBooksContext)
    const [content, setContent] = useState(currentBooks)
    useEffect(() => {
        setContent(currentBooks)
    }, [content, currentBooks])
    console.log('consume', currentBooks)

    return (
    <ThemeProvider my={6} theme={theme}>
        <CssBaseline />
        <main>
        <Container maxWidth="lg" >
            <Grid container spacing={3}>
            {currentBooks?.map((book) => (
                <Grid item key={book?.id} xs={12} md={3}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="img"
                        image={book?.volumeInfo?.imageLinks?.thumbnail}
                        alt="book cover"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 34, color: '#0B295B' }}>
                            {book?.volumeInfo?.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h3" style={{ fontSize: 24, color: '#0B295B' }}>
                            {book?.volumeInfo?.authors}
                        </Typography>
                        <Typography style={{ fontSize: 14, color: '#2F4858' }}>
                        {book?.volumeInfo?.description?.substring(0,200) + '...'}
                        <br />
                        <Button style={{justifyContent: 'center'}}>
                            <ArrowDropDownIcon />
                        </Button>
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button sx={{ color: '#EC412F' }} size="small" href="#">
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
