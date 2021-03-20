import React, {useState, useEffect} from 'react'
import "../css/feed.css"
import Storyreel from './storyreel.js'
import MessageSender from "./messagesender.js"
import Post from "./post.js"
import db from "../firebase.js"
function Feed(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc=>({
        id: doc.id, data : doc.data()
      })
    )
  );
    })
  },[])

  return(
    <div className="feed">
      <Storyreel />
      <MessageSender picurl = {props.picurl}/>
      {posts.map(post =>(
        <Post key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}
export default Feed;
