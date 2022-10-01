import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export const getBooks = async () => {
    const response = await api.get('?q=john%20krakauer')
    return response.data
}