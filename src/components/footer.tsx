
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className='p-10 text-center bg-primary'>
      <p>{t('copyright')}</p>
    </div>
  );
}