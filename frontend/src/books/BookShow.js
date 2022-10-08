import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useContext, useEffect } from 'react'
import { CurrentBooksContext } from '../contexts/BooksContext';
import { getBook } from '../api/axios';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router';

const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#EC412F'),
  backgroundColor: '#EC412F',
  '&:hover': {
      backgroundColor: '#EC412F',
  },
}));

function BookShow() {
  const { shownBook, setShownBookData, shownBookData } = useContext(CurrentBooksContext)
  console.log(shownBook)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBook = async () => {
        const results = await getBook(shownBook)
        console.log(results)
        setShownBookData(results)
    }
    fetchBook()
      .catch(console.error)
  }, [shownBook, setShownBookData])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Grid container component="main">
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              image={shownBookData?.volumeInfo?.imageLinks?.large || shownBookData?.volumeInfo?.imageLinks?.thumbnail}
              alt={`${shownBookData?.volumeInfo?.title} book cover`}
              sx={{width: 300, height: 'auto'}}
            />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {shownBookData?.volumeInfo?.title}
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {shownBookData?.volumeInfo?.authors.join(', ')}
            </Typography>
            <Typography variant='h5' align='center' color="text.primary" gutterBottom>
              {shownBookData?.volumeInfo?.publishedDate.slice(0, 4)}, {shownBookData?.volumeInfo?.pageCount} pages
            </Typography>
            <Typography variant='h5' align='center' color="text.primary" gutterBottom>
              {shownBookData?.volumeInfo?.averageRating}<StarIcon /> ({shownBookData?.volumeInfo?.ratingsCount})
            </Typography>
            <Typography variant="h7" align="justify" color="text.secondary" paragraph style={{maxHeight: '50vh', overflowY: 'scroll'}}>
              {shownBookData?.volumeInfo?.description.replace(/<\/?[^>]+(>|$)/g, " ")}
            </Typography>
            <a href={shownBookData?.volumeInfo?.infoLink} target="_blank" rel="noreferrer" variant='h5' align='center' color="text.primary">
              Find it on Google Books
            </a>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <ColorButton
                onClick={() => navigate(-1)}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#0B295B' }}
                style={{ color: '#F7F7F7', fontWeight: 'bold' }}
              >
                    Back to Home
              </ColorButton>
            </Box>
          </Box>
        </Grid>
    </ThemeProvider>
  );
}
export default BookShow
