import Service from '@/components/service/service';
import { useTranslations } from 'next-intl';
import React from 'react'

function TotoPage() {

  const t = useTranslations('Service');
  
  return (
    <section id="about" className="bg-[#F9F8F8] p-10 mt-16 w-4/5 m-auto">
      <div>
        <div className="text-title	text-3xl font-medium">
          {t("title")}
        </div>
        <span className="w-full bg-minibar h-[2px] block my-5"></span>
      </div>
      <div className="text-xl text-text font-light">
        <Service positionImage='left'/>
        <Service positionImage='right'/>
        <Service positionImage='left'/>
        <Service positionImage='right'/>
      </div>
    </section>
  )
}

export default TotoPage
