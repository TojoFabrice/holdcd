"use client"
import MapComponent from '@/components/map/MapComponent';
import QrCode from '@/components/QRCode/QrCode';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import React from 'react'

function ContactPage() {

    const t = useTranslations('Contact');

    const name = t('name')

    const latitude = 45.71927256803402; // Example latitude (Eiffel Tower, Paris)
    const longitude =  4.960192782070582; // Example longitude (Eiffel Tower, Paris)


    return (
        <div className='px-10 py-5 md:px-16 md:py-5'>
            <section
                className="px-0 md:px-10  m-auto w-full max-w-7xl"
            // style={{
            //     boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',

            // }}
            >
                <div>
                    <div className="text-title	text-2xl font-medium">
                        {t("title")}
                    </div>
                    <span className="w-full bg-minibar h-[2px] block my-5"></span>
                </div>

                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='relative w-full h-60 md:w-1/2'>
                            <div className='mb-2'>
                                <p className='text-lg font-semibold text-title'>{t('offices')}</p>
                            </div>
                            <div className='relative w-full h-full'>
                                <MapComponent 
                                    lat={44.84365211742628}
                                    lng={-0.5734254809420911}
                                    address="9 Rue de Condé 33064 BORDEAUX CEDEX"
                                />
                            </div>

                        </div>
                        <div className='w-full h-60 mt-10 md:mt-0 md:w-1/2'>
                            <div className='mb-2'>
                                <p  className='text-lg font-semibold text-title'>{t('warehouse')}</p>
                            </div>
                            <div className='relative w-full h-full'>
                                <MapComponent 
                                    lat={latitude}
                                    lng={longitude}
                                    address="HOLD CD"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5 mt-4'>
                        <div className='w-full h-auto md:w-1/2 bg-fondContact px-6 py-10'>
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
                                    <input type="text" className="grow" placeholder={name} />
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
                                    <button className="btn btn-secondary text-white">{t('send')}</button>
                                </div>
                            </form>
                        </div>
                        <div className='flex justify-center w-full h-96 md:w-1/2 md:h-auto bg-white px-6 py-10'>
                            <div className='text-text w-60'>

                                <p><span className='font-semibold'>Email :</span> contact@holdcd.com</p>
                                <p><span className='font-semibold'>{t('phone')} :</span>  + 33 6 71 94 07 40 </p>
                                <div className='flex justify-center flex-col items-center gap-2 text-text mt-4'>
                                    <QrCode />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ContactPage


