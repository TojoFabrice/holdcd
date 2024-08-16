'use client'
import { useTranslations } from 'next-intl';
import React from 'react'


function AboutSection() {

  const t = useTranslations('About');
  const listItems = t('content.list');

  console.log(listItems);
  
  
  return (
    <section id="about" className="bg-[#F9F8F8] p-10 mt-16 m-auto">
      <div>
        <div className="text-title	text-3xl font-medium">
          {t("title")}
        </div>
        <span className="w-full bg-minibar h-[2px] block my-5"></span>
      </div>
      <div className="text-xl text-text font-light">
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
    </section>
  )
}

export default AboutSection
