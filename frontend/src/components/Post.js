// Component for Post. V

// The content can be dynamic, just the model structure would remain the same. 
// Rest all the data can be replaced, with the data from the backend.
import CheckAccess from '../utils/CheckAccess'
import './Post.css'
export default function Post(){
  const user = CheckAccess(null)
    return(
        <div className='post'>
          <div className='post-left'>
          <h2 className='post-name'>
            Post Image
          </h2>
          </div>
          <div className='post-right'>
          <h3 className='post-content'>
            Post Content
          </h3>
          <p className='post-comments'>
            Post Comments
          </p>
          </div>
          {/* {user? <button>Edit</button>: <h1>Unauthorized</h1>} */}
        </div>
    )
}