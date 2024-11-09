import { Counter } from "./Counter";
import "./styles.css";
import { Header } from "./Header";
import Data from "./Data";
import { Base_url } from "./constants";
import { useCallback, useState } from "react";

export default function App() {
  const [content, setContent] = useState("title");
  const render = useCallback(
    (DataObject) => {
      return (
        <>
          {DataObject.loading && <p>Loading</p>}
          {DataObject.data.map((item) => (
            <p key={item.id}>{item[content]}</p>
          ))}
        </>
      );
    },
    [content]
  );

  return (
    <div className="App">
      <button
        onClick={() => {
          setContent((prev) => (prev === "title" ? "body" : "title"));
        }}
      >
        {content === "title" ? "show body" : "show title"}
      </button>
      <Data url={Base_url} render={render} />
    </div>
  );
}
