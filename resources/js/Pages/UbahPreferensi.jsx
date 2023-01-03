import React, { useRef, useState, useEffect } from "react"
import { Inertia } from "@inertiajs/inertia"
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import { Link, Head, usePage, useForm } from "@inertiajs/inertia-react";
import PreferensiCard from "@/Components/PreferensiCard";

export default function UbahPreferensi(props) {


    //checking if the user are from edit profile or register page
    //if true will print without '/'
    let categoryList = []

    const [UbahData, setUbahData] = useState(true);


    let catar = ([
        { id: props.categories[0].id, name: props.categories[0].name, image: props.categories[0].image, selected: false },
        { id: props.categories[1].id, name: props.categories[1].name, image: props.categories[1].image, selected: false },
        { id: props.categories[2].id, name: props.categories[2].name, image: props.categories[2].image, selected: false },
        { id: props.categories[3].id, name: props.categories[3].name, image: props.categories[3].image, selected: false },
        { id: props.categories[4].id, name: props.categories[4].name, image: props.categories[4].image, selected: false },
        { id: props.categories[5].id, name: props.categories[5].name, image: props.categories[5].image, selected: false },
        { id: props.categories[6].id, name: props.categories[6].name, image: props.categories[6].image, selected: false },
        { id: props.categories[7].id, name: props.categories[7].name, image: props.categories[7].image, selected: false },
    ]);


    for(const cat of catar){
        for(const cate of props.catuser){
            if(cat.id == cate.id){
                cat.selected = true
                categoryList.push(cat.id)


            }
        }
    }
    const [categories, setcategory] = useState(catar);
    const [categoryListFix, setCategories] = useState(categoryList);


    const categoryClicked = (e) => {

        setcategory(

            categories.map(cat => {

                if (cat.id == e.currentTarget.getAttribute("dataid")) {

                        var index = categoryListFix.indexOf(cat.id);
                        categoryListFix.indexOf(cat.id) === -1 ? categoryListFix.push(cat.id) : categoryListFix.splice(index, 1);;

                        return { ...cat, selected: !cat.selected }


                } else {
                    categoryListFix.filter(a => a.id !== cat.id)
                    return cat
                }
            })

        );

    }
    const { data, setData, post, processing, errors } = useForm({
        category: categoryListFix

    })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        Inertia.post(`/update_preferensi/${props.user.id}`, {
            category: data.category

        },
        )

    }
    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>
            <div className="w-full h-max mt-4 mb-12 p-6">
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

                    <div className=" h-full  grid md:grid-cols-4 mini:grid-cols-2 md:gap-8 mini:gap-6 content-center ">

                        {categories.map((category, i) =>
                            <>



                                <PreferensiCard key={i} UbahData={UbahData} id={category.id} name={category.name} image={category.image} dataid={category.id} clicking={categoryClicked} dataselect={category.selected}
                                />

                            </>
                        )}
                    </div>
                    <form className=" md:w-1/4 mini:w-3/4 mt-10  rounded-2x flex flex-row justify-center" onSubmit={onSubmitHandler}>

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
    )
}
