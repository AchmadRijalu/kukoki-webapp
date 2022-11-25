import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";

export default function Welcome(props) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen">
                {/* <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Registerr
                            </Link>
                        </>
                    )}
                </div> */}

                <div className="bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                </div>

                <div className="h-96"></div>

                <Footer />
            </div>
        </>
    );
}
