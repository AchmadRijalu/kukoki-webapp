import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";

export default function Welcome(props) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen">
                {/* <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Registerr
                            </Link>
                        </>
                    )}
                </div> */}

                <div className="bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                    <div className="grid grid-cols-2 px-12 text-white">
                        <div className="flex items-center">
                            <div>
                                <h1 className="text-7xl font-bold leading-tight">
                                    Masak Tanpa <br /> Ribet!
                                </h1>
                                <h2 className="text-xl font-semibold mb-8">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime, quibusdam!
                                </h2>
                                <Link
                                    href=""
                                    className="text-darkblue bg-white py-3 px-10 font-semibold rounded-md hover:bg-gray-200 transition"
                                >
                                    Pesan Sekarang
                                </Link>
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
                    <div className="flex items-center flex-col">
                        <h1 className="text-center font-bold text-5xl text-blue my-5">
                            Temukan Meal Kit Favoritmu
                        </h1>
                        <h2 className="text-center font-semibold text-xl text-darkblue mb-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Non, quis?
                        </h2>
                        <Link
                            href=""
                            className="text-white my-5 bg-blue py-3 px-10 font-semibold rounded-md hover:bg-darkblue transition"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                </div>

                <div className="bg-blue-bg bg-cover bg-no-repeat flex justify-center text-white py-5">
                    <div>
                        <h1 className="text-center font-bold text-5xl my-5">
                            Bagaimana Cara Pesan
                        </h1>
                        <div className="md:grid grid-cols-3 gap-20 mt-5 md:px-0">
                            <div className="flex items-center flex-col p-5">
                                <img
                                    src="img/home/pilih_mealkit.svg"
                                    className="h-32"
                                    alt=""
                                />
                                <h2 className="text-center my-3 text-2xl font-semibold">
                                    Pilih Meal Kit
                                </h2>
                                <p className="text-center mb-3 px-10">
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
                                <p className="text-center mb-3 px-10">
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
                                <p className="text-center mb-3 px-10">
                                    Setelah melakukan pemesanan, meal kit akan
                                    dikirimkan pada tanggal yang telah dipilih.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="bg-darkblue">
                        <div className="flex justify-center">
                            <img src="img/home/gratis_ongkir.svg" alt="" />
                        </div>
                    </div>
                    <div className="px-10 flex items-center">
                        <div>
                            <h1 className="font-bold text-5xl text-blue">
                                Gratis Ongkir
                            </h1>
                            <p className="text-xl mb-5">
                                Dapatkan gratis ongkir untuk transaksi pertama
                                anda.
                            </p>
                            <Link
                                href=""
                                className="text-white bg-blue py-3 px-10 font-semibold rounded-md hover:bg-darkblue transition"
                            >
                                Pesan Sekarang
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="px-10 flex items-center">
                        <div>
                            <h1 className="font-bold text-5xl text-blue">
                                Meal Kit Sesuai <br />
                                Preferensi Anda
                            </h1>
                            <p className="text-xl mb-5">
                                Pilih preferensi meal kit untuk mendapatkan
                                rekomendasi sesuai keinginan anda.
                            </p>
                            <Link
                                href=""
                                className="text-white bg-blue py-3 px-10 font-semibold rounded-md hover:bg-darkblue transition"
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

                <Footer />
            </div>
        </>
    );
}
