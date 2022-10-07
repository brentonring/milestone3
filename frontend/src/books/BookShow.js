import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { useContext, useEffect } from 'react'
import { CurrentBooksContext } from '../contexts/BooksContext';
import { getBook } from '../api/axios';
import { CardMedia } from '@mui/material';

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

  useEffect(() => {
    const fetchBook = async () => {
        const results = await getBook(shownBook)
        console.log(results)
        setShownBookData(results)
    }
    fetchBook()
      .catch(console.error)
}, [shownBook])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Grid container component="main">
          {/* <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url{shownBookData?.volumeInfo?.imageLinks?.thumbnail}`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          /> */}
          {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
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
                image={shownBookData?.volumeInfo?.imageLinks?.thumbnail}
                alt="book cover"
                style={{width: '500', height: '200'}}
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
                {shownBookData?.volumeInfo?.authors}
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph style={{maxHeight: '50vh', overflowY: 'scroll'}}>
              {shownBookData?.volumeInfo?.description}
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <ColorButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: '#0B295B' }}
                  style={{ color: '#F7F7F7', fontWeight: 'bold' }}
                >
                      Back to Home
                </ColorButton>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        {/* </Grid> */}
    </ThemeProvider>
  );
}
export default BookShow
