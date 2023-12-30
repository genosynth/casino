import cards from "../../cards/Cards"
import backCard from "../../images/back_card.png"
import { useEffect, useState } from "react"

function SlotMachineGame2({updateBalance,balance,selection}) {

  const [row1, setRow1] = useState([cards.aceSpades.image,cards.aceDiamonds.image,cards.aceClubs.image,cards.aceHearts.image])
  const [row2, setRow2] = useState([cards.aceDiamonds.image,cards.aceClubs.image,cards.aceHearts.image,cards.aceSpades.image])
  const [row3, setRow3] = useState([cards.aceClubs.image,cards.aceHearts.image,cards.aceSpades.image,cards.aceDiamonds.image])
  const [row4, setRow4] = useState([cards.aceHearts.image,cards.aceSpades.image,cards.aceDiamonds.image,cards.aceClubs.image])

  const [counter, setCounter] = useState(0)
  

  const checkWins = () => {

    
    //Checks for 4
    if (row1[0]==cards.aceHearts.image && row2[0]==cards.aceHearts.image && row3[0]==cards.aceHearts.image && row4[0]==cards.aceHearts.image){
      return setCounter(counter+100)
    } 


    //Checks for 3
    if (row1[0]==cards.aceHearts.image && row2[0]==cards.aceHearts.image && row3[0]==cards.aceHearts.image){
      return setCounter(counter+50)
    } 

    if (row2[0]==cards.aceHearts.image && row3[0]==cards.aceHearts.image && row4[0]==cards.aceHearts.image){
      return setCounter(counter+50)
    } 


    //Checks for 2
    if (row1[0]==cards.aceHearts.image && row2[0]==cards.aceHearts.image){
      return setCounter(counter+25)
    } 

    if (row2[0]==cards.aceHearts.image && row3[0]==cards.aceHearts.image){
      return setCounter(counter+25)
    } 

    if (row3[0]==cards.aceHearts.image && row4[0]==cards.aceHearts.image){
      return setCounter(counter+25)
    } 

      
}

const randomize = () =>{
  spinRow1()
  spinRow2()
  spinRow3()
  spinRow4()
}


  const spinRow1 = () => {
    

    
    let num = Math.floor(Math.random() * 4); 
    if (num==0){num++} 

    let copyR1 = [...row1]    


    for (let i=0; i<num; i++) {
        let firstElement = copyR1.shift();    
        copyR1.push(firstElement)   
        setRow1(copyR1)
    
    }     

    setCounter(counter-5)
   
    
  }

  const spinRow2 = () => {

   

    let num = Math.floor(Math.random() * 4); 
    if (num==0){num++} 

    let copyR2 = [...row2]

    for (let i=0; i<num; i++) {
    let firstElement = copyR2.shift();    
    copyR2.push(firstElement)   
    setRow2(copyR2)
    
    }

    setCounter(counter-5)

  }

  
  const spinRow3 = () => {

    

    let num = Math.floor(Math.random() * 4); 
    if (num==0){num++} 
       
    let copyR3 = [...row3]  

    for (let i=0; i<num; i++) {
        let firstElement = copyR3.shift();    
        copyR3.push(firstElement)   
        setRow3(copyR3)
    
    }

    setCounter(counter-5)

  }

  
  const spinRow4 = () => {

   

    
    let num = Math.floor(Math.random() * 4); 
    if (num==0){num++} 

    let copyR4 = [...row4]

    for (let i=0; i<num; i++) {
        let firstElement = copyR4.shift();    
        copyR4.push(firstElement)   
        setRow4(copyR4)
    
    }    
    
    setCounter(counter-5)

  }

  const spinAll = () => {
    spinRow1()
    spinRow2()
    spinRow3()
    spinRow4()
  }

  let styleCard = {
    width: 75,
    height: 100,
    border: "solid"
  }

  const [color1, setColor1] = useState({ 
    width: 75,
    height: 100,
    border: "solid yellow"})

  const [color2, setColor2] = useState({ 
    width: 75,
    height: 100,
    border: "solid red"})

  const [color3, setColor3] = useState({ 
    width: 75,
    height: 100,
    border: "solid blue"}) 

  const [color4, setColor4] = useState({ 
    width: 75,
    height: 100,
    border: "solid green"})

  
  const [color5, setColor5] = useState({ 
    width: 75,
    height: 100,
    border: "solid yellow"})

  const [color6, setColor6] = useState({ 
    width: 75,
    height: 100,
    border: "solid red"})

  const [color7, setColor7] = useState({ 
    width: 75,
    height: 100,
    border: "solid blue"}) 

  const [color8, setColor8] = useState({ 
    width: 75,
    height: 100,
    border: "solid green"})
  
  
  const [color9, setColor9] = useState({ 
    width: 75,
    height: 100,
    border: "solid yellow"})

  const [color10, setColor10] = useState({ 
    width: 75,
    height: 100,
    border: "solid red"})

  const [color11, setColor11] = useState({ 
    width: 75,
    height: 100,
    border: "solid blue"}) 

  const [color12, setColor12] = useState({ 
    width: 75,
    height: 100,
    border: "solid green"})

    
  const [color13, setColor13] = useState({ 
    width: 75,
    height: 100,
    border: "solid yellow"})

  const [color14, setColor14] = useState({ 
    width: 75,
    height: 100,
    border: "solid red"})

  const [color15, setColor15] = useState({ 
    width: 75,
    height: 100,
    border: "solid blue"}) 

  const [color16, setColor16] = useState({ 
    width: 75,
    height: 100,
    border: "solid green"})





 
  const setColors = () => {
    if (row1[0]==cards.aceHearts.image){ //TOP ROW
     
      setColor1({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor2({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor3({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor4({
        width: 75,
        height: 100,
        border: "solid green"
      })
    } 

    if (row1[0]==cards.aceSpades.image){
      setColor1({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor2({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor3({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor4({
        width: 75,
        height: 100,
        border: "solid yellow"
      })
    } 

    if (row1[0]==cards.aceDiamonds.image){
      setColor1({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor2({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor3({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor4({
        width: 75,
        height: 100,
        border: "solid red"
      })
    } 

    if (row1[0]==cards.aceClubs.image){
      setColor1({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor2({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor3({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor4({
        width: 75,
        height: 100,
        border: "solid blue"
      })
    } 

    if (row2[0]==cards.aceHearts.image){  //2ND FROM TOP ROW
     
      setColor5({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor6({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor7({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor8({
        width: 75,
        height: 100,
        border: "solid green"
      })
    } 

    if (row2[0]==cards.aceSpades.image){
      setColor5({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor6({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor7({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor8({
        width: 75,
        height: 100,
        border: "solid yellow"
      })
    } 

    if (row2[0]==cards.aceDiamonds.image){
      setColor5({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor6({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor7({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor8({
        width: 75,
        height: 100,
        border: "solid red"
      })
    } 

    if (row2[0]==cards.aceClubs.image){
      setColor5({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor6({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor7({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor8({
        width: 75,
        height: 100,
        border: "solid blue"
      })
    } 


    if (row3[0]==cards.aceHearts.image){  //3rd ROW FROM TOP 
     
      setColor9({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor10({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor11({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor12({
        width: 75,
        height: 100,
        border: "solid green"
      })
    } 

    if (row3[0]==cards.aceSpades.image){
      setColor9({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor10({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor11({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor12({
        width: 75,
        height: 100,
        border: "solid yellow"
      })
    } 

    if (row3[0]==cards.aceDiamonds.image){
      setColor9({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor10({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor11({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor12({
        width: 75,
        height: 100,
        border: "solid red"
      })
    } 

    if (row3[0]==cards.aceClubs.image){
      setColor9({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor10({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor11({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor12({
        width: 75,
        height: 100,
        border: "solid blue"
      })
    } 

    if (row4[0]==cards.aceHearts.image){  //BOTTOM ROW
     
      setColor13({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor14({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor15({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor16({
        width: 75,
        height: 100,
        border: "solid green"
      })
    } 

    if (row4[0]==cards.aceSpades.image){
      setColor13({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor14({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor15({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor16({
        width: 75,
        height: 100,
        border: "solid yellow"
      })
    } 

    if (row4[0]==cards.aceDiamonds.image){
      setColor13({
        width: 75,
        height: 100,
        border: "solid blue"
      })

      setColor14({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor15({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor16({
        width: 75,
        height: 100,
        border: "solid red"
      })
    } 

    if (row4[0]==cards.aceClubs.image){
      setColor13({
        width: 75,
        height: 100,
        border: "solid green"
      })

      setColor14({
        width: 75,
        height: 100,
        border: "solid yellow"
      })

      setColor15({
        width: 75,
        height: 100,
        border: "solid red"
      })

      setColor16({
        width: 75,
        height: 100,
        border: "solid blue"
      })
    } 
    

   }
  

  useEffect(()=>{
    checkWins()   

  },[row1])
  
  useEffect(()=>{
    setColors()
  },[counter])

  useEffect(()=>{
    updateBalance(counter)
  },[selection])

 
  return (
    <div className="slot">

    <span>Win/Loss [{counter}]</span>
      <div>
        
        <img
                
            src={row1[0]}
            style={color1}
        />
        
        <img
                
            src={row1[1]}
            style={color2}
        />

        <img
                
                src={row1[2]}
                style={color3}
            />
            <img
                    
                src={row1[3]}
                style={color4}
            />      
            
      </div>
      <div>
        
          <img
                  
              src={row2[0]}
              style={color5}
          />
          
          <img
                  
              src={row2[1]}
              style={color6}
          />
    
          <img
                  
                  src={row2[2]}    
                  style={color7}
              />
              <img
                      
                  src={row2[3]}
                  style={color8}
              />      
              
      </div>
      <div>
        
        <img
                
            src={row3[0]}
            style={color9}
        />
        
        <img
                
            src={row3[1]}
            style={color10}
        />

        <img
                
                src={row3[2]}
                style={color11}
            />
            <img
                    
                src={row3[3]}
                style={color12}
            />      
            
      </div>
      <div>
        
          <img
                  
              src={row4[0]}
              style={color13}
          />
          
          <img
                  
              src={row4[1]}
              style={color14}
          />
    
          <img
                  
                  src={row4[2]}
                  style={color15}
              />
              <img
                      
                  src={row4[3]}
                  style={color16}
              />      
              
      </div>

      <button onClick={()=>{spinAll(), updateBalance(counter)}}>Spin/Refresh</button>     
      
     
    </div>
  )
}

export default SlotMachineGame2