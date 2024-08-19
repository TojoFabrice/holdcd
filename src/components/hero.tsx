'use client'
import React, { useEffect, useState } from 'react'
import '../styles/hero.css'
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

function Hero() {

  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    // Update the state when the pathname changes
    setCurrentPath(pathname);
  }, [pathname]);

  const t = useTranslations('Hero');

  const getBackgroundClass = () => {
    if (currentPath == "/contact") {
      return "hero-contact"
    } else {
      return "hero"
    }

  };


  return (
    <section
      id="home"
      className={`${getBackgroundClass()} relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]`}
    >
      <div className="font-bold text-white absolute bottom-6 text-2xl bg-black bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-md">
  {t('slogan')}
</div>
    </section>
  )
}

export default Hero
