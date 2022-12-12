import React, {useState,useEffect} from "react";
import fire from "./ConfiguracionFirebase";
import "firebase/auth";
import Muro from "./Muro";



const Home =()=>{
    const [userF,setUserF] = useState("");

    const logOut=()=>{
        fire.auth().signOut();
    };
    useEffect(()=>{
        fire.auth().onAuthStateChanged((userfirebase) => {

            setUserF(userfirebase.email);
        })
      },[]);

    
    return(
        <div>
            <div id="muestra">
                <h2>Bienvenido devuelta:  {userF}</h2>

                <button id="btnlogOut" onClick={logOut}>Cerrar sesion</button>
            </div>
            <div>
                <Muro/>
            </div>
        </div>
    );
;}

export default Home;
