import React from 'react'
import { Menu, Input, Popup } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => { 
return (
  <Menu secondary>
    <Menu.Item
      name='all'
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}>Все
    </Menu.Item>
    <Menu.Item
      name='popular'
      active={filterBy === 'popular'}
      onClick={setFilter.bind(this, 'popular')}>Популярные
    </Menu.Item>
    <Menu.Item
      name='price_high'
      active={filterBy === 'price_high'}
      onClick={setFilter.bind(this, 'price_high')}>Цена (дорогие)
    </Menu.Item>
		<Menu.Item
      name='price_low'
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}>Цена (дешёвые)
    </Menu.Item>
		<Menu.Item
      name='author'
      active={filterBy === 'author'}
      onClick={setFilter.bind(this, 'author')}>Автор
    </Menu.Item>
    
    <Popup
        trigger={<Menu.Item>
          <Input 
            icon='search' 
            onChange={(e) =>setSearchQuery(e.target.value)}
            value={searchQuery} 
            placeholder='Поиск...' />
        </Menu.Item>}
        header='Поиск книг'
        content='Вы можете искать по названию книги или автору.'
        on='hover'
        hoverable
      />
  
  </Menu>
  )
}

export default Filter;
