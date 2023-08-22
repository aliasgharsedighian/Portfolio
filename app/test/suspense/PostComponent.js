import useGetData from "./useGetData";

function PostComponent() {
  const data = useGetData("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default PostComponent;
