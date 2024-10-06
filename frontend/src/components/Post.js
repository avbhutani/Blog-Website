// Component for Post. V

// The content can be dynamic, just the model structure would remain the same. 
// Rest all the data can be replaced, with the data from the backend.

export default function Post(){
    return(
        <div className='post'>
        <div className='image'> 
        <img src='https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk='></img>
        </div>
        <div className='texts'>
        <h2>hello world</h2>
          <p className='info'>
            <a className='author'>Author Name</a>
            <time>Time of posting</time>
          </p>
        <p className='summary'>loresdfs</p>
        </div> 
      </div>
    )
}