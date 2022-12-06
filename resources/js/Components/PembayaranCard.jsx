import React from "react";

export default function PembayaranCard() {
    return (
        <div className="bg-white shadow-lg rounded flex items-center py-8 px-4 border-b-2 cursor-pointer">
            <div className="w-28 mr-8">
            <img className="min-w-ful w-full" src="img/icon/bca.svg" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-lg font-bold">Kartu Debit/Credit</h1>
            </div>
            <img className="w-4 ml-auto" src="img/icon/arrow.svg" />
        </div>
    );
}