import '../style/Login-Regis.css'
import axios from "axios";
import { useState } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {    
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('') 
    let navigate=useNavigate()
    const Login = (e) =>{
        e.preventDefault()
        axios.post('login',{user:user, pass:pass})
        .then(async res => {            
            localStorage.setItem("token", res.data.token)
            if(localStorage.getItem('token')){
                navigate('/')
            }
        }).catch((err) => {
            console.log(err);
        })
            
    
    }
    const changeUser = (e)=>{               
        setuser(e.target.value)        
    }        
    
    const changePass = (e)=>{                
        setpass(e.target.value)
    }        

    
    return (
        <div className="LoginForm">
            <form id="form" onSubmit={Login}>
                <h2>Masuk</h2>
                <div className="txt_field">
                    <input type="text" name="user" className="text" autoComplete="off" id="user" onChange={changeUser} value={user} required />
                    <span></span>
                    <label>Nama Pengguna</label>
                </div>
                <div className="txt_field">
                    <input type="password" name="pass" className="text" id="pass" onChange={changePass} required />
                    <span></span>
                    <label>Kata Sandi</label>
                </div>
                <input type="submit" name="submit" id="submit" value="Masuk" ></input>
            </form>
            <div className="Footer">
                <p>Belum punya akun?</p>
                <a className="hplink">Daftar</a>
            </div>
        </div>
    )
}

export default LoginForm