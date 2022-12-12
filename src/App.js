import React, {useState, useEffect} from "react";
import './Login.css';
import fire from "./ConfiguracionFirebase";
import Login from "./Login";
import Home from "./Home";


function App() {

  const [user,setUser] = useState(null);
  useEffect(()=>{
    fire.auth().onAuthStateChanged((usuarioFirebase)=>{
      console.log("ya tienes sesion iniciada con:", usuarioFirebase);
      setUser(usuarioFirebase);
    })
  },[]);
  
  return (
    <div>
     <>
     {user ? <Home/> : <Login setUser={setUser}/>}
     </>
    </div>
  );
}

export default App;