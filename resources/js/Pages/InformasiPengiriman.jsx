import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";

export default function InformasiPengiriman() {


    

    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>
            <div className="w-full h-max mt-8 mb-12">

                <div className="  flex flex-col justify-center items-center">
                    <h1 className="text-blue text-4xl font-bold mb-4">
                        Informasi Pengiriman
                    </h1>

                    <div className="w-full  flex flex-col items-center">
                        <div className="w-3/2 bg-white rounded-md p-6 mt-6 border-none drop-shadow-md">
                            <form action="" method="POST" className="">
                                <div className="w-full gap-4 flex flex-row ">
                                    <div className="w-1/2 ">
                                        <label for="provinsi" class="text-black font-medium ml-4 mb-44">Provinsi</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="provinsi"
                                            class=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />

                                        <label for="kota" class="text-black font-medium ml-4 ">Kota</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="kota"
                                            class=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />

                                        <label for="kecamatan" class="text-black font-medium ml-4 ">Kecamatan</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="kecamatan"
                                            class=" border-1  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />
                                    </div>
                                    {/* baris kedua */}
                                    <div className="w-1/2 ">
                                        <label for="kelurahan" class="text-black font-medium ml-4 mb-44">Kelurahan</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="kelurahan"
                                            class=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />
                                        <label for="email" class="text-black font-medium ml-4 mb-44">Alamat Lengkap</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="alamatlengkap"
                                            class=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />

                                        <label for="nomortelepon" class="text-black font-medium ml-4 mb-44">Nomor Telepon</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="number" name="nomortelepon"
                                            class=" border-1  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />
                                    </div>
                                </div>


                                <div class="w-full mt-8  rounded-2x flex flex-row justify-center">
                                    {/* <button type=""
                                        class="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-blue  transition delay-50 text-md "
                                    >

                                        Simpan

                                    </button> */}
                                    <Link href="Preferensi">Preferensi</Link>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>







            </div>
            <Footer />
        </div>
    );
}