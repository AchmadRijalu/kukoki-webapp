import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import RencanaDateCard from "@/Components/RencanaDateCard";
import RencanaCard from "@/Components/RencanaCard";
import RencanaRincian from "@/Components/RencanaRincian";

export default function Rencana(props) { 
    const [isSelected, setisSelected] = useState(null);

    //Meals in cart
    const [mealsInCart, setMeals] = useState(props.cart);

    //Logic for showing mealkits based on date
    const handlechange = (index) => {
        
    };

    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        const week1 = days.slice(0, 7);
        const week2 = days.slice(7,14);
        const week3 = days.slice(14,21);
        const week4 = days.slice(22);

        const weeks = {
            "week1": week1,
            "week2": week2,
            "week3": week3,
            "week4": week4,
        }
        return weeks
    }

    let currentWeek = () => {
        var date = new Date()
        let allWeeks = getDaysInMonth(date.getMonth(),date.getFullYear())
        //do checks on each weeks
        //check for if 1st week
        for (let week of allWeeks["week1"]) {
            if (week.getDate() === date.getDate()) {
                return 1;
            }
        }
        //check for if 2nd week
        for (let week of allWeeks["week2"]) {
            if (week.getDate() === date.getDate()) {
                return 2;
            }
        }
        //check for if 3rd week
        for (let week of allWeeks["week3"]) {
            if (week.getDate() === date.getDate()) {
                return 3;
            }
        }
        //check for if 4th week
        for (let week of allWeeks["week4"]) {
            if (week.getDate() === date.getDate()) {
                return 4;
            }
        }
    }

    const deleteItem = (id) => {
        setMeals((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    };

    const rencanaDateOptions = () => {
        let date = new Date()
        const weekList = getDaysInMonth(date.getMonth(), date.getFullYear())
        if (currentWeek() == 1) {
            return weekList.week1
        } else if (currentWeek() == 2) {
            return weekList.week2
        } else if (currentWeek() == 3) {
            return weekList.week3
        }
        return weekList.week4
    }

    return (
        <div>
            <div className="bg-white w-full min-h-screen flex flex-col justify-between">
                <div className="bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                </div>
                <div className="w-full h-max mt-8 mb-14 px-5">
                    <div className="flex flex-col  mini:justify-center mini:items-center ">
                        <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4">
                            Rencana Meal Kit
                        </h1>

                        <h4 className="text-blue text-l font-bold flex text-center">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </h4>
                    </div>
                    <div className="grid lg:grid-cols-2 mt-5 grid-cols-1">
                        <div className="flex flex-col items-center">
                            {/* <button
                                id="dropdownDefault"
                                data-dropdown-toggle="dropdown"
                                class="text-blue bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-2/12 my-4"
                                type="button"
                            >
                                3 Desember 2022{" "}
                                <svg
                                    class="ml-2 w-4 h-4"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="dropdown"
                                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                            >
                                <ul
                                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefault"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="grid mt-2 justify-center grid-cols-4 sm:grid-cols-7">
                                {rencanaDateOptions().map((option, index) => {
                                    return (
                                        <RencanaDateCard
                                            option={option}
                                            selected={isSelected === index}
                                            onChange={() =>
                                                setisSelected(index)
                                            }
                                        />
                                    );
                                })}
                            </div>

                            <div className="flex flex-col justify-center w-full sm:w-9/12 lg:w-10/12">
                                {mealsInCart.map((item, index) => {
                                    return (
                                        <RencanaCard
                                            key={index}
                                            id={index}
                                            item={item}
                                            deleteItem={deleteItem}
                                        />
                                    );
                                })}
                                {/* <RencanaCard />
                                <RencanaCard /> */}
                            </div>
                        </div>
                        <RencanaRincian />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
