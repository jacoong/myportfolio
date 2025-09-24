import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, User, Code, Lightbulb, CheckCircle } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetailModal: React.FC = () => {
  const { isOpen, selectedProject, closeModal } = useModal();
  const { getText } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!selectedProject) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="p-6">
                  {/* Image Gallery */}
                  <div className="relative  gap-8 h-[850px] md:h-[500px] mb-8 grid grid-cols-1 md:grid-cols-[7fr_3fr]">
                    <div className="relative h-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full max-h-[700px] object-cover object-top"
                      />
                      
                      {/* Navigation Arrows */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}
                      
                      {/* Image Indicators */}
                      {selectedProject.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                index === currentImageIndex 
                                  ? 'bg-white' 
                                  : 'bg-white/50 hover:bg-white/75'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                     {/* Sidebar */}
                     <div className="space-y-6 flex flex-col justify-end">
                      {/* Project Meta */}

                         {/* Action Buttons */}
                         <div className="space-y-3">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Github className="h-5 w-5 mr-2" />
                          {getText('pd-1')}
                        </a>
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center px-4 py-3 concept-gradient-primary text-white rounded-lg font-medium hover:concept-gradient-primary-hover transition-all duration-200"
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          {getText('pd-2')}
                        </a>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                          {getText('pd-3')}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                            <span className="responsive-text text-gray-600 dark:text-gray-300">
                              {getText('pd-4')} {selectedProject.details.numberOfDevelopers}{getText('pd-5')}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-3 text-gray-500" />
                            <span className="responsive-text text-gray-600 dark:text-gray-300">
                              {getText('pd-6')} {selectedProject.details.role}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl  p-4 md:p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                          {getText('pd-7')}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                   
                    </div>
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Overview */}
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <Code className="h-6 w-6 mr-2 text-blue-500" />
                          {getText('pd-8')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed responsive-text">
                          {selectedProject.details.overview}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                          {getText('pd-9')}
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedProject.details.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 responsive-text">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges & Solutions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                            {getText('pd-10')}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 responsive-text">
                            {selectedProject.details.challenges}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                            {getText('pd-11')}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 responsive-text">
                            {selectedProject.details.solutions}
                          </p>
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
