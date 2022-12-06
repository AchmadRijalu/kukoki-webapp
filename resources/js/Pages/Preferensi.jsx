import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/inertia-react'
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import PreferensiCard from "@/Components/PreferensiCard";

export default function Preferensi(props) {



    const [categoryList, setCategories] = useState([]);

    const { data, setData, post, processing, errors } = useForm({
        name: props.name,
        email: props.email,
        password: props.password,
        provinsi: props.provinsi,
        kota: props.kota,
        kecamatan: props.kecamatan,
        kelurahan: props.kelurahan,
        alamatlengkap: props.alamatlengkap,
        nomortelepon: props.nomortelepon,
        category: categoryList

    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        Inertia.post(route('registerAccount.store'), data)

    }

    const [categories, setcategory] = useState([
        { id: props.categories[0].id, name: props.categories[0].name, image: props.categories[0].image, selected: false },
        { id: props.categories[1].id, name: props.categories[1].name, image: props.categories[1].image, selected: false },
        { id: props.categories[2].id, name: props.categories[2].name, image: props.categories[2].image, selected: false },
        { id: props.categories[3].id, name: props.categories[3].name, image: props.categories[3].image, selected: false },
        { id: props.categories[4].id, name: props.categories[4].name, image: props.categories[4].image, selected: false },
        { id: props.categories[5].id, name: props.categories[5].name, image: props.categories[5].image, selected: false },
        { id: props.categories[6].id, name: props.categories[6].name, image: props.categories[6].image, selected: false },
        { id: props.categories[7].id, name: props.categories[7].name, image: props.categories[7].image, selected: false },
    ]);

    Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    const categoryClicked = (e) => {

        setcategory(

            categories.map(cat => {
                if (cat.id == e.currentTarget.getAttribute("dataid")) {


                    var index = categoryList.indexOf(cat.id);
                    console.log(index);
                    categoryList.indexOf(cat.id) === -1 ? categoryList.push(cat.id): categoryList.splice(index, 1);;

                    //code test
                    // setCategories(
                    //     categoryList.filter(a =>
                    //         a.id !== cat.id
                    //     )
                    // );
                    console.log(categoryList)
                    //code test
                    // if (categoryList.indexOf(cat.id) !== -1) {
                    //     alert("Yes, the value exists!")
                    // }
                    return { ...cat, selected: !cat.selected }



                } else {
                    categoryList.filter(a => a.id !== cat.id)
                    return cat
                }
            })

            // categories.map((cat, i) =>
            //     cat.id == e.currentTarget.getAttribute("dataid") ? { ...cat, selected: !cat.selected }
            //         : cat
            // )
        );


    }


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

                    <div className=" h-full  grid md:grid-cols-4 mini:grid-cols-2 md:gap-8 mini:gap-4 content-center ">

                        {categories.map((category, i) =>
                            <>

                                <PreferensiCard arr={categoryList} key={i} id={category.id} name={category.name} image={category.image} dataid={category.id} clicking={categoryClicked} dataselect={category.selected} />


                            </>
                        )}
                    </div>
                    <form className=" w-1/4 mt-10  rounded-2x flex flex-row justify-center" onSubmit={onSubmitHandler}>

                        <input type="hidden" onChange={e => setData('category', categoryList.length)} value={categoryList} />
                        <div className="w-full ">
                            <button
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
    );
}