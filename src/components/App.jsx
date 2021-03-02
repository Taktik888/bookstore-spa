import React, {Component} from 'react';
import axios from 'axios';
import { Container,  Card } from 'semantic-ui-react';
import MenusBar from '../containers/MenusBarContainer';
import BookCard from '../containers/BookCardContainer';
import Filter from '../containers/FilterContainer';

class App extends Component {
  componentDidMount() {
    const {setBooks} = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }
  render () {
const {books, isReady} = this.props;
return(
  <Container>
    <MenusBar />
    <Filter />
    <Card.Group itemsPerRow={4}>
    {
      !isReady ? 'Загрузка...' 
      : books.map((book, i) => <BookCard {...book} key={i} />)
    }
  </Card.Group>
  </Container>
  )}
}
export default App;
