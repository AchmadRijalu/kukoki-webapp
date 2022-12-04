import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
export default function Pesanan(){
    return(
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>
            <div className="w-full h-max mt-8 mb-12 md:p-0 mini:p-3">
                <div className="flex flex-row justify-center items-center mb-8">
                    <h1 className="text-blue md:text-5xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                        Detail Pesanan
                    </h1>
                </div>
                <div className="flex flex-row justify-between mx-64">

                    <div className="flex flex-auto flex-col">
                        <div className="flex flex-row">
                            <h1 className="text-blue md:text-3xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                Informasi Produk
                            </h1>
                        </div>
                        {/* Card */}
                        <div className="flex flex-row mt-8 w-5/6 bg-white rounded-md p-6 border-none drop-shadow-md">
                            <div className="flex-4 flex-col">
                                <img src="img/recipe/recipe-2.png" alt="" className="w-32"/>
                            </div>
                            <div className="flex-1 ml-6 flex-col">
                                <div className="flex flex-row">
                                    <h1 className="text-blue md:text-3xl sm:text-2xl mini:text-2xl font-bold text-start">
                                        Pesto Pasta Chicken
                                    </h1>
                                </div>
                                <div className="flex flex-row mt-4 justify-between">
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/people.svg" alt="" className="w-10"/>
                                        <p className="text-sm ml-2">4 orang</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/chef_hat.svg" alt="" className="w-10"/>
                                        <p className="text-sm ml-2">30 min</p>
                                    </div>
                                    <img src="img/icon/right-arrow.svg" alt="" className="w-10 ml-12"/>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <h1 className="text-blue md:text-2xl sm:text-1xl mini:text-1xl font-semibold text-start">
                                        Rp60.000
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-8 w-5/6 bg-white rounded-md p-6 border-none drop-shadow-md">
                            <div className="flex-4 flex-col">
                                <img src="img/recipe/recipe-2.png" alt="" className="w-32"/>
                            </div>
                            <div className="flex-1 ml-6 flex-col">
                                <div className="flex flex-row">
                                    <h1 className="text-blue md:text-3xl sm:text-2xl mini:text-2xl font-bold text-start">
                                        Pesto Pasta Chicken
                                    </h1>
                                </div>
                                <div className="flex flex-row mt-4 justify-between">
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/people.svg" alt="" className="w-10"/>
                                        <p className="text-sm ml-2">4 orang</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/chef_hat.svg" alt="" className="w-10"/>
                                        <p className="text-sm ml-2">30 min</p>
                                    </div>
                                    <img src="img/icon/right-arrow.svg" alt="" className="w-10 ml-12"/>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <h1 className="text-blue md:text-2xl sm:text-1xl mini:text-1xl font-semibold text-start">
                                        Rp60.000
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/* Card End */}
                        <div className="flex flex-row mt-8">
                            <h1 className="text-blue md:text-3xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                Informasi Pengiriman
                            </h1>
                        </div>
                        <div className="flex flex-row mt-4">
                            <div className="flex flex-row items-center">
                                <img src="img/icon/person.svg" alt="" className="w-10"/>
                                <p className="text-lg ml-4">Kenny Jinhiro</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4">
                            <div className="flex flex-row items-center">
                                <img src="img/icon/phone_outline.svg" alt="" className="w-10"/>
                                <p className="text-lg ml-4">089537867595</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4">
                            <div className="flex flex-row items-center">
                                <img src="img/icon/location_outline.svg" alt="" className="w-10"/>
                                <p className="text-lg ml-4">Jl. CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota Surabaya, Jawa Timur 60219</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-auto flex-col">
                        <div className="flex flex-col mt-8 w-full bg-white rounded-md p-6 border-none drop-shadow-md">
                            <div className="flex flex-row">
                                <h1 className="text-gray md:text-2xl sm:text-2xl mini:text-2xl text-start">
                                    Status Pesanan
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-blue md:text-3xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                    Selesai
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col mt-8 w-full bg-white rounded-md p-6 border-none drop-shadow-md">
                            <h1 className="text-blue md:text-3xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                Rincian Pembayaran
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}