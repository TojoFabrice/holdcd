import React from 'react'
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';

function HowItWork() {

    const localActive = useLocale()
    const t = useTranslations('howItWork');

    return (
        <section  className="bg-[#F9F8F8] p-10 md:px-20 md:py-16  m-auto">
            <div>
                <div className="text-title	text-3xl font-medium">
                    {t('title')}
                </div>
                <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>
            <div className='flex justify-center'>
                <div className='w-full flex justify-center'>
                    <Image
                        src={localActive == "fr" ? "/images/CM1.png" : "/images/CM1_EN.png"}
                        alt="fiable"
                        width={2000}
                        height={0}
                    />
                </div>
            </div>
            <div className='w-full flex justify-center mt-12'>
                <Image
                    src={localActive == "fr" ? "/images/CM2.png" : "/images/CM2_EN.png"}
                    alt="fiable"
                    width={2000}
                    height={0}
                />
            </div>
        </section>
    )
}

export default HowItWork
