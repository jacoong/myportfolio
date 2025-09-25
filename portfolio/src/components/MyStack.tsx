import React, { useState } from 'react';
import StackIcon from './StackIcon';
import { useLanguage } from '../contexts/LanguageContext';

// 타입 정의
interface TechItem {
  id: number;
  name: string;
  category: 'language' | 'library' | 'deployment' | 'design';
  icon: string;
}

interface FilterTab {
  key: 'All' | 'language' | 'library' | 'deployment' | 'design';
  label: string;
}

// 기술 스택 데이터
const techData: TechItem[] = [
  // 언어 및 프레임워크
  { id: 1, name: 'JavaScript', category: 'language', icon: '/svg/Develope skill icon/JavaScript.svg' },
  { id: 2, name: 'React', category: 'language', icon: '/svg/Develope skill icon/React.svg' },
  { id: 3, name: 'TypeScript', category: 'language', icon: '/svg/Develope skill icon/TypeScript.svg' },
  { id: 4, name: 'Python', category: 'language', icon: '/svg/Develope skill icon/Python-Dark.svg' },
  { id: 5, name: 'HTML', category: 'language', icon: '/svg/Develope skill icon/HTML.svg' },
  { id: 6, name: 'CSS', category: 'language', icon: '/svg/Develope skill icon/CSS.svg' },

  // 라이브러리
  { id: 11, name: 'React Query', category: 'library', icon: '/svg/Develope skill icon/React.svg' },
  { id: 12, name: 'Redux', category: 'library', icon: '/svg/Develope skill icon/Redux.svg' },
  { id: 13, name: 'Sass', category: 'library', icon: '/svg/Develope skill icon/Sass.svg' },

  // 환경 및 배포
  { id: 20, name: 'Flask', category: 'deployment', icon: '/svg/Develope skill icon/Flask-Dark.svg' },
  { id: 21, name: 'MongoDB', category: 'deployment', icon: '/svg/Develope skill icon/MongoDB.svg' },
  { id: 22, name: 'Github', category: 'deployment', icon: '/svg/Develope skill icon/Github-Dark.svg' },
  { id: 23, name: 'Git', category: 'deployment', icon: '/svg/Develope skill icon/Git.svg' },

  // 디자인 및 협업
  { id: 30, name: 'Figma', category: 'design', icon: '/svg/Develope skill icon/Figma-Dark.svg' },
  { id: 31, name: 'Notion', category: 'design', icon: '/svg/Develope skill icon/Notion-Dark.svg' },
];

// 필터 탭 데이터
const filterTabs: FilterTab[] = [
  { key: 'All', label: 'stack-all' },
  { key: 'language', label: 'stack-language' },
  { key: 'library', label:'stack-library' },
  { key: 'deployment', label: 'stack-deployment' },
  { key: 'design', label: 'stack-design' },
];

const StackIntroducer: React.FC = () => {
  const { getText } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const handleActiveFilter = (value: string): void => {
    if (activeFilter === value) {
      setActiveFilter('All');
    } else {
      setActiveFilter(value);
    }
  };

  return (
        <div className="max-w-2xl mx-auto py-4 sm:px-3 lg:px-8">
        {/* 필터 버튼 그룹 */}
        <div className="flex items-center justify-center concept-card rounded-full p-1.5 mb-7 backdrop-blur-sm">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleActiveFilter(tab.key)}
              className={`px-[1vh] py-2 sm:py-2 sm:px-4 text-xs sm:text-base font-semibold rounded-full transition-colors duration-300 ease-in-out focus:outline-none
                ${
                  activeFilter === tab.key
                    ? 'concept-interactive-selected text-white dark:text-black'
                    : 'bg-transparent concept-text-secondary concept-interactive-hover'
                }
              `}
            >
              {tab.key === 'All' ? getText('p-0') : getText(tab.label)}
            </button>
          ))}
        </div>


        <div className="px-14 md:p-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
          {techData.map((item) => (
            <div
              key={item.id}
              className={`relative group transition-all duration-100 ease-in-out
                ${activeFilter !== item.category && activeFilter !== 'All' ? 'opacity-20 blur-sm' : 'opacity-100'}`
              }
            >
              <div
                className="flex flex-col items-center justify-center gap-3 p-4 concept-card rounded-xl aspect-square
                           transition-all duration-300 transform concept-interactive-hover group-hover:scale-105"
              >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                        <StackIcon icon={item.icon} fallbackText={item.name.charAt(0)}></StackIcon>
                  </div>
              </div>

              {/* 툴팁: 활성화된 카테고리의 아이템에만 표시 */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-full w-max max-w-[200px] px-3 py-1.5 
                            text-xs text-center concept-text-primary concept-card rounded-lg shadow-lg 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                            ${activeFilter !== item.category && activeFilter !== 'All' ? 'hidden' : ''}`}
              >
                {item.name}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-concept-card-light dark:border-t-concept-card-dark"></div>
              </div>
            </div>
          ))}
        </div>
        </div>
  );
};

export default StackIntroducer;