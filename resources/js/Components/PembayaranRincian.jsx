import React from "react";
import {Inertia} from "@inertiajs/inertia";

export default function PembayaranRincian() {

    function handleCheckout() {
        Inertia.post(route('rencana.checkout.post'))
    }

    return (
        <div className="flex flex-col justify-start items-center mt-4 ">
            <div className="shadow-md p-5 rounded-xl w-full lg:w-10/12">
                <h1 className="text-lg lg:text-md font-bold text-blue">
                    Rincian Pembayaran
                </h1>
                <div className="border-gray border rounded mt-2">
                    <div className="mx-2 my-2 flex">
                        <h1 className="text-md lg:text-sm mr-auto">Harga Makanan</h1>
                        <h1 className="text-md lg:text-sm font-semibold">Rp90.000</h1>
                    </div>
                    <div className="mx-2 my-2 flex">
                        <h1 className="text-md lg:text-sm mr-auto">Ongkos Kirim</h1>
                        <h1 className="text-md lg:text-sm font-semibold">Rp20.000</h1>
                    </div>
                    <hr className="mx-3 mt-5"></hr>
                    <div className="mx-2 my-2 flex">
                        <h1 className="text-lg lg:text-md mr-auto font-bold text-blue">Total</h1>
                        <h1 className="text-lg lg:text-md font-bold text-blue">Rp110.000</h1>
                    </div>
                </div>
                <h1 className="text-sm lg:text-xs font-semibold text-rencanasend mt-3">
                    Dikirimkan pada Tanggal
                </h1>
                <h1 className="text-xl font-semibold font-bold text-blue mt-1">
                    31 Desember 2022
                </h1>

                <h1 className="text-sm lg:text-xs font-semibold text-rencanasend mt-3">
                    Metode Pembayaran
                </h1>
                <h1 className="text-xl font-semibold font-bold text-blue mt-1">
                BCA Virtual Account
                </h1>
            </div>
            <div onClick={handleCheckout} className="bg-blue p-5 mt-5 rounded-md cursor-pointer w-full lg:w-10/12">
                <h1 className="text-white text-center">Checkout</h1>
            </div>
        </div>
    );
}
