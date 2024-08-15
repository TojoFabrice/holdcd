import Service from '@/components/service/service';
import { useTranslations } from 'next-intl';
import React from 'react'

function TotoPage() {

  const t = useTranslations('Service');

  return (
    <section
      className="bg-service-bg p-10 mt-16 w-4/5 m-auto"
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
      <div className="text-xl text-text font-light">
        <Service positionImage='left' image="/images/b2b.jpg" />
        <Service positionImage='right' image="/images/conseil.jpg" />
        <Service positionImage='left' image="/images/suivi.jpg" />
        <Service positionImage='right' image="/images/Mail-sent.jpg" />
      </div>
    </section>
  )
}

export default TotoPage
