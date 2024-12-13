import { create } from 'zustand'
import { IBook } from '../types/books';


interface IState {
    books: IBook[];
    bookDetail: IBook | null;
    setBooks: (books: IBook[]) => void;
    setBookDetail: (bookDetail: IBook | null) => void
}

export const useBookState = create<IState>((set) => ({
    books        : [],
    bookDetail   : null,
    setBooks     : (books: IBook[]) => set((state) => ({ ...state, books })),
    setBookDetail: (bookDetail: IBook | null) => set((state) => ({ ...state, bookDetail }))
  }))
  