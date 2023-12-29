

const checkWinner = (card1,card2,flop1,flop2,flop3,turn,river) => {
 /* console.log("Poker")
  console.log(poker(card1,card2,flop1,flop2,flop3,turn,river))
  console.log("Full House")
  console.log(fullhouse(card1,card2,flop1,flop2,flop3,turn,river))
  console.log("Flush")
  console.log(flush(card1,card2,flop1,flop2,flop3,turn,river))
  console.log("Straight")
  console.log(straight(card1,card2,flop1,flop2,flop3,turn,river))
  console.log("Trips")
  console.log(trips(card1,card2,flop1,flop2,flop3,turn,river))
  console.log("Two Pair")
  console.log(twoPairs(card1,card2,flop1,flop2,flop3,turn,river))
  console.log("Pair")
  console.log(pair(card1,card2,flop1,flop2,flop3,turn,river))
  console.log("Board")
  console.log(board2Pair(flop1,flop2,flop3,turn,river))
  console.log("---------")
*/
  return {
    poker:poker(card1,card2,flop1,flop2,flop3,turn,river),
    fullHouse:fullhouse(card1,card2,flop1,flop2,flop3,turn,river),
    flush:flush(card1,card2,flop1,flop2,flop3,turn,river),
    straight:straight(card1,card2,flop1,flop2,flop3,turn,river),
    trips:trips(card1,card2,flop1,flop2,flop3,turn,river),
    twoPairs:twoPairs(card1,card2,flop1,flop2,flop3,turn,river),
    pair:pair(card1,card2,flop1,flop2,flop3,turn,river)
 


  }
    
}



const poker = (card1,card2,flop1,flop2,flop3,turn,river) => {
    let array = [card1.value,card2.value,flop1.value,flop2.value,flop3.value,turn.value,river.value]    
   

    const elementCounts = {};

    array.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
      });

      let temp = Object.values(elementCounts)      
      
      if (elementCounts.card1==4){return  {points:70,value:card1.value}}
      if (elementCounts.card2==4){return  {points:70,value:card2.value}}
      else return {points:0}

      temp.sort(function(a, b) {
        return b - a;
        });

      

        if (temp[0]==4){
            return true
        } else return false
    
      
}

const fullhouse = (card1,card2,flop1,flop2,flop3,turn,river) => {
    //3 cards with same value and 2 cards with same value

    let array = [card1.value,card2.value,flop1.value,flop2.value,flop3.value,turn.value,river.value]    
   

    const elementCounts = {};

    array.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
      });

      
      let temp = Object.values(elementCounts)
      
      //These are the combinations of using both whole card to get a full house, or maybe using just one
      if (elementCounts[card1.value]==3 && elementCounts[card2.value]==2 ){return  {points:60,value1:card1.value, value2:card2.value}}
      if (elementCounts[card1.value]==2 && elementCounts[card2.value]==3 ){return  {points:60,value1:card2.value, value2:card1.value}}

      if (elementCounts[card1.value]==3 && elementCounts[flop1.value]==2 ){return  {points:60,value1:card1.value, value2:flop1.value}}
      if (elementCounts[card1.value]==3 && elementCounts[flop2.value]==2 ){return  {points:60,value1:card1.value, value2:flop2.value}}
      if (elementCounts[card1.value]==3 && elementCounts[flop3.value]==2 ){return  {points:60,value1:card1.value, value2:flop3.value}}      
      if (elementCounts[card1.value]==3 && elementCounts[turn.value]==2 ){return  {points:60,value1:card1.value, value2:turn.value}}
      if (elementCounts[card1.value]==3 && elementCounts[river.value]==2 ){return  {points:60,value1:card1.value, value2:river.value}}

      if (elementCounts[card2.value]==3 && elementCounts[flop1.value]==2 ){return  {points:60,value1:card2.value, value2:flop1.value}}
      if (elementCounts[card2.value]==3 && elementCounts[flop2.value]==2 ){return  {points:60,value1:card2.value, value2:flop2.value}}
      if (elementCounts[card2.value]==3 && elementCounts[flop3.value]==2 ){return  {points:60,value1:card2.value, value2:flop3.value}}      
      if (elementCounts[card2.value]==3 && elementCounts[turn.value]==2 ){return  {points:60,value1:card2.value, value2:turn.value}}
      if (elementCounts[card2.value]==3 && elementCounts[river.value]==2 ){return  {points:60,value1:card2.value, value2:river.value}}

      if (elementCounts[card1.value]==2 && elementCounts[flop1.value]==3 ){return  {points:60,value1:flop1.value, value2:card1.value}}
      if (elementCounts[card1.value]==2 && elementCounts[flop2.value]==3 ){return  {points:60,value1:flop2.value, value2:card1.value}}
      if (elementCounts[card1.value]==2 && elementCounts[flop3.value]==3 ){return  {points:60,value1:flop3.value, value2:card1.value}}      
      if (elementCounts[card1.value]==2 && elementCounts[turn.value]==3 ){return  {points:60,value1:turn.value, value2:card1.value}}
      if (elementCounts[card1.value]==2 && elementCounts[river.value]==3 ){return  {points:60,value1:river.value, value2:card1.value}}

      if (elementCounts[card2.value]==2 && elementCounts[flop1.value]==3 ){return  {points:60,value1:flop1.value, value2:card2.value}}
      if (elementCounts[card2.value]==2 && elementCounts[flop2.value]==3 ){return  {points:60,value1:flop2.value, value2:card2.value}}
      if (elementCounts[card2.value]==2 && elementCounts[flop3.value]==3 ){return  {points:60,value1:flop3.value, value2:card2.value}}      
      if (elementCounts[card2.value]==2 && elementCounts[turn.value]==3 ){return  {points:60,value1:turn.value, value2:card2.value}}
      if (elementCounts[card2.value]==2 && elementCounts[river.value]==3 ){return  {points:60,value1:river.value, value2:card2.value}}




      
      else return {points:0}

      temp.sort(function(a, b) {
        return b - a;
        });

      //console.log(temp)
        if ((temp[0]==3) && (temp[1]>1)){
            return true
        } else return false


}

