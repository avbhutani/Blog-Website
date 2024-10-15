// Component for Post. V

// The content can be dynamic, just the model structure would remain the same.
// Rest all the data can be replaced, with the data from the backend.
import axios from "axios";
import CheckAccess from "../../utils/CheckAccess";
import "./Post.css";
import { useNavigate } from "react-router-dom";
export default function Post({post, onClick}) {
  const navigate = useNavigate()
  const user = CheckAccess(null)

  async function deletePost() {
    try{
      const res = await axios.post(`http://localhost:4000/user/posts/delete/${post._id}`,{
        withCredentials:true
      })
      console.log('Post delete successfully')
      navigate(0)
    }
    catch(error) {
      alert('You cannot delete other user\'s post')
      console.log(error)
    }
  }
  return (
    <>
      <div className="post" onClick={onClick}>
        <div className="post-img">
          <img src={post.img} alt="Img" />
        </div>
        <div className="post-contents">
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-author">~{post.author}</h3>
          <p className="post-content">{post.content}</p>
        </div>
        <div className="post-contents-buttons">
        </div>
      </div>
      {(user.username === post.author)? <button onClick={deletePost}>Delete Post</button>:(<></>) }
        {/* <button onClick={console.log('Update Post')}>Edit Post</button> */}
    </>
  );
}
