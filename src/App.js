import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) this is the logic for draw. we are concatenating a randomly chosen element from both rank and suit array  above to assign to a card with a random element from each array. 
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) the condtion given in the if statement is checking if the card drawn is not already in the hand.
    if (hand.indexOf(draw) === -1) {
      // 3)this part is stating that if the card combination isnt in the hand then it will add it 
      setHand([...hand, draw])
      // 4)the else if is saying to check the hand if to make sure there arent more than 52 cards being shown.
    } else if (hand.length !== 52) {
      // 5)drawCard below is saying that if there arent 52 cards on the page then it can continue to add a new card to the new array until 52 cards are displayed
      drawCard()
      // 6)our final statement is our catch all so basically saying once all 52 cards are dealt it wants to show an alert
    } else {
      // 7) the alert is signaling that all cards have been dealt. alerting the user to start over 
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^
  const returnAndShuffle = () => {
    const newDeck = [...hand]
      for (let i = newDeck.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
       [newDeck[i], newDeck[j]] =
        [newDeck[j], newDeck[i]] 
    }
    setHand([]);
    return newDeck;
  }

  {
  return (
    <>
  
     <div className="background" > 
    <div className="button-container"> 
    <h1>Draw a Card</h1>
    <button onClick={drawCard} className="Button1"  > Click to Draw a Card</button>
    <button className="Button2" onClick={returnAndShuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand}/>
    </div>
     </div>
    </>
  )
}
}

export default App 
