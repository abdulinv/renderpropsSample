import { List } from "./List";
import { InputList } from "./InputList";
import { CardCounterController } from "./CardCounterController";
import { useDispatch } from "react-redux";
import { updateMessage } from "./redux/SampleSlice";
import { fetchPost } from "./redux/postSlice";
import { Suspense, lazy } from "react";
const Posts = lazy(() => import("./posts"));

export function PostsMain() {
  const dispatch = useDispatch();

  return (
    <div>
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
        Fetch posts
      </button>
      <Suspense fallback={<p>lazy</p>}>
        <Posts />
      </Suspense>
    </div>
  );
}
