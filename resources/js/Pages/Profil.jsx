import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import { Inertia } from "@inertiajs/inertia";
import PreferensiCard from "@/Components/PreferensiCard";



export default function Profil(props) {

    const logoutHandler = async (e) => {
        e.preventDefault();

        Inertia.post('/logout', auth.user.id);
    }
    const { auth } = usePage().props;




    function handleGetIdProfil(id) {
        Inertia.get(route('profile.ubah', id));
        
    }
    function handleGetIdPengiriman(id) {
       
        Inertia.get(route('pengiriman.ubah', id));
        
    }
    function handleGetIdPreferensi(id) {
       
        Inertia.get(route('preferensi.ubah', id));
        
    }
    
    return (
        <>
            <Head title="Profil" />
            <div className="w-full min-h-screen bg-white flex flex-col justify-between">
                <div className="bg-green-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                    <div className="w-full flex flex-col justify-end ">

                        {/*items-end to resize the component to end */}
                        <div className="flex flex-row w-full justify-center items-end">
                            <div className="md:w-1/3 mini:w-1/2 h-60  lg:flex lg:justify-center sm:grid sm:justify-center mini:grid mini:justify-center ">
                                <div className=" lg:w-68 lg:h-68 md:w-52 md:h-52  sm:w-52 sm:h-52 mini:w-48 mini:h-48 bg-darkgreen rounded-full p-2 mini:relative md:mt-0 mini:mt-5 md:top-20 md:mr-20 ">
                                    <img src={auth.user.profile_picture != null? auth.user.profile_picture:"img/profile/anon.png"} alt="" className=" w-full h-full rounded-full object-cover" />
                                    <div className="bg-white w-20 h-20 mini:absolute lg:top-56 lg:left-24 md:top-40 md:left-16 sm:top-40 sm:left-16 mini:top-40 mini:left-14 rounded-full p-2">
                                        <button className="bg-darkgreen w-full h-full hover:bg-green transition rounded-full cursor-pointer flex flex-row justify-center  items-center"
                                           onClick={(e) => handleGetIdProfil(auth.user.id)}

                                        >
                                            <img src="img/icon-temp/editProfile.svg" alt="" className="w-8 h-8" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="md:w-1/2 md:block mini:hidden  ">
                                <div className="  h-min flex flex-col justify-end mb-8 ml-8">
                                    <div className="flex flex-row items-center space-x-5">
                                        <h1 className="text-white font-bold text-5xl">
                                            {auth.user.full_name}
                                        </h1>
                                        <form onSubmit={logoutHandler} >
                                            <button className="bg-green" type="submit">
                                                <img src="img/icon-temp/logout.png" alt="" className="w-12 h-12 cursor-pointer" />
                                            </button>
                                        </form>
                                        
                                    </div>
                                    <h1 className="text-white font-bold text-xl mt-3">
                                        {auth.user.email}
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="w-full h-44 flex flex-row ">
                    <div className="md:w-1/3 h-full ">

                    </div>
                    <div className="md:w-4/6  md:p-0 mini:p-2   h-full mini:w-full  md:flex md:flex-col md:ml-7 mini:flex mini:flex-col  ">

                        <div className="mini:flex mini:flex-row   md:hidden  text-center mini:justify-center mini:items-center md:mt-0 mini:mt-8">
                            <h1 className="text-black font-bold text-2xl mr-3">
                                {auth.user.full_name}
                            </h1>
                            <form onSubmit={logoutHandler} >
                                <button className="" type="submit">
                                    <img src="img/icon-temp/logout.png" alt="" className="w-12 h-12  cursor-pointer" />
                                </button>
                            </form>

                        </div>
                        <h1 className="text-black font-bold text-xl mb-4 md:hidden mini:block text-center">
                            {auth.user.email}
                        </h1>
                        <div className="flex flex-row space-x-2  w-full text-2xl text-darkgreen font-semibold md:mt-2 mini:mt-4">
                            <div className="md:w-1/5  mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    0
                                </h3>
                            </div>
                            <div className="md:w-1/5 bg-white mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    0
                                </h3>
                            </div>
                            <div className="md:w-1/2  bg-white mini:w-1/3 md:p-0 mini:pr-4  md:text-left mini:text-center">
                                <h3 className="text-ellipsis">
                                    10 Januari 2023
                                </h3>
                            </div>

                        </div>
                        <div className="flex flex-row space-x-2  text-md text-black md:font-semibold md:mt-0 mini:mt-4 mini:font-bold">
                            <div className="md:w-1/5 bg-white flex flex-col justify-center mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    Pesanan Selesai
                                </h3>
                            </div>
                            <div className="md:w-1/5  bg-white flex flex-col justify-center mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    Streak
                                </h3>
                            </div>
                            <div className="md:w-1/2 bg-white mini:w-1/3 flex flex-col justify-center md:text-left mini:text-center">
                                <h3>
                                    Pengiriman Selanjutnya
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col mb-10 md:mt-0 mini:mt-40 ">
                    <div className="flex md:flex-row mini:flex-col w-full">
                        <div className="md:w-1/2 mini:w-full md:mb-0 mini:mb-8 min-h-max  flex flex-col items-center mr-4 font-medium ">

                            <div className="w-1/2 min-h-full   justify-between flex flex-col items-center space-y-4 mini:mb-5 md:mb-0 ">
                                <h1 className="text-darkgreen font-semibold text-2xl text-center mini:mb-6 md:mb-0">
                                    Lokasi Pengiriman
                                </h1>
                                <div className="flex flex-row items-center w-1/2 mr-6">
                                    <img src="img/icon-temp/profileIcon.svg" alt="Your Profile" className="w-7 mr-3" />
                                    <h3>
                                        {auth.user.full_name}
                                    </h3>
                                </div>
                                <div className="flex flex-row items-center   w-1/2 mr-6">
                                    <img src="img/icon-temp/phoneIcon.svg" alt="Your Profile" className="w-7 mr-3" />
                                    <h3>
                                        {auth.user.phone}
                                    </h3>
                                </div>
                                <div className="flex flex-row items-center w-1/2 mr-6">
                                    <img src="img/icon-temp/addressIcon.svg" alt="Your Profile" className="w-7 mr-3" />
                                    <h3>
                                        {auth.user.address}
                                    </h3>
                                </div>
                                <button
                                    onClick={(e) => handleGetIdPengiriman(auth.user.id)}
                                    className="text-white bg-green py-2 lg:py-3 px-5 mini:w-full lg:w-1/2 lg text-center lg:px-10 font-semibold rounded-md hover:bg-darkgreen transition"
                                >
                                    Ubah
                                </button>
                            </div>

                        </div>
                        <div className="md:w-1/2 mini:w-full   min-h-max flex flex-col md:items-start mini:items-center justify-between ">
                            <div className="min-w-max  h-full flex flex-col md:items-start mini:items-center  space-y-9 ml-3  ">
                                <h1 className="text-darkgreen font-semibold text-2xl mini:text-center">
                                    Preferensi Saya
                                </h1>
                                <div className="w-full  grid md:grid-cols-2  md:justify-between md:space-y-0 mini:justify-center sm:grid-cols-2 mb-5 lg:mr-0 md:mr-2">
                                    {props.category.map((category, i) =>
                                        <>

                                            <PreferensiCard dataid={category.id} name={category.name} image={category.image} />

                                        </>
                                    )}
                                </div>

                                <button
                                    
                                    onClick={(e) => handleGetIdPreferensi(auth.user.id)}
                                    className="text-white bg-green py-2 lg:py-3 px-5 mini:w-full lg:w-1/2  text-center lg:px-10 font-semibold rounded-md hover:bg-darkgreen transition"
                                >
                                    Ubah
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <Footer />

            </div>

        </>
    )
}