import React from 'react'
import Footer from '../components/Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import auth from "../helpers/auth";
import NavbarInsideBungkus from '../components/NavbarInsideBungkus';

const Recipes = () => {
    return (
        <>
            <NavbarInsideBungkus/>
            <div className="bg-white h-screen flex flex-col justify-self-auto font-poppins px-10">
                <div className="flex flex-row justify-between my-10">
                    <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-5xl font-black">
                        Resep
                    </h1>
                    <Link className="items-center transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex" to="/tambahresep">
                        + Tambah Resep
                    </Link>
                </div>
                <div className="items-center">
                    <div className="transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex flex-row justify-between mb-2"> {/* satu resep */}
                        <Link className="w-full" to="/detailresep">Dorayakan</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Recipes