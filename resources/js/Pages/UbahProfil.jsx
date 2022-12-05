import React from "react"
import { Inertia } from "@inertiajs/inertia"
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import { Link, Head } from "@inertiajs/inertia-react";
import { useForm } from '@inertiajs/inertia-react'
export default function UbahProfil(props) {

    const { data, setData, post, processing, errors } = useForm({
        nama: props.nama,
        email: props.email,

    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        // Inertia.post('/Preferensi', data)

    }
    return (
        <div>
            <>
                <div className="bg-white w-full min-h-screen flex flex-col ">
                    <div className="bg-blue-bg bg-cover bg-no-repeat">
                        <HeaderNoBg />
                    </div>
                    <div className="w-full h-full  flex flex-col items-center">
                        <h1 className="text-blue mt-4 text-4xl font-bold mb-4">
                            Profil
                        </h1>
                        <div className="w-1/2 bg-white rounded-md p-6 mt-6 border-none drop-shadow-md">
                            <form onSubmit={onSubmitHandler}>
                                <div className="w-full gap-4 flex sm:flex-row mini:flex-row  ">

                                    <div className="sm:w-1/2 mini:w-full h-full">
                                        <label htmlFor="nama" className="text-black font-medium ml-4 mb-44">Nama</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="nama" onChange={e => setData('nama', e.target.value)} value={data.nama}
                                            className=" border-1 focus:outline-none border-none focus:border-none focus:ring-0 mb-14 font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />

                                        <label htmlFor="email" className="text-black font-medium ml-4 ">Email</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="email" onChange={e => setData('email', e.target.value)} value={data.email}
                                            className=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />
                                    </div>
                                    <div className="sm:w-1/2 mini:w-full">
                                        <label htmlFor="nama" className="text-black font-medium ml-4 mb-44">Foto Profil</label>
                                        <div className="mb-2">
                                        </div>

                                        <div className="w-full h-44 bg-smoke flex flex-col justify-center items-center">
                                            <img src="img/icon-temp/noProfpic.svg" alt="" className="w-24 h-24" />
                                        </div>


                                    </div>

                                </div>
                                <div className="w-full mt-8  rounded-2x flex flex-row justify-center">
                                    <button type="submit"
                                        className="bg-red-600 w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-bluehover  transition delay-50 text-md "
                                    >

                                        Reset Password

                                    </button>

                                </div>
                                <div className="w-full mt-8  rounded-2x flex flex-row justify-center">
                                    <button type="submit"
                                        className="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-bluehover  transition delay-50 text-md "
                                    >

                                        Simpan

                                    </button>

                                </div>
                            </form>

                        </div>


                    </div>
                    {/* <Footer /> */}
                </div>
            </>

        </div>
    )
}

