import { useState } from "react";
import { CardCounter } from "./CardCounter";

export function CardCounterController() {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <>
      {/* if we have done as below , 
      then react will see the both counter as same 
      and only props changed */}

      {/* {cardIndex === 0 ? (
        <CardCounter name="counter1" />
      ) : (
        <CardCounter name="counter2" />
      )} */}

      {/* Now if we do as below we the counter will be reested */}
      {/* {cardIndex === 0 && <CardCounter name="counter1" />}
      {cardIndex !== 0 && <CardCounter name="counter2" />} */}

      {/* What if we have 100 counters, then  we have to add one by one with condition */}
      <CardCounter key={cardIndex} name={`counter${cardIndex}`} />

      {/* Todo: what if we have to retrive it back the count when prev is pressed */}

      <button onClick={() => setCardIndex((prev) => prev + 1)}>Next</button>
      <button onClick={() => setCardIndex((prev) => prev - 1)}>Prev</button>
    </>
  );
}
