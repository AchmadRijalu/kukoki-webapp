import React from "react";

export default function RencanaDateCard(props) {
    const weekday = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
    ];
    let day = weekday[props.option.getDay()];

    return (
        <div
            className={`flex flex-col justify-start items-center ${
                props.selected
                    ? `bg-green text-test`
                    : `bg-rencanacard text-rencanatext`
            } p-6 lg:p-3 rounded-lg text-rencanatext mx-3 mb-5 cursor-pointer`}
            onClick={props.onChange}
            selected={props.selected}
        >
            <h1 className="text-xs my-1 justify-self-start font-semibold">
                {day}
            </h1>
            <h1 className="text-2xl font-semibold">{props.option.getDate()}</h1>
        </div>
    );
}
