import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const message = useSelector((state) => state.sample1.message);

  const select = (state) => state.sample2.message;

  return (
    <div className="App">
      {/* This list is for render props example */}
      {/* <List /> */}
      {/* This examples shown to reverse a list with it's states */}
      {/* <InputList /> */}
      {/* This examples illustrate the use of key props to rest the state */}
      {/* <CardCounterController /> */}
      {message}
    </div>
  );
}
