import React, { useState } from "react";

export default function PreferensiCard(props) {

    const [selected, setSelected] = useState(false);
    const handleClick = () => {
        setSelected(!selected);
    }
    let data = props.dataid

    return (
        <>
            <div onClick={props.clicking} dataid={data}className={` w-44 h-44 rounded-md p-2 relative cursor-pointer ${props.dataselect ? ' border-blue border ring-blue ring-4 transition delay-75' : ' border-none ring-none ring-0 transition delay-75'}   ${props.id == 1 ? 'bg-dagingsayur' : ''} ${props.id == 2 ? 'bg-cepatmudah' : ''} ${props.id == 3 ? 'bg-sayur' : ''} ${props.id == 4 ? 'bg-roti' : ''} ${props.id == 5 ? 'bg-produksusu' : ''}    ${props.id == 6 ? 'bg-proteintinggi' : ''} ${props.id == 7 ? 'bg-makananlaut' : ''} ${props.id == 8 ? 'bg-menudiet' : ''}`}>

                <h1 className="font-bold text-black text-2xl" >
                    {props.name}
                </h1>
                <img src={props.image} alt="" className=" blockSelect h-24 w-32 absolute top-20 left-12" />
            </div>
        </>

    );
}