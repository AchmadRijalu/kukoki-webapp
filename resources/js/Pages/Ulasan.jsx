import React, { useState } from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import { useForm} from '@inertiajs/inertia-react';

export default function Pesanan(props){


    //TODO: Add a review onSubmit Form inside the useForm function
    const { data, setData, post, processing, errors } = useForm({
        user_id: props.user.id,
        meal_id: props.meal.id,
        comment: '',
        rating: 1
    })
    
    const stars = data.rating
    console.log(props);
    //TODO: Add a submit handler to controller endpoint
    const submitHandler = (e) => {
        e.preventDefault();


        console.log(data)
        Inertia.post(route('ulasan.store', props.meal.id), data)
        
        
    }

    //TODO: Add AUTH as props
    const {auth} = usePage().props;

    return(
        <div className="bg-white w-full min-h-screen flex flex-col justify-between">
            <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>
            <div className="lg:mx-64 md:mx-8 sm:mx-8 h-max mt-8 mb-12 md:p-0 mini:p-3">
                <div className="flex flex-col justify-center items-center mb-8">
                    <div className="flex flex-row">
                        <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                            Beri Ulasan
                        </h1>
                    </div>
                    <div className="flex flex-row">
                        <h3 className="text-blue md:text-1xl sm:text-1xl mini:text-1xl text-l font-bold text-center">
                            Berikan opini anda mengenai meal kit pesanan anda!
                        </h3>
                    </div>
                    <div className="flex flex-row mt-8 lg:w-5/6 bg-white rounded-md p-6 border-none drop-shadow-md justify-between">
                        <div className="flex flex-row items-center">
                            <img src={props.meal.img_path} alt="" className="w-24"/>
                            <p className="text-2xl ml-8 text-darkblue font-bold">{props.meal.name}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-2xl ml-8 text-blue font-bold">V</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 sm:w-full md:w-full lg:w-5/6 bg-white rounded-md p-4 border-none drop-shadow-md justify-between">
                        <form onSubmit={submitHandler}>
                        <div className="flex flex-row mt-2 justify-between items-center lg:mx-2">
                            <div className="flex w-5/6">
                                <p className="text-xl text-darkblue font-bold">Nilai Makanan</p>
                            </div>
                            
                            <div className="mt-2 md:mt-0 flex-row">
                                <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" onClick={(e)=> setData('rating', 1)}>
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                    fill={stars >= 1 ? '#FFDF00' : '#A9A9A9'}/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" onClick={(e)=> setData('rating', 2)}>
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                    fill={stars >= 2 ? '#FFDF00' : '#A9A9A9'}/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" onClick={(e)=> setData('rating', 3)}>
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                    fill={stars >= 3 ? '#FFDF00' : '#A9A9A9'}/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" onClick={(e)=> setData('rating', 4)}>
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                    fill={stars >= 4 ? '#FFDF00' : '#A9A9A9'}/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" onClick={(e)=> setData('rating', 5)}>
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                    fill={stars >= 5 ? '#FFDF00' : '#A9A9A9'}/>
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-2">
                            <textarea id="comment" name="comment" rows="12" onChange={e => setData('comment', e.target.value)} value={data.comment} class="mt-2 lg:mx-2 block w-full text-sm text-black bg-smoke rounded-lg placeholder-black border-none" placeholder="Bagaimana makanannya?"></textarea>
                        </div>
                        {/* TODO: Add ulasan store */}
                        <button className="bg-blue font-semibold text-white py-3 px-4 rounded-md mt-4 mx-2" type="submit">
                            Bagikan Ulasan
                        </button>
                        </form>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}
