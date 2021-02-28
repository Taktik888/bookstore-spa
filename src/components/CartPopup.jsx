import React from 'react';
import { List, Button, Image } from 'semantic-ui-react'

const CartPopup = ({title, image, removeFromCart, id}) =>{ 
 
	return (  
		<List  divided verticalAlign='middle'>
			<List.Item>
				<List.Content floated='right'>
					<Button onClick={removeFromCart.bind(this, id)} color='red'>Удалить</Button>
				</List.Content>
				<Image avatar src={image} />
				<List.Content>{title}</List.Content>
			</List.Item>
		</List>
		)
	}
export default CartPopup;
