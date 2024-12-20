import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./redux/SampleSlice";
import SampleSlice2 from "./redux/SampleSlice2";
import createSagaMiddleware, { runSaga } from "redux-saga";
import postRedcer from "./redux/postSlice";
import { WatchPosts } from "./saga/postsSaga";
import userReducer from "./redux/UserSlice";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    sample1: sampleReducer,
    sample2: SampleSlice2,
    posts: postRedcer,
    users: userReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([sagaMiddleware]),
});
sagaMiddleware.run(WatchPosts);
