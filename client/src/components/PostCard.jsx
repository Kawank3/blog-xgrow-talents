import { Link } from "react-router-dom";

const Card = ({ post, titleTag, flexDirection }) => {
  const Tag = titleTag;
  const width = 900 / parseInt(titleTag[1])
  return (
    <div className="card" style={{ flexDirection }}>
      <img src={post.image_url} width={width} />
      <div>
        <div>
          <Tag>{post.title}</Tag>
          <p>{post.description}</p>
        </div>
        <div className="card-bottom">
          <span>{post.author}</span>
          <span>{post.created_at}</span>
          <Link to={"/post/" + post.id}>Ler mais...</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
