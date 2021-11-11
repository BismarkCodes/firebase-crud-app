import { useEffect, useState } from "react";
import "./App.css";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  // creating states
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  // calling useEffect hook to get users from firestore
  useEffect(() => {
    // function to get useres from firestore db
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    return () => {};
  }, []);

  // function to create new user
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  // function to update user
  const updateUser = async (id, age) => {
    // getting the specific document to update
    const userDoc = doc(db, "users", id);
    // update function
    const newInput = { age: age + 1 };
    // updating document
    await updateDoc(userDoc, newInput);
  };

  return (
    <div className="App">
      {/* create new user */}
      <input
        onChange={(event) => setNewName(event.target.value)}
        placeholder="Name..."
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => setNewAge(event.target.value)}
      />
      <button onClick={createUser}>Create user</button>

      {/* display users */}
      {users.map((user) => (
        <div>
          <h1>Name: {user.name} </h1>
          <h2>Age: {user.age}</h2>
          <button onClick={updateUser(user.id, user.age)}>Increase age</button>
        </div>
      ))}
    </div>
  );
}

export default App;
