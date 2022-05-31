const bcrypt = require('bcrypt')
const dotenv = require('dotenv');
const { response } = require('express');
const jwt = require('jsonwebtoken')
const db = require('../models/model');


module.exports = {
    editBahanBaku: async (req, res)=>{
        try{
            const method = req.body.method
            if (method=='add'){
                const nama = req.body.nama
                const stok = req.body.stok
                // db.connect()        
                await db.query(`insert into bahan_baku (nama_bahan, stok) values (${nama}, ${stok})`,function(err,rows,field){
                    if (err) throw err  
                    res.status(200).json({
                        message:'tambah bahan baku berhasil'
                    })              
                })
                //tell the log what happened
                console.log(result)
            }else if (method=='update'){
                const nama = req.body.nama
                const stok = req.body.stok
                // db.connect()        
                await db.query(`update bahan_baku set stok=${stok} where nama_bahan=${nama}`,function(err,rows,field){
                    if (err) throw err                
                    res.status(200).json({
                        message: 'update bahan baku berhasil'
                    })
                })
                //tell the log what happened                
            }else if (method=='view'){
                // db.connect()        
                await db.query(`select * from bahan_baku`,function(err,rows,field){
                    if (err) throw err                                    
                    res.status(200).json({
                        data:rows
                    })
                    
                })
                
            }  
        }   
        catch(error) {
            console.log(error);
            console.log('error getting data')
        }
        
    }

}