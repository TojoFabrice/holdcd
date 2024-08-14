import React from 'react'

function AboutSection() {
  return (
    <section id='about' className='w-4/5 bg-[#F9F8F8] p-10 mt-16 m-auto'>
      <div>
        <div className='text-title	text-3xl font-medium'>
          A propos de nous
        </div>
        <span className='w-full bg-minibar h-[2px] block my-5'></span>
      </div>
      <div className='text-xl text-text font-light'>
      Depuis plus de deux décennies, Hold CD s&apos;est imposée comme un acteur de référence dans l&apos;approvisionnement en fournitures industrielles, matières premières et pièces de rechange pour les entreprises industrielles, à l&apos;échelle mondiale. <br></br><br></br>
      Nous avons tissé un vaste réseau de fournisseurs sur les marchés européens et nord-américains, ce qui nous permet d&apos;accéder à des informations précises et fiables en un temps réduit, ainsi qu&apos;à des conditions tarifaires et de livraison avantageuses.
      Nos clients choisissent de déléguer une partie de leur processus d&apos;approvisionnement à Hold CD pour rationaliser leurs opérations et améliorer leur efficacité. Cela se traduit par:
      <ul className='list-disc ml-10'>
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
