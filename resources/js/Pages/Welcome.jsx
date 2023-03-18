import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import { Inertia } from "@inertiajs/inertia";
import MenuCard from "@/Components/MenuCard";


export default function Welcome(props) {



    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen">
                <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                    <div className="md:grid grid-cols-2 px-8 lg:px-12 text-white">
                        <div className="flex items-center">
                            <div>
                                <h1 className="text-center md:text-left text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                    Masak Tanpa <br /> Ribet!
                                </h1>
                                <h2 className="text-center md:text-left text-lg lg:text-xl font-semibold mb-3 lg:my-5">Masak di rumah tapi ga mau ribet? Dapatkan berbagai bumbu, bahan, dan resep makanan yang siap untuk dimasak!
                                </h2>
                                <div className="flex justify-center md:justify-start mb-5 md:mb-0" onClick={(e) => handleLoginPage}>
                                    <Link
                                        href= {route("menu.index")}
                                        className="text-darkblue bg-white py-2 lg:py-3 px-5 lg:px-10 font-semibold rounded-md hover:bg-gray-200 transition"
                                    >
                                        Pesan Sekarang
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="img/home/jumbotron.svg"
                                alt=""
                                className="w-5/6"
                            />
                        </div>
                    </div>
                    <div className="h-1 bg-brown"></div>
                </div>

                <div className="flex justify-center">
                    <div className="flex items-center flex-col px-8">
                        <h1 className="text-center font-bold text-4xl lg:text-5xl text-blue my-5">
                            Temukan Meal Kit Favoritmu
                        </h1>
                        <h2 className="text-center font-semibold text-lg lg:text-xl text-darkblue mb-5">
                            Semua meal kit dilengkapi dengan bahan-bahan segar langsung dari petani lokal!
                        </h2>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 my-5">
                            {props.meals.map((meal, i) =>
                                <MenuCard meal={meal} key={i}></MenuCard>
                            )}
                        </div>
                        <Link
                            href="/menu"
                            className="text-white my-5 bg-blue py-2 lg:py-3 px-5 lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                </div>

                <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat flex justify-center text-white py-5">
                    <div>
                        <h1 className="text-center font-bold text-4xl lg:text-5xl my-5">
                            Bagaimana Cara Pesan
                        </h1>
                        <div className="md:grid grid-cols-3 lg:gap-20 mt-5 md:px-0">
                            <div className="flex items-center flex-col p-5">
                                <img
                                    src="img/home/pilih_mealkit.svg"
                                    className="h-32"
                                    alt=""
                                />
                                <h2 className="text-center my-3 text-2xl font-semibold">
                                    Pilih Meal Kit
                                </h2>
                                <p className="text-center mb-3 px-3 lg:px-10">
                                    Kukoki menyediakan banyak variasi meal kit
                                    yang siap untuk disajikan. Pilih meal kit
                                    sesuai keinginan anda
                                </p>
                            </div>
                            <div className="flex items-center flex-col p-5">
                                <img
                                    src="img/home/pesan.svg"
                                    className="h-32"
                                    alt=""
                                />
                                <h2 className="text-center my-3 text-2xl font-semibold">
                                    Pesan
                                </h2>
                                <p className="text-center mb-3 px-3 lg:px-10">
                                    Pesan meal kit sesuai keinginan. Kukoki akan
                                    menyiapkan meal kit pesanan anda
                                </p>
                            </div>
                            <div className="flex items-center flex-col p-5">
                                <img
                                    src="img/home/pengiriman.svg"
                                    className="h-32"
                                    alt=""
                                />
                                <h2 className="text-center my-3 text-2xl font-semibold">
                                    Pengiriman
                                </h2>
                                <p className="text-center mb-3 px-3 lg:px-10">
                                    Setelah melakukan pemesanan, meal kit akan
                                    dikirimkan pada tanggal yang telah dipilih.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:grid grid-cols-2">
                    <div className="bg-darkblue">
                        <div className="flex justify-center">
                            <img src="img/home/gratis_ongkir.svg" alt="" />
                        </div>
                    </div>
                    <div className="py-16 px-8 md:px-10 flex items-center justify-center md:justify-start">
                        <div>
                            <h1 className="text-center md:text-left font-bold text-4xl lg:text-5xl text-blue">
                                Gratis Ongkir
                            </h1>
                            <p className="text-center md:text-left text-lg lg:text-xl my-3">
                                Dapatkan gratis ongkir untuk transaksi pertama
                                anda.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <Link
                                    href={route("menu.index")}
                                    className="text-white bg-blue py-2 lg:py-3 px-5 lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
                                >
                                    Pesan Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-2">
                    <div className="px-10 flex items-center">
                        <div>
                            <h1 className="font-bold text-4xl lg:text-5xl text-blue">
                                Meal Kit Sesuai <br />
                                Preferensi Anda
                            </h1>
                            <p className="text-lg lg:text-xl mt-3 mb-6">
                                Pilih preferensi meal kit untuk mendapatkan
                                rekomendasi sesuai keinginan anda.
                            </p>
                            <Link
                                href="/profil"
                                className="text-white bg-blue py-2 lg:py-3 px-5 lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
                            >
                                Atur Preferensi
                            </Link>
                        </div>
                    </div>
                    <div className="bg-darkblue">
                        <div className="flex justify-center">
                            <img src="img/home/mealkit_preferensi.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="bg-darkblue">
                        <div className="flex justify-center">
                            <img src="img/home/mealkit_preferensi.svg" alt="" />
                        </div>
                    </div>
                    <div className="py-16 px-8 flex items-center">
                        <div>
                            <h1 className="text-center font-bold text-4xl lg:text-5xl text-blue">
                                Meal Kit Sesuai <br />
                                Preferensi Anda
                            </h1>
                            <p className="text-center text-lg lg:text-xl my-3">
                                Pilih preferensi meal kit untuk mendapatkan
                                rekomendasi sesuai keinginan anda.
                            </p>
                            <div className="flex justify-center">
                                <Link
                                    href=""
                                    className="text-white bg-blue py-2 lg:py-3 px-5 lg:px-10 font-semibold rounded-md hover:bg-darkblue transition"
                                >
                                    Atur Preferensi
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
