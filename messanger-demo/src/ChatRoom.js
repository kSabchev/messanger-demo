import firebase from "firebase/app";
import React, { useRef, useState } from "react";
import { db, auth } from "./firebase";
import Message from "./Message";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import "./ChatRoom.css";

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = db.collection("myMessages");
  const query = messagesRef.orderBy("createdAt", "asc").limit(25);
  const [user] = useAuthState(auth);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      username: user?.displayName,
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="ChatRoom__main">
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      {user && (
        <form className="ChatRoom__form">
          <FormControl>
            <InputLabel>Enter a message..</InputLabel>
            <Input
              value={formValue}
              onChange={(event) => setFormValue(event.target.value)}
            />
            <Button
              disabled={!formValue}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              Send Message
            </Button>
          </FormControl>
        </form>
      )}
    </>
  );
}

export default ChatRoom;
