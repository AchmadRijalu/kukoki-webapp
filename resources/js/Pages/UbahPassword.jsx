import React, { useRef, useState, } from "react"
import { Inertia } from "@inertiajs/inertia"
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import { useForm, usePage } from '@inertiajs/inertia-react'
export default function UbahPassword(props) {

    const { auth } = usePage().props

    const { data, setData, post, put, errors } = useForm({

        password: auth.user.password || "",
        confirm_password: auth.user.password || "",

    })
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        Inertia.post(`/update_password/${auth.user.id}`, {
            full_name: auth.user.full_name,
            email: auth.user.email,
            password: data.password,
            confirm_password: data.confirm_password,

        },
        );
    }

    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>
            <div className="w-full h-full  flex flex-col items-center">
                <h1 className="text-blue mt-4 text-4xl font-bold mb-4">
                    Ubah Password
                </h1>
                <div className="md:w-1/3 mini:w-3/4 bg-white rounded-md mb-8 p-6 mt-6 border-none drop-shadow-md">
                    <form onSubmit={onSubmitHandler}>
                        <div className="w-full gap-4 flex md:flex-row mini:flex-col mini:text-center md:text-left  ">

                            <div className="md:w-full mini:w-full h-full">
                                <label htmlFor="nama" className="text-black font-medium ml-4 mb-44">New Password</label>
                                <div className="mb-2">

                                </div>
                                <input type="password" name="nama" onChange={e => setData('password', e.target.value)}
                                    className=" border-1 focus:outline-none border-none focus:border-none focus:ring-0 mb-14 font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                />

                                <label htmlFor="email" className="text-black font-medium ml-4 ">Confirm Password</label>
                                <div className="mb-2">

                                </div>
                                <input type="password" name="confirm_password" onChange={e => setData('confirm_password', e.target.value)}
                                    className=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                />


                            </div>


                        </div>
                        {props.errors.password && (
                                <div className="text-red-400 font-semibold mt-4 text-center">
                                    <h1>
                                        {props.errors.password}
                                    </h1>
                                </div>
                            )}
                         {props.errors.confirm_password && (
                                <div className="text-red-400 font-semibold mt-4 text-center">
                                    <h1>
                                        {props.errors.confirm_password}
                                    </h1>
                                </div>
                            )}

                        <div className="w-full mt-4  rounded-2x flex flex-row justify-center">
                            <button type="submit"
                                className="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-bluehover  transition delay-50 text-md "
                            >

                                Simpan

                            </button>

                        </div>
                    </form>

                </div>


            </div>
            <Footer />
        </div>
    )
}
