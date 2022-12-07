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
    const [totalHargaKeranjang, setHarga] = useState(0);
    let options;
    let currentDate;
    //Logic for showing mealkits based on date

    function filterMeals() {
        const filteredList = mealsInCart.filter((item) => {
            let normalizedDate = new Date(item.date);
            if (
                normalizedDate?.getDate() ===
                rencanaDateOptions()[isSelected]?.getDate()
            ) {
                currentDate = normalizedDate;
            }
            return (
                normalizedDate?.getDate() ===
                rencanaDateOptions()[isSelected]?.getDate()
            );
        });
        return filteredList;
    }

    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        const week1 = days.slice(0, 7);
        const week2 = days.slice(7, 14);
        const week3 = days.slice(14, 21);
        const week4 = days.slice(22);

        const weeks = {
            "Minggu 1": week1,
            "Minggu 2": week2,
            "Minggu 3": week3,
            "Minggu 4": week4,
        };
        return weeks;
    }

    let currentWeek = () => {
        var date = new Date();
        let allWeeks = getDaysInMonth(date.getMonth(), date.getFullYear());
        //do checks on each weeks
        //check for if 1st week
        for (let week of allWeeks["Minggu 1"]) {
            if (week.getDate() === date.getDate()) {
                return 1;
            }
        }
        //check for if 2nd week
        for (let week of allWeeks["Minggu 2"]) {
            if (week.getDate() === date.getDate()) {
                return 2;
            }
        }
        //check for if 3rd week
        for (let week of allWeeks["Minggu 3"]) {
            if (week.getDate() === date.getDate()) {
                return 3;
            }
        }
        //check for if 4th week
        for (let week of allWeeks["Minggu 4"]) {
            if (week.getDate() === date.getDate()) {
                return 4;
            }
        }
    };

    const deleteItem = (id) => {
        setMeals((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    };

    const rencanaDateOptions = () => {
        let date = new Date();
        const weekList = getDaysInMonth(date.getMonth(), date.getFullYear());
        if (currentWeek() == 1) {
            return weekList["Minggu 1"];
        } else if (currentWeek() == 2) {
            return weekList["Minggu 2"];
        } else if (currentWeek() == 3) {
            return weekList["Minggu 3"];
        }
        return weekList["Minggu 4"];
    };

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
                            <div className="grid mt-2 justify-center grid-cols-4 sm:grid-cols-7">
                                {rencanaDateOptions().map((option, index) => {
                                    options = rencanaDateOptions();
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
                                {filterMeals()?.map((item, index) => {
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
                        <RencanaRincian
                            totalPrice={() => {
                                const total = filterMeals()?.reduce(
                                    (acc, item) => acc + item.price,
                                    0
                                );
                                setHarga(total);
                                return total;
                            }}
                            date = {currentDate}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
