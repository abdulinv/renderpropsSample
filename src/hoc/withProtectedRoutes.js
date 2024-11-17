import { useSelector } from "react-redux";

export function withProtected(Comp) {
  return (props) => {
    const status = useSelector((state) => state.users.isLoggedIn);
    if (!status) return <p>You must login to see this section</p>;
    return (
      <>
        <Comp />
      </>
    );
  };
}
