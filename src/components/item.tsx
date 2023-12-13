import { FC, useState } from 'react'
import { TItem, usePackingListContext } from '../PackingListContext'
// ChangeEvent,
interface IItemsProps {
  item: TItem
}

// const defaultState = {
//   name: '',
// }

export const Item: FC<IItemsProps> = ({ item }) => {
  //CONTEXT__API
  const { removeItem, updateItem } = usePackingListContext()

  //STATE SHOW EDITING FORM
  const [editing, setEditing] = useState<boolean>(false)

  //STATE CURRENT ITEM UPDATE
  const [currentItem, setCurrentItem] = useState<TItem>(item)

  // // handle onChange EDITING FORM
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {}

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        gap: '5px',
        border: '0.5px solid black',
        margin: '5px',
        padding: '5px',
      }}
    >
      {!editing ? (
        <>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => updateItem({ ...item, packed: !item.packed })}
          />

          <p>{item.name}</p>

          <button type="submit" onClick={() => setEditing(!editing)}>
            ✍️ Edit
          </button>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (item.name !== currentItem.name) {
              updateItem(currentItem)
              setCurrentItem((prev) => ({ ...prev }))
              setEditing(!editing)
            } else setEditing(!editing)
          }}
        >
          <input
            type="text"
            name="name"
            value={currentItem.name}
            onChange={(e) =>
              setCurrentItem({
                ...currentItem,
                [e.target.name]: e.target.value,
              })
            }
          />
          <button type="submit">💾 Save</button>
        </form>
      )}
      <button onClick={() => (item.id ? removeItem(item.id) : null)}>
        Remove
      </button>
    </div>
  )
}
