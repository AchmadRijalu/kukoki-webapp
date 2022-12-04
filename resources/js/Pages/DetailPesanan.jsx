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
            <div className="h-max mt-8 mb-12 lg:mx-64 md:mx-32 sm:mx-16 md:p-0 mini:p-3">
                <div className="flex flex-row justify-center items-center mb-8">
                    <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                        Detail Pesanan
                    </h1>
                </div>
                <div className="flex flex-row justify-between grid lg:grid-cols-11 md:grid-cols-1 sm:grid-cols-1 gap-8">

                    <div className="flex flex-auto flex-col col-span-6">
                        <div className="flex flex-row">
                            <h1 className="text-darkblue md:text-2xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                Informasi Produk
                            </h1>
                        </div>
                        {/* Card */}
                        <div className="flex flex-row mt-8 bg-white rounded-md p-6 border-none drop-shadow-md">
                            <div className="flex-4 flex-col">
                                <img src="img/recipe/recipe-2.png" alt="" className="w-24"/>
                            </div>
                            <div className="flex-1 ml-6 flex-col">
                                <div className="flex flex-row">
                                    <h1 className="text-blue md:text-2xl sm:text-2xl mini:text-2xl font-bold text-start">
                                        Pesto Pasta Chicken
                                    </h1>
                                </div>
                                <div className="flex flex-row justify-between mt-2">
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/people.svg" alt="" className="w-8"/>
                                        <p className="text-sm ml-2">4 orang</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/chef_hat.svg" alt="" className="w-8"/>
                                        <p className="text-sm ml-2">30 min</p>
                                    </div>
                                    <img src="img/icon/right-arrow.svg" alt="" className="w-8 ml-12"/>
                                </div>
                                <div className="flex flex-row mt-2">
                                    <h1 className="text-blue md:text-xl sm:text-xl mini:text-xl font-semibold text-start">
                                        Rp60.000
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-8 bg-white rounded-md p-6 border-none drop-shadow-md">
                            <div className="flex-4 flex-col">
                                <img src="img/recipe/recipe-2.png" alt="" className="w-24"/>
                            </div>
                            <div className="flex-1 ml-6 flex-col">
                                <div className="flex flex-row">
                                    <h1 className="text-blue md:text-2xl sm:text-2xl mini:text-2xl font-bold text-start">
                                        Pesto Pasta Chicken
                                    </h1>
                                </div>
                                <div className="flex flex-row justify-between mt-2">
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/people.svg" alt="" className="w-8"/>
                                        <p className="text-sm ml-2">4 orang</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <img src="img/icon/chef_hat.svg" alt="" className="w-8"/>
                                        <p className="text-sm ml-2">30 min</p>
                                    </div>
                                    <img src="img/icon/right-arrow.svg" alt="" className="w-8 ml-12"/>
                                </div>
                                <div className="flex flex-row mt-2">
                                    <h1 className="text-blue md:text-xl sm:text-xl mini:text-xl font-semibold text-start">
                                        Rp60.000
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/* Card End */}
                        <div className="flex flex-row mt-8">
                            <h1 className="text-darkblue md:text-2xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                Informasi Pengiriman
                            </h1>
                        </div>
                        <div className="flex flex-row mt-4">
                            <div className="flex flex-row items-center">
                                <img src="img/icon/person.svg" alt="" className="w-8"/>
                                <p className="text-base ml-4">Kenny Jinhiro</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4">
                            <div className="flex flex-row items-center">
                                <img src="img/icon/phone_outline.svg" alt="" className="w-8"/>
                                <p className="text-base ml-4">089537867595</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4 w-4/5">
                            <div className="flex flex-row items-center">
                                <img src="img/icon/location_outline.svg" alt="" className="w-8"/>
                                <p className="text-base ml-4">Jl. CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota Surabaya, Jawa Timur 60219</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col col-span-5 md:justify-center md:items-center sm:items-center sm:justify-center">
                        <div className="flex flex-col w-full bg-white rounded-md p-6 border-none drop-shadow-md">
                            <div className="flex flex-row">
                                <h1 className="text-gray md:text-base sm:text-base mini:text-base text-start">
                                    Status Pesanan
                                </h1>
                            </div>
                            <div className="flex flex-row">
                                <h1 className="text-darkblue md:text-2xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                    Selesai
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 w-full bg-white rounded-md p-6 border-none drop-shadow-md">
                            <div className="flex flex-row">
                                <h1 className="text-darkblue md:text-2xl sm:text-2xl mini:text-2xl font-semibold text-start">
                                    Rincian Pembayaran
                                </h1>
                            </div>
                            <div className="flex flex-col border-solid border-2 rounded-md border-gray mt-4 p-4">
                                <div className="flex flex-row justify-between">
                                    <p>Harga Makanan</p>
                                    <p>Rp90.000</p>
                                </div>
                                <div className="flex flex-row justify-between mt-4">
                                    <p>Ongkos Kirim</p>
                                    <p>Rp20.000</p>
                                </div>
                                
                                <div className="flex flex-row justify-between mt-4 text-darkblue text-xl font-semibold">
                                    <p>Total</p>
                                    <p>Rp20.000</p>
                                </div>
                            </div>
                            <div className="flex flex-row mt-4">
                                <h1 className="text-gray md:text-sm sm:text-sm mini:text-sm font-semibold text-start">
                                    Dikirimkan pada Tanggal
                                </h1>
                            </div>
                            <div className="flex flex-row mt-2">
                                <h1 className="text-darkblue md:text-xl sm:text-xl mini:text-xl font-semibold text-start">
                                    31 Desember 2022
                                </h1>
                            </div>
                            <div className="flex flex-row mt-4">
                                <h1 className="text-gray md:text-sm sm:text-sm mini:text-sm font-semibold text-start">
                                    Metode Pembayaran
                                </h1>
                            </div>
                            <div className="flex flex-row mt-2">
                                <h1 className="text-darkblue md:text-xl sm:text-xl mini:text-xl font-semibold text-start">
                                    BCA Virtual Account
                                </h1>
                            </div>
                        </div>
                        <button class="bg-blue font-semibold text-white py-4 px-4 rounded-md mt-4">
                            Beri Ulasan
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}