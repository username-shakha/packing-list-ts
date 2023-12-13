import { FC, useMemo } from 'react'
import { usePackingListContext } from './PackingListContext'
import { AddNewItem } from './components/AddNewItem'
import { ItemList } from './components/ItemList'
// import { UnpackedItems } from './components/UnpackedItems'
// import { PackedItems } from './components/PackedItems'
export const Application: FC = () => {
  const { items, markAllAsUnpacked } = usePackingListContext()

  const packedItems = useMemo(() => {
    return items.filter((item) => item.packed === true)
  }, [items])

  const unpackedItems = useMemo(() => {
    return items.filter((item) => item.packed === false)
  }, [items])

  return (
    <div
      style={{ border: '0.5px solid black', padding: '10px', margin: '10px' }}
    >
      <h1>Packing List</h1>
      <p>{`${items.length} Items`}</p>
      <br />
      <AddNewItem />
      <br />
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <ItemList items={unpackedItems} title="Unpacked Items" />
        <ItemList items={packedItems} title="Packed Items" />
      </div>
      <button onClick={() => markAllAsUnpacked()}>Mark All As Unpacked</button>
    </div>
  )
}
