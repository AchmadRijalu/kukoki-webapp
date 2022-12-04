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
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                        Pesanan Saya
                    </h1>
                    <h4 className="text-blue text-l font-bold text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h4>
                </div>
            </div>
            <Footer/>
        </div>
    );
}