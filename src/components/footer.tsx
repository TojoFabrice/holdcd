
"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@/types/menu';


export default function Footer() {
  const t = useTranslations('Footer');
  const tn = useTranslations('Navigation');

  const menuData: Menu[] = [
    {
      id: 1,
      title: tn('home'),
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: tn('about'),
      path: "#about",
      newTab: false,
    },
    {
      id: 3,
      title: tn('advantage'),
      path: "#advantage",
      newTab: false,
    },
    {
      id: 4,
      title: tn('howTowork'),
      path: "#howToWork",
      newTab: false,
    },
    {
      id: 5,
      title: tn('service'),
      path: "/service",
      newTab: false,
    },
    {
      id: 6,
      title: tn('contact'),
      path: "/contact",
      newTab: false,
    }
  ]

  const usePathName = usePathname();

  const currentYear = new Date().getFullYear();


  return (
    <div className='p-10 text-center bg-primary'>
      <div className='w-full'>
        <div className='flex justify-center p-5'>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={90}
            height={10}
            className=""
          />
        </div>
        <div className='flex justify-center'>
          <ul className="block lg:flex lg:space-x-12">
            {
              menuData.map((menuItem, index) => (
                <li key={index} className="group relative">
                  <Link
                    href={menuItem.path}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 justify-center
                            ${usePathName === menuItem.path
                        ? "text-secondary hover:text-white"
                        : "text-white hover:text-secondary"
                      }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='flex justify-center gap-10 py-5'>
          <Image
            src="/images/reseau_sociaux/linkedin.png"
            alt="logo"
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/images/reseau_sociaux/instagram.png"
            alt="logo"
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/images/reseau_sociaux/twitter.png"
            alt="logo"
            width={40}
            height={40}
            className=""
          />
        </div>
        <div className='py-5 text-white'>
          <p> © Copyright  {currentYear} </p>
        </div>
      </div>
    </div>
  );
}