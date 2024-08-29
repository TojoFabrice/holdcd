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
        src="/icons/eng.svg"
        alt="logo"
        width={30}
        height={30}
      />,
      btnLabel: "Language"
    },
    {
      code: 'fr',
      label: 'Français',
      icon: <Image
        src="/icons/fr.svg"
        alt="logo"
        width={30}
        height={30}
      />,
      btnLabel: "Langue"
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
        className="inline-flex justify-center w-[auto] px-4 py-2 text-white  border border-text rounded-md shadow-sm hover:bg-gray-50">
        {languages.find(lang => lang.code === localActive)?.btnLabel}
      </button>

      {dropdownOpen && (
        <div id="dropdown-menu" className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`px-4 py-2 text-sm cursor-pointer text-title hover:bg-primary hover:text-white w-full text-left flex items-center ${
                lang.code === selectedLang ? 'bg-gray-100' : ''
              }`}
               role="menuitem"
              >
                {lang.icon}
                <span className="ml-2">{lang.label}</span>
              </div>
            ))} 
          </div>
        </div>
      )}
    </div>
  );
}