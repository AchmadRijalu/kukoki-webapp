import React, {useEffect} from "react"
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import RencanaDateCard from "@/Components/RencanaDateCard";
import PembayaranCard from "@/Components/PembayaranCard";
import PembayaranRincian from "@/Components/PembayaranRincian";
import midtransClient from "midtrans-client";

export default function Checkout(props) {
    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        //change this according to your client-key
        const myMidtransClientKey = 'SB-Mid-client-RMX1WuwX6hEjyTRn';

        let scriptTag = document.createElement('script');
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute('data-client-key', myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);

    if (props.snapToken) {
        window.snap.pay(props.snapToken)
    } else {
        return (
            <div>
                <div className="bg-white w-full min-h-screen flex flex-col justify-between">
                    <div className="bg-blue-bg bg-cover bg-no-repeat">
                        <HeaderNoBg />
                    </div>
                    <div className="w-full h-max mt-8 mb-14 px-8">
                        <div className="grid lg:grid-cols-2 mt-5 grid-cols-1">
                            <div className="flex flex-col lg:items-center">
                                <h1 className="text-blue self-center align-center md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4">
                                    Pilih Metode Pembayaran
                                </h1>

                                <h4 className="self-center lg:self-center align-center text-blue text-l font-bold">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </h4>
                                <div className="flex flex-col justify-center w-full lg:w-10/12 mt-5">
                                    <PembayaranCard />
                                    <PembayaranCard />
                                    <PembayaranCard />
                                    <PembayaranCard />
                                </div>
                            </div>
                            <PembayaranRincian />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
