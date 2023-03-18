import React from "react";
import { Link, Head, usePage  } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import { Inertia } from "@inertiajs/inertia";
import PreferensiCard from "@/Components/PreferensiCard";

export default function Menu() {

    const logoutHandler = async (e) => {
        e.preventDefault();

        Inertia.post('/logout', auth.user.id);
    }
    const { auth } = usePage().props;

    return (
        <div className="w-full min-h-screen bg-white flex flex-col ">
            <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                <HeaderNoBg />
                <div className="w-full mt-4  bg-gray-400 h-52">

                    <h1>
                        Halo <strong>{auth.user.full_name}</strong>
                    </h1>
                    <h1>
                        Logged in
                    </h1>
                <br />
                    <form onSubmit={logoutHandler} >
                    <button className="bg-blue" type="submit">
                        Logout
                    </button>
                    </form>


                </div>
            </div>

        </div>
    )
}
