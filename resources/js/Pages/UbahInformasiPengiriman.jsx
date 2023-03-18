import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import { Inertia } from '@inertiajs/inertia'
import HeaderNoBg from "@/Components/HeaderNoBg";
import { useForm ,usePage} from '@inertiajs/inertia-react'

export default function UbahInformasiPengiriman(props) {
    const { data, setData, post, processing, errors } = useForm({
        provinsi: props.user.province || "",
        kota: props.user.city || "",
        kecamatan: props.user.ward || "",
        kelurahan: props.user.district || "",
        alamatlengkap: props.user.address || "",
        nomortelepon: props.user.phone || "",
    })
    const { auth } = usePage().props

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        Inertia.post(`/update_informasi_pengiriman/${auth.user.id}`, {
            province: data.provinsi,
            city: data.kota,
            ward: data.kecamatan,
            district: data.kelurahan,
            address: data.alamatlengkap,
            phone: data.nomortelepon,



        },

        );
    }

    console.log(data.provinsi)


    return (
        <div>
            <>
                <div className="bg-white w-full min-h-screen flex flex-col justify-between">
                    <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                        <HeaderNoBg />
                    </div>
                    <div className="w-full h-max mt-8 mb-12 p-10">

                        <div className="  flex flex-col justify-center items-center">
                            <h1 className="text-blue text-center md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4">
                                Informasi Pengiriman
                            </h1>


                            <div className="w-full  flex flex-col items-center">
                                <div className="w-3/2 bg-white rounded-md p-6 mt-6 border-none drop-shadow-md">
                                    <form onSubmit={onSubmitHandler}>
                                        <div className="w-full gap-4 flex sm:flex-row mini:flex-col ">
                                            <div className="sm:w-1/2 mini:w-full">
                                                <label htmlFor="provinsi" className="text-black font-medium ml-4 mb-44">Provinsi</label>
                                                <div className="mb-2">

                                                </div>
                                                <input type="text" name="provinsi" onChange={e => setData('provinsi', e.target.value)} value={data.provinsi}
                                                    className=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                                />

                                                <label htmlFor="kota" className="text-black font-medium ml-4 ">Kota</label>
                                                <div className="mb-2">

                                                </div>
                                                <input type="text" name="kota" onChange={e => setData('kota', e.target.value)} value={data.kota}
                                                    className=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                                />

                                                <label htmlFor="kecamatan" className="text-black font-medium ml-4 ">Kecamatan</label>
                                                <div className="mb-2">

                                                </div>
                                                <input type="text" name="kecamatan" onChange={e => setData('kecamatan', e.target.value)} value={data.kecamatan}
                                                    className=" border-1  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                                />
                                            </div>
                                            {/* baris kedua */}
                                            <div className="sm:w-1/2 mini:w-full">
                                                <label htmlFor="kelurahan" className="text-black font-medium ml-4 mb-44">Kelurahan</label>
                                                <div className="mb-2">

                                                </div>
                                                <input type="text" name="kelurahan" onChange={e => setData('kelurahan', e.target.value)} value={data.kelurahan}
                                                    className=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                                />
                                                <label htmlFor="email" className="text-black font-medium ml-4 mb-44">Alamat Lengkap</label>
                                                <div className="mb-2">

                                                </div>
                                                <input type="text" name="alamatlengkap" onChange={e => setData('alamatlengkap', e.target.value)} value={data.alamatlengkap}
                                                    className=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                                />

                                                <label htmlFor="nomortelepon" className="text-black font-medium ml-4 mb-44">Nomor Telepon</label>
                                                <div className="mb-2">

                                                </div>
                                                <input type="number" name="nomortelepon" onChange={e => setData('nomortelepon', e.target.value)} value={data.nomortelepon}
                                                    className=" border-1  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full mt-8  rounded-2x flex flex-row justify-center">
                                            <button type="submit"
                                                className="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-bluehover  transition delay-50 text-md "
                                            >

                                                Simpan

                                            </button>

                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </>
        </div>
    )
}
