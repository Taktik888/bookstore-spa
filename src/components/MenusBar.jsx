import React from 'react';
import { Menu, Popup } from 'semantic-ui-react'
import CartPopup from './CartPopup';

 const MenusBar = ({totalPrice, count, items}) => { 
      return (
        <div className='menu'>
          <Menu>
            <Menu.Item>Магазин книг</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.
              </Menu.Item>
              <Popup
                trigger= {<Menu.Item
                  name='help'>
                  Корзина (<b>{count}</b>)
                  </Menu.Item>}
                  content={ items.map((book, i) => <CartPopup {...book} key={i} />)}
                  on='click'
                  hideOnScroll
                  flowing />  
            </Menu.Menu>
          </Menu>
        </div>
      )
    }

  export default MenusBar;
