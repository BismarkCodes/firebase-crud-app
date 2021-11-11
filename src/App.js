import { useEffect, useState } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  // creating states
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  // calling useEffect hook to get users from firestore
  useEffect(() => {
    // function to get useres from firestore db
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };

    getUsers();
    return () => {};
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
