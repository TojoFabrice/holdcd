import { useTranslations } from 'next-intl';
import React from 'react'

function AboutSection() {

  const t = useTranslations('About');
  
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
        {
          
        }
        <li>une transmission rapide des informations,</li>
        <li>la disponibilité des produits,</li>
        <li>une rentabilité accrue,</li>
        <li>…ou une combinaison de ces avantages.</li>
      </ul>
      <br></br>
      Peu importe où vous vous trouvez dans le monde, il vous suffit d&apos;envoyer un courriel avec les références nécessaires, et nos experts vous fourniront une offre globale dans un délai de 24 à 48 heures. Toutes les références, même provenant de différents fournisseurs, seront intégrées en un seul processus : une seule offre, un seul colis et un processus d&apos;importation simplifié.

      </div>
    </section>
  )
}

export default AboutSection
