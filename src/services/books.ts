import axios from 'axios'
import { IBook } from '../types/books';

const API_URL = import.meta.env.VITE_URL;


export const getBooksService = async (query : string) => {
    
    return await axios.get<IBook[]>(`${API_URL}?title_like=${query}`)
}

export const getBookByIdService = async (bookId: string) => {
    return await axios.get<IBook>(`${API_URL}/${bookId}`)
}