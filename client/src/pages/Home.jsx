import { useEffect, useState } from "react";
import Card from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`/api/post?omit={"authorId":true,"content":true}&limit=10`)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, []);

  return (
    <main
      className="markdown-body"
      style={{ flexDirection: "column" }}
    >
      <header style={{ marginBottom: "8em" }}>
        {
        posts[0] && 
        <Card
          titleTag="h1"
          post={posts[0]}
          flexDirection="column"
        />
        }
      </header>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {
        posts[1] &&
        posts.slice(1).map((post, i) => <Card key={i} titleTag="h2" post={post} />)
        }
      </ul>
    </main>
  );
};

export default Home;
