import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import { Inertia } from "@inertiajs/inertia";
import PreferensiCard from "@/Components/PreferensiCard";



export default function Profil(props) {

'/Menu'

    return (
        <>
            <Head title="Profil" />
            <div className="w-full min-h-screen bg-white flex flex-col justify-between">
                <div className="bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                    <div className="w-full flex flex-col justify-end ">

                        {/*items-end to resize the component to end */}
                        <div className="flex flex-row w-full  justify-center items-end">
                            <div className="w-1/3 h-60  flex justify-center">
                                <div className=" w-72 h-72 bg-darkblue rounded-full p-2 relative top-20 mr-20">
                                    <img src="img/profile/anon.png" alt="" className=" w-64 rounded-full absolute top-4 right-5 left-4" />
                                    <div className="bg-white w-20 h-20 relative top-56 left-24 rounded-full p-2">
                                        <Link className="bg-darkblue w-full h-full hover:bg-blue transition rounded-full cursor-pointer flex flex-row justify-center  items-center"
                                        href="ubah_profil"

                                        >
                                            <img src="img/icon-temp/editProfile.svg" alt="" className="w-8 h-8" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="w-1/2 ">
                                <div className="  h-min flex flex-col justify-end mb-8 ml-8">
                                    <div className="flex flex-row items-center space-x-5">
                                        <h1 className="text-white font-bold text-5xl">
                                            Cahyanto Arie
                                        </h1>
                                        <img src="img/icon-temp/logout.png" alt="" className="w-12 h-12 cursor-pointer" />
                                    </div>
                                    <h1 className="text-white font-bold text-xl mt-3">
                                        arie@gmail.com
                                    </h1>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="w-full h-44 flex flex-row">
                    <div className="w-1/2 h-full ">

                    </div>
                    <div className="w-4/6 h-full  flex flex-col ml-7  ">
                        <div className="flex flex-row   text-2xl text-darkblue font-semibold mt-2">
                            <div className="w-1/4 bg-white">
                                <h3>
                                    50
                                </h3>
                            </div>
                            <div className="w-1/4 bg-white">
                                <h3>
                                    41
                                </h3>
                            </div>
                            <div className="bg-white">
                                <h3>
                                    31 Desember 2022
                                </h3>
                            </div>

                        </div>
                        <div className="flex flex-row  text-md text-black font-semibold">
                            <div className="w-1/4">
                                <h3>
                                    Pesanan Selesai
                                </h3>
                            </div>
                            <div className="w-1/4">
                                <h3>
                                    Streak
                                </h3>
                            </div>
                            <div className="w-1/4">
                                <h3>
                                    Pengiriman Selanjutnya
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full   flex flex-col mb-10">
                    <div className="flex flex-row w-full">
                        <div className="w-1/2 h-full flex flex-col items-center mr-4 font-medium">

                            <div className="w-1/2 flex flex-col items-center space-y-4 ">
                                <h1 className="text-darkblue font-semibold text-2xl ">
                                    Lokasi Pengiriman
                                </h1>
                                <div className="flex flex-row items-center w-1/2 mr-6">
                                    <img src="img/icon-temp/profileIcon.svg" alt="Your Profile" className="w-7 mr-3" />
                                    <h3>
                                        Kenny Jinhiro
                                    </h3>
                                </div>
                                <div className="flex flex-row items-center   w-1/2 mr-6">
                                    <img src="img/icon-temp/phoneIcon.svg" alt="Your Profile" className="w-7 mr-3" />
                                    <h3>
                                        081231149830
                                    </h3>
                                </div>
                                <div className="flex flex-row items-center   w-1/2 mr-6">
                                    <img src="img/icon-temp/addressIcon.svg" alt="Your Profile" className="w-7 mr-3" />
                                    <h3>
                                        Jl. CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota Surabaya, Jawa Timur 60219
                                    </h3>
                                </div>
                                <Link
                                    href="ubah_informasi_pengiriman"
                                    className="text-white bg-blue py-2 lg:py-3 px-5 w-3/4 text-center lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
                                >
                                    Ubah
                                </Link>
                            </div>




                        </div>
                        <div className="w-1/2 h-full flex flex-col items-center ">
                            <div className="w-1/2 h-full flex flex-col items-start  space-y-9 ">
                                <h1 className="text-darkblue font-semibold text-2xl">
                                    Preferensi Saya
                                </h1>
                                <div className="w-full space-x-2 flex flex-row  mb-5">
                                    {props.category.map((category, i) =>
                                        <>

                                            <PreferensiCard key={i} id={category.id} name={category.name} image={category.image} />

                                        </>
                                    )}
                                </div>

                                <Link
                                    href=""
                                    className="text-white bg-blue py-2 lg:py-3 px-5 w-3/4 text-center lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
                                >
                                    Ubah
                                </Link>
                            </div>





                        </div>
                    </div>

                </div>

                <Footer />

            </div>

        </>
    )
}
