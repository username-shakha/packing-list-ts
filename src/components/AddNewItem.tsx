import { FC, useState } from 'react'
import { usePackingListContext } from '../PackingListContext'

export const AddNewItem: FC = () => {
  const [newItemName, setNewItemName] = useState<string>('')

  const { addNewItem } = usePackingListContext()

  return (
    <div
      style={{ border: '0.5px solid black', padding: '10px', margin: '10px' }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addNewItem(newItemName)
          setNewItemName('')
        }}
      >
        <label>New Item Name</label>
        <br />
        <input
          type="search"
          name="name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          required
          autoFocus
        />
        <button type="submit"> ➕ Add New Item</button>
      </form>
    </div>
  )
}
