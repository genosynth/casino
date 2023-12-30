

function YourCardsBJ({myCards}) {

    const style = {
        width:150,
        height:200

    }
  return (
    myCards.map(card => {

        return <img src={card.image} style={style}></img>                

    })  
  )
}

export default YourCardsBJ