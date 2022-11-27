import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import PreferensiCard from "@/Components/PreferensiCard";

export default function Preferensi(props) {
    console.log(props);
    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>
            <div className="w-full h-max mt-4 mb-12">

                <div className="  flex flex-col justify-center items-center">
                    <h4 className="text-blue text-2xl font-bold mb-4">
                        Preferensi
                    </h4>
                    <h1 className="text-blue text-3xl font-bold">
                        Resep Seperti Apa Yang
                    </h1>
                    <h2 className="text-blue text-3xl font-bold">
                        Anda Sukai?
                    </h2>

                    <div className="flex flex-col mb-6 mt-6 text-gray-400 font-semibold">
                        <h6 >
                            Pilihlah jenis resep yang anda sukai. Anda tetap
                        </h6>
                        <h6>
                            memiliki akses ke semua resep yang tersedia.
                        </h6>
                    </div>

                    <div className=" h-full  grid grid-cols-4 gap-8 content-center ">

                        {props.categories.map((category, i) =>
                            <>
                                <PreferensiCard id={category.id} name={category.name} image={category.image} />

                            </>


                        )}

                    </div>
                    
                    <div class="w-1/4 mt-8  rounded-2x flex flex-row justify-center">
                        <button type="submit"
                            class="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-bluehover  transition delay-50 text-md "
                        >

                            Simpan

                        </button>

                    </div>
                </div>
                

            </div>
            <Footer />
        </div>
    );
}