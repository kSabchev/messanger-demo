import './App.css';
import { useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData} from 'react-firebase-hooks/firestore'
import { auth } from "./firebase";
import ChatRoom from './ChatRoom';
import SignOut  from './SignOut';
import SignIn  from './SignIn';


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
       <header>
        <h1> Messanger Demo app </h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
