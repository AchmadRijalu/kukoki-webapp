import React from 'react';
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
    const formatter = new Intl.NumberFormat('de-DE');

    function handleDelete(id) {
        Inertia.delete(route("admin.menu.destroy", id));
    }

    return (
        <AdminLayout props={props}>
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table className="w-full">
                    <thead>
                    <tr className="h-16 w-full text-sm leading-none text-gray-800">
                        <th className="font-bold text-left pl-4">No.</th>
                        <th className="font-bold text-left pl-12">Nama</th>
                        <th className="font-bold text-left pl-12">Deskripsi</th>
                        <th className="font-bold text-left pl-12">Durasi</th>
                        <th className="font-bold text-left pl-12">Harga</th>
                    </tr>
                    </thead>
                    <tbody className="w-full">
                    {props.meals.map((meal, i) =>
                        <tr className="h-20 text-sm leading-none text-gray-800 bg-white border-b border-t border-gray-100">
                            <td className="pl-4">
                                <p className="text-sm font-medium leading-none text-gray-800">{i + 1}</p>
                            </td>
                            <td className="pl-12">
                                <div className="flex items-center">
                                    <div className='flex items-center'>
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full rounded object-cover" src={'/img/menu/' + meal.img_path} />
                                        </div>
                                        <p className="font-medium ml-4">{meal.name}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pl-12">
                                <div className="flex items-center">
                                    <p className="font-medium">{meal.description}</p>
                                </div>
                            </td>
                            <td className="pl-12">
                                <div className="flex items-center">
                                    <p className="font-medium">{meal.duration}</p>
                                </div>
                            </td>
                            <td className="pl-12">
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-medium">{'Rp' + formatter.format(meal.price)}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="pl-12 pr-4">
                                <div className='flex gap-4 justify-end'>
                                    <Link href={route("admin.menu.edit", meal.id)} className="flex items-center justify-center text-center">
                                        <button
                                            className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-pencil-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                    <div className="flex items-center justify-center text-center">
                                        <button onClick={(e) => handleDelete(meal.id)}
                                                className="text-sm leading-none text-white py-3 px-5 bg-red-700 rounded transition hover:bg-red-800 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-trash3-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <Link href={route('admin.menu.create')} className="w-full mt-8  rounded-2x flex flex-row justify-center">
                    <button className="bg-blue w-full items-center h-12 outline-none rounded-xl font-bold text-white hover:bg-bluehover transition delay-50 text-sm" type="submit">
                        Tambah Menu
                    </button>
                </Link>
            </div>
        </AdminLayout>
    );
}
