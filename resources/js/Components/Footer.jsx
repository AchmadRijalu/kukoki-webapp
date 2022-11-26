import React from "react";

export default function Footer() {
    return (
        <div className="bg-blue-bg bg-cover bg-no-repeat text-white py-3 px-8">
            <img src="img/logo/logo.svg" className="w-32 md:w-40 mt-2" alt="" />
            <div className="md:grid grid-cols-3 gap-5 lg:gap-20 mt-5 md:px-0">
                <div className="mb-3 flex justify-center">
                    <div>
                        <h2 className="text-2xl font-bold">Kantor</h2>
                        <p>
                            UC Ventures, CitraLand CBD Boulevard, Made,
                            Sambikerep, Surabaya, Jawa Timur 60219
                        </p>
                    </div>
                </div>
                <div className="mb-3 flex md:justify-center">
                    <div>
                        <h2 className="text-2xl font-bold">Hubungi Kami</h2>
                        <div className="flex items-center gap-2 py-2">
                            <img
                                src="img/icon/email.svg"
                                alt=""
                                className="w-7 md:w-10"
                            />
                            <p>kukoki@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <img
                                src="img/icon/whatsapp.svg"
                                alt=""
                                className="w-7 md:w-10"
                            />
                            <p>081231149830</p>
                        </div>
                    </div>
                </div>
                <div className="mb-3 flex md:justify-center">
                    <div>
                        <h2 className="text-2xl font-bold">Sosial Media</h2>
                        <div className="flex items-center gap-2 py-2">
                            <img
                                src="img/icon/instagram.svg"
                                alt=""
                                className="w-7 md:w-10"
                            />
                            <p>Kukoki</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
