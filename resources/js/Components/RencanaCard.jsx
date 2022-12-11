import React from "react";

export default function RencanaCard(props) {

    const format = num => {
        let stringReplace = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
        stringReplace = stringReplace.replace(",", ".")
        return stringReplace
    }

    return (
        <div className="bg-white m-3 shadow-lg rounded-lg flex items-center py-4 px-6">
            <img className="w-28 lg:w-24 rounded-lg mr-4 lg:mr-5" src={`img/menu/${props.item.meal.img_path}`} />
            <div className="flex flex-col">
                <h1 className="text-xl lg:text-xl font-bold text-blue">
                    {props.item.meal.name}
                </h1>
                <div className="flex text-xs font-normal text-rencanatext mt-1">
                    <div className="mr-10 flex items-center">
                        <img className="w-6 lg:w-5 inline-block mr-1" src="img/icon/group.svg"/>
                        <span className="text-md">4 orang</span>
                    </div>

                    <div className="mr-10 flex items-center">
                        <span><img className="w-6 md:w-5 lg:w-4 inline-block mr-1" src="img/icon/chefhat.svg"/></span>
                        <span className="text-md">{props.item.meal.duration} min</span>
                    </div>
                </div>
                <h1 className="font-semibold text-darkblue mt-2 text-lg lg:text-md">Rp{format(props.item.meal.price)}</h1>
            </div>
            <img className="w-11 lg:w-9 ml-auto cursor-pointer" src="img/icon/delete.png" onClick={() => {
                props.deleteItem(props.item.id)
                }}/>
        </div>
    );
}
