import { useTranslations } from 'next-intl';
import React from 'react'
import Card from './card/card';

function Avatanges() {
    const t = useTranslations('Advantage');
    return (
        <section id='advantage' className='p-10 md:px-20 md:py-16 '>
            <div>
                <div className="text-minibar text-3xl font-medium">
                    {t("title")}
                </div>
                <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>
            <div className='flex flex-col items-center md:flex-row md:justify-evenly gap-14 mt-8'>
                <Card image='/images/card/simplicity.png' title={t("card.simplicity.title")}  c1={t("card.simplicity.content.c1")} c2={t("card.simplicity.content.c2")}/>
                <Card image='/images/card/fiable.png' title={t("card.reability.title")}  c1={t("card.reability.content.c1")} c2={t("card.reability.content.c2")}/>
                <Card image='/images/card/time.png' title={t("card.costTimeSaving.title")}  c1={t("card.costTimeSaving.content.c1")} />
            </div>
            <div className='text-minibar text-center mt-14 text-xl font-semibold'>
                {t('card.resume')}
            </div>
        </section>
    )
}

export default Avatanges
