
function YourCardsBJ({houseCards}) {

    const style = {
        width:150,
        height:200

    }
  return (
    houseCards.map(card => {

        return <img src={card.image} style={style}></img>                

    })  
  )
}

export default YourCardsBJ