import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import HeaderNoBg from "@/Components/HeaderNoBg";
import MenuCard from "@/Components/MenuCard";
import Footer from "@/Components/Footer";

export default function MainLayout({ children }) {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col justify-between ">
            <div className="bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
            </div>

            <div className="w-full h-max mt-8 mb-12 md:p-0 p-3">

                <div className="  flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
