import { useTranslations } from 'next-intl';
import React from 'react'
import Image from "next/image";


function Card() {
    const t = useTranslations('Advantage');

    return (

        <div
            className='w-full md:w-1/3'
            style={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                borderRadius: '8px',
            }}
        >
            <div>
                <Image
                    src="/images/card/fiable.png"
                    alt="fiable"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className='p-10'>
                <div className=' font-semibold text-title text-2xl text-center'>
                    {t("card.simplicity")}
                </div>
                <div className='text-center mt-3 text-text'>
                    Un seul point de contact tout au long du processus, depuis votre demande de devis jusqu’à la livraison.<br></br>
                    Nous maîtrisons plusieurs langues pour assurer une communication fluide.
                </div>
            </div>
        </div>
    )
}

export default Card
