import AboutSection from '@/components/aboutSection';
import Hero from '@/components/hero';
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Hero />
      <AboutSection />
    </div>

  );
}