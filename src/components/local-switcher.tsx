'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import Image from "next/image";


export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(localActive);

  useEffect(() => {
    setSelectedLang(localActive);
  }, [localActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElement = document.getElementById('dropdown-menu');
      const buttonElement = document.getElementById('dropdown-button');

      if (
        dropdownOpen &&
        event.target instanceof Node &&
        !dropdownElement?.contains(event.target) &&
        !buttonElement?.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const languages = [
    {
      code: 'en',
      label: 'English',
      icon: <Image
        src="/icons/royaume-uni.png"
        alt="logo"
        width={30}
        height={30}
      />
    },
    {
      code: 'fr', 
      label: 'Français', 
      icon: <Image
        src="/icons/france.png"
        alt="logo"
        width={30}
        height={30}
      />
    },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  

  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    const currentPath = window.location.pathname;
    startTransition(() => {
      router.replace(`/${lang}${currentPath}`);
    });
    setDropdownOpen(false);
  };


  return (
    <div>
      <button  
       id="dropdown-button"
       onClick={toggleDropdown}
       className="inline-flex justify-center w-12 px-4 py-2   border border-text rounded-md shadow-sm hover:bg-gray-50">
        {languages.find(lang => lang.code === localActive)?.icon}
      </button>

      {dropdownOpen && (
        <div id="dropdown-menu" className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
               // className="px-4 py-2 text-sm text-title hover:bg-primary hover:text-white w-full text-left flex items-center"
               className={`px-4 py-2 text-sm text-title hover:bg-primary hover:text-white w-full text-left flex items-center ${
                lang.code === selectedLang ? 'bg-gray-100' : ''
              }`}
               role="menuitem"
              >
                {lang.icon}
                <span className="ml-2">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}