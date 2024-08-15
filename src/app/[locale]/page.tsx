import AboutSection from '@/components/aboutSection';
import Avatanges from '@/components/avatanges';
import Hero from '@/components/hero';
import HowItWork from '@/components/howItWork';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      
      <div className=''>
        <div className='w-4/5 m-auto'>
          <AboutSection />
        </div>

        <div className='w-4/5 m-auto'>
          <Avatanges />
        </div>

        <div className='w-4/5 m-auto'>
          <HowItWork />
        </div>
        
      </div>

    </div>

  );
}