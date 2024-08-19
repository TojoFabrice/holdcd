"use client"

import AboutSection from '@/components/aboutSection';
import Avatanges from '@/components/avatanges';
import Hero from '@/components/hero';
import HowItWork from '@/components/howItWork';
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


export default function HomePage() {
  const t = useTranslations('HomePage');

  const router = useRouter();
  const aboutRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const howItWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const offsetTop = element.offsetTop - 75;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }, [router]);

  return (
    <div>
      <div className=''>
        <div
          className='m-auto'
          id="about" ref={aboutRef}
        >
          <AboutSection />
        </div>

        <div className='m-auto bg-primary' id='advantage' ref={advantagesRef}>
          <Avatanges />
        </div>

        <div className='m-auto' id='howTowork' ref={howItWorkRef}>
          <HowItWork />
        </div>

      </div>

    </div>

  );
}