import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import ChatRoom from "./ChatRoom";
import SignOut from "./SignOut";
import SignIn from "./SignIn";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
        <h1> Messanger Demo app </h1>
        <SignOut />
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  );
}

export default App;
