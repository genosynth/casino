import cards from "../../cards/Cards"
import { useState, useEffect } from "react"
import backCard from "../../images/back_card.png"
import checkWinner from "./checkWinner"

function Game1({updateBalance}) {

  const [cardsArray,setCardsArray] = useState(Object.values(cards))
  const [filteredDeck, setFilteredDeck] = useState()
  const [card1, setCard1] = useState({image:backCard, value:"", suite:"", name:""})
  const [card2, setCard2] = useState({image:backCard, value:"", suite:"", name:""})
  const [card3, setCard3] = useState({image:backCard, value:"", suite:"", name:""})
  const [card4, setCard4] = useState({image:backCard, value:"", suite:"", name:""})
  const [flop1, setFlop1] = useState({image:backCard, value:"", suite:"", name:""})
  const [flop2, setFlop2] = useState({image:backCard, value:"", suite:"", name:""})
  const [flop3, setFlop3] = useState({image:backCard, value:"", suite:"", name:""})
  const [turn, setTurn] = useState({image:backCard, value:"", suite:"", name:""})
  const [river, setRiver] = useState({image:backCard, value:"", suite:"", name:""})
  
  const [message,setMessage] = useState("")


  const reShuffle = () =>{
    setCard1({image:backCard, value:"", suite:"", name:""})
    setCard2({image:backCard, value:"", suite:"", name:""})
    setCard3({image:backCard, value:"", suite:"", name:""})
    setCard4({image:backCard, value:"", suite:"", name:""})
    setFlop1({image:backCard, value:"", suite:"", name:""})
    setFlop2({image:backCard, value:"", suite:"", name:""})
    setFlop3({image:backCard, value:"", suite:"", name:""})
    setTurn({image:backCard, value:"", suite:"", name:""})
    setRiver({image:backCard, value:"", suite:"", name:""})
    setMessage("")
  }

  const deal = () => {

    reShuffle()
    
      let num = Math.floor(Math.random() * 52);    
      setCard1(cardsArray[num])
      let filtered = cardsArray.filter(el => el != cardsArray[num]); 
     
  
      num = Math.floor(Math.random() * 51);   
      setCard2(filtered[num])
      let filtered2 = filtered.filter(el => el != filtered[num]);
          
   
     
    
  
      setFilteredDeck(filtered2)   
        
    
  }


  const allIn = async() => {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    let num = Math.floor(Math.random() * 50);     
    setCard3(filteredDeck[num])
    let filtered = filteredDeck.filter(el => el != filteredDeck[num]);



    num = Math.floor(Math.random() * 49);  
    setCard4(filtered[num])
    let filtered2 = filtered.filter(el => el != filtered[num]);
   
    num = Math.floor(Math.random() * 48); 
    setFlop1(filteredDeck[num])
    let filtered3 = filtered2.filter(el => el != filtered2[num])

    num = Math.floor(Math.random() * 47); 
    setFlop2(filtered[num])
    let filtered4 = filtered3.filter(el => el != filtered3[num])

    num = Math.floor(Math.random() * 46); 
    setFlop3(filtered2[num])
    let filtered5 = filtered4.filter(el => el != filtered4[num])

    await delay(1000)

    num = Math.floor(Math.random() * 45); 
    setTurn(filtered5[num])
    let filtered6 = filtered5.filter(el => el != filtered5[num])

    await delay(1000)

    num = Math.floor(Math.random() * 44); 
    setRiver(filtered4[num])
    let filtered7 = filtered6.filter(el => el != filtered6[num])

    
  }

  const fold = () => {
    updateBalance(-5)
  }

  const winner = () => {
    let playerResult = (checkWinner(card1,card2,flop1,flop2,flop3,turn,river))
    let opponentResult = (checkWinner(card3,card4,flop1,flop2,flop3,turn,river))

   
    let totalPlayerPoints = playerResult.poker.points + playerResult.fullHouse.points + playerResult.flush.points + playerResult.straight.points + playerResult.trips.points + playerResult.twoPairs.points + playerResult.pair.points
    let totalOpponentPoints = opponentResult.poker.points + opponentResult.fullHouse.points + opponentResult.flush.points + opponentResult.straight.points + opponentResult.trips.points + opponentResult.twoPairs.points + opponentResult.pair.points

    console.log(totalPlayerPoints)
    console.log(totalOpponentPoints)

    if (totalPlayerPoints>totalOpponentPoints) return setMessage("Player Wins")
    if (totalPlayerPoints<totalOpponentPoints) return setMessage("Opponent Wins")

    
    if (totalPlayerPoints == totalOpponentPoints && totalPlayerPoints>0){ //checks when both have 1 pair  
      playerResult.pair.value > opponentResult.pair.value ? setMessage('Player Wins') : setMessage('Opponent Wins');
    }

    if (totalPlayerPoints ==0 && totalOpponentPoints ==0) {//check high cards
      let x = [card1.value,card2.value]
      let y = [card3.value,card4.value]
     
      x.sort(function(a, b) {
        return a - b;
        
        });
      
      let playerHighCard = x[0]

      y.sort(function(a, b) {
        return a - b;
        
        });

      let opponentHighCard = y[0]

      if (playerHighCard>opponentHighCard){
        setMessage("Player Wins")
      }
      if (playerHighCard<opponentHighCard){
        setMessage("Opponent Wins")
      }
    }

    if (message=="Player Wins"){()=>{console.log("fuckkkk")}}
    if (message=="Opponent Wins"){()=>{updateBalance(-50)}}
  }
  
  let styleCard = {
    width: 150,
    height: 200
  }
  

 

 
  return (
    <>

    
    <button onClick={deal}>Deal</button>
    <button onClick={allIn}>All In</button>
    <button onClick={winner}>Check Winner</button>
    <button onClick={()=>{
      if (message=="Player Wins") return updateBalance(50)
      if (message=="Opponent Wins") return updateBalance(-50)
      }}>Update Balance</button>


    <button onClick={fold}>Fold</button>

      <div className="board-and-wholecards">
    <div className="board">
      <img
            
            src={flop1.image}
            style={styleCard}
        />
      <img
            
            src={flop2.image}
            style={styleCard}
        />
       <img
            
            src={flop3.image}
            style={styleCard}
        />

         <img
            
            src={turn.image}
            style={styleCard}
        />

        <img
            
            src={river.image}
            style={styleCard}
        />

    </div>

    <div className="whole-cards">
    <div >
      <img
          
          src={card1.image}
          style={styleCard}
      />
      <img
          
          src={card2.image}
          style={styleCard}
      />
    </div>
    
    <div>
      <img
          
          src={card3.image}
          style={styleCard}
      />
      <img
          
          src={card4.image}
          style={styleCard}
      />

    </div>
 

    </div>
    </div>
    <span>{message}</span>
   
   </>
  )
}

export default Game1