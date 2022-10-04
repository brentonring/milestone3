import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export const getBooks = async (searchTerm) => {
    console.log('api test', process.env.REACT_APP_GOOGLE_BOOKS_API)
    const response = await api.get(`?q=${searchTerm}&maxResults=9&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
    console.log(response.data.items)
    return response.data.items
}