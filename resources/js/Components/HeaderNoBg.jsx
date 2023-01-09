import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";



export default function HeaderNoBg() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="text-white  flex flex-col md:py-3 mini:py-5 px-8">
            <div className="flex  items-center justify-between">
            <div>
                <Link href="/">
                    <img src="/img/logo/logo.svg" alt="" className="md:w-32 mini:w-28" />
                </Link>
            </div>
            <div className="md:flex gap-8 text-white font-bold text-lg mini:hidden ">
                <Link href={route('menu.index')}>Menu</Link>
                <Link href="/rencana">Rencana</Link>
                <Link href="/pesanan">Pesanan</Link>
                <Link href={route('profil.index')}>Profil</Link>
            </div>

            <div className="md:hidden mini:flex">

                <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    
                    <img src= {navbarOpen?"/img/icon-temp/close-nav.png":"/img/icon-temp/open-nav.png"} alt="" className="w-6 fill-white  transition" />
                </button>
            </div>
            </div>
     
            <div
                className={
                     " flex-col md:hidden  items-center mt-6 w-full  m-0 p-0 transition   duration-150 ease-in-out" +
                    (navbarOpen ? " flex " : " hidden")
                }
                id="example-navbar-danger"
            >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto  items-center">
                    <li className="nav-item">
                        <a
                            className="px-3 py-4 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                        >
                            <Link href={route('menu.index')}>Menu</Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="px-3 py-4 text-md flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                        >
                             <Link href="/rencana">Rencana</Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="px-3 py-4 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                        >
                             <Link href="/pesanan">Pesanan</Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="px-3 py-4 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                        >
                            <Link href={route('profil.index')}>Profil</Link>
                        </a>
                    </li>
                </ul>
            </div>


        </nav>

    );
}
