import React from "react";
import {Link, Head} from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import RencanaCard from "@/Components/RencanaCard";

export default function Pesanan(props) {
    const formatter = new Intl.NumberFormat('de-DE');
    const options = {year: 'numeric', month: 'long', day: 'numeric'};

    for (const item of props.riwayat) {
        let total = 0
        for (const item2 of item.order_details) {
            total += item2.meal.price * (item2.portion / 2)
        }
        item['total'] = total;
    }

    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-green-bg bg-cover bg-no-repeat">
                <HeaderNoBg/>
            </div>
            <div className="h-max mt-8 mb-12 lg:mx-52 sm:mx-8 md:mx-8 md:p-0 mini:p-3">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-green md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                            Pesanan Saya
                        </h1>
                        <h4 className="text-darkgreen text-l font-semibold text-center mx-auto max-w-3xl">
                            Lihat status dari pesanan serta riwayat transaksi anda!
                        </h4>
                    </div>
                </div>
                {/* Pengiriman Selanjutnya */}
                <div className="flex flex-row mt-12">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row">
                            <h2 className="text-green md:text-2xl sm:text-3xl mini:text-3xl font-bold mb-8">
                                Pengiriman Selanjutnya
                            </h2>
                        </div>
                        {/* One Card */}
                        {props.pengiriman.length !== 0 ? (
                            <>
                                <div
                                    className="flex flex-row w-full justify-between grid lg:grid-cols-3 grid-cols-1 gap-12">
                                    {props.pengiriman.map((item, index) => {
                                        return (
                                            <div
                                                // className="bg-white rounded-md p-6 border-none shadow-lg hover:scale-[102%] transition">
                                                className="bg-white rounded-md p-6 border-none shadow-lg">
                                                <div className="flex justify-between flex-row w-full">
                                                    <p className="text-green font-bold">{new Date(item.date).toLocaleDateString("id-ID", options)}</p>
                                                    <p className="text-darkgreen font-bold items-start text-sm">Dalam
                                                        Perjalanan</p>
                                                </div>
                                                <div className="flex justify-start flex-row w-full mt-6">
                                                    <div className="grid grid-rows-2 grid-cols-2 gap-2">
                                                        {item.order_details.map((item2, index) => (
                                                            <img src={"img/menu/" + item2.meal.img_path} alt=""
                                                                 className="w-10"/>
                                                        ))}
                                                    </div>
                                                    <div className="ml-4 flex flex-col w-full h-full">
                                                        {item.order_details.map((item2, index) => (
                                                            <p className="items-start text-sm">{item2.meal.name}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex justify-start flex-row w-full mt-6">
                                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                                    <div className="ml-6">
                                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec.
                                                            Sambikerep,
                                                            Kota SBY, Jawa Timur 60219</p>
                                                    </div>
                                                </div>
                                                {/* <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div> */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        ) : (
                            <h4 className='text-center mx-auto font-bold text-darkgreen'>Belum ada pengiriman!</h4>
                        )
                        }
                    </div>
                </div>

                {/* Riwayat Transaksi */}
                <div className="flex flex-row my-24">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row">
                            <h2 className="text-green md:text-2xl sm:text-2xl mini:text-2xl font-bold mb-8">
                                Riwayat Transaksi
                            </h2>
                        </div>
                        {props.pengiriman.length !== 0 ? (
                            <>
                                <div
                                    className="flex flex-row w-full justify-between grid lg:grid-cols-3 grid-cols-1 gap-12">
                                    {props.riwayat.map((item, index) => {
                                        return (
                                            // <Link href=''
                                            <div href=''
                                                 className="bg-white rounded-md p-6 border-none shadow-lg">
                                                <div className="flex justify-between flex-row w-full">
                                                    <p className="text-green font-bold">{new Date(item.date).toLocaleDateString("id-ID", options)}</p>
                                                    {/*<p className="text-darkgreen font-bold items-start text-sm">3 Oktober 2022</p>*/}
                                                </div>
                                                <div className="flex justify-start flex-row w-full mt-2">
                                                    <div className="flex flex-col w-full h-full">
                                                        {item.order_details.map((item2, index) => (
                                                            <p className="items-start text-sm">{item2.meal.name}</p>
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-center flex-row items-end">
                                                        <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                                        <p className="text-3xl font-bold">{formatter.format(item.total)}</p>
                                                    </div>
                                                </div>
                                                {/* <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div> */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        ) : (
                            <h4 className='text-center mx-auto font-bold text-darkgreen'>Belum ada transaksi!</h4>
                        )
                        }
                    </div>
                </div>
                {/* Footer */}

            </div>
            <Footer/>
        </div>
    );
}
