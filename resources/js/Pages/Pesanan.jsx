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
            <div className="h-max mt-8 mb-12 mx-64 md:p-0 mini:p-3">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-blue md:text-5xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                            Pesanan Saya
                        </h1>
                        <h3 className="text-blue md:text-2xl sm:text-2xl mini:text-2xl text-l font-bold text-center mt-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h3>
                    </div>
                </div>
                {/* Sedang Berlangsung */}
                <div className="flex flex-row mt-12">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row">
                            <h2 className="text-blue md:text-3xl sm:text-3xl mini:text-3xl font-bold mb-8">
                                Sedang Berlangsung
                            </h2>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                            <div className="w-1/3 bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-blue font-bold items-start text-sm">Dalam perjalanan</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-14"/>
                                    </div>
                                    <div className="ml-6 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                        <p className="items-start text-sm">Tuna Onigiri</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-4"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                            </div>
                            <div className="w-1/3 bg-white rounded-md p-6 border-none drop-shadow-md mx-4">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-blue font-bold items-start text-sm">Dalam perjalanan</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-14"/>
                                    </div>
                                    <div className="ml-6 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                        <p className="items-start text-sm">Tuna Onigiri</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-4"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                            </div>
                            <div className="w-1/3 bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-blue font-bold items-start text-sm">Dalam perjalanan</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-14"/>
                                    </div>
                                    <div className="ml-6 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                        <p className="items-start text-sm">Tuna Onigiri</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-4"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Selesai */}
                <div className="flex flex-row my-12">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row">
                            <h2 className="text-blue md:text-3xl sm:text-3xl mini:text-3xl font-bold mb-8">
                                Selesai
                            </h2>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                            <div className="w-1/3 bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-blue font-bold items-start text-sm">Selesai</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-14"/>
                                    </div>
                                    <div className="ml-6 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                        <p className="items-start text-sm">Tuna Onigiri</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-4"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                            </div>
                            <div className="w-1/3 bg-white rounded-md p-6 border-none drop-shadow-md mx-4">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-blue font-bold items-start text-sm">Selesai</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-14"/>
                                    </div>
                                    <div className="ml-6 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                        <p className="items-start text-sm">Tuna Onigiri</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-4"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
                                <div className="flex justify-center flex-row w-full mt-6">
                                    <p className="text-sm align-middle m-1 font-bold">Rp</p>
                                    <p className="text-xl font-bold">160.000</p>
                                </div>
                            </div>
                            <div className="w-1/3 bg-white rounded-md p-6 border-none drop-shadow-md">
                                <div className="flex justify-between flex-row w-full">
                                    <p className="text-blue font-bold">3 Oktober 2022</p>
                                    <p className="text-blue font-bold items-start text-sm">Selesai</p>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <div class="grid grid-rows-2 grid-cols-2 gap-2">
                                        <img src="img/recipe/recipe-1.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-2.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-3.png" alt="" className="w-14"/>
                                        <img src="img/recipe/recipe-4.png" alt="" className="w-14"/>
                                    </div>
                                    <div className="ml-6 flex flex-col w-full h-full">
                                        <p className="items-start text-sm">Grilled Salmon</p>
                                        <p className="items-start text-sm">Nabe Veggie Udon</p>
                                        <p className="items-start text-sm">Pesto Pasta Chicken</p>
                                        <p className="items-start text-sm">Unagi Ramen</p>
                                        <p className="items-start text-sm">Tuna Onigiri</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-row w-full mt-6">
                                    <img src="img/icon/location.svg" alt="" className="w-4"/>
                                    <div className="ml-6">
                                        <p className="text-sm">CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219</p>
                                    </div>
                                </div>
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