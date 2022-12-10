import React from "react";

export default function RencanaRincian(props) {
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    const month = months[props?.date?.getMonth()];
    const date = props?.date?.getDate();
    const year = props?.date?.getFullYear();

    const format = (num) => {
        let stringReplace = String(num).replace(
            /(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,
            "$1,"
        );
        stringReplace = stringReplace.replace(",", ".");
        return stringReplace;
    };
    function countTotal() {
        if (props.totalPrice() == 0) {
            return 0;
        }
        return props.totalPrice() + 20000;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="shadow-md p-5 rounded-xl w-full sm:w-9/12">
                <h1 className="text-lg lg:text-md font-bold text-blue">
                    Rincian Pembayaran
                </h1>
                <div className="border-gray border rounded mt-2">
                    <div className="mx-2 my-2 flex">
                        <h1 className="text-md lg:text-sm mr-auto">
                            Harga Makanan
                        </h1>
                        <h1 className="text-md lg:text-sm font-semibold">
                            Rp{format(props.totalPrice())}
                        </h1>
                    </div>
                    <div className="mx-2 my-2 flex">
                        <h1 className="text-md lg:text-sm mr-auto">
                            Ongkos Kirim
                        </h1>
                        <h1 className="text-md lg:text-sm font-semibold">
                            Rp{format(props.totalPrice() ? 20000 : 0)}
                        </h1>
                    </div>
                    <hr className="mx-3 mt-5"></hr>
                    <div className="mx-2 my-2 flex">
                        <h1 className="text-lg lg:text-md mr-auto font-bold text-blue">
                            Total
                        </h1>
                        <h1 className="text-lg lg:text-md font-bold text-blue">
                            Rp{format(countTotal())}
                        </h1>
                    </div>
                </div>
                <h1 className="text-sm lg:text-xs font-semibold text-rencanasend mt-3">
                    Dikirimkan pada Tanggal
                </h1>
                {props.date && (
                    <h1 className="text-lg font-semibold font-bold text-blue mt-1">
                        {`${date + 1} ${month} ${year}`}
                    </h1>
                )}
            </div>
            <a href={route('rencana.checkout')} className="bg-blue p-5 mt-5 rounded-md cursor-pointer sm:w-9/12 w-full">
                <h1 className="text-white text-center">Lanjutkan Pembayaran</h1>
            </a>
        </div>
    );
}
