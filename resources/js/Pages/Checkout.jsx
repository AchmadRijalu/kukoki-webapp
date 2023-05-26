import React, {useEffect} from "react"
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import RencanaDateCard from "@/Components/RencanaDateCard";
import PembayaranCard from "@/Components/PembayaranCard";
import PembayaranRincian from "@/Components/PembayaranRincian";
import RencanaCard from "@/Components/RencanaCard";

export default function Checkout(props) {
    console.log(props)
    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        // const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const midtransScriptUrl = 'https://app.midtrans.com/snap/snap.js';
        //change this according to your client-key
        // const myMidtransClientKey = 'SB-Mid-client-RMX1WuwX6hEjyTRn';
        const myMidtransClientKey = 'Mid-client-8Vj-1PdyBvzrwCJJ';

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

    let subtotal = 0
    for (const meal of props.cart) {
        subtotal += meal.meal.price
    }
    let ongkir = 10000
    let total = subtotal + ongkir

    if (props.errors.snapToken) {
        window.snap.pay(props.errors.snapToken, {
            onSuccess: function(result){
                Inertia.post(route('rencana.pembayaran.berhasil'))
            },
            onPending: function(result){
                /* You may add your own implementation here */
                // alert("wating your payment!"); console.log(result);
            },
            onError: function(result){
                /* You may add your own implementation here */
                // alert("payment failed!"); console.log(result);
            },
            onClose: function(){
                /* You may add your own implementation here */
                // alert('you closed the popup without finishing the payment');
            }
        })
        return (
            <div>
                <div className="bg-white w-full min-h-screen flex flex-col justify-between">
                    <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                        <HeaderNoBg />
                    </div>
                    <div className="w-full h-max mt-8 mb-14 px-8">
                        <div className="grid lg:grid-cols-2 mt-5 grid-cols-1">
                            <div className="flex flex-col lg:items-center">
                                <h1 className="text-blue self-center align-center md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4">
                                    Keranjang
                                </h1>

                                <div className="flex flex-col justify-center w-full lg:w-10/12">
                                    {props.cart.map((item, index) => {
                                        return (
                                            <RencanaCard
                                                key={item.id}
                                                date={item.date}
                                                item={item}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <PembayaranRincian ongkir={ongkir} subtotal={subtotal} total={total} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="bg-white w-full min-h-screen flex flex-col justify-between">
                    <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                        <HeaderNoBg />
                    </div>
                    <div className="w-full h-max mt-8 mb-14 px-3 md:px-8">
                        <div className="grid lg:grid-cols-2 mt-5 grid-cols-1">
                            <div className="flex flex-col lg:items-center">
                                <h1 className="text-blue self-center align-center md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4">
                                    Keranjang
                                </h1>

                                <div className="flex flex-col justify-center w-full lg:w-10/12">
                                    <div className="flex flex-col justify-start items-center mt-4">
                                        <div className="shadow-md px-5 pt-5 pb-2 rounded-xl w-full">
                                            {props.cart.map((item, index) => {
                                                return (
                                                    <RencanaCard
                                                        key={item.id}
                                                        date={item.date}
                                                        item={item}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PembayaranRincian ongkir={ongkir} subtotal={subtotal} total={total} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
