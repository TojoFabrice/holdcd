import { useTranslations } from 'next-intl';
import React from 'react'

function ContactPage() {

    const t = useTranslations('Contact');


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

            <div>
                
            </div>

        </section>
    )
}

export default ContactPage
