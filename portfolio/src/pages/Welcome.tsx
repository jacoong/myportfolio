import React from 'react';
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

  const handleThemeSelect = (darkMode: boolean) => {
    setTheme(darkMode);
    // Small delay for smooth transition
    setTimeout(() => {
      navigate('/welcome');
    }, 300);
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
      <div className="absolute inset-0 flex items-center justify-center p-6 z-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full px-4"
      >
  
        {/* Header */}
        <div className="text-center mb-12 pointer-events-auto">
          <SelectLanguage />
          
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-3"
          >
            <span className="text-sm concept-text-secondary">
              {getText('w-7')} {lang.toUpperCase()}
            </span>
          </motion.div>


          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
             className="h-40 my-6"
          >
            <TextType 
              text={[getText('w-0-1'),getText('w-0-2'),getText('w-0-3')]}
              typingSpeed={100}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
              className="h-40 text-3xl sm:text-4xl md:text-6xl font-bold concept-text-primary"
            />
            </motion.div>
   
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl concept-text-secondary"
          >
            {getText('w-1')}
          </motion.p>

          {/* Detected Language Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center space-x-3 mt-6"
          >
          </motion.div>


        </div>

        {/* Theme Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-8 pointer-events-auto"
        >
          {/* Light Mode */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleThemeSelect(false)}
            className="group relative p-8 concept-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 concept-border concept-border-hover"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold concept-text-primary mb-2">
                {getText('w-2')}
              </h3>
              <p className="concept-text-secondary mb-4">
                {getText('w-3')}
              </p>
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
            className="group relative p-8 concept-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 concept-border concept-border-hover"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Moon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold concept-text-primary mb-2">
                {getText('w-4')}
              </h3>
              <p className="concept-text-secondary mb-4">
                {getText('w-5')}
              </p>
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

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center pointer-events-auto"
        >
          <p className="text-sm concept-text-secondary">
            {getText('w-6')}
          </p>
        </motion.div>
      </motion.div>
      </div>
    </Particles>
  );
};

export default Welcome;
