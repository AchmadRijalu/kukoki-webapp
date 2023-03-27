import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/inertia-react';
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";

export default function MenuCard({meal}) {
    const formatter = new Intl.NumberFormat('de-DE');

    return (
        meal.enabled ? (
            <Link href={route('menu.show', meal.id)}>
                <div className="max-w-xs rounded overflow-hidden shadow-lg hover:scale-[102%] transition mx-auto flex flex-col h-full">
                    <img className="w-full" src={'/img/menu/' + meal.img_path} alt={meal.name} />
                    <div className='flex flex-col justify-between h-full'>
                        <div className="px-4 py-4">
                            <div className="font-bold text-xl mb-2 text-darkblue">{meal.name}</div>
                            <p className="text-gray-700 text-xs menu-card-description">{meal.description}</p>
                            <div className="pt-4 flex flex-row gap-4">
                                <div className='flex flex-row gap-2 items-center'>
                                    <img className='w-6' src="/img/icon/category.svg" alt=""/>
                                    <div>
                                        <p className='text-xs'>Snel Koken</p>

                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img className='w-6' src="/img/icon/chef_hat.svg" alt=""/>
                                    <p className='text-xs'>{meal.duration} min</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 bg-blue flex justify-center">
                            <h6 className='font-bold text-white'>{'Rp' + formatter.format(meal.price)}/2 porsi</h6>
                        </div>
                    </div>
                </div>
            </Link>
        ) : (
            <div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg hover:scale-[102%] transition mx-auto flex flex-col h-full">
                    <img className="w-full blur-sm grayscale" src={'/img/menu/' + meal.img_path} alt={meal.name} />
                    <div className='flex flex-col justify-between h-full'>
                        <div className="px-4 py-4">
                            <div className="font-bold text-xl mb-2 text-darkblue grayscale">{meal.name}</div>
                            <p className="text-gray-700 text-xs menu-card-description grayscale">Menu ini belum tersedia untuk dipesan pada saat ini. Nantikan menu baru kami yang akan datang segera!</p>
                        </div>
                        <div className="py-2 bg-blue flex justify-center grayscale">
                            <h6 className='font-bold text-white'>Segera Datang</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
