
import cards from "../../cards/Cards"
import { useState, useEffect } from "react"
import backCard from "../../images/back_card.png"
import OpponentCardsBJ from "./OpponentCardsBJ"
import YourCardsBJ from "./YourCardsBJ"

function BlackJackGame3() {

    const [deck, setDeck] = useState(Object.values(cards)) 
    const [houseCards, setHouseCards] = useState([{image:backCard, value:"", suite:"", name:""},{image:backCard, value:"", suite:"", name:""}])
    const [myCards, setMyCards] = useState([{image:backCard, value:"", suite:"", name:""}])
    const [filteredDeck,setFilteredDeck] = useState()  
    const [myTotal, setMyTotal] = useState()




    const deal = () =>{ // 
    let num = Math.floor(Math.random() * 52);    
      let card1 = deck[num]
      let filtered = deck.filter(el => el != deck[num]); 

       num = Math.floor(Math.random() * 51); 
       let card2 = filtered[num]
       let filtered2 = filtered.filter(el => el != filtered[num])

       setDeck(filtered2)
         

      setHouseCards([card1,{image:backCard, value:"", suite:"", name:""}])
      setMyCards([card2])
      setFilteredDeck(filtered2)
     
    
    }

    const hit = () => {
      
      
      let num = Math.floor(Math.random() * 50);
      setMyCards([...myCards,filteredDeck[num]])
      let filtered = filteredDeck.filter(el => el != filteredDeck[num])
      setFilteredDeck(filtered)
      
      setMyTotal(()=>{
        let x = 0 
        myCards.forEach((card)=>{
          x=x+card.value
        })

        return x
      })

      if (myTotal>21){alert("Bust!")}

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
    <button onClick={hit}>Hit</button>
    <span> Total = {myTotal}</span>
    </>
  )
}

export default BlackJackGame3