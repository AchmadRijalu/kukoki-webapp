import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/inertia-react';
import HeaderNoBg from "@/Components/HeaderNoBg";
import Footer from "@/Components/Footer";
import MenuCard from "@/Components/MenuCard";
import MainLayout from "@/Layouts/MainLayout";
import MenuReviewCard from "@/Components/MenuReviewCard";

export default function MenuShow(props) {
    const [porsi, setPorsi] = useState(2);

    return (
        <MainLayout>
            <div className='xl:px-60'>
                <div>
                    <h1
                        className="
							lg:text-5xl
							text-xl
							font-bold
							text-green
							text-center
							mt-2
						"
                    >
                        Balenciaga Signature Sweatshirt
                    </h1>
                    <p className="text-sm leading-none text-gray-600 text-center mt-4">Balenciaga Fall Collection</p>
                </div>
                <div className='flex flex-row justify-center gap-10 mt-6'>
                    <div className='w-1/2'>
                        <img className="object-cover rounded-2xl h-full" alt="img of a girl posing"
                             src="https://i.ibb.co/QMdWfzX/component-image-one.png"/>
                    </div>
                    <div className='w-1/2'>
                        <div>
                            <p className="text-base lg:leading-tight leading-normal text-gray-600">It is a long
                                established fact that a reader will be distracted by thereadable content of a page when
                                looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less
                                normal distribution of letters.</p>
                        </div>
                        <div className='pt-4'>
                            <h4 className='text-darkgreen font-bold text-2xl'>Bahan</h4>
                            <ul className='list-disc pl-6 mt-1'>
                                <li>aaa</li>
                                <li>aaa</li>
                                <li>aaa</li>
                                <li>aaa</li>
                                <li>aaa</li>
                            </ul>
                        </div>
                        <div className='pt-4'>
                            <h4 className='text-darkgreen font-bold text-2xl'>Alat yang dibutuhkan</h4>
                            <ul className='list-disc pl-6 mt-1'>
                                <li>aaa</li>
                                <li>aaa</li>
                                <li>aaa</li>
                                <li>aaa</li>
                                <li>aaa</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='justify-center gap-10 mt-10'>
                    <h4 className='text-darkgreen font-bold text-2xl'>Prosedur Pembuatan</h4>
                    <ol className='list-decimal pl-6 mt-1 max-w-5xl break-words'>
                        <li className='font-semibold mt-2'>
                            <h6 className='text-lg'>
                                Cuci Semua Sayur
                            </h6>
                            <p className='font-normal'>
                                aaa
                            </p>
                        </li>
                        <li className='font-semibold mt-2'>
                            <h6 className='text-lg'>
                                Cuci Semua Sayur
                            </h6>
                            <p className='font-normal'>
                                aaa
                            </p>
                        </li>
                        <li className='font-semibold mt-2'>
                            <h6 className='text-lg'>
                                Cuci Semua Sayur
                            </h6>
                            <p className='font-normal'>
                                aaa
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </MainLayout>
    );
}
