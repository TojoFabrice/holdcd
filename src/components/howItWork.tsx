import React from 'react'
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';

function HowItWork() {

    const localActive = useLocale()
    const t = useTranslations('howItWork');

    return (
        <section  className="bg-[#FFF] px-10 py-5 md:px-20 md:py-5  m-auto ">
            <div className=' m-auto max-w-7xl'>
                <div>
                    <div className="text-title	text-2xl font-medium">
                        {t('title')}
                    </div>
                    <span className="w-full bg-minibar h-[2px] block my-5"></span>
                </div>
                <div className=''>
                    <h3 className='mb-10 mt-1 text-sm md:text-lg border-b-2 text-title font-semibold inline-block'>{t('processus_standart')}</h3>
                    <div className='w-full flex justify-center'>
                        <Image
                            src={localActive == "fr" ? "/images/schma1_fr.png" : "/images/schema1_en.png"}
                            alt="fiable"
                            width={1200}
                            height={0}
                        />
                    </div>
                </div>
                <div>
                    <h3 className='mt-16 text-sm md:text-lg border-b-2 text-title font-semibold inline-block'>{t('processus_holdcd')}</h3>
                    <div className='w-full flex justify-center mt-8 md:mt-10'>
                        <Image
                            src={localActive == "fr" ? "/images/schema_fr.png" : "/images/schema_en.png"}
                            alt="fiable"
                            width={1200}
                            height={0}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork
