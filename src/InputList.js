// this component renders number of inputs feilds and

import { useState } from "react";

// an option to chnage the order
const items = [
  { title: "firsname", value: "1" },
  { title: "lastname", value: "2" },
  { title: "age", value: "3" },
];
export function InputList() {
  const [isReversed, setIsReversed] = useState(false);
  const [values, setValues] = useState(items);
  const handleChnage = (e) => {
    const { name, value } = e.target;
    const updatedList = values.map((item) => {
      if (name === item.title) {
        return {
          ...item,
          value,
        };
      }
      return item;
    });
    setValues(updatedList);
  };
  return (
    <div className="container">
      <div>
        {!isReversed &&
          values.map((item, i) => {
            return (
              <div key={i} className="input-list">
                <label>{item.title}</label>
                <input
                  onChange={handleChnage}
                  name={item.title}
                  value={item.value}
                />
              </div>
            );
          })}

        {isReversed &&
          values
            .slice()
            .reverse()
            .map((item, i) => {
              return (
                <div key={i} className="input-list">
                  <label>{item.title}</label>
                  <input
                    onChange={handleChnage}
                    name={item.title}
                    value={item.value}
                  />
                </div>
              );
            })}
        <label>Reverse</label>
        <input
          type="checkbox"
          onChange={() => {
            setIsReversed((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}
