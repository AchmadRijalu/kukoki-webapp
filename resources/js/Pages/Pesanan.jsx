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
            <div className="h-max mt-8 mb-12 lg:mx-36 sm:mx-8 md:mx-8 md:p-0 mini:p-3">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                            Pesanan Saya
                        </h1>
                        <h3 className="text-darkblue md:text-1xl sm:text-1xl mini:text-1xl text-l font-bold text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h3>
                    </div>
                </div>
                {/* Pengiriman Selanjutnya */}
                <div className="flex flex-row mt-12">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row">
                            <h2 className="text-blue md:text-2xl sm:text-3xl mini:text-3xl font-bold mb-8">
                                Pengiriman Selanjutnya
                            </h2>
                        </div>
                        <div className="flex flex-row w-full justify-between grid lg:grid-cols-3 grid-cols-1 gap-12">
                            {/* One Card */}
                            <div className="bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-darkblue font-bold items-start text-sm">Dalam Perjalanan</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-10"/>
                                    </div>
                                    <div className="ml-4 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                {/* <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div> */}
                            </div>

                            <div className="bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-darkblue font-bold items-start text-sm">Menunggu Kurir</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-10"/>
                                    </div>
                                    <div className="ml-4 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                {/* <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div> */}
                            </div>

                            <div className="bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-darkblue font-bold items-start text-sm">Selesai</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-10"/>
                                    </div>
                                    <div className="ml-4 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                {/* <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>

                {/* Riwayat Transaksi */}
                <div className="flex flex-row my-24">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row">
                            <h2 className="text-blue md:text-2xl sm:text-2xl mini:text-2xl font-bold mb-8">
                                Riwayat Transaksi
                            </h2>
                        </div>

                        <div className="flex flex-row w-full justify-between grid lg:grid-cols-3 grid-cols-1 gap-12">

                            <div className="bg-white rounded-md p-6 border-none drop-shadow-md">
                                <a href="/detail-pesanan" className="">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-darkblue font-bold items-start text-sm">Lihat Rincian</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-10"/>
                                    </div>
                                    <div className="ml-4 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                    </div>
                                </div>
                                {/* <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div> */}
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                                </a>
                            </div>

                            <div className="bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-darkblue font-bold items-start text-sm">Lihat Rincian</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-10"/>
                                    </div>
                                    <div className="ml-4 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                    </div>
                                </div>
                                {/* <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div> */}
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-darkblue font-bold items-start text-sm">Lihat Rincian</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-10"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-10"/>
                                    </div>
                                    <div className="ml-4 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                    </div>
                                </div>
                                {/* <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-8"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div> */}
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}

            </div>
            <Footer/>
        </div>
    );
}