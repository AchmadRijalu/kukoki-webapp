import React, { useState } from "react";
import { Link, Head, usePage, useForm } from "@inertiajs/inertia-react";
export default function PreferensiCard(props) {

    // const [selected, setSelected] = useState(false);
    // const handleClick = () => {
    //     setSelected(!selected);
    // }
    const { dataCard, setData, post, processing, errors } = useForm({
        // category: props.ta

    })
    
    let data = props.dataid
    
    return (
        
        <>
            <div onClick={props.clicking} dataid={data} className={` w-44 h-44 2xl:mr-4 xl:mr-6 lg:mr-6 md:mr-7 sm:mr-6 sm:mt-0 mini:mt-6 rounded-md p-2 relative cursor-pointer rp ${props.dataselect ? ' border-blue border ring-blue ring-4 transition delay-75' : ' border-none ring-none ring-0 transition delay-75'}   ${data == 1 ? 'bg-dagingsayur' : ''} ${data == 2 ? 'bg-cepatmudah' : ''} ${data == 3 ? 'bg-sayur' : ''} ${data == 4 ? 'bg-roti' : ''} ${data == 5 ? 'bg-produksusu' : ''}    ${data == 6 ? 'bg-proteintinggi' : ''} ${data == 7 ? 'bg-makananlaut' : ''} ${data == 8 ? 'bg-menudiet' : ''}`}>

                <h1 className="font-bold text-black text-2xl" >
                    {props.name}
                </h1>
                <img src={props.UbahData ? `/`+ props.image: props.image} alt="" className=" blockSelect h-24 w-32 absolute top-20 left-12" />
            </div>
        </>

    );
}