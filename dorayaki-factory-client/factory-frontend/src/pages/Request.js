import React from 'react'
import Footer from '../components/Footer'
import NavbarInsideBungkus from '../components/NavbarInsideBungkus'

const Request = () => {

    return (
        <>
        <NavbarInsideBungkus/>
        <div className="bg-white h-screen flex flex-col justify-self-auto font-poppins px-10">
                <div className="flex flex-row justify-between my-10">
                    <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-5xl font-black">
                        Request
                    </h1>
                    {/* <Link className="items-center transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex" to="/tambahbahan">
                        + Bahan Baku
                    </Link> */}
                </div>
                <div className="items-center">
                    <div className="transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full flex flex-row justify-between mb-2"> {/* satu resep */}
                        <div className="">ID Request</div>
                        <div className="">ID Resep</div>
                        <div className="">Waktu Request</div>
                        <div className="">Status</div>
                        <div className="">Keterangan Aktivitas</div>
                    </div>
                    <div className="transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full flex flex-row justify-between mb-2"> {/* satu resep */}
                        <div className="">1</div>
                        <div className="">1</div>
                        <div className="">23:11:00</div>
                        <div className="">Status</div>
                        <div className="">Diterima</div>
                        <div className="flex flex-row justify-center items-right">
                            <button className="text-white bg-green-500 font-medium rounded-full px-2 mx-2" onClick="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                            <button className="text-white bg-red-500 font-medium rounded-full px-2 mx-2" onClick="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Request
