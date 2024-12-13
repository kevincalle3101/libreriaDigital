import React from 'react'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
import { IBookQuery } from '../../types/books';
import { Controller, useForm } from 'react-hook-form';
import { useBooks } from '../../hooks/useBook';
import { BOOK_ROUTES } from '../../Routes';
import { useLocation } from "wouter";


const SearchBar: React.FC<React.HTMLAttributes<HTMLInputElement>> = () => {

  const { getBooks } = useBooks()
  const [location, setLocation] = useLocation();


  const {
    getValues,
    reset,
    control
  } = useForm<IBookQuery>({})

  const onSubmit = () => {
    const dataToSubmit = getValues('query');
    getBooks(dataToSubmit)    
    setLocation(BOOK_ROUTES.BOOKS)
    reset()
  }

  return (
    <form className='d-flex gap-2 w-100' onSubmit={e => {
      e.preventDefault()
    }}>
      <div className={`position-relative w-100`} style={{ height: '38px' }}>
        <span onClick={onSubmit}>
          <SearchIcon sx={{
            position: 'relative',
            top: '50%',
            left: '100%',
            transform: 'translateY(-50%)',
            marginLeft: '10px',
          }} />
        </span>
        <Controller
          name="query"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              id='title'
              type='search'
              className={`form-control input-custom-focus-primary h-100 py-2 m-0 input_search`}
              style={{ paddingLeft: '40px' }}
              placeholder={"Busca un libro"}
              {...field}
            />
          )}
        />
      </div>
    </form>
  )
}

export default SearchBar
