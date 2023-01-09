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
import {id} from "date-fns/locale";

export default function Orders(props) {
    const formatter = new Intl.NumberFormat('de-DE');
    const options = {year: 'numeric', month: 'long', day: 'numeric'};

    function handleDelete(id) {
        Inertia.delete(route("admin.orders.destroy", id));
    }

    function handleStatusChange(e, id) {
        Inertia.put(route('admin.orders.update', id), {status: e.target.value})
    }

    let status = [
        'Sedang Diproses',
        'Dalam Perjalanan',
        'Selesai'
    ]

    return (
        <AdminLayout props={props}>
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table className="w-full">
                    <thead>
                    <tr className="h-16 w-full text-sm leading-none text-gray-800">
                        <th className="font-bold text-left pl-4">No.</th>
                        <th className="font-bold text-left pl-12">Tanggal</th>
                        <th className="font-bold text-left pl-12">Alamat</th>
                        <th className="font-bold text-left pl-12">Pesanan</th>
                        <th className="font-bold text-left pl-12">Status</th>
                    </tr>
                    </thead>
                    <tbody className="w-full">
                    {props.deliveries.map((delivery, i) =>
                        <tr className="h-20 text-sm leading-none text-gray-800 bg-white border-b border-t border-gray-100">
                            <td className="pl-4">
                                <p className="text-sm font-medium leading-none text-gray-800">{i + 1}</p>
                            </td>
                            <td className="pl-12">
                                <div className="flex items-center">
                                    <p className="font-medium">{new Date(delivery.date).toLocaleDateString("id-ID", options)}</p>
                                </div>
                            </td>
                            <td className="pl-12">
                                <div className="flex items-center">
                                    <p className="font-medium">{delivery.address}</p>
                                </div>
                            </td>
                            <td className="pl-12">
                               <ul className='list-disc'>
                                   {delivery.order_details.map((item, i) =>
                                       <li>{item.meal.name} - {item.portion} porsi</li>
                                   )}
                               </ul>
                            </td>
                            <td className="pl-12">
                                <div className="flex items-center">
                                    <div>
                                        <select id="role" name="role" onChange={(e) => handleStatusChange(e, delivery.id)} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block p-2.5 pr-10 placeholder-gray-400"
                                                required>
                                            {status.map((item, i) =>
                                                <option selected={item === delivery.status} value={item}>{item}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
