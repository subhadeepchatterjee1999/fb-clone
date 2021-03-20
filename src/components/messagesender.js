import React, { useState } from 'react';
import "../css/messagesender.css";
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import firebase from 'firebase';
import db from '../firebase.js';
function MessageSender(props) {
  const [input, setInput] = useState('');
  const [imgUrl, setImageUrl] = useState('');
  const handelSubmit = (e) =>{
    e.preventDefault();
    //some db stuff
    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: props.picurl,
      image: imgUrl
    })
    setInput("");
    setImageUrl("");
  };
  return(
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={props.picurl}/>
        <form>
          <input type="text" className="messageSender_input" name="" value={input} onChange={(e) =>{
              setInput(e.target.value)
            }} placeholder="Whats on your mind?"/>
          <input placeholder="imageUrl (optional)" value={imgUrl} onChange={(e) => {
              setImageUrl(e.target.value)
            }}/>
          <button type="submit" onClick={handelSubmit}>submit</button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{color:"red"}} />
          <h3>Live Video</h3></div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{color:"green"}} />
          <h3>Photo/Video</h3></div>
        <div className="messageSender_option">
          <SentimentVerySatisfiedIcon style={{color:"yellow"}} />
          <h3>Feeling/Activity</h3></div>
      </div>
    </div>
  )
}
export default MessageSender;
