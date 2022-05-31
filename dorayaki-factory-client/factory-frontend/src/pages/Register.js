import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Login-Regis.css'

const RegisForm = () => {
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('') 
    const [passconf, setpassconf] = useState('')    
    const [email, setemail] = useState('')
    let navigate=useNavigate()    
    const Register = (e) =>{
        e.preventDefault()
        if(pass==passconf){
            axios.post('registrasi',{user:user, pass:pass, email:email})
            .then(async res => {            
                if(res.status===200){
                    navigate('/login')
                }
                else{
                    console.log('username atau email sudah ada')
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else{
            console.log('password tidak sesuai dengan konfirmasi')
        }
        
            
    
    }
    return (
        <div className="RegisForm">
            <form id="form" onSubmit={Register}>
                <h2>Registrasi</h2>
                <div className="txt_field">
                    <input type="text" name="user" class="text" autocomplete="off" id="user" onChange={(e)=>{setuser(e.target.value)}} required />
                    <span></span>
                    <label>Nama Pengguna</label>
                </div>
                <div className="txt_field">
                    <input type="text" name="email" class="text" autocomplete="off" id="email" onChange={(e)=>{setemail(e.target.value)}} required />
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="txt_field">
                    <input type="password" name="pass" class="text" id="pass" onChange={(e)=>{setpass(e.target.value)}} required />
                    <span></span>
                    <label>Kata Sandi</label>
                </div>
                <div className="txt_field">
                    <input type="password" name="pass_confirm" class="text" id="pass_confirm" onChange={(e)=>{setpassconf(e.target.value)}} required />
                    <span></span>
                    <label>Konfirmasi Kata Sandi</label>
                </div>
                <input type="submit" name="submit" id="submit" value="Daftar"/>
            </form>
            <div className="Footer">
                <p>Sudah punya akun?</p>
                <a className="hplink">Masuk</a>
            </div>
        </div>
    )
}

export default RegisForm