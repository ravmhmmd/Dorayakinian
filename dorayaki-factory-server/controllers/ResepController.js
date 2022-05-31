const db = require('../models/model');

module.exports ={
    tambah:async (req,res)=>{
        try{
            // console.log(req.body.bahan_baku);
            const resep = req.body.nama_resep
            const bahan_baku = req.body.bahan_baku
            const deskripsi = req.body.deskripsi_resep
            await db.query(`select nama_resep from resep where nama_resep='${resep}';
            select max(ID_resep) as id_resep from resep`,
            [1,2],
            function(err, rows,fields){
                if (err) throw err
                // console.log(rows[0]);
                // console.log(rows[1][0].id_resep);
                if(rows[0].length>0){
                    res.status(400).json({
                        message:"nama resep sudah ada"
                    })
                }else{      
                    const id_resep = rows[1][0].id_resep+1
                    // console.log(id_resep);
                    const data = rows[1]
                    db.query(`insert into resep (nama_resep, deskripsi_resep) values ('${resep}','${deskripsi}');`,function(err,rows,fields){
                        var sql = `insert into resep_bahan(ID_resep, ID_bahan_baku,jumlah_bahan) values`
                        for (var i=0; i<bahan_baku.length;i++){
                            // console.log(id_bahan_baku[i].id);
                            sql = sql.concat(`(${id_resep},${bahan_baku[i].id},${bahan_baku[i].jumlah})`)
                            if(i<bahan_baku.length-1){
                                sql = sql.concat(',')
                            }
                        }
                        db.query(sql,()=>{
                            if (err) throw err
                            res.status(200).json({
                                data : data
                            })
                        })
                    })                    
                }
            })

        }catch(error){   
            console.log(error);         
            res.status(400).json({message:'error'})
        }
    },
    lihat:async(req,res)=>{
        await db.query(`select * from resep natural join resep_bahan natural join bahan_baku`,function(err,rows, fields){
            if(rows.length>0){
                res.status(200).json({
                    data : rows,
                    message : 'data tersedia'
                })
            }
            else{
                res.status(400).json({
                    data:{},
                    message:'data tidak ada'
                })
            }
        })
    }
}