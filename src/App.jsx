import './App.css'
import CardContainer from './components/CardContainer'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { pokemonApi } from './api/Api'

function App() {
  return (
    <div className="App">
      <ApiProvider api={pokemonApi}>
        <CardContainer />
      </ApiProvider>
    </div>
  )
}

export default App
