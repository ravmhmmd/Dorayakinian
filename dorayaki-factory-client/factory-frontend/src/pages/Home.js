import React from 'react'
import Footer from '../components/Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import auth from "../helpers/auth";
import NavbarInsideBungkus from '../components/NavbarInsideBungkus';
const Home = () => {
    const navigate = useNavigate()
    const header = auth()
    if(header.headers['auth-token']){
        // console.log(header);
        axios.get('',header)
        .then(res=>{
            if(res.status!=200){
                navigate('/login')
            }
            
            
        })
    }
    else{
        return <Navigate to={'/login'}/>
    }
    
    return (
        <>
            <NavbarInsideBungkus/>
            <div className="h-screen flex flex-col justify-center items-center font-poppins">
                <h1 className="text-medium lg:text-5xl md:text-3xl sm:text-xl text-xl font-black mb-8">
                    Selamat Datang di Superdora
                </h1>
                <div className="flex items-center justify-center">
                <Link className="transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex mx-4" to="/recipes">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Recipes
                </Link>
                <Link className="transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex mx-4" to="/ingredients">
                    Ingredients
                </Link>
                <Link className="transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex mx-4" to="/request">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Request
                </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
