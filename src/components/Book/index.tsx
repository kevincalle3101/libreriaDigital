import { useLocation } from 'wouter';

import styles from './styles.module.css';
import { useBooks } from '../../hooks/useBook';

interface BookProps {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  rating: number;
}

const Book: React.FC<BookProps> = ({ id, title, thumbnail, category, rating }) => {

  const [location, setLocation] = useLocation();
    const { getBookDetail } = useBooks()
  
  const handleClick = () => {
    getBookDetail(id)
    setLocation(`/books/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={thumbnail} alt={title} className={styles.cardThumbnail} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardCategory}>{category}</p>
        <p className={styles.cardRating}>Rating: {rating} ⭐</p>
      </div>
    </div>
  );
};

export default Book;