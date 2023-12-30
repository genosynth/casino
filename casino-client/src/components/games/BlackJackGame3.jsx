
import cards from "../../cards/Cards"
import { useState, useEffect } from "react"
import backCard from "../../images/back_card.png"
import OpponentCardsBJ from "./OpponentCardsBJ"
import YourCardsBJ from "./YourCardsBJ"

function BlackJackGame3() {

    const [deck, setDeck] = useState(Object.values(cards)) 
    const [houseCards, setHouseCards] = useState([{image:backCard, value:"", suite:"", name:""},{image:backCard, value:"", suite:"", name:""}])
    const [myCards, setMyCards] = useState([{image:backCard, value:"", suite:"", name:""},{image:backCard, value:"", suite:"", name:""}])
    const [filteredDeck,setFilteredDeck] = useState()

    const deal = () =>{
    let num = Math.floor(Math.random() * 52);    
      setHouseCards(deck[num])
      let filtered = deck.filter(el => el != deck[num]); 

       num = Math.floor(Math.random() * 51); 
       setHouseCards([...houseCards,filtered[num]])
       let filtered2= filtered.filter(el => el != filtered[num])
    }


  return (
    <>
    <div className='black-jack'>
        <div><OpponentCardsBJ houseCards={houseCards}></OpponentCardsBJ></div>
        
        <div>
        <YourCardsBJ  myCards={myCards}></YourCardsBJ>
        </div>

        
        

    </div>
    <button onClick={deal}>Deal</button>
    </>
  )
}

export default BlackJackGame3