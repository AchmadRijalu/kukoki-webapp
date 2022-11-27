import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";

export default function LoginTry(props) {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between ">
            <div className="bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>

            <div className="w-full h-max mt-8 mb-12">

                <div className="  flex flex-col justify-center items-center">
                    <h1 className="text-blue text-4xl font-bold mb-4">
                        Login ke Kukoki
                    </h1>
                    <h4 className="text-blue text-l font-bold">
                        Masuk ke dalam akun yang telah anda daftarkan sebelumnya
                    </h4>
                    <div className="w-full  flex flex-col items-center">

                        <div className="w-1/3 bg-white rounded-md p-6 mt-6 border-none drop-shadow-md">
                            <form action="/" method="POST">

                                <div>
                                    <label for="email" class="text-black font-medium ml-4 mb-44">Email</label>
                                    <div className="mb-2">
                                    
                                    </div>
                                    <input type="text" name="email"
                                        class=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                    />

                                    <label for="password" class="text-black font-medium ml-4 mb-44">Password</label>
                                    <div className="mb-2">
                                    
                                    </div>
                                    <input type="password" name="password"
                                        class=" border-1   border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                    />
                                    

                                    <div className="w-full mt-8 font-medium underline flex flex-row  justify-center cursor-pointer">
                                        <h6>
                                            Lupa Password?
                                        </h6>
                                    </div>
                                    <div class="w-full mt-8  rounded-2x flex flex-row justify-center">
                                        <button type=""
                                            class="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-blue  transition delay-50 text-md "
                                        >

                                            Masuk

                                        </button>
                                    </div>
                                    <div className="w-full mt-6 font-medium  flex flex-row  justify-center cursor-pointer">
                                        <h6>
                                            Belum mempunyai akun?
                                        </h6>
                                        <h6 className="ml-2 underline">
                                            <Link href="Register">
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

    );

}

