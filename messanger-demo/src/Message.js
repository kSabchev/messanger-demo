import { CardContent, Typography, Card } from "@material-ui/core";
import React from "react";
import { auth } from "./firebase";
import "./Message.css";

function Message({ message }) {
  
  const {text,photoURL, uid } = message;
  const isUser = uid === auth.currentUser.uid;
  
  return (
    
    <div className={`message ${isUser && "message__user"}`}>
      {/* <div> {createdAt}</div> */}
      <img className="photo" src={photoURL} alt=""/>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="primary" variant="h5" component="h2">
            {message?.username}:
          </Typography>
          <Typography color="secondary" variant="h5" component="h2"> 
           {text} 
          </Typography>
          {/* <p > {message?.username}:  {text} </p> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;