import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const SelectLanguage: React.FC = () => {
  const { lang, setLang, countries } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);


  const handleLanguageSelect = (selectedLang: string) => {
    setLang(selectedLang);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center mb-3">
      <motion.div
        whileHover={!isOpen ? { scale: 1.05 } : {}}
        whileTap={!isOpen ? { scale: 0.98 } : {}}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0 }}
        className="concept-card rounded-xl sm:rounded-2xl shadow-lg border-2 concept-border overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            // Collapsed state - single flag
            <motion.button
              key="collapsed"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20  flex items-center justify-center hover:shadow-xl concept-border-hover transition-all duration-300 cursor-pointer"
            >
              <img 
                src={`/svg/countries/${lang}.svg`} 
                alt={`${lang} flag`} 
                className="w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8 rounded-sm"
              />
            </motion.button>
          ) : (
            // Expanded state - horizontal layout
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.3 }}
              className="h-14 sm:h-16 md:h-20 lg:h-24 flex items-center px-2 sm:px-3 md:px-4 lg:px-6 space-x-2 sm:space-x-3 lg:space-x-4"
            >
              {countries.map((countryCode, index) => (
                  <motion.button
                    key={countryCode}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleLanguageSelect(countryCode)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 lg:space-y-1.5 transition-all duration-200 ${
                      lang === countryCode
                        ? 'concept-interactive-selected border-2 concept-border shadow-lg'
                        : 'concept-card border-2 concept-border concept-interactive-hover concept-border-hover hover:shadow-md'
                    }`}
                  >
                  <img 
                    src={`/svg/countries/${countryCode}.svg`} 
                    alt={`${countryCode} flag`} 
                    className="w-6 h-4 sm:w-7 sm:h-5 md:w-8 md:h-6 lg:w-10 lg:h-7 rounded-sm"
                  />
                  <span className={`text-xs sm:text-xs md:text-sm lg:text-sm font-medium transition-colors duration-300 ${
                    lang === countryCode
                      ? 'text-white font-bold drop-shadow-sm'
                      : 'concept-text-primary font-semibold'
                  }`}>
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SelectLanguage;
