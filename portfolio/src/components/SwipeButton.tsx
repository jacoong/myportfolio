import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ShinyTextProps from './DynamicCompoents/ShinyTextProps';
import { useLanguage } from '../contexts/LanguageContext';
interface SwipeButtonProps {
  children: React.ReactNode;
  onSwipeComplete: () => void;
  targetRef?: React.RefObject<HTMLElement | null>;
  className?: string;
  disabled?: boolean;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({
  children,
  onSwipeComplete,
  targetRef,
  className = '',
  disabled = false
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const { getText } = useLanguage();
  const handleStart = (clientX: number) => {
    if (disabled || isCompleted) return;
    setIsDragging(true);
    setDragStart(clientX);
    setDragCurrent(clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || disabled || isCompleted) return;
    setDragCurrent(clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || disabled || isCompleted) return;
    
    const dragDistance = dragCurrent - dragStart;
    const slotWidth = 240; // w-60 = 240px
    const buttonWidth = 80; // w-20 = 80px
    const maxMoveDistance = slotWidth - buttonWidth; // 160px
    const threshold = maxMoveDistance * 0.8; // 80% 스와이프 필요 (128px)

    if (dragDistance >= threshold) {
      setIsCompleted(true);
      onSwipeComplete();
      
      // 타겟 ref로 스무스 스크롤
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // 원래 위치로 되돌리기
      setDragCurrent(dragStart);
    }
    
    setIsDragging(false);
  };


  // 전역 마우스 이벤트 처리
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || disabled || isCompleted) return;
      setDragCurrent(e.clientX);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging || disabled || isCompleted) return;
      e.preventDefault();
      setDragCurrent(e.touches[0].clientX);
    };

    const handleGlobalMouseUp = () => {
      if (!isDragging || disabled || isCompleted) return;
      
      const dragDistance = dragCurrent - dragStart;
      const slotWidth = 240; // w-60 = 240px
      const buttonWidth = 80; // w-20 = 80px
      const maxMoveDistance = slotWidth - buttonWidth; // 160px
      const threshold = maxMoveDistance * 0.8; // 80% 스와이프 필요 (128px)

      if (dragDistance >= threshold) {
        setIsCompleted(true);
        onSwipeComplete();
        
        if (targetRef?.current) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        setDragCurrent(dragStart);
      }
      
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      document.addEventListener('touchend', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, dragCurrent, disabled, isCompleted, onSwipeComplete, targetRef]);

  const dragDistance = Math.max(0, dragCurrent - dragStart);
  const slotWidth = 250; // w-60 = 240px
  const buttonWidth = 40; // w-20 = 80px
  const maxMoveDistance = slotWidth - buttonWidth; // 160px (슬롯 끝까지)
  const progress = Math.min(dragDistance / maxMoveDistance, 1);

  return (
    <div>
    <div className="text-center mb-5">
        <span className="responsive-text concept-text-primary">
            {getText('m-0-1')}
        </span>
      <div className="concept-card rounded-lg px-4 py-2 inline-block">
        <span className="responsive-text font-bold concept-text-primary">
          {Math.round(progress * 100)}%
        </span>
      </div>
    </div>
    <div className={`relative  w-60 ${className}`}>
      {/* 슬롯 틀 (배경) */}
       <div className={`${isCompleted ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gray-800 dark:bg-gray-700'} absolute top-0 left-0 w-full h-full rounded-lg border-2 concept-border flex items-center justify-center min-h-[48px] transition-colors duration-300`}>
        <div className="flex items-center space-x-2 pl-20">
        {isCompleted ? getText('m-0-2') : 
          <ShinyTextProps 
            text={getText('m-0-3')}
            disabled={isCompleted}
            speed={3}
             className="font-medium "
          />}
    
        </div>
      </div>

      {/* 스와이프 버튼 */}
      <button
        ref={buttonRef}
        className={`
          absolute top-0 left-0 h-full overflow-hidden concept-gradient-primary 
          text-white rounded-lg font-medium transition-all duration-200 
          flex items-center justify-center space-x-2 select-none
          ${isCompleted ? 'w-0' : 'w-20'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-grab active:cursor-grabbing'}
        `}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        disabled={disabled}
        style={{
          transform: isDragging ? `translateX(${Math.min(dragDistance, maxMoveDistance)}px)` : 'translateX(0)',
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
      {/* 진행률 표시 */}
      <div
        ref={progressRef}
        className="relative w-full inset-0 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-200"
        style={{
          width: `${progress * 100}%`,
          opacity: progress > 0 ? 0.3 : 0
        }}
      ></div>
      
      {/* 버튼 내용 */}
      <div className="relative z-10 flex items-center text-white">
        {children}
        {isCompleted ? (
          <span className="text-green-100">✓</span>
        ) : (
          <ArrowRight 
            className="h-8 w-10 transition-transform duration-200"
            style={{
              transform: isDragging ? `translateX(${dragDistance * 0.5}px)` : 'translateX(0)'
            }}
          />
        )}
      </div>
      </button>
    </div>
    </div>
  );
};

export default SwipeButton;
