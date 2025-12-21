import React, { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface SectionLink {
  id: string;
  label: string;
  targetRef: React.RefObject<HTMLElement | null>;
}

interface RemoteBarProps {
  sections: SectionLink[];
  onNavigate?: (targetRef: React.RefObject<HTMLElement | null>) => void;
}

const RemoteBar: React.FC<RemoteBarProps> = ({ sections, onNavigate }) => {
  const { getText } = useLanguage();
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 80, damping: 20, mass: 0.8 });
  const floatingY = useTransform(smoothY, value => value * 0.2);

  useEffect(() => {
    setActiveId(sections[0]?.id ?? '');
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentId = sections[0]?.id ?? '';

      sections.forEach(section => {
        const element = section.targetRef.current;
        if (!element) return;
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= offsetTop - 120) {
          currentId = section.id;
        }
      });

      setActiveId(prev => (currentId && prev !== currentId ? currentId : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavigate = (section: SectionLink) => {
    if (onNavigate) {
      onNavigate(section.targetRef);
    } else if (section.targetRef.current) {
      section.targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveId(section.id);
  };

  const renderedSections = useMemo(
    () =>
      sections.map(section => {
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => handleNavigate(section)}
            className={`text-left px-4 py-2 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 ${
              isActive
                ? 'concept-gradient-primary text-white shadow-lg translate-x-1'
                : 'concept-text-secondary hover:translate-x-1 hover:text-blue-500'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold whitespace-nowrap">{section.label}</span>
              <span
                className={`w-1.5 h-8 rounded-full bg-white/60 transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              ></span>
            </div>
          </button>
        );
      }),
    [sections, activeId]
  );

  if (!sections.length) return null;

  return (
    <div className="hidden md:flex fixed left-4 xl:left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
      <motion.aside
        className="pointer-events-auto"
        style={{ y: floatingY }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="concept-card border border-white/10 dark:border-white/5 rounded-2xl px-4 py-5 shadow-xl backdrop-blur-lg space-y-3">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">
            {getText('remote-title')}
          </p>
          <div className="flex flex-col gap-2">{renderedSections}</div>
        </div>
      </motion.aside>
    </div>
  );
};

export default RemoteBar;
