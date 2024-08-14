import { useTranslations } from 'next-intl';
import React from 'react'
import Card from './card/card';

function Avatanges() {
    const t = useTranslations('Advantage');
    return (
        <section id='avantage' className='p-10 mt-16'>
            <div>
                <div className="text-title	text-3xl font-medium">
                    {t("title")}
                </div>
                <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>
            <div className='flex gap-14 mt-8'>
                <Card />
                <Card />
                <Card />
            </div>
            <div className='text-text text-center mt-10 text-xl font-light'>
                Laissez-nous prendre en charge les tâches fastidieuses d’approvisionnement, libérant ainsi vos ressources et vos efforts pour des activités qui apportent une réelle valeur ajoutée à votre entreprise.
            </div>
        </section>
    )
}

export default Avatanges
