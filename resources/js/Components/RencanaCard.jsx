import React from "react";

export default function RencanaCard() {
    return (
        <div className="bg-white m-3 shadow-lg rounded flex items-center py-4 px-6">
            <img className="w-28 lg:w-24  mr-4 lg:mr-5" src="img/food/pesto.png" />
            <div className="flex flex-col">
                <h1 className="text-xl lg:text-xl font-bold text-blue">
                    Pesto Pasta Chicken
                </h1>
                <div className="flex text-xs font-normal text-rencanatext mt-1">
                    <div className="mr-10 flex items-center">
                        <img className="w-6 lg:w-5 inline-block mr-1" src="img/icon/group.svg"/>
                        <span className="text-md">4 orang</span>
                    </div>

                    <div className="mr-10 flex items-center">
                        <span><img className="w-6 md:w-5 lg:w-4 inline-block mr-1" src="img/icon/chefhat.svg"/></span>
                        <span className="text-md">30 min</span>
                    </div>
                </div>
                <h1 className="font-semibold text-darkblue mt-2 text-lg lg:text-md">Rp60.000</h1>
            </div>
            <img className="w-11 lg:w-9 ml-auto cursor-pointer" src="img/icon/delete.png" />
        </div>
    );
}
