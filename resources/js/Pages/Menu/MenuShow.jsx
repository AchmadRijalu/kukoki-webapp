import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/inertia-react';
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import MenuCard from "@/Components/MenuCard";
import MainLayout from "@/Layouts/MainLayout";
import MenuReviewCard from "@/Components/MenuReviewCard";
import {Inertia} from "@inertiajs/inertia";

export default function MenuShow(props) {
    const [porsi, setPorsi] = useState(2);
    const [date, setDate] = useState('');

    function handleAddToPlan() {
        if (date !== '') {
            let values ={
                portion: porsi,
                date: date
            }

            Inertia.post(route('menu.add_to_plan', props.meal.id), values)
        }
    }

    return (
        <MainLayout>
            <div className='xl:px-60'>
                <div className='flex flex-row justify-center gap-10'>
                    <div className='w-1/2'>
                        <img className="object-cover rounded-2xl h-full" alt="img of a girl posing"
                             src={'/img/menu/' + props.meal.img_path}/>
                    </div>
                    <div className='w-1/2'>
                        <div>
                            <p className="text-sm leading-none text-gray-600">Snel Koken</p>
                            <h1
                                className="
							lg:text-5xl
							text-xl
							font-bold
							text-green
							mt-2
						"
                            >
                                {props.meal.name}
                            </h1>
                        </div>
                        <div className='pt-4'>
                            <p className="text-base lg:leading-tight leading-normal text-gray-600">{props.meal.description}</p>
                        </div>
                        <div className='pt-4'>
                            <p className="font-semibold text-darkgreen">Jumlah Porsi</p>
                            <div className='flex flex-row w-full items-center justify-between mt-1'>
                                <span onClick={() => setPorsi(2)}
                                      className={'w-full h-full text-center text-3xl font-bold py-4 border border-gray-400 cursor-pointer rounded-l-md ' + (porsi === 2 ? 'bg-green text-white' : 'text-green')}>2</span>
                                <span onClick={() => setPorsi(4)}
                                      className={'w-full h-full text-center text-3xl font-bold py-4 border border-gray-400 cursor-pointer rounded-r-md ' + (porsi === 4 ? 'bg-green text-white' : 'text-green')}>4</span>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <p className="font-semibold text-darkgreen">Tanggal Pengiriman</p>
                            <div className='relative flex justify-end items-center mt-1'>
                                <input type="date" onChange={(e) => setDate(e.target.value)} className='w-full border border-gray-400 rounded-md text-gray-500'/>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <button onClick={handleAddToPlan}
                                className={
                    'mt-4 text-base flex items-center justify-center leading-none font-bold w-full py-5 rounded-md '
                                    + (date === '' ? 'bg-gray-200 text-gray-400 cursor-default' : 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green hover:bg-greenhover bg-green text-white')
                                }
                            >
                                Tambahkan ke Rencana
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center gap-10 mt-10'>
                    <div className='w-1/2'>
                        <h4 className='text-darkgreen font-bold text-2xl'>Bahan</h4>
                        <ul className='list-disc pl-6 mt-1'>
                            {props.meal.ingredients.map((ingredient, i) =>
                                <li>{ingredient.pivot.amount} {ingredient.unit} {ingredient.name}</li>
                            )}
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <h4 className='text-darkgreen font-bold text-2xl'>Alat yang dibutuhkan</h4>
                        <ul className='list-disc pl-6 mt-1'>
                            {props.meal.tools.map((tool, i) =>
                                <li>{tool.pivot.amount} {tool.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
                {/*<div className='mt-10'>*/}
                {/*    <h4 className='text-darkgreen font-bold text-2xl'>Ulasan Pembeli</h4>*/}
                {/*    <div className="grid grid-cols-3 gap-10">*/}
                {/*        {props.meals.map((meal, i) =>*/}
                {/*            <MenuReviewCard></MenuReviewCard>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className='mt-10'>
                    <h4 className='text-darkgreen font-bold text-2xl'>Menu Lain dalam Kategori </h4>
                    <div className="grid grid-cols-3 gap-10">
                        {props.meals.map((meal, i) =>
                            <MenuCard meal={meal} key={i}></MenuCard>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
