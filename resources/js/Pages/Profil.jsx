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
    
    

    return (
        <>
            <Head title="Profil" />
            <div className="w-full min-h-screen bg-white flex flex-col justify-between">
                <div className="bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                    <div className="w-full flex flex-col justify-end ">

                        {/*items-end to resize the component to end */}
                        <div className="flex flex-row w-full justify-center items-end">
                            <div className="md:w-1/3 mini:w-1/2 h-60  lg:flex lg:justify-center sm:grid sm:justify-center mini:grid mini:justify-center ">
                                <div className=" lg:w-68 lg:h-68 md:w-52 md:h-52  sm:w-52 sm:h-52 mini:w-48 mini:h-48 bg-darkblue rounded-full p-2 mini:relative md:mt-0 mini:mt-5 md:top-20 md:mr-20 ">
                                    <img src={auth.user.profile_picture != null? auth.user.profile_picture:"img/profile/anon.png"} alt="" className=" w-full h-full rounded-full object-cover" />
                                    <div className="bg-white w-20 h-20 mini:absolute lg:top-56 lg:left-24 md:top-40 md:left-16 sm:top-40 sm:left-16 mini:top-40 mini:left-12 rounded-full p-2">
                                        <button className="bg-darkblue w-full h-full hover:bg-blue transition rounded-full cursor-pointer flex flex-row justify-center  items-center"
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
                                            <button className="bg-blue" type="submit">
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
                    <div className="md:w-1/2 h-full ">

                    </div>
                    <div className="md:w-4/6  h-full mini:w-full  md:flex md:flex-col md:ml-7 mini:flex mini:flex-col  ">

                        <div className="mini:flex mini:flex-row   md:hidden  text-center mini:justify-center mini:items-center md:mt-0 mini:mt-4">
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
                        <div className="flex flex-row  w-full text-2xl text-darkblue font-semibold mt-2">
                            <div className="md:w-1/4 bg-white mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    50
                                </h3>
                            </div>
                            <div className="md:w-1/4 bg-white mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    41
                                </h3>
                            </div>
                            <div className="md:w-1/4 bg-white mini:w-1/3  md:text-left mini:text-centers">
                                <h3>
                                    31 Desember 2022
                                </h3>
                            </div>

                        </div>
                        <div className="flex flex-row  text-md text-black font-semibold">
                            <div className="md:w-1/4 bg-white mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    Pesanan Selesai
                                </h3>
                            </div>
                            <div className="md:w-1/4 bg-white mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    Streak
                                </h3>
                            </div>
                            <div className="md:w-1/4 bg-white mini:w-1/3 md:text-left mini:text-center">
                                <h3>
                                    Pengiriman Selanjutnya
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col mb-10 md:mt-0 mini:mt-24">
                    <div className="flex md:flex-row mini:flex-col w-full">
                        <div className="md:w-1/2 mini:w-full md:mb-0 mini:mb-8 min-h-max  flex flex-col items-center mr-4 font-medium ">

                            <div className="w-1/2 min-h-full justify-between flex flex-col items-center space-y-4  ">
                                <h1 className="text-darkblue font-semibold text-2xl text-center">
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
                                <div className="flex flex-row items-center   w-1/2 mr-6">
                                    <img src="img/icon-temp/addressIcon.svg" alt="Your Profile" className="w-7 mr-3" />
                                    <h3>
                                        {auth.user.address}
                                    </h3>
                                </div>
                                <button
                                    onClick={(e) => handleGetIdPengiriman(auth.user.id)}
                                    className="text-white bg-blue py-2 lg:py-3 px-5 w-3/6 text-center lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
                                >
                                    Ubah
                                </button>
                            </div>

                        </div>
                        <div className="md:w-1/2 mini:w-full  min-h-max flex flex-col md:items-start mini:items-center justify-between ">
                            <div className="w-1/2 h-full flex flex-col md:items-start mini:items-center  space-y-9 ml-3 ">
                                <h1 className="text-darkblue font-semibold text-2xl">
                                    Preferensi Saya
                                </h1>
                                <div className="w-max   grid md:grid-cols-2 md:justify-start md:space-y-0 mini:justify-center sm:grid-cols-2   mb-5">
                                    {props.category.map((category, i) =>
                                        <>

                                            <PreferensiCard dataid={category.id} name={category.name} image={category.image} />

                                        </>
                                    )}
                                </div>

                                <button
                                    // onClick={(e) => handleGetIdPengiriman(auth.user.id)}
                                    onClick={(e) => handleGetIdPengiriman}
                                    className="text-white bg-blue py-2 lg:py-3 px-5 w-3/6 text-center lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
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