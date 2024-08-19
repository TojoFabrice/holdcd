"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from '@/types/menu';


export default function Header() {
  const [sticky, setSticky] = useState(false);
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const t = useTranslations('Navigation');
  const usePathName = usePathname();
  const router = useRouter();


  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, menuItem: Menu) => {
    e.preventDefault();
    const { sectionId, path } = menuItem;

    if (usePathName === '/' && sectionId) {
      if (sectionId) {
        // Scroll to the section if sectionId is provided
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 70;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      } else {
        // Scroll to the top if no sectionId is provided
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate to the correct page first
      if (path) {
        router.push(path);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

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
      path: "/#about",
      newTab: false,
      sectionId: "about"
    },
    {
      id: 3,
      title: t('advantage'),
      path: "/#advantage",
      newTab: false,
      sectionId: "advantage"
    },
    {
      id: 4,
      title: t('howTowork'),
      path: "/#howToWork",
      newTab: false,
      sectionId: "howTowork"
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

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
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
              <div className='absolute right-20 top-1/2 translate-y-[-50%] block lg:hidden'>
                <LocalSwitcher />
              </div>

              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                />
              </button>

              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50  px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 
                    ${navbarOpen
                    ? "visibility top-full opacity-80 bg-primary flex flex-col items-center"
                    : "invisible top-[120%] opacity-0"
                  }
                  `}
              // className="navbar absolute"
              >
                <ul className="block lg:flex lg:space-x-12">
                  {
                    menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <Link
                          href={menuItem.path}
                          onClick={(e) => menuItem.sectionId && handleScrollToSection(e, menuItem)}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 justify-center
                            ${usePathName === menuItem.path
                              ? "text-secondary hover:text-white"
                              : (sticky || navbarOpen ? "text-white hover:text-secondary" : "text-primary hover:text-secondary")
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

          <div className='pl-8 hidden lg:block'>
            <LocalSwitcher />
          </div>

        </div>
      </div>
    </header>
  );
}
