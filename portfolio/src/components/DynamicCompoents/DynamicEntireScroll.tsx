import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Circle } from 'lucide-react';

interface Section {
  children: React.ReactNode;
}

interface DynamicEntireScrollProps {
  sections: Section[];
  containerHeight?: number | null;
  dotPosition?: 'right' | 'left' | 'bottom' | 'top';
  dotColor?: string;
  fadeDuration?: number;
  targetRef?: React.RefObject<HTMLDivElement | null>;
}

const DynamicEntireScroll: React.FC<DynamicEntireScrollProps> = ({ 
  sections, 
  containerHeight = null,
  dotPosition = 'right',
  dotColor = 'white',
  fadeDuration = 500,
  targetRef
}) => {
  const [activeSectionNumber, setActiveSectionNumber] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // 섹션별 정확한 스크롤 위치 계산 함수 - 통일된 로직
  const getSectionScrollTop = useCallback((index: number): number => {
    const windowHeight = window.innerHeight;
    const targetOffsetTop = targetRef?.current?.offsetTop || 0;
    
    // Dot 클릭 시 100vh, 200vh, 300vh로 스크롤
    // 섹션 1: 100vh
    // 섹션 2: 200vh  
    // 섹션 3: 300vh
    return targetOffsetTop + ((index) * windowHeight);
  }, [targetRef]);

  // 현재 스크롤 위치에서 활성 섹션 계산
  const getActiveSectionFromScroll = useCallback((): number => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const targetOffsetTop = targetRef?.current?.offsetTop || 0;
    
    // 타겟 요소보다 위에 있으면 섹션 0
    if (scrollTop < targetOffsetTop) {
      return 0;
    }
    
    // 각 섹션의 범위를 기준으로 활성 섹션 결정
    // 섹션 1: targetOffsetTop ~ targetOffsetTop + 150vh
    // 섹션 2: targetOffsetTop + 150vh ~ targetOffsetTop + 300vh
    // 섹션 3: targetOffsetTop + 300vh ~ targetOffsetTop + 450vh
    const relativeScrollTop = scrollTop - targetOffsetTop;
    const numberOfSections = sections.length;
    // 두 번째 섹션부터: 150vh + (index-1) * 100vh
    const adjustedScrollTop = relativeScrollTop - (windowHeight *1);
    const sectionIndex = Math.floor(adjustedScrollTop / windowHeight) + 1;
    
    return sectionIndex
  }, [sections.length, targetRef]);

  // 도트 클릭 핸들러
  const handleDotClick = useCallback((index: number) => {
    setActiveSectionNumber(index);
    
    const scrollTop = getSectionScrollTop(index);
    
    console.log('Dot clicked - Section:', index, 'ScrollTop:', scrollTop, 'TargetRef offsetTop:', targetRef?.current?.offsetTop);
    
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  }, [getSectionScrollTop, targetRef]);

  useEffect(() => {
    console.log('DynamicEntireScroll: Setting up scroll listener for', sections.length, 'sections');
    
    // 초기화 지연
    const initTimer = setTimeout(() => {
      setIsInitialized(true);
      console.log('DynamicEntireScroll: Initialized, scroll listener now active');
      
      // 초기 활성 섹션 설정
      const initialSection = getActiveSectionFromScroll();
      if (initialSection >= 0) {
        setActiveSectionNumber(initialSection);
      }
    }, 200);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      if (!isInitialized) return;
      
      const newActiveSection = getActiveSectionFromScroll();
      
      if (newActiveSection >= 0) {
        console.log('Scroll-based section change:', newActiveSection, 'scrollTop:', window.pageYOffset);
        setActiveSectionNumber(newActiveSection);
      }
    };

    // 디바운스된 스크롤 핸들러
    let scrollTimeout: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    
    // 리사이즈 이벤트도 처리 (뷰포트 크기 변경 시)
    const handleResize = () => {
      if (isInitialized) {
        const newActiveSection = getActiveSectionFromScroll();
        if (newActiveSection >= 0) {
          setActiveSectionNumber(newActiveSection);
        }
      }
    };
    
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(initTimer);
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [sections.length, isInitialized, getActiveSectionFromScroll]);

  const containerHeightStyle = containerHeight 
    ? { height: `${containerHeight}vh` }
    : { height: `${150 + (sections.length - 1) * 100}vh` };

  console.log('DynamicEntireScroll: Container height', containerHeightStyle.height, 'Active section:', activeSectionNumber);

  return (
    <div className="w-full relative concept-bg" style={containerHeightStyle}>
      {/* 메인 컨테이너 - sticky로 고정 */}
      <div className="sticky top-0 w-full h-screen">
        {/* 배경 섹션들 */}
        {sections.map((section, index) => (
          <div
            key={`sectionKey${index}`}
            className={`
              absolute inset-0 w-full h-full transition-opacity duration-500 pointer-events-auto
              ${activeSectionNumber === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            `}
            style={{ 
              zIndex: activeSectionNumber === index ? 20 : 0
            }}
          >
            {/* 섹션 내용 */}
            <div className="w-full h-full flex items-center justify-center concept-bg pointer-events-auto relative z-20">
              {section.children}
            </div>
          </div>
        ))}

        {/* 도트 네비게이션 */}
        <div className={`
          absolute flex flex-col gap-2 sm:gap-3 z-30
          ${dotPosition === 'right' ? 'right-4 sm:right-8 top-1/2 -translate-y-1/2' : 
            dotPosition === 'left' ? 'left-4 sm:left-8 top-1/2 -translate-y-1/2' :
            dotPosition === 'bottom' ? 'bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex-row' :
            'top-4 sm:top-8 left-1/2 -translate-x-1/2 flex-row'}
        `}>
          {sections.map((section, index) => (
            <button
              key={`dotContainerKey${index}`}
              className={`
                transition-all duration-300 ease-in-out cursor-pointer
                concept-interactive-hover rounded-full p-1 sm:p-1.5
                ${activeSectionNumber === index ? 'opacity-100 scale-110' : 'opacity-40'}
              `}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to section ${index + 1}`}
            >
              <Circle 
                size={activeSectionNumber === index ? 10 : 6}
                fill={activeSectionNumber === index ? 'currentColor' : 'none'}
                className={`
                  rounded-full transition-all duration-300 sm:w-3 sm:h-3
                  ${activeSectionNumber === index 
                    ? 'concept-interactive-selected' 
                    : 'concept-text-secondary'
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicEntireScroll;