import Book from '../../components/Book'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useBookState } from '../../hooks/useBookState'
import styles from './styles.module.css'

const BooksFound = () => {
  const { books } = useBookState();
  console.log("books", books);
  
  return (
    <div>
      <SearchBar />
      <div className={styles.booksGrid} style={{marginTop: '20px'}}>
        {books?.length > 0 ? (
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              thumbnail={book.thumbnail}
              category={book.category}
              rating={book.rating}
            />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BooksFound;