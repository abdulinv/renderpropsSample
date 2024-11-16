import "./styles.css";
import { List } from "./List";
import { InputList } from "./InputList";
import { CardCounterController } from "./CardCounterController";
import { useSelector, useDispatch } from "react-redux";
import { updateMessage } from "./redux/SampleSlice";
import { store } from "./store";
import { fetchPost } from "./redux/postSlice";
export default function App() {
  const message = useSelector((state) => state.sample1.message);

  const { data: posts, loading, error } = useSelector((state) => state.posts);
  console.log(posts);
  const select = (state) => state.sample2.message;
  const dispatch = useDispatch();
  console.log("app render", loading);
  return (
    <div className="App">
      {/* This list is for render props example */}
      {/* <List /> */}
      {/* This examples shown to reverse a list with it's states */}
      {/* <InputList /> */}
      {/* This examples illustrate the use of key props to rest the state */}
      {/* <CardCounterController /> */}
      {message}
      <button onClick={() => dispatch(updateMessage())}>Update</button>
      <button
        onClick={async () => {
          try {
            // await dispatch(
            //   fetchPost("https://jsonplaceholder.typicode.com/posts1")
            // );
            dispatch(fetchPost());
          } catch (e) {
            console.log(e.message);
          } finally {
            console.log("finiiehd");
          }
        }}
      >
        {loading ? "fetch post loading" : "fetch post "}
      </button>
      {loading && <h1>Loading.......</h1>}
      {error && <h1>{error}</h1>}
      {!loading &&
        !error &&
        posts?.length &&
        posts.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}
