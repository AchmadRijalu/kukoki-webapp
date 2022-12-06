import React, { useState } from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import { Inertia } from '@inertiajs/inertia';


export default function LoginTry(props) {


    const { errors } = usePage().props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //storeLogin
    const storeLogin = async (e) => {
        e.preventDefault();

        Inertia.post('/login', {

            //data
            email: email,
            password: password,
        });
    }

    return (
        <>
            <div className="bg-white w-full min-h-screen flex flex-col justify-between ">
                <div className="bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                </div>

                <div className="w-full h-max mt-8 mb-12 md:p-0 mini:p-3">

                    <div className="  flex flex-col mini:justify-center mini:items-center">
                        <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                            Login ke Kukoki
                        </h1>
                        <h4 className="text-blue text-l font-bold text-center">
                            Masuk ke dalam akun yang telah anda daftarkan sebelumnya
                        </h4>
                        <div className="w-full  flex flex-col items-center">

                            <div className="lg:w-1/3 bg-white rounded-md p-6 mt-6 border-none drop-shadow-md">
                                <form onSubmit={storeLogin}>

                                    <div>

                                        <label htmlFor="email" className="text-black font-medium ml-4 mb-44">Email</label>
                                        <div className="mb-2">
                                        </div>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" className="border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke" />


                                        <label htmlFor="password" className="text-black font-medium ml-4 mb-44">Password</label>
                                        <div className="mb-2">

                                        </div>

                                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="border-1 border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke" />

                                        {errors.email && (
                                            <div className="text-red-400 font-semibold mt-4 text-center">
                                                {errors.email}
                                            </div>
                                        )}
                                        {errors.password && (
                                            <div className="text-red-400 font-semibold mt-4 text-center">
                                                {errors.password}
                                            </div>
                                        )}

                                        <div className="w-full mt-8 font-medium underline flex flex-row  justify-center cursor-pointer">
                                            <h6>
                                                Lupa Password?
                                            </h6>
                                        </div>
                                        <div className="w-full mt-8  rounded-2x flex flex-row justify-center">
                                            <button className="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-blue  transition delay-50 text-md " type="submit">
                                                Masuk
                                            </button>
                                        </div>

                                        <div className="w-full mt-6 font-medium  flex lg:flex-row mini:flex-col  lg:justify-center mini:items-center  cursor-pointer">
                                            <h6>
                                                Belum mempunyai akun?
                                            </h6>
                                            <h6 className="lg:ml-2 lg:mt-0 mini:mt-4 mini:ml-0  underline">
                                                <Link href={route('register_account.index')}>
                                                    <h2>Daftar disini</h2>
                                                </Link>

                                            </h6>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />



            </div>
        </>


    );

}

