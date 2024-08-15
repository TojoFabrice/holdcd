'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import Image from "next/image";


export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  console.log(localActive);

  const onSelectChange = (lang: string) => {
    const nextLocale = lang;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(localActive);

  useEffect(() => {
    setSelectedLang(localActive);
  }, [localActive]);

  const languages = [
    {
      code: 'en',
      label: 'English',
      icon: <Image
        src="/icons/usa.png"
        alt="logo"
        width={25}
        height={25}
      />
    },
    {
      code: 'fr', 
      label: 'Français', 
      icon: <Image
        src="/icons/france.png"
        alt="logo"
        width={25}
        height={25}
      />
    },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    onSelectChange(lang);
    setDropdownOpen(false);
  };

  return (
    <div>
      <button  
       onClick={toggleDropdown}
       className="inline-flex justify-center w-12 px-4 py-2  bg-secondary border border-text rounded-md shadow-sm hover:bg-gray-50">
        {languages.find(lang => lang.code === localActive)?.icon}
      </button>

      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className="px-4 py-2 text-sm text-title hover:bg-primary hover:text-white w-full text-left flex items-center"
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