import React, { useState, useEffect, useRef } from "react";
import Footer from "@/Components/Footer";
import HeaderNoBg from "@/Components/HeaderNoBg";
import RencanaDateCard from "@/Components/RencanaDateCard";
import RencanaCard from "@/Components/RencanaCard";
import RencanaRincian from "@/Components/RencanaRincian";
import { DateRange } from "react-date-range";
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {Link} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

export default function Rencana(props) {
    let options;
    let currentDate;
    let dateCurrent = new Date;
    const [isSelected, setisSelected] = useState(0);
    const [mealsInCart] = useState(props.ordered);
    const [open, setOpen] = useState(false);
    const referenceContainer = useRef(null);
    const [range, setRange] = useState([
        {
            startDate: new Date(dateCurrent.setDate(dateCurrent.getDate() - dateCurrent.getDay()+6)),
            endDate: new Date(dateCurrent.setDate(dateCurrent.getDate() - dateCurrent.getDay()+6)),
            key: "selection",
        },
    ]);
    const formatter = new Intl.NumberFormat('de-DE');

    useEffect(() => {
        document.addEventListener("click", hideOnClick, true);
    }, []);

    let total = 0
    for (const meal of props.cart) {
        total += meal.meal.price
    }

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
        while (date <= addDays(range[0].startDate, 6)) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return dates;
    }

    function filterMeals() {
        let checkerArray = getDates(range);
        const filteredList = mealsInCart.filter((item) => {
            let normalizedDate = new Date(item.delivery.date);

            if (
                normalizedDate?.getDate() ===
                    checkerArray[isSelected]?.getDate() &&
                normalizedDate?.getMonth() ===
                    checkerArray[isSelected]?.getMonth() &&
                normalizedDate?.getFullYear() ===
                    checkerArray[isSelected]?.getFullYear()
            ) {
                currentDate = normalizedDate;
            }
            return (
                normalizedDate?.getDate() ===
                    checkerArray[isSelected]?.getDate() &&
                normalizedDate?.getMonth() ===
                    checkerArray[isSelected]?.getMonth() &&
                normalizedDate?.getFullYear() ===
                    checkerArray[isSelected]?.getFullYear()
            );
        });
        return filteredList;
    }

    function deleteItem(id) {
        Inertia.delete(route("menu.remove_from_plan", id));
    }

    return (
        <div>
            <div className="bg-white w-full min-h-screen flex flex-col justify-between">
                <div className="bg-blue bg-blue-bg bg-cover bg-no-repeat">
                    <HeaderNoBg />
                </div>
                <div className="w-full h-max mt-8 mb-14 px-5">
                    <div className="flex flex-col  mini:justify-center mini:items-center ">
                        <h1 className="text-blue md:text-4xl sm:text-3xl mini:text-3xl font-bold mb-4 text-center">
                            Rencana Meal Kit
                        </h1>
                        <h4 className="text-darkblue text-l font-semibold text-center mx-auto max-w-3xl">
                            Lihat dan atur meal kit yang telah dipesan ataupun yang akan anda pesan!
                        </h4>
                    </div>
                    <div className="grid lg:grid-cols-2 mt-5 grid-cols-1">
                        <div className="flex flex-col items-center">
                            <h2 className="text-blue md:text-2xl sm:text-3xl mini:text-3xl font-bold text-center mb-5">Telah Dipesan</h2>
                            <div className="calendarWrap mb-5">
                                <div className="outer-input">
                                    <input
                                        value={`${format(
                                            range[0].startDate,
                                            "dd/MM/yyyy"
                                        )} - ${format(addDays(range[0].startDate, 1), "dd/MM/yyyy")}`}
                                        size="24"
                                        readOnly
                                        className="inputBox"
                                        onClick={() => {
                                            setOpen((open) => !open);
                                        }}
                                    />
                                    <div ref={referenceContainer}>
                                        {open && (
                                            <DateRange
                                                className="calendarElement"
                                                onChange={(item) => {
                                                    setRange([
                                                        {
                                                            startDate:
                                                                item.selection
                                                                    .startDate,
                                                            endDate: item.selection
                                                            .startDate,
                                                            key: "selection",
                                                        },
                                                    ]);
                                                    setisSelected(0);
                                                }}
                                                preview={{startDate: range[0].startDate, endDate: range[0].endDate}}
                                                retainEndDateOnFirstSelection={false}
                                                showPreview={true}
                                                onPreviewChange={false}
                                                dragSelectionEnabled={false}
                                                showDateDisplay={false}
                                                preventSnapRefocus={false}
                                                minDate={new Date(dateCurrent.setDate(dateCurrent.getDate() - dateCurrent.getDay()+6))}
                                                disabledDay={(date) => (!(date.getDay() === 6))}
                                                showSelectionPreview={false}
                                                showMonthArrow={false}
                                                showMonthAndYearPickers={false}
                                                editableDateInputs={false}
                                                moveRangeOnFirstSelection={false}
                                                ranges={range}
                                                months={1}
                                                direction="horizontal"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="grid mt-2 justify-center grid-cols-2 sm:grid-cols-2">
                                {getDates(range).map((option, index) => {
                                    
                                    options = getDates(range);
                                        if(option.getDay() === 6 || option.getDay() === 0) {
                                            return (
                                                <RencanaDateCard
                                                    key={index}
                                                    option={option}
                                                    selected={isSelected === index}
                                                    onChange={() =>
                                                        setisSelected(index)
                                                    }
                                                />
                                            );
                                        }                        
                                })}
                            </div>

                            <div className="flex flex-col justify-center w-full sm:w-9/12 lg:w-10/12">
                                {filterMeals()?.length === 0 ? (
                                    <h1 className='text-center text-xl font-semibold text-darkblue my-6'>Belum ada pesanan!</h1>
                                ) : (
                                    filterMeals()?.map((item, index) => {
                                        return (
                                            <RencanaCard
                                                key={item.id}
                                                item={item}
                                                date={item.delivery.date}
                                                deleteItem={deleteItem}
                                            />
                                        );
                                    })
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center w-full mx-auto px-6">
                                <h2 className="text-blue md:text-2xl sm:text-3xl mini:text-3xl font-bold text-center">Keranjang</h2>
                                <div className="flex flex-col justify-start items-center mt-4">
                                    <div className="shadow-md p-5 rounded-xl w-full">
                                        {props.cart.map((item, index) => {
                                            return (
                                                <RencanaCard
                                                    key={item.id}
                                                    item={item}
                                                    date={item.date}
                                                    deleteItem={deleteItem}
                                                />
                                            );
                                        })}
                                        <hr className="mt-5"></hr>
                                        <div className="rounded mt-2">
                                            <div className="mx-2 mt-2 flex">
                                                <h1 className="text-lg lg:text-md mr-auto font-bold text-blue">Total</h1>
                                                <h1 className="text-lg lg:text-md font-bold text-blue">{'Rp' + formatter.format(total)}</h1>
                                            </div>
                                        </div>
                                        {/*<h1 className="text-sm lg:text-xs font-semibold text-rencanasend mt-3">*/}
                                        {/*    Dikirimkan pada Tanggal*/}
                                        {/*</h1>*/}
                                        {/*<h1 className="text-xl font-semibold font-bold text-blue mt-1">*/}
                                        {/*    31 Desember 2022*/}
                                        {/*</h1>*/}
                                    </div>
                                    <Link href={route('rencana.checkout')} className="bg-blue p-5 mt-5 rounded-md cursor-pointer hover:bg-bluehover transition font-bold w-full">
                                        <h1 className="text-white text-center">Pesan</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
