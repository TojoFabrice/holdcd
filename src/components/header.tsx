"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from '@/types/menu';



export default function Header() {
  const [sticky, setSticky] = useState(false);

  const t = useTranslations('Navigation');

  const menuData: Menu[] = [
    {
      id: 1,
      title: t('home'),
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: t('about'),
      path: "#about",
      newTab: false,
    },
    {
      id: 3,
      title: t('advantage'),
      path: "#advantage",
      newTab: false,
    },
    {
      id: 4,
      title: t('howTowork'),
      path: "#howToWorl",
      newTab: false,
    },
    {
      id: 5,
      title: t('service'),
      path: "/service",
      newTab: false,
    },
    {
      id: 6,
      title: t('contact'),
      path: "/contact",
      newTab: false,
    }
  ]

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const usePathName = usePathname();


  return (
    <header
    className={`header left-0 top-0 z-40 flex w-full items-center ${
      sticky
        ? "fixed z-[9999] bg-[#1A2665] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition "
        : "absolute bg-transparent"
    }`}
    >
      <div className="w-full mx-10">
        <div className="relative  flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"} `}
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={10}
                className=""
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-end px-4">
            <div>
              <nav
                id="navbarCollapse"
                className="navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50  px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 

                    invisible top-[120%] opacity-0
                  "
                // className="navbar absolute"
              >
                <ul className="block lg:flex lg:space-x-12">
                  {
                    menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 
                            ${usePathName === menuItem.path
                              ? "text-white text-gray"
                              : "text-white hover:text-primary"
                            }`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
