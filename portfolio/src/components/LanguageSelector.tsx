import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { lang, setLang, countries } = useLanguage();

const languageNames: { [key: string]: string } = {
  'en': 'English',
  'yt': 'Français',
  'jp': '日本語',
  'cn': '中文',
  'de': 'Deutsch',
  'ko': '한국어',
};

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg concept-interactive-hover concept-text-secondary transition-colors duration-200">
        <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
        <span className="font-medium">{languageNames[lang] || lang.toUpperCase()}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 sm:w-48 concept-card rounded-lg shadow-lg concept-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1 sm:py-2">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setLang(country)}
              className={`w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 concept-interactive-hover transition-colors duration-200 ${
                lang === country 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'concept-text-secondary'
              }`}
            >
              {languageNames[country] || country.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
