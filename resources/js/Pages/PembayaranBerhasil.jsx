import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";

export default function PembayaranBerhasil() {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>
            <div className="w-full h-max mt-12 mb-14">
                <div className="flex flex-col  mini:justify-center mini:items-center p-5">
                    <h1 className="text-blue md:text-2xl sm:text-3xl mini:text-3xl font-bold mb-4">
                        Pembayaran Berhasil
                    </h1>
                    <img className="mt-6" src="img/icon/success.svg" />
                    <h2 className="text-xl mt-8 font-medium">
                        2 Oktober 2022, 16:40
                    </h2>
                    <div className="flex flex-col items-center mt-4 text-darkblue">
                        <h3 className="text-xl font-bold">Total</h3>
                        <div className="font-bold">
                            <span className="text-xl">Rp</span>
                            <span className="text-2xl align-center">
                                110.000
                            </span>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <img
                            className="w-3/12 mr-4"
                            src="img/icon/ovo.svg"
                        ></img>
                        <h1 className="text-xl font-semibold">
                            0821*****4821
                        </h1>
                    </div>
                    <div className="bg-blue p-5 sm:px-10 mt-6 rounded-md cursor-pointer sm:w-fit w-full">
                        <h1 className="text-white text-center">
                            Lanjutkan Pembayaran
                        </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
