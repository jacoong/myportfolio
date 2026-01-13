import React, { useEffect, useState, useCallback } from 'react';
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

  // 섹션별 정확한 스크롤 위치 계산 함수 - 마지막 섹션 특별 처리
  const getSectionScrollTop = useCallback((index: number): number => {
    const windowHeight = window.innerHeight;
    const targetOffsetTop = targetRef?.current?.offsetTop || 0;
    
    // 마지막 섹션인지 확인
    const isLastSection = index === sections.length - 1;
    
    if (isLastSection) {
      // 마지막 섹션: 3배 공간 (300vh)
      return targetOffsetTop + ((index) * windowHeight * 2);
    } else {
      // 일반 섹션: 2배 공간 (200vh)
      return targetOffsetTop + ((index) * windowHeight * 2);
    }
  }, [targetRef, sections.length]);

  // 현재 스크롤 위치에서 활성 섹션 계산
  const getActiveSectionFromScroll = useCallback((): number => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const targetOffsetTop = targetRef?.current?.offsetTop || 0;
    
    // 타겟 요소보다 위에 있으면 섹션 0
    if (scrollTop < targetOffsetTop) {
      return 0;
    }
    
    // 각 섹션의 범위를 기준으로 활성 섹션 결정 (마지막 섹션 특별 처리)
    // 섹션 1: targetOffsetTop ~ targetOffsetTop + 200vh
    // 섹션 2: targetOffsetTop + 200vh ~ targetOffsetTop + 400vh
    // 섹션 3: targetOffsetTop + 400vh ~ targetOffsetTop + 700vh (마지막은 300vh)
    const relativeScrollTop = scrollTop - targetOffsetTop;
    
    // 마지막 섹션 전까지는 200vh씩 계산
    const normalSectionsHeight = (sections.length - 1) * windowHeight * 2;
    
    if (relativeScrollTop < normalSectionsHeight) {
      // 일반 섹션들
      const sectionIndex = Math.floor(relativeScrollTop / (windowHeight * 2));
      return Math.min(sectionIndex, sections.length - 2);
    } else {
      // 마지막 섹션 범위
      return sections.length - 1;
    }
  }, [sections.length, targetRef]);

  // 도트 클릭 핸들러
  const handleDotClick = useCallback((index: number) => {
    setActiveSectionNumber(index);
    
    const scrollTop = getSectionScrollTop(index);
    
   
    
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  }, [getSectionScrollTop, targetRef]);

  useEffect(() => {
    
    
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
    : { height: `${(sections.length - 1) * 200 + 300}vh` };


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