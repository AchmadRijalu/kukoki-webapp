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
                </div>
            </div>
            <Footer/>
        </div>
    );
}