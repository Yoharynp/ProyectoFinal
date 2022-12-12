import React, { useState, useRef, Component } from "react";
import fire from "./ConfiguracionFirebase";
import "firebase/auth";



export default class Login extends Component{
    usuario = React.createRef();
    contrasena =  React.createRef();


    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    login(e) {
        e.preventDefault();
        var miusuario = this.usuario.current.value;
        var micontrasena = this.contrasena.current.value;

        fire
            .auth()
            .signInWithEmailAndPassword(miusuario, micontrasena)
            .then(u => {})
            .catch(function(error){
                console.log(error);
            })
    }

    signup(e) {
        e.preventDefault();
        var miusuario = this.usuario.current.value;
        var micontrasena = this.contrasena.current.value;
        fire 
            .auth()
            .createUserWithEmailAndPassword(miusuario, micontrasena)
            .then(u => {})
            .catch(function(error){
                console.log(error);
            })
    }
    render(){
        return(
            <body>
                <section className="left-form">               
                </section>

                <section className="right-form">
                    <form action="" method="post">
                        <h2>
                            Mural Interactivo
                        </h2>
                        <label htmlFor="excampleInputEmail"> Correo: </label>
                        <input type="email" className= "email" id= "exampleInputEmail" ref={this.usuario} placeholder= "Ingrese datos"></input>

                        <label htmlFor="exampleInputPassword">Contraseña: </label>
                        <input type="password" className= "password" id="exampleInputPassword" ref={this.contrasena} placeholder= "Ingrese datos"></input>
                        <a href="#" className="btn btn-neon" onClick={this.login}>
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                            <span id="span4"></span>
                            INGRESAR 
                        </a>
                        <a href="#" className="btn-neon" onClick={this.signup}>
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                            <span id="span4"></span>
                            REGISTRAR
                        </a>
                    </form>
                </section>
            </body>
        )
    }
}







/*const Login =(props)=>{
    const[errorEmail,setErrorEmail]=useState("");
    const[errorPassword,setErrorPassword]=useState("");
    const[registro,setRegistro]= useState(false);

    const createUser = (correo,password) =>{
        fire.auth().createUserWithEmailAndPassword(correo,password).
        then((usuarioFirebase) =>{
            console.log("Usuario Creado ", usuarioFirebase);
            props.setUsuario(usuarioFirebase);
        }).catch((err)=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setErrorEmail(err.message);
                    break;
                case "auth/weak-password":
                    setErrorPassword(err.message);
                    break;
            }
        });
    };
    const Lg=(correo,password)=>{
        fire.auth().signInWithEmailAndPassword(correo,password)
            .then((usuarioFirebase)=>{
                console.log("sesion iniciada con: ", usuarioFirebase);
                props.setUsuario(usuarioFirebase);
            }).catch((err)=>{
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setErrorEmail(err.message);
                        break;
                    case "auth/wrong-password":
                        setErrorPassword(err.message);
                        break;
                }
            });
    };

    const submitHandler=(e)=>{
        e.preventDefault();
        const correo =e.target.emailField.value;
        const password=e.target.passwordField.value;
        console.log(correo,password);
        if(registro){
            createUser(correo,password);
        } else{
            Lg(correo,password);
        }
    };

    return(
        <section id="login">
            <div id="logincontainer">
                <div id= "login01">
                <h1>{registro ? "Registrate" : "Inicia sesion"}</h1>
                </div>
                <form onSubmit={submitHandler}>
                    <label id="label">Email</label>
                    <input type="text" id="emailField"/>
                    <p id="error">{errorEmail}</p>
                    <label id="label">Password</label>
                    <input type="password" id="passwordField"/>
                    <p id="error">{errorPassword}</p>
                    <div id="btnContainer">
                </div>
                    <button id= "btnlogin"type="submit">{registro ? "Registrate" : "Inicia sesion"}</button>
                </form>
                <button id="btnregistrer" onClick={()=> setRegistro(!registro)}>{registro ? "Tienes cuenta? Inicia sesion" : "No tienes cuenta? Registrate"}</button>

            </div>
            
        </section>
    )
}*/

