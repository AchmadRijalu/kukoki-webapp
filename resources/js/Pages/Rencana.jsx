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
    const [refresher, setRefresher] = useState(null);

    //Logic for showing mealkits based on date
    const handlechange = (index) => {
        const newUsers = [...users];
        newUsers[index].name = "New Name";
        newUsers[index].rollNo = "New RollNo";
        setMeals(newUsers);
    };

    // const deleteMeal = (index) => {
    //     var newList = mealsInCart
    //     newList.splice(index,1)
    //     setMeals(newList)
    //     setRefresher(index)
    // }

    const deleteItem = (id) => {
        setMeals((prevItems) => {
            return prevItems.filter((item,index) => {
                return index !== id
            })
        })
    }

    const rencanaDateOptions = [
        <RencanaDateCard />,
        <RencanaDateCard />,
        <RencanaDateCard />,
        <RencanaDateCard />,
        <RencanaDateCard />,
        <RencanaDateCard />,
        <RencanaDateCard />,
    ];
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
                                {rencanaDateOptions.map((option, index) => {
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
