import { useState } from 'react'
import './App.css'
import Game1 from './components/games/Game1'
import Header from './components/Header'

function App() {

const [balance,setBalance] = useState(50)

const updateBalance = (ammount) => {
  setBalance(balance+ammount)
  console.log("ahhhhhhh")
}

  return (
    <>
      <Header balance={balance}></Header>
      <Game1 updateBalance={updateBalance}></Game1>
    </>
  )
}

export default App
