"use client"

import AboutSection from '@/components/aboutSection';
import Avatanges from '@/components/avatanges';
import Hero from '@/components/hero';
import HowItWork from '@/components/howItWork';
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      
      <div className=''>
        <motion.div 
          className='m-auto'
        >
          <AboutSection />
        </motion.div>

        <div className='m-auto bg-primary'>
          <Avatanges />
        </div>

        <div className='m-auto'>
          <HowItWork />
        </div>
        
      </div>

    </div>

  );
}