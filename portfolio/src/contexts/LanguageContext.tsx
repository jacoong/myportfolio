import React, { createContext, useContext, useEffect, useState } from 'react';
import LanguagePack from '../components/LanguagePack';

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  countries: string[];
  getText: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<string>('ko');
  const countries = ['en', 'yt', 'jp', 'cn', 'de', 'ko']; // 지원하는 언어들
  const localStorageKey = 'userLanguage';

  useEffect(() => {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      // 로컬스토리지에 저장된 언어가 있으면
      if (countries.includes(savedData)) {
        setLang(savedData);
      } else {
        localStorage.setItem(localStorageKey, 'ko'); // 지원하지 않으면 한국어로 설정
        setLang('ko');
      }
    } else {
      // 로컬스토리지에 없으면 브라우저 언어 감지
      const userLanguage = navigator.language.substring(0, 2);
      console.log('Detected browser language:', userLanguage);
      
      // 브라우저 언어 코드를 우리 시스템 코드로 매핑
      const languageMapping: { [key: string]: string } = {
        'en': 'en',
        'fr': 'yt',
        'ja': 'jp',
        'zh': 'cn',
        'de': 'de',
        'ko': 'ko',
      };
      
      const mappedLanguage = languageMapping[userLanguage] || 'ko';
      localStorage.setItem(localStorageKey, mappedLanguage);
      setLang(mappedLanguage);
    }
  }, []);

  const handleSetLang = (newLang: string) => {
    if (countries.includes(newLang)) {
      setLang(newLang);
      localStorage.setItem(localStorageKey, newLang);
    }
  };

  const getText = (key: string): string => {
    const currentLang = LanguagePack[lang as keyof typeof LanguagePack];
    if (currentLang && key in currentLang) {
      return currentLang[key as keyof typeof currentLang];
    }
    // Fallback to English
    if (key in LanguagePack.en) {
      return LanguagePack.en[key as keyof typeof LanguagePack.en];
    }
    // If key doesn't exist, return the key itself
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, countries, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};
