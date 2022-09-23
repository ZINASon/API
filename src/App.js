import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Loding from './Loding';
import axios  from "axios";
import UserList from './UserList'

function App() {

  const[listOfUSer, setlistOfUSer] =useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setlistOfUSer(result.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfUSer ? <UserList listOfUSer={listOfUSer}/> :  <Loding/>}
    </div>  
  );
}

export default App;
