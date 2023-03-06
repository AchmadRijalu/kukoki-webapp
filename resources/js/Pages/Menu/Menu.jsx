import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/inertia-react';
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import MenuCard from "@/Components/MenuCard";
import MainLayout from "@/Layouts/MainLayout";
import PreferensiCard from "@/Components/PreferensiCard";

export default function Menu(props) {
    return (
        <MainLayout>
            <div className='md:px-4'>
                <h1 className="text-green md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                    Menu
                </h1>
                <h4 className="text-darkgreen text-l font-semibold text-center mx-auto max-w-3xl">
                    Wah, lagi pingin masak apa nih?
                    Jangan khawatir, semua meal kit dilengkapi dengan bahan-bahan segar dan cara penyajian yang mudah!
                </h4>
                <h5 className='text-darkgreen text-2xl font-semibold mt-8'>
                    Untuk Anda
                </h5>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 sm:gap-10 gap-2 mt-5 justify-center items-center">
                    {props.meals.map((meal, i) =>
                        <MenuCard meal={meal} key={i}></MenuCard>
                    )}
                </div>
                {/*<h5 className='text-darkgreen text-3xl font-semibold mt-8'>*/}
                {/*    Coba Meal Kit Lainnya*/}
                {/*</h5>*/}
                {/*<div className="grid grid-cols-3 gap-10 mt-5">*/}
                {/*    {props.meals.map((meal, i) =>*/}
                {/*        <MenuCard meal={meal} key={i}></MenuCard>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        </MainLayout>
    );
}
