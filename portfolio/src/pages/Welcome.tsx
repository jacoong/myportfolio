import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import SelectLanguage from '../components/SelectLanguage';
import TextType from '../components/DynamicCompoents/MovieText';
import Particles from '../components/DynamicCompoents/Particles';

const Welcome: React.FC = () => {
  const { setTheme } = useTheme();
  const { getText, lang } = useLanguage();
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState<boolean | null>(null);

  const handleThemeSelect = (darkMode: boolean) => {
    setTheme(darkMode);
    setSelectedTheme(darkMode);
  };

  const handleWelcome = () => {
    navigate('/welcome');
  };

  return (
    <Particles
      particleColors={['#ffffff', '#ffffff']}
      particleCount={1000}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    >
      <div className="absolute inset-0 flex flex-col justify-between items-center p-4 sm:p-6 z-10 pointer-events-none min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full px-1 sm:px-4 h-full flex flex-col justify-center"
      >
  
        {/* Header Section */}
        <div className="text-center pointer-events-auto">
          <SelectLanguage />
          
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-2 sm:mb-3"
          >
            <span className="text-sm sm:text-base concept-text-secondary">
              {getText('w-7')} {lang.toUpperCase()}
            </span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-4 sm:px-16 h-24"
          >
            <TextType 
              text={[getText('w-0-1'),getText('w-0-2'),getText('w-0-3')]}
              typingSpeed={100}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
              className="h-full text-2xl sm:text-3xl md:text-4xl font-bold concept-text-primary"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl concept-text-secondary py-2 sm:py-3"
          >
            {getText('w-1')}
          </motion.p>
        </div>

        {/* Theme Selection - Center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 pointer-events-auto pb-[8vh] pt-[2vh]"
        >
          {/* Light Mode */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleThemeSelect(false)}
            className={`group relative p-3 sm:p-4 h-40 sm:h-40 md:h-52 concept-card rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 concept-border concept-border-hover ${
              selectedTheme === false ? 'ring-2 sm:ring-4 ring-blue-500 ring-opacity-50' : ''
            }`}
          >
            <div className="text-center h-full flex flex-col justify-between">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 md:h-10 md:w-10 text-white" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold concept-text-primary mb-1">
                  {getText('w-2')}
                </h3>
                <p className="px-2 text-xs sm:text-sm concept-text-secondary mb-2">
                  {getText('w-3')}
                </p>
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </motion.button>

          {/* Dark Mode */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleThemeSelect(true)}
            className={`group relative p-3 sm:p-4 h-40 sm:h-40 md:h-52 concept-card rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 concept-border concept-border-hover ${
              selectedTheme === true ? 'ring-2 sm:ring-4 ring-purple-500 ring-opacity-50' : ''
            }`}
          >
            <div className="text-center h-full flex flex-col justify-between">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Moon className="h-5 w-5 sm:h-6 sm:w-6 md:h-10 md:w-10 text-white" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold concept-text-primary mb-1">
                  {getText('w-4')}
                </h3>
                <p className="px-2 text-xs sm:text-sm concept-text-secondary mb-2">
                  {getText('w-5')}
                </p>
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-gray-600 dark:bg-gray-700 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 dark:bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="h-5 w-5 text-purple-400 dark:text-purple-300" />
            </div>
          </motion.button>
        </motion.div>

        {/* Bottom Section - Welcome Button & Footer */}
        <div className="text-center pointer-events-auto">
          {/* Welcome Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: selectedTheme !== null ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWelcome}
              disabled={selectedTheme === null}
              className={`px-6 sm:px-8 py-2 sm:py-3 text-white text-base sm:text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                selectedTheme !== null 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 cursor-pointer' 
                  : 'bg-gray-400 cursor-not-allowed opacity-50'
              }`}
            >
              Welcome!
            </motion.button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-xs sm:text-sm concept-text-secondary">
              {getText('w-6')}
            </p>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </Particles>
  );
};

export default Welcome;
