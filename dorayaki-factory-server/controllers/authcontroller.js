const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const db = require('../models/model');
const { use } = require('../routers/home');
const bcrypt = require('bcrypt')
dotenv.config()

module.exports = {
    login: async (req, res)=>{        
        // const [token, settoken] = useState('')
        try{
            const user = req.body.user
            const pass = req.body.pass 
            
            await db.query(`select pass from user where nama='${user}'`,async function(err,rows,fields){                
                if (err) throw err                
                if(rows.length>0){
                    const validPassword = await bcrypt.compare(pass, rows.pass);
                    //create token jwt                         
                    if(validPassword){
                        const token = jwt.sign({user:user},process.env.TOKEN_RAHASIA)
                        res.header('auth-token',token).status(200).json({
                            token : token,
                            message : 'login berhasil'
                        })
                    }else{
                        res.status(400).json({
                            message : 'login gagal'
                        })
                    }
                    
                }    
                else{
                    res.status(400).json({
                        message : 'login gagal'
                    })
                }          
            })                    
        }   
        catch(error) {
            console.log('error getting data')
        }
        
    },
    register: async (req,res)=>{
        try{
            console.log(req.body);
            const user = req.body.user            
            const email = req.body.email
            const pass = req.body.pass                   
            await db.query(`select pass from user where nama='${user}' or email='${email}'`, async function(err,rows,fields){
                if (err) throw err
                if(rows.length==0){
                    //create token jwt    
                    const salt = await bcrypt.genSalt(10);
                    const password = await bcrypt.hash(pass, salt);
                    db.query(`insert into user (nama,email,pass) values ('${user}','${email}','${password}')`)
                    res.status(200).json({
                        message : "registrasi berhasil"
                    })

                }  
                else{
                    res.status(400).json({
                        message : "registrasi gagal, username atau email sudah ada"
                    })
                }            
            })
        }   
        catch(error) {
            console.log('error getting data')
        }
    }

}