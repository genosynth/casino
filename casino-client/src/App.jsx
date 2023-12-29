import { useState } from 'react'
import './App.css'
import Game1 from './components/games/Game1'
import SlotMachineGame2 from './components/games/SlotMachineGame2'

function App() {

const [balance,setBalance] = useState(50)
const [selection, setSelection] = useState("Poker")

const updateBalance = (ammount) => {
  setBalance(balance+ammount)
  console.log("ahhhhhhh")
}

const Selections = () => {
  if (selection=="Poker") {
    return <Game1 updateBalance={updateBalance}></Game1>
  } 
  if (selection=="Slot Machine") {
    return <SlotMachineGame2 updateBalance={updateBalance} balance={balance} selection={selection}></SlotMachineGame2>
  } 
};


  return (
    <>
      <div className='nav-bar'>
        <span className="nav-bar-item" onClick={()=>{setSelection("Poker")}}>Poker </span>
        <span className="nav-bar-item" onClick={()=>{setSelection("Slot Machine")}}>Slot Machine</span>
        <div>Balance [{balance}]</div>
      </div>

      <div>
      <Selections></Selections>
      </div>
     
    </>
  )
}

export default App
