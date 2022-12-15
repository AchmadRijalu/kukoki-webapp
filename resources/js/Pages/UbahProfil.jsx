import React, { useRef, useState, useEffect } from "react"
import { Inertia } from "@inertiajs/inertia"
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { useForm } from '@inertiajs/inertia-react'

export default function UbahProfil(props) {


    //open the React Hooks File Browser

    const ref = useRef()
    const handleClick = (e) => {
        ref.current.click()
    }


    //image handler
    const [selectedImage, setSelectedImage] = useState()

    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedImage) {
            setSelectedImage(undefined)

            return
        }

        const objectUrl = URL.createObjectURL(selectedImage)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedImage])

    const onSelectImage = e => {
        if (!e.target.files) {
            setSelectedImage(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedImage(e.target.files[0])

    }


    const { auth } = usePage().props


    const { data, setData, post, put, errors } = useForm({
        full_name: auth.user.full_name || "",
        email: auth.user.email || "",
        profile_picture: `/` + auth.user.profile_picture

    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        Inertia.post(`/update_profil/${auth.user.id}`, {
            full_name: data.full_name,
            email: data.email,
            profile_picture: selectedImage

        },
            {
                forceFormData: true
            }
        );
    }


    return (
        <div>
            <>
                <div className="bg-white w-full min-h-screen flex flex-col justify-between">
                    <div className="bg-blue-bg bg-cover bg-no-repeat">
                        <HeaderNoBg />
                    </div>
                    <div className="w-full h-full  flex flex-col items-center">
                        <h1 className="text-blue mt-4 text-4xl font-bold mb-4">
                            Profil
                        </h1>
                        <div className="md:w-1/2 mini:w-3/4 bg-white rounded-md mb-8 p-6 mt-6 border-none drop-shadow-md">
                            <form onSubmit={onSubmitHandler}>
                                <div className="w-full gap-4 flex md:flex-row mini:flex-col mini:text-center md:text-left  ">

                                    <div className="md:w-1/2 mini:w-full h-full">
                                        <label htmlFor="nama" className="text-black font-medium ml-4 mb-44">Nama</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="nama" onChange={e => setData('full_name', e.target.value)} value={data.full_name}
                                            className=" border-1 focus:outline-none border-none focus:border-none focus:ring-0 mb-14 font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />

                                        <label htmlFor="email" className="text-black font-medium ml-4 ">Email</label>
                                        <div className="mb-2">

                                        </div>
                                        <input type="text" name="email" onChange={e => setData('email', e.target.value)} value={data.email}
                                            className=" border-1 mb-6  focus:outline-none border-none focus:border-none focus:ring-0  font-medium rounded-md  w-full focus:shadow-outline   focus:ring-blue text-black bg-smoke"
                                        />
                                    </div>
                                    <div className="md:w-1/2 mini:w-full h-full">
                                        <label htmlFor="nama" className="text-black font-medium ml-4 mb-44">Foto Profil</label>
                                        <div className="mb-2">
                                        </div>

                                        <div className="w-full h-44 bg-smoke flex flex-col justify-center items-center cursor-pointer" onClick={handleClick}>
                                            {preview == null && auth.user.profile_picture != null &&
                                                <img src={`/` + auth.user.profile_picture} alt="" className="absolute h-24 w-24 object-cover cursor-pointer" />
                                            }
                                            {preview == null && auth.user.profile_picture == null &&
                                                <img src={preview == null ? "/img/icon-temp/noProfpic.svg" : preview} alt="" className="absolute h-24 w-24  cursor-pointer" />
                                            }
                                            {preview != null &&
                                                <img src={preview == null ? "/img/profile/anon.png" : preview} alt="" className="absolute h-24 w-24 object-cover cursor-pointer" />
                                            }
                                            <input type="hidden" value={`/` + auth.user.profile_picture} />
                                            <input ref={ref} type="file" accept="image/*" className="hidden" onChange={onSelectImage} />

                                        </div>



                                        {/* {progress && (
                                            <progress value={progress.percentage} max="100">
                                                {progress.percentage}%
                                            </progress>
                                        )} */}


                                    </div>

                                </div>
                                <div className="w-full mt-8  rounded-2x flex flex-row justify-center">

                                    <Link href="/UbahPassword" className="bg-red-600 w-full items-center h-14 outline-none rounded-xl text-center flex flex-col justify-center font-bold text-white  hover:bg-red-800  transition delay-50 text-md " method="get" data={{ id: auth.user.id }}>Reset Password</Link>

                                </div>
                                <div className="w-full mt-4  rounded-2x flex flex-row justify-center">
                                    <button type="submit"
                                        className="bg-blue w-full items-center h-14 outline-none rounded-xl font-bold text-white  hover:bg-bluehover  transition delay-50 text-md "
                                    >

                                        Simpan

                                    </button>

                                </div>
                            </form>

                        </div>


                    </div>
                    <Footer />
                </div>
            </>

        </div>
    )
}

