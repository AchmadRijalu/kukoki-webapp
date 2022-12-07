import React, { useState, useEffect, useRef } from "react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import RencanaDateCard from "@/Components/RencanaDateCard";
import RencanaCard from "@/Components/RencanaCard";
import RencanaRincian from "@/Components/RencanaRincian";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Rencana(props) {
    let options;
    let currentDate;
    const [isSelected, setisSelected] = useState(null);
    const [mealsInCart, setMeals] = useState(props.cart);
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 6),
            key: "selection",
        },
    ]);
    const [open, setOpen] = useState(false);
    const referenceContainer = useRef(null);

    useEffect(() => {
        document.addEventListener("click", hideOnClick, true);
    }, []);

    const hideOnClick = (item) => {
        if (
            referenceContainer.current &&
            !referenceContainer.current.contains(item.target)
        ) {
            setOpen(false);
        }
    };

    function getDates(range) {
        const date = new Date(range[0].startDate.getTime());
        const dates = [];
        while (date <= range[0].endDate) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return dates;
    }

    function filterMeals() {
        let checkerArray = getDates(range);
        const filteredList = mealsInCart.filter((item) => {
            let normalizedDate = new Date(item.date);
            return (
                normalizedDate?.getDate() ===
                checkerArray[isSelected]?.getDate() && normalizedDate?.getMonth() === checkerArray[isSelected]?.getMonth() && normalizedDate?.getFullYear() === checkerArray[isSelected]?.getFullYear()
            );
        });
        return filteredList;
    }

    const deleteItem = (id) => {
        setMeals((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
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
                            <div className="calendarWrap mb-5">
                                <div>
                                    <input
                                        value={`${format(
                                            range[0].startDate,
                                            "MM-dd-yyyy"
                                        )}/${format(
                                            range[0].endDate,
                                            "MM-dd-yyyy"
                                        )}`}
                                        readOnly
                                        className="inputBox border-blue"
                                        onClick={() => {
                                            setOpen((open) => !open);
                                        }}
                                    />
                                    <div ref={referenceContainer}>
                                        {open && (
                                            <DateRange
                                                minDate={new Date()}
                                                className="calendarElement"
                                                onChange={(item) => {
                                                    return setRange([
                                                        {
                                                            startDate:
                                                                item.selection
                                                                    .startDate,
                                                            endDate: addDays(
                                                                item.selection
                                                                    .startDate,
                                                                6
                                                            ),
                                                            key: "selection",
                                                        },
                                                    ]);
                                                }}
                                                editableDateInputs={false}
                                                moveRangeOnFirstSelection={
                                                    false
                                                }
                                                ranges={range}
                                                months={1}
                                                direction="horizontal"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="grid mt-2 justify-center grid-cols-4 sm:grid-cols-7">
                                {getDates(range).map((option, index) => {
                                    options = getDates(range);
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
                            </div>
                        </div>
                        <RencanaRincian
                            totalPrice={() => {
                                const total = filterMeals()?.reduce(
                                    (acc, item) => acc + item.price,
                                    0
                                );
                                return total;
                            }}
                            date={currentDate}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
