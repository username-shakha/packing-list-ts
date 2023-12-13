import { createContext, useContext, ReactNode, FC, useState } from 'react'
import { data } from './data'
export type TItem = {
  name: string
  packed?: boolean
  id?: number
}

interface IItemContextType {
  items: TItem[]
  addNewItem: (newItemName: string) => void
  // updateItem: (newItem: TItem) => void
  removeItem: (id: number) => void
  markAllAsUnpacked: () => void
  updateItem: (updates: TItem) => void
}

const PackingListContext = createContext<IItemContextType | undefined>(
  undefined
)

export const usePackingListContext = () => {
  const context = useContext(PackingListContext)
  if (!context) {
    throw new Error(
      'usePackingListContext must be used within an EmployeeProvider'
    )
  }
  return context
}

interface PackingListContextProviderProps {
  children: ReactNode
}

export const PackingListContextProvider: FC<
  PackingListContextProviderProps
> = ({ children }) => {
  // State Products List
  const [items, setItems] = useState<TItem[]>(data)

  const addNewItem = (newItemName: string) => {
    setItems([...items, { name: newItemName, id: Date.now(), packed: false }])
  }

  // const updateItem = (newItem: TItem) => {
  //   setItems(items.map((item) => (item.id === newItem.id ? newItem : item)))
  // }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const markAllAsUnpacked = () => {
    setItems(items.map((item) => ({ ...item, packed: false })))
  }

  const updateItem = (updates: TItem) => {
    setItems(
      items.map((item) =>
        item.id === updates.id ? { ...item, ...updates } : { ...item }
      )
    )
  }

  const PackingListContextValue: IItemContextType = {
    items,
    addNewItem,
    removeItem,
    markAllAsUnpacked,
    updateItem,
  }

  return (
    <PackingListContext.Provider value={PackingListContextValue}>
      {children}
    </PackingListContext.Provider>
  )
}
