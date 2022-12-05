import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function HeaderNoBg() {
    return (
        <nav className="text-white flex items-center justify-between py-3 px-8">
            <div>
                <Link href="/">
                    <img src="/img/logo/logo.svg" alt="" className="w-32" />
                </Link>
            </div>
            <div className="flex gap-8 text-white font-bold text-lg">
                <Link href="/menu">Menu</Link>
                <Link href="/rencana">Rencana</Link>
                <Link href="/pesanan">Pesanan</Link>
                <Link href="/profil">Profil</Link>
            </div>
        </nav>
    );
}
