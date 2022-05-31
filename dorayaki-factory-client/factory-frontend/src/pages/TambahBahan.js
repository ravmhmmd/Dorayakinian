import React from 'react'
import Footer from '../components/Footer'
import NavbarInsideBungkus from '../components/NavbarInsideBungkus'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const TambahBahan = () => {
    return (
        <>
        <NavbarInsideBungkus/>
        <div className="my-10 px-60 h-screen">
            <div className="flex flex-row justify-between items-center">
                    <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-black">Tambah Bahan</h1>
                    <Link className="p-2 cursor-pointer" to="/ingredients">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
            </div>
            <form className="my-10 px-60" action="">
                <label className="flex flex-row justify-between my-5">
                    Nama Bahan
                    <input className="rounded-full border-black border-solid bg-purple-200 px-2" type="text" name="name" />
                </label>
                <label className="flex flex-row justify-between my-5">
                    Jumlah
                    <input className="rounded-full border-black border-solid bg-purple-200 px-2" type="text" name="jumlah"/>
                </label>
                <input className="items-center transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex" type="submit" value="Submit" />
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default TambahBahan
