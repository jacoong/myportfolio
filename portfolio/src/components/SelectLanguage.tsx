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
        className="concept-card rounded-2xl shadow-lg border-2 concept-border overflow-hidden h-20"
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
              className="w-20 h-20 flex items-center justify-center hover:shadow-xl concept-border-hover transition-all duration-300 cursor-pointer"
            >
              <img 
                src={`/svg/countries/${lang}.svg`} 
                alt={`${lang} flag`} 
                className="w-12 h-8 rounded-sm"
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
              className="h-20 flex items-center px-4 space-x-3"
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
                    className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
                      lang === countryCode
                        ? 'concept-interactive-selected border-2 concept-border shadow-lg'
                        : 'concept-card border-2 concept-border concept-interactive-hover concept-border-hover hover:shadow-md'
                    }`}
                  >
                  <img 
                    src={`/svg/countries/${countryCode}.svg`} 
                    alt={`${countryCode} flag`} 
                    className="w-8 h-6 rounded-sm"
                  />
                  <span className={`text-xs font-medium transition-colors duration-300 ${
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
