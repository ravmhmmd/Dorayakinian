import React from 'react';
import { Link } from 'react-router-dom';

const NavbarInside = ({toggle}) => {
    return (
        <nav className="sticky top-0 flex justify-between items-center h-16 bg-purple-500 text-white relative shadow-sm font-poppins font-medium drop-shadow-lg" role="navigation">
            <Link to="/home" className="ml-8 text-lg text-white transition duration-200 ease-in-out hover:bg-yellow-300 hover:text-black hover:drop-shadow rounded-full py-3 px-4">
                SUPERDORA
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="transition duration-200 ease-in-out m-1 rounded-full py-3 px-4 hover:bg-purple-700" to="/recipes">Recipes</Link>
                <Link className="transition duration-200 ease-in-out m-1 rounded-full py-3 px-4 hover:bg-purple-700" to="/ingredients">Ingredients</Link>
                <Link className="transition duration-200 ease-in-out m-1 rounded-full py-3 px-4 hover:bg-purple-700" to="/request">Request</Link>
                <Link className="transition duration-200 ease-in-out m-1 rounded-full py-3 px-4 hover:bg-purple-700" to="/about">About</Link>
                <Link className="transition duration-200 ease-in-out m-1 bg-yellow-400 text-black rounded-full py-3 px-6 hover:bg-yellow-300 drop-shadow-lg" to="/">Logout</Link>
            </div>
        </nav>
    )
}

export default NavbarInside
