import Header from "../../components/header/header";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <h2>Bem-vindo ao Blog Xgrow!</h2>
                <p>Explore as postagens mais recentes e fique por dentro de tudo!</p>

                {/* Postagem principal com imagem grande */}
                <div className="featured-post">
                    <img
                        src="https://image.api.playstation.com/vulcan/ap/rnd/202402/2306/0882adcf96904ca03ad939f4c0163332b747acdf7ce84997.png" // Substituir pela URL real
                        alt="Postagem em destaque"
                        className="featured-image"
                    />
                    <div className="featured-content">
                        <h3>Postagem em Destaque</h3>
                        <p>Descubra como criar um blog incrível com React e Node.js!</p>
                    </div>
                </div>

                {/* Lista de outros posts */}
                <div className="posts-container">
                    <h3>Outras Postagens</h3>
                    <div className="posts-grid">
                        <div className="post-card">
                            <img
                                src="https://toyshopping.com.br/blog/wp-content/uploads/2021/12/Naruto-Classico-e-Naruto-Shippuden-fillers.jpg"
                                alt="Post 1"
                            />
                            <h4>Título do Post 1</h4>
                            <p>Descrição breve do post...</p>
                        </div>
                        <div className="post-card">
                            <img
                                src="https://preview.redd.it/0cu1gd1sp51e1.jpeg?width=640&crop=smart&auto=webp&s=c235c685a44bd1a888f831fda171ed44e6e23399"
                                alt="Post 2"
                            />
                            <h4>Título do Post 2</h4>
                            <p>Descrição breve do post...</p>
                        </div>
                        <div className="post-card">
                            <img
                                src="https://ordemgeek.com/wp-content/uploads/2024/04/Sanemi-1.jpg"
                                alt="Post 3"
                            />
                            <h4>Título do Post 3</h4>
                            <p>Descrição breve do post...</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;