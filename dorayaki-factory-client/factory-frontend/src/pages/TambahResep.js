import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import NavbarInsideBungkus from '../components/NavbarInsideBungkus'
import auth from '../helpers/auth'


import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const TambahResep = () => {    
    
    const [resep, setresep] = useState('')
    const [bahan, setbahan] = useState('')
    const [jumlah, setjumlah] = useState('')
    const [data, setdata] = useState([])
    const header = auth()
     
    useEffect(async() => {
        await axios.get('/resep',header)
        .then(res=>{
            setdata(res.data.data)        
            
        })        
    }, [])    
    

    
    // console.log(listbahan)
    
    const tambah = async(req, res) => {
        // const data = 
        axios.post('resep',)
        .then(res=>{
            if(res.status===200){
                
            }
            else{
                console.log('data tidak ada')
            }
        })
    }

    
    return (
        <>
        <NavbarInsideBungkus/>
        <div className="my-10 px-60 h-screen">
            <div className="flex flex-row justify-between items-center">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-black">Tambah Resep</h1>
                <Link className="p-2 cursor-pointer" to="/recipes">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
            </div>
            <form className="my-10 px-60" action="">
                <label className="flex flex-row justify-between my-5 mb-10">
                    Nama Resep
                    <input className="rounded-full border-black border-solid bg-purple-200 px-2" type="text" name="name" onChange={(e)=>{setresep(e.target.value)}} />
                </label>
                <div>
                    <label className="flex flex-row justify-between my-5">
                        Bahan
                        <select name="bahan" onChange={(e)=>{setbahan(e.target.value);console.log(bahan);}}>
                            {
                                data.map((val)=>{
                                    return <option value={val.nama_bahan}>{val.nama_bahan}</option>
                                })
                            }
                        </select>
                    </label>
                    <label className="flex flex-row justify-between my-5">
                        Jumlah
                        <input className="rounded-full border-black border-solid bg-purple-200 px-2" type="text" name="jumlah" onChange={(e)=>{setjumlah(e.target.value)}}/>
                    </label>
                    <button className='items-center transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex mb-10'>
                        + Tambah Bahan
                    </button>
                </div>
                <input className="items-center transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex" type="submit" value="Submit" />
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default TambahResep
