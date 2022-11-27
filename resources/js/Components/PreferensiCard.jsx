import React from "react";

export default function PreferensiCard(props){

    
    return (
        <div className={`bg-yellow-400 w-44 h-44 rounded-md p-2 relative ${props.id == 1? 'bg-dagingsayur':''} ${props.id == 2? 'bg-cepatmudah':''} ${props.id == 3? 'bg-sayur':''} ${props.id == 4? 'bg-roti':''}  ${props.id == 6? 'bg-proteintinggi':''} ${props.id == 7? 'bg-makananlaut':''} ${props.id == 8? 'bg-menudiet':''}`}>
            <h1 className="font-bold text-black text-2xl">
                {props.name}
            </h1>
            
            <img src={props.image} alt=""  className="  h-24 w-32 absolute top-20 left-12"/>
            
            
        </div>
    );
}