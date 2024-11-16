import { useSelector } from "react-redux";
export default function Posts() {
  const { data: posts, loading, error } = useSelector((state) => state.posts);
  return (
    <>
      {loading && <h1>Loading.......</h1>}
      {error && <h1>{error}</h1>}
      {!loading &&
        !error &&
        posts?.length &&
        posts.map((item) => <p key={item.id}>{item.title}</p>)}
    </>
  );
}
