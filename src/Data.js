// Data.js
import { memo, useEffect, useState } from "react";

const initialValue = {
  loading: false,
  data: [],
  error: null,
};
function Data({ url, render }) {
  const [DataObject, setDataObject] = useState(initialValue);
  console.log("render data componeonot");
  useEffect(() => {
    const fetchData = async function () {
      setDataObject((prev) => ({
        ...prev,
        loading: true,
      }));
      const response = await fetch(url);
      const data = await response.json();
      setDataObject((prev) => ({
        ...prev,
        loading: false,
        data,
      }));
    };

    fetchData();
  }, []);

  return <>{render(DataObject)}</>;
}

export default memo(Data);
