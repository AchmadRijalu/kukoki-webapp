import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import route from "vendor/tightenco/ziggy/src/js";

export default function Header() {
    return (
        <nav className="bg-blue-bg bg-cover bg-no-repeat text-white flex items-center justify-between py-3 px-8">
            <div>
                <img src="img/logo/logo.svg" alt="" className="w-32" />
            </div>
            <div className="flex gap-8 text-white font-bold text-lg">
                <Link href="/menu">Menu</Link>
                <Link href="/rencana">Rencana</Link>
                <Link href="/pesanan">Pesanan</Link>
                <Link href={route('profil.index')}>Profil</Link>
            </div>
        </nav>

        // {/* <div className="fixed top-0 right-0 px-6 py-4 sm:block">
        //             {props.auth.user ? (
        //                 <Link
        //                     href={route("dashboard")}
        //                     className="text-sm text-gray-700 dark:text-gray-500 underline"
        //                 >
        //                     Dashboard
        //                 </Link>
        //             ) : (
        //                 <>
        //                     <Link
        //                         href={route("login")}
        //                         className="text-sm text-gray-700 dark:text-gray-500 underline"
        //                     >
        //                         Log in
        //                     </Link>

        //                     <Link
        //                         href={route("register")}
        //                         className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
        //                     >
        //                         Registerr
        //                     </Link>
        //                 </>
        //             )}
        //         </div> */}
    );
}
