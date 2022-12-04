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
                <div className="flex flex-col justify-center items-center mb-8 mx-64">
                    <div className="flex flex-row">
                        <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                            Beri Ulasan
                        </h1>
                    </div>
                    <div className="flex flex-row">
                        <h3 className="text-blue md:text-1xl sm:text-1xl mini:text-1xl text-l font-bold text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h3>
                    </div>
                    <div className="flex flex-row mt-8 w-5/6 bg-white rounded-md p-6 border-none drop-shadow-md justify-between">
                        <div className="flex flex-row items-center">
                            <img src="img/recipe/recipe-2.png" alt="" className="w-24"/>
                            <p className="text-2xl ml-8 text-darkblue font-bold">Pesto Pasta Chicken</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-2xl ml-8 text-blue font-bold">V</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 w-5/6 bg-white rounded-md p-4 border-none drop-shadow-md justify-between">
                        <div className="flex flex-row mt-2 justify-between items-center mx-2">
                            <div className="flex w-5/6">
                                <p className="text-xl text-darkblue font-bold">Nilai Makanan</p>
                            </div>
                            <div className="flex w-1/6 justify-end">
                                <img src="img/icon/unfilled_star.svg" alt="" className="w-4 mr-2"/>
                                <img src="img/icon/unfilled_star.svg" alt="" className="w-4 mr-2"/>
                                <img src="img/icon/unfilled_star.svg" alt="" className="w-4 mr-2"/>
                                <img src="img/icon/unfilled_star.svg" alt="" className="w-4 mr-2"/>
                                <img src="img/icon/unfilled_star.svg" alt="" className="w-4"/>
                            </div>
                        </div>
                        <div className="flex flex-row mt-2">
                            <textarea id="message" rows="12" class="mt-2 mx-2 block w-full text-sm text-white bg-gray rounded-lg placeholder-white border-none" placeholder="Halo! Bagaimana menurutmu tentang Pesto Pasta Chicken?"></textarea>
                        </div>
                        <button class="bg-blue font-semibold text-white py-3 px-4 rounded-md mt-4 mx-2">
                            Bagikan Ulasan
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}