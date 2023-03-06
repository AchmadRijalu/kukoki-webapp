import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/inertia-react';
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import MenuCard from "@/Components/MenuCard";
import MainLayout from "@/Layouts/MainLayout";
import PreferensiCard from "@/Components/PreferensiCard";
import {Inertia} from "@inertiajs/inertia";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Menu(props) {
    const [values, setValues] = useState({
        name: props.meal.name,
        description: props.meal.description,
        price: props.meal.price,
        duration: props.meal.duration,
    })

    function handleChange(e) {
        const key = e.target.name;

        if (e.target.files !== null) {
            const file = e.target.files[0]
            setValues(values => ({
                ...values,
                [key]: file
            }))
        } else {
            const value = e.target.value
            setValues(values => ({
                ...values,
                [key]: value,
            }))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('admin.menu.update', props.meal.id), values)
    }

    return (
        <AdminLayout props={props}>
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-x-6 md:grid-cols-2">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nama</label>
                            <input type="text" id="name" name="name" onChange={handleChange} required={true} defaultValue={props.meal.name}
                                   className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 placeholder-gray-400"
                                    />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Deskripsi</label>
                            <input type="text" id="description" name="description" onChange={handleChange} required={true} defaultValue={props.meal.description}
                                   className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 placeholder-gray-400"
                                    />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 ">Durasi</label>
                            <input type="number" id="duration" name="duration" onChange={handleChange} required={true} defaultValue={props.meal.duration}
                                   className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 placeholder-gray-400"
                                    />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Harga</label>
                            <input type="number" id="price" name="price" onChange={handleChange} required={true} defaultValue={props.meal.price}
                                   className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 placeholder-gray-400"
                                    />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 ">Gambar</label>
                            <input type="file" id="file" name="file" onChange={handleChange}
                                   className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div className='w-full mt-4 rounded-2x flex flex-row justify-center'>
                        <button type="submit"
                                className="bg-green w-full items-center h-12 outline-none rounded-xl font-bold text-white hover:bg-greenhover transition delay-50 text-sm">Submit
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
