import { connect } from 'react-redux';
import { setBooks } from '../actions/books';
import orderBy from 'lodash/orderBy';
import App from '../components/App';

const sortBy = (books, filterBy) => {
  
  switch (filterBy) {
    case 'all': 
      return books;
      case 'price_high':
        return orderBy(books, 'price', 'desc');
      case 'price_low':
        return orderBy(books, 'price', 'asc');
      case 'popular':
        return orderBy(books, 'rating', 'desc');
      case 'author':
        return orderBy(books, 'author', 'asc');
      default:
        return books;
  }
};

const filterBooks = (books, searchQuery) => 
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0  || o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0,
  );  

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy)
}

const mapStateToProps = ({books, filter}) => ({
  books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady
})

export default connect(mapStateToProps,{setBooks}) (App);
