import { FC } from 'react'

import { PackingListContextProvider } from './PackingListContext'
import { Application } from './Application'

import './App.css'

export const App: FC = () => {
  return (
    <PackingListContextProvider>
      <Application />
    </PackingListContextProvider>
  )
}
