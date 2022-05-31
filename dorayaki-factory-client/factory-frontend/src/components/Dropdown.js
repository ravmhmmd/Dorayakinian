import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? "text-white grid grid-rows-2 text-center items-center bg-purple-500" : "hidden"} onClick={toggle}>
            <Link className="transition duration-200 ease-in-out m-1 rounded-full py-3 px-4 hover:bg-purple-700" to="/about">
                About
            </Link>
            <Link className="transition duration-200 ease-in-out m-1 bg-yellow-400 text-black rounded-full py-3 px-6 hover:bg-yellow-300 drop-shadow-lg" to={"/login"}>
                Login
            </Link>
        </div>
    )
}

export default Dropdown
