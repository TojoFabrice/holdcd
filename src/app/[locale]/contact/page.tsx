"use client"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import React from 'react'

function ContactPage() {

    const t = useTranslations('Contact');

    const latitude = 48.8584; // Example latitude (Eiffel Tower, Paris)
    const longitude = 2.2945; // Example longitude (Eiffel Tower, Paris)
    const redirectToGoogleMapsWithMarker = (latitude: number, longitude: number): any => {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed&markers=color:red%7C${latitude},${longitude}`;
        window.open(url, '_blank');
    }

    const handleRedirect = () => {
        redirectToGoogleMapsWithMarker(latitude, longitude);
    };

    return (
        <section
            className="p-10 mt-16 m-auto w-4/5"
            style={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',

            }}
        >
            <div>
                <div className="text-title	text-3xl font-medium">
                    {t("title")}
                </div>
                <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>

            <div className='flex'>
                <div className='w-2/5 bg-fondContact px-6 py-10'>
                    <form className=''>
                        <label className="input  mb-4 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                        <label className="input mb-4 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <textarea
                            placeholder="Message"
                            className="textarea mb-4 textarea-sm w-full">
                        </textarea>
                        <div className='flex justify-center'>
                            <button className="btn btn-secondary text-white">Envoyer</button>
                        </div>
                    </form>
                </div>
                <div className='w-2/5 bg-grayFonced px-6 py-10'>
                </div>
                <div className='w-3/5'>
                    <div className="relative w-full h-full cursor-pointer" onClick={handleRedirect} >
                        <Image
                             src="/images/carte.png"
                            alt="carte"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactPage


