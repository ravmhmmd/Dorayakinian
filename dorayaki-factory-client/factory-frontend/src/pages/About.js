import React from 'react'
import Footer from '../components/Footer'
import NavbarInsideBungkus from '../components/NavbarInsideBungkus'

const About = () => {
    return (
        <>
            <NavbarInsideBungkus/>
            <div className="bg-white h-screen flex flex-col justify-center items-center font-poppins">
                <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-black mb-8">
                    About
                </h1>
                <p className="text-lg mb-8">
                    Superdora merupakan website supplier bahan baku dorayaki untuk Dorayakinian
                </p>
                <p className="text-lg mb-2">
                    Website ini dikembangkan oleh :
                </p>
                <p className="text-lg mb-2">
                    Muhammad Bintang Pananjung (13519004)
                </p>
                <p className="text-lg mb-2">
                    Louis Riemenn (13519016)
                </p>
                <p className="text-lg mb-8">
                    Muhammad Rayhan Ravianda (13519201)
                </p>
                <p className="text-lg">
                    Hak Cipta oleh Dorayakinian 2021
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default About
