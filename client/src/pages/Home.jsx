import Card from "../components/PostCard";

const fakePosts = [
  {
    id: 1,
    author: "Unknown",
    created_at: "2024-02-18",
    title: "Como criar um blog com React e Node.js",
    description:
      "Neste post, vamos aprender como configurar o ambiente de desenvolvimento para React e Node.js...",
    image_url:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/ultra-instinct-promo-photo.jpg",
  },
  {
    id: 2,
    author: "Unknown",
    created_at: "2024-02-10",
    title: "Explorando os Hooks do React",
    description:
      "O React Hooks foi introduzido para facilitar o gerenciamento de estado em componentes funcionais...",
    image_url:
      "https://toyshopping.com.br/blog/wp-content/uploads/2021/12/Naruto-Classico-e-Naruto-Shippuden-fillers.jpg",
  },
  {
    id: 3,
    author: "Unknown",
    created_at: "2024-02-10",
    title: "Explorando os Hooks do React",
    description:
      "O React Hooks foi introduzido para facilitar o gerenciamento de estado em componentes funcionais...",
    image_url:
      "https://toyshopping.com.br/blog/wp-content/uploads/2021/12/Naruto-Classico-e-Naruto-Shippuden-fillers.jpg",
  },
];

const headerPost = fakePosts[0];

const Home = () => {
  return (
    <main
      className="markdown-body"
      style={{ flexDirection: "column" }}
    >
      <header style={{ marginBottom: "8em" }}>
        <Card
          post={headerPost}
          titleTag={"h1"}
          flexDirection={"column"}
        />
      </header>
      <ul style={{ listStyle: "none" }}>
        {fakePosts.slice(1).map((p) => (
          <li>
            <Card post={p} titleTag={"h2"} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
