// Component for Post. V

// The content can be dynamic, just the model structure would remain the same.
// Rest all the data can be replaced, with the data from the backend.
import CheckAccess from "../utils/CheckAccess";
import "./Post.css";
export default function Post({post}) {
  // const user = CheckAccess(null);
  return (
    <>
      <div className="post">
        <div className="post-img">
          <img src={post.img} alt="Img" />
        </div>
        <div className="post-contents">
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-author">~{post.author}</h3>
          <p className="post-content">{post.content}</p>
        </div>
      </div>
    </>
  );
}
