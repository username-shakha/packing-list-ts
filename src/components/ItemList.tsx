import { FC, useMemo, useState } from 'react'
// import { usePackingListContext } from '../PackingListContext'
import { Item } from './item'
import { TItem } from '../PackingListContext'

interface IItemListProps {
  title: string
  items: TItem[]
}

export const ItemList: FC<IItemListProps> = ({ title, items }) => {
  const [filter, setFilter] = useState('')

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.includes(filter))
  }, [items, filter])

  return (
    <div
      style={{
        minWidth: '400px',
        border: '0.5px solid black',
        padding: '10px',
        margin: '10px',
      }}
    >
      <h2>{title}</h2>
      <br />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter"
      />
      <div style={{ margin: '10px', padding: '10px' }}>
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
