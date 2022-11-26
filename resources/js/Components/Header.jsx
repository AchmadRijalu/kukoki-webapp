import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Header() {
    return (
        <nav className="bg-blue-bg bg-cover bg-no-repeat text-white flex items-center justify-between py-3 px-8">
            <div>
                <img src="img/logo/logo.svg" alt="" className="w-32" />
            </div>
            <div className="flex gap-8 text-white font-bold text-lg">
                <Link href="">Menu</Link>
                <Link href="">Rencana</Link>
                <Link href="">Pesanan</Link>
                <Link href="">Profil</Link>
            </div>
        </nav>
    );
}
