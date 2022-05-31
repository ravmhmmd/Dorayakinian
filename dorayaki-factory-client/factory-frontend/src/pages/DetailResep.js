import React from 'react'
import Footer from '../components/Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import auth from "../helpers/auth";
import NavbarInsideBungkus from '../components/NavbarInsideBungkus';

const DetailResep = () => {
    return (
        <>
            <NavbarInsideBungkus />
            <div className="my-10 px-60 font-poppins">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-black">Dorayakan</h1>
                    <Link className="p-2 cursor-pointer" to="/recipes">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </div>
                <div className="my-10">
                    <div className="text-xl font-semibold flex flex-row justify-between">
                        <p>Bahan</p>
                        <p>Jumlah</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Cokelat</p>
                        <p>1</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailResep
