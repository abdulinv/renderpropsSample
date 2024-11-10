import { useState } from "react";

export function CardCounter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
    </div>
  );
}
