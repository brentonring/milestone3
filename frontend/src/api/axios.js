import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export const getBooks = async () => {
    const response = await api.get('?q=stephen+king&maxResults=9&key=AIzaSyD_aAGOIHI8JRtduNot9XrxiGybkVnZb_4')
    console.log(response.data.items)
    return response.data.items
}