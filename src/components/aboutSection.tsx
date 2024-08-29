import { useTranslations } from 'next-intl';
import React from 'react'

function AboutSection() {

  const t = useTranslations('About');
  
  return (
    <section className="bg-[#F9F8F8] px-10 py-5 md:px-20 md:py-5 mt-0 m-auto">
      <div className='max-w-7xl m-auto'>
        <div>
          <div className="text-title	text-2xl font-medium">
            {t("title")}
          </div>
          <span className="w-full bg-minibar h-[2px] block my-5"></span>
        </div>
        <div className="text-base text-text font-light">
          {t("content.paraph1")} <br></br><br></br>
          {t("content.paraph2")} <br></br><br></br>
          {t("content.paraph3")}
          <ul className="list-disc ml-10">
            <li>{t("content.li1")}</li>
            <li>{t("content.li2")}</li>
            <li>{t("content.li3")}</li>
            <li>{t("content.li4")}</li>
          </ul>
          <br></br>
          {t("content.paraph4")}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
