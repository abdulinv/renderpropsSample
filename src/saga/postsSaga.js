import { FetchApi } from "../redux/api";
import {
  fetchPost,
  fetchPostFailure,
  fetchPostSuccess,
} from "../redux/postSlice";
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchPostsSaga() {
  try {
    const posts = yield call(
      FetchApi,
      "https://jsonplaceholder.typicode.com/posts1"
    );
    yield put({ type: fetchPostSuccess.type, posts: posts });
  } catch (e) {
    yield put({ type: fetchPostFailure.type, error: e.message });
  }
}

export function* WatchPosts() {
  yield takeEvery(fetchPost.type, fetchPostsSaga);
}