const flush = (card1,card2,flop1,flop2,flop3,turn,river) => {
    //5 suites the same

  

    let array = [card1.suite,card2.suite,flop1.suite,flop2.suite,flop3.suite,turn.suite,river.suite]    
    
    const elementCounts = {};

    

    array.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
      });

      
      let temp = Object.values(elementCounts)

      console.log(elementCounts)

      if (elementCounts[card1.suite]>4){return {points:50,value1:card1.value, value2:card2.value}}
      if (elementCounts[card2.suite]>4){return {points:50,value1:card1.value, value2:card2.value}}
      else return {points:0}

      temp.sort(function(a, b) {
        return b - a;
        });

    //console.log(temp)

        if (temp[0]>4){
            return true
        } else return false

}

const straight = (card1,card2,flop1,flop2,flop3,turn,river) => {
    
    //sort the 7 cards 
    // 5 cards must increment + 1

    let array = [card1.value,card2.value,flop1.value,flop2.value,flop3.value,turn.value,river.value] 
    
    
    array.sort(function(a, b) {
        return b - a;
        });

  

    let unique = [...new Set(array)];
    console.log(unique)

    if ((unique[0] - unique[1] == 1) && (unique[1] - unique[2] == 1) && (unique[2] - unique[3] == 1) && (unique[3] - unique[4] == 1 && unique.includes(card1.value || card2.value))) return  {points:40,value:unique[0].value}
    if ((unique[1] - unique[2] == 1) && (unique[2] - unique[3] == 1) && (unique[3] - unique[4] == 1) && (unique[4] - unique[5] == 1 && unique.includes(card1.value || card2.value))) return {points:40,value:unique[1].value}
    if ((unique[2] - unique[3] == 1) && (unique[3] - unique[4] == 1) && (unique[4] - unique[5] == 1) && (unique[5] - unique[6] == 1 && unique.includes(card1.value || card2.value))) return {points:40,value:unique[2].value}

    else return {points:0}
    
}

const trips = (card1,card2,flop1,flop2,flop3,turn,river) => {
    //3 cards with same value

    
    let array = [card1.value,card2.value,flop1.value,flop2.value,flop3.value,turn.value,river.value]    
   

    const elementCounts = {};

    array.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
      });

      
      let temp = Object.values(elementCounts)
      
      

      temp.sort(function(a, b) {
        return b - a;
        });

        if (elementCounts[card1.value]==3 && (temp[1]<2)){return {points:30,value:card1.value}}
        if (elementCounts[card2.value]==3 && (temp[1]<2)){return  {points:30,value:card2.value}}
        else return {points:0}

      //console.log(temp)
      if ((temp[0]==3) && (temp[1]<2)){
            return true
        } else return false

}

const twoPairs = (card1,card2,flop1,flop2,flop3,turn,river) => {
    //2 cards with same value and another 2 cards with same value
        
    let array = [card1.value,card2.value,flop1.value,flop2.value,flop3.value,turn.value,river.value]    
   

    const elementCounts = {};

    array.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
      });

      
      let temp = Object.values(elementCounts)

      if (elementCounts[card1.value]==2 && elementCounts[card2.value]==2 && card1.value!=card2.value){return {points:15,value1:card1.value, value2:card2.value}}
      //if (elementCounts[card2.value]==2){return true}
      else return {points:0}
      

      temp.sort(function(a, b) { // 
        return b - a;
        });

      //console.log(temp)
        if ((temp[0]==2) && (temp[1]==2)){
            return true
        } else return false
}

const pair = (card1,card2,flop1,flop2,flop3,turn,river) => {
    //2 cards with same value

    let array = [card1.value,card2.value,flop1.value,flop2.value,flop3.value,turn.value,river.value]    
   

    const elementCounts = {};

    array.forEach(element => {
        elementCounts[element] = (elementCounts[element] || 0) + 1;
      });

      
      let temp = Object.values(elementCounts)

      //console.log(elementCounts[temp])
     
     
      if (elementCounts[card1.value]==2){return {points:10,value:card1.value, highCard:card2.value}}
      if (elementCounts[card2.value]==2){return {points:10,value:card2.value, highCard:card1.value}}
      else return {points:0}

      temp.sort(function(a, b) {
        return b - a;
        });

      //console.log(temp)
        if ((temp[0]==2) && temp[1]!=2){
            return true
        } else return false
}


const highCard = () => {
    //highest value of card
}




export default checkWinner