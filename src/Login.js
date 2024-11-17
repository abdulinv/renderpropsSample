import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/UserSlice";

export default function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.users.isLoggedIn);
  return (
    <>
      <button
        onClick={() => {
          dispatch(loginStatus ? logout() : login());
        }}
      >
        {loginStatus ? "Logout" : "Login"}
      </button>
    </>
  );
}
