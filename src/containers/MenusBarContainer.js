import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqBy from 'lodash/uniqBy';
import * as cartActions from '../actions/cart';
import MenusBar from '../components/MenusBar'

const mapStateToProps = ({cart}, {id}) => ({
	totalPrice: cart.items.reduce((total, book) => 
	total + book.price, 0),
	count: cart.items.length,
	items: uniqBy(cart.items, o => o.id),
});
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(cartActions, dispatch)
});

export default connect (mapStateToProps, mapDispatchToProps) (MenusBar)
