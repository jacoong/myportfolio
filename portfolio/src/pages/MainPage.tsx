import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';
import { Sun, Moon, Briefcase, Code, Star, Award, Zap } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import MyStack from '../components/MyStack';
import Contact from '../components/Contact';
import DynamicEntireScroll from '../components/DynamicCompoents/DynamicEntireScroll';
import SwipeButton from '../components/SwipeButton';
import TiltedCard from '../components/DynamicCompoents/ProfileImage';
import ProjectDetailModal from '../components/ProjectDetailModal';
import ProjectsSection from '../components/ProjectsSection';
import RotatingText from '../components/DynamicCompoents/RotatingText';
import BlogSection from '../components/BlogSection';
import { Project,Blog } from '../types/Project';

const MainPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getText } = useLanguage();
  const dynamicScrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);


  const projects: Project[] = [
    {
      id: 1,
      title: getText('proj-1-title'),
      description: getText('proj-1-desc'),
      shortDescription: getText('proj-1-short'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.00.41.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.00.41.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.06.26.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.06.33.png'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS',  'Spring Boot', 'MariaDB'],
      featured: true,
      github: 'https://github.com/jacoong/Clipo-front',
      demo: 'https://clipofront.netlify.app/',
      category: 'main' as const,
      status: 'completed' as const,
      createdAt: '2024-09-12',
      details: {
        overview: getText('proj-1-overview'),
        features: [
          getText('proj-1-feature-1'),
          getText('proj-1-feature-2'),
          getText('proj-1-feature-3'),
          getText('proj-1-feature-4'),
          getText('proj-1-feature-5'),
          getText('proj-1-feature-6')
        ],
        challenges: getText('proj-1-challenge'),
        solutions: getText('proj-1-solution'),
        numberOfDevelopers: 2,
        role: getText('proj-1-role')
      }
    },
    {
      id: 2,
      title: getText('proj-2-title'),
      description: getText('proj-2-desc'),
      shortDescription: getText('proj-2-short'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/runscreen.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.11.28.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/IMG_5834.PNG',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/IMG_5835.PNG'
      ],
      tech: ['Python', 'Movie.py', 'Aws Lamda', 'Aws S3'],
      featured: false,
      github: 'https://github.com/username/taskmanager',
      demo: 'https://www.youtube.com/shorts/br4ZXMDxF1o',
      category: 'main' as const,
      status: 'completed' as const,
      createdAt: '2023-12-15',
      details: {
        overview: '축구를 좋아서 만든 동영상 자동화 시스템으로 기획 구상을 하여 이후에 개발 시작, 일주일에 한번 실행되는 동영상 자동화 시스템 입니다. 이후에 받아온 경기일정을 기반으로 Aws Lamda 를 예약하여 이후에 Telegram Bot으로 경기 데이터를 fetch해 옵니다.',
        features: [
          'Football Api 데이터 패칭',
          'Python 데이터 가공 및 Telegram Bot 연동',
          'Aws Lamda 예약 및 실행',
          'Aws S3 파일 저장',
          'Google Spreadsheet 연동',
          'Movie.py 동영상 자동화',
          'Youtube Api 연동',
        ],
        challenges: 'Movie.py 패키지 적응, Aws Step Function run time error handling',
        solutions: 'Movie.py Offical Documentation을 참고하여 적응, Step Function에서 발생하는 error 종류 파악 및 runtime error 처리',
        numberOfDevelopers: 1,
        role: '1인 개발'
      }
    },
    {
      id: 3,
      title: getText('proj-3-title'),
      description: getText('proj-3-desc'),
      shortDescription: getText('proj-3-short'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/calender+Project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-24+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.06.11.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/calender+Project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-24+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.06.06.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/calender+Project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-24+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.06.11.png'
      ],
      tech: ['React', 'TypeScript','TypeScript', 'Spring Boot', 'Open Ai Api'],
      featured: true,
      github: 'https://github.com/username/ecommerce',
      demo: '/welcome',
      category: 'main' as const,
      status: 'in-progress' as const,
      createdAt: '2024-01-01',
      details: {
        overview: '완전한 기능을 갖춘 온라인 쇼핑몰 플랫폼으로, 사용자 인증, 결제 시스템, 관리자 대시보드를 포함합니다.',
        features: [
          '사용자 인증 및 권한 관리',
          '상품 검색 및 필터링',
          '장바구니 및 위시리스트',
          'Stripe 결제 시스템',
          '관리자 대시보드',
          '실시간 재고 관리'
        ],
        challenges: '대용량 트래픽 처리와 결제 보안',
        solutions: 'Redis 캐싱과 Stripe 보안 API를 활용한 안전한 결제 시스템 구축',
        numberOfDevelopers: 1,
        role: '프론트 개발자'
      }
    },
    {
      id: 4,
      title: getText('proj-4-title'),
      description: getText('proj-4-desc'),
      shortDescription: getText('proj-4-short'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/python_webscrapper/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.09.51.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/python_webscrapper/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.09.51.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/python_webscrapper/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.10.26.png',
      ],
      tech: ['python', 'flask', 'selenium', 'beautifulsoup4', 'requests', 'render', 'html5lib', 'webdriver-manager'],
      featured: true,
      github: 'https://github.com/username/job-scraper',
      demo: 'https://job-scraper-demo.onrender.com',
      category: 'side' as const,
      status: 'completed' as const,
      createdAt: '2025-09-12',
      details: {
        overview: '한국 및 해외 구직사이트에서 채용공고를 실시간으로 수집하고 통합 검색할 수 있는 웹 애플리케이션',
        features: [
          '4개 구직사이트 통합 검색 (원티드, 사람인, RemoteOK, WeWorkRemotely)',
          '사이트별 선택적 검색 기능',
          '지역별 필터링 (서울, 경기, 인천 등)',
          '실시간 채용공고 수집',
          'CSV 파일 다운로드 기능',
          '모바일 반응형 디자인',
          '동적 웹 스크래핑 (Selenium)',
          'API 기반 데이터 수집 (Wanted, RemoteOK)',
          '사이트별 통계 및 필터링',
          '검색 결과 실시간 업데이트'
        ],
        challenges: '다양한 사이트의 접근 제한과 동적 콘텐츠 처리, 안정적인 데이터 수집',
        solutions: 'Selenium과 requests의 하이브리드 접근법, 에러 핸들링 및 폴백 메커니즘 구현',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    },
    {
      id: 5,
      title: getText('proj-5-title'),
      description: getText('proj-5-desc'),
      shortDescription: getText('proj-5-short'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.18.44.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.18.44.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.19.13.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.18.56.png'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Web Speech API', 'Local Storage'],
      featured: false,
      github: 'https://github.com/jacoong/random-chord',
      demo: 'https://random-chord-practice.netlify.app',
      category: 'latest' as const,
      status: 'completed' as const,
      createdAt: '2024-01-15',
      details: {
        overview: '음악가들을 위한 랜덤 코드 연습 앱으로, 다양한 코드 타입과 템포 설정을 통해 체계적인 음악 연습을 제공합니다. Web Speech API를 활용한 음성 안내와 실시간 템포 조절 기능을 포함합니다.',
        features: [
          '랜덤 코드 생성 및 연습',
          '17개 음표 지원 (C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B, C#, D#, F#, G#, A#)',
          '다양한 코드 타입 (Maj7, min7, 7, sus4, add9 등 50+ 종류)',
          '실시간 템포 조절 (1-220 BPM)',
          '박자 시각화 (4박자 점 애니메이션)',
          '음성 안내 시스템 (TTS)',
          '커스텀 코드 추가/제거',
          '설정 저장 (Local Storage)',
          '반응형 디자인',
          'A/B 폼 패턴 선택'
        ],
        challenges: '복잡한 페이지 네비게이션과 실시간 템포 변경 시 박자 동기화 유지',
        solutions: '3-컴포넌트 구조(제목/메인/설정)와 인터벌 기반 박자 애니메이션으로 안정적인 상태 관리 구현',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    },
    {
      id: 6,
      title: getText('proj-6-title'),
      description: getText('proj-6-desc'),
      shortDescription: getText('proj-6-short'),
      image: "https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.19.26.png",
      images: ["https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.20.08.png","https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.49.30.png",
        "https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.20.17.png"
      ],
      tech: ["React", "JavaScript", "CSS3", "HTML5", "React Router"],
      featured: true,
      github: "https://github.com/jacoong/The-Area",
      demo: "https://jacoong.github.io/The-Area/",
      category: "main" as const,
      status: "completed" as const,
      createdAt: "2024-02-01",
      details: {
        overview: "음악, 비주얼 아트, 크리에이터들을 위한 종합 크리에이티브 플랫폼",
        features: [
          "비디오 배경과 로고 애니메이션",
          "음악 비디오 플레이어", 
          "크리에이터 프로필 갤러리",
          "MV 갤러리 시스템",
          "반응형 디자인",
          "페이지 라우팅 시스템"
        ],
        challenges: "복잡한 애니메이션과 비디오 처리, 반응형 디자인 구현",
        solutions: "CSS 애니메이션과 React 상태 관리를 통한 동적 UI 구현",
        numberOfDevelopers: 1,
        role: "풀스택 개발자"
      }
    },
    {
      id: 7,
      title: getText('proj-7-title'),
      description: getText('proj-7-desc'),
      shortDescription: getText('proj-7-short'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.51.44.png',
      images: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.51.44.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.03.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.16.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.20.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.25.png'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      featured: false,
      github: 'https://github.com/jacoong/cocoa-talk',
      demo: 'https://cocoatalkproject.netlify.app/',
      category: 'side' as const,
      status: 'completed' as const,
      createdAt: '2024-01-15',
      details: {
        overview: '카카오톡의 UI/UX를 모방하여 만든 웹사이트로, 축구 테마가 적용된 채팅 애플리케이션입니다. 모바일 우선 설계로 반응형 웹 디자인을 구현했습니다.',
        features: [
          '실시간 시계 표시 기능',
          '모바일 반응형 디자인',
          '축구 경기 일정 및 라이브 스트리밍 섹션',
          '채팅방 목록 및 개별 채팅방',
          '프로필 페이지 (축구 선수 정보 포함)',
          '커뮤니티 및 검색 기능',
          'Font Awesome 아이콘 활용',
          'CSS 애니메이션 효과',
          '모바일 화면 크기 제한 기능'
        ],
        challenges: '모바일 우선 설계와 카카오톡의 복잡한 UI 구조를 웹으로 구현하는 것',
        solutions: 'CSS Grid와 Flexbox를 활용한 레이아웃 구성, JavaScript를 통한 실시간 기능 구현, 모바일 화면 크기 감지 기능 추가',
        numberOfDevelopers: 1,
        role: '풀스택 웹 개발자'
      }
    },
    {
      id: 8,
      title: getText('proj-8-title'),
      description: getText('proj-8-desc'),
      shortDescription: getText('proj-8-short'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.59.05.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.59.05.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.21.01.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.59.05.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.21.11.png'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Geolocation API', 'OpenWeather API', 'YouTube API', 'Local Storage'],
      featured: false,
      github: 'https://github.com/yourusername/momentum-dashboard',
      demo: 'https://momentum-dashboard-demo.netlify.app',
      category: 'latest' as const,
      status: 'completed' as const,
      createdAt: '2024-02-10',
      details: {
        overview: '개인 생산성 향상을 위한 올인원 대시보드로, 실시간 시계, 날씨 정보, 할 일 관리, 음악 플레이어, 명언 표시, 구글 검색 기능을 통합한 현대적인 웹 애플리케이션입니다. 사용자 개인화와 반응형 디자인을 통해 최적의 사용자 경험을 제공합니다.',
        features: [
          '실시간 디지털 시계 및 날짜 표시',
          'Geolocation 기반 현재 위치 날씨 정보',
          'OpenWeather API 연동 (온도, 습도, 체감온도 등)',
          '할 일 목록 관리 (추가, 완료, 삭제)',
          'Local Storage를 활용한 데이터 영구 저장',
          'YouTube API 기반 음악 플레이어',
          '재생목록 관리 (재생, 일시정지, 이전/다음 곡)',
          '랜덤 명언 표시 시스템',
          'Google 검색 통합',
          '시간대별 맞춤 인사말',
          '시간대별 배경 이미지 자동 변경',
          '사용자 이름 설정 및 로그아웃 기능',
          '반응형 디자인 및 애니메이션 효과'
        ],
        challenges: '다중 API 연동과 Local Storage 상태 관리, 실시간 데이터 동기화',
        solutions: '모듈화된 JavaScript 구조와 이벤트 기반 프로그래밍으로 안정적인 상태 관리 구현',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    },
  
    {
      id: 9,
      title: getText('proj-9-title'),
      description: getText('proj-9-desc'),
      shortDescription: getText('proj-9-short'),
      image:  'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.32.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.39.03.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.32.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.19.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.03.png'
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap 5', 'Passport.js', 'Joi'],
      featured: false,
      github: 'https://github.com/username/campground4',
      demo: '/welcome',
      category: 'side' as const,
      status: 'completed' as const,
      createdAt: '2024-01-15',
      details: {
        overview: '캠핑장 정보를 등록하고 관리할 수 있는 웹 애플리케이션입니다. 사용자 인증, 캠핑장 CRUD 기능, 리뷰 시스템을 포함합니다.',
        features: [
          '사용자 회원가입/로그인/로그아웃',
          '캠핑장 정보 등록 (제목, 위치, 가격, 설명, 사진)',
          '캠핑장 목록 조회 및 상세 보기',
          '캠핑장 정보 수정 및 삭제',
          '작성자 권한 관리 (본인 글만 수정/삭제 가능)',
          '리뷰 시스템 (평점 및 텍스트 리뷰)',
          '반응형 웹 디자인 (Bootstrap 5)',
          '플래시 메시지를 통한 사용자 피드백',
          '세션 기반 인증 시스템'
        ],
        challenges: '사용자 인증 시스템 구현과 권한 관리, MongoDB 관계형 데이터 처리',
        solutions: 'Passport.js를 활용한 인증 시스템 구축과 Mongoose populate를 통한 관계형 데이터 조회 최적화',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    }
  
  ];

  const blogs: Blog[] = [
    {
      id: 1,
      title: getText('blog-1-title'),
      description: getText('blog-1-desc'),
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      tech: ['React', 'JavaScript', 'jwt'],
      link: 'https://reinvented-screen-ae1.notion.site/Clipo-Making-a-basic-authentication-System-using-Token-27763c79136b808cb699cf1d751e75f3?source=copy_link',
      date: '2024-05-15'
    },
    {
      id: 2,
      title: getText('blog-2-title'),
      description: getText('blog-2-desc'),
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/jim-n9KxLAjs4wM-unsplash.jpg',
      tech: ['Mongoose', 'JavaScript', 'MongoDb'],
      link: 'https://reinvented-screen-ae1.notion.site/Mongoose-1-ba9f20ad649f43b4b96656dfdd9b2f01?source=copy_link',
      date: '2023-08-20'
    },
    {
      id: 3,
      title: getText('blog-3-title'),
      description: getText('blog-3-desc'),
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
      tech: ['React hook', 'React', 'Redux'],
      link: 'https://reinvented-screen-ae1.notion.site/Mongoose-1-ba9f20ad649f43b4b96656dfdd9b2f01?source=copy_link',
      date: '2024-03-15'
    }
  ];



  
  const resumeSections = [
    {
      children: (
        <div className="flex flex-col items-center justify-center text-center concept-text-primary">
          <div className="mb-16">
          <TiltedCard
            imageSrc="https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/IMG_1064.JPG"
            altText=""
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          
          />
          </div>
        


          <h1 className="responsive-h2 font-bold mb-10">{getText('DES-0')}</h1>
          <p className="responsive-h3 concept-text-secondary">Frontend Developer</p>
          <p className="responsive-text concept-text-secondary mt-4 max-w-2xl mx-auto px-4">
            {getText('m-1')}
          </p>

          <p className="responsive-text concept-text-secondary mt-4 max-w-2xl mx-auto px-4">
            {'yuh0812@gmail.com'}
          </p>
        </div>
      )
    },
    {
      children: (
        <div className="max-w-4xl mx-auto concept-text-primary px-8 h-[100vh] md:h-auto">
        <div className='h-[100%] flex  flex-col justify-center items-center'>
        <h2 className="responsive-h2 font-bold my-[2vh] lg:mb-8 text-center">{getText('about-title')}</h2>


         
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 gap-8">
      
          <div className="concept-card rounded-lg p-6">
            <h3 className="font-semibold mb-6 text-xl border-b pb-2">{getText('experience-title')}</h3>
            <div className="space-y-6">
      
              <div className="experience-item rounded-md p-[1.5vh]   transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-600">{getText('exp-1-company')}</h4>
                    <p className="text-sm font-semibold concept-text-secondary">{getText('exp-1-position')}</p>
                  </div>
                  <span className="text-xs text-gray-500">{getText('exp-1-period')}</span>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                  <li>{getText('exp-1-desc-1')}</li>
                  <li>{getText('exp-1-desc-2')}</li>
                  <li>{getText('exp-1-desc-3')}</li>
                </ul>
              </div>
      
              <div className="experience-item rounded-md p-[1.5vh] transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-600">{getText('exp-2-company')}</h4>
                    <p className="text-sm font-semibold concept-text-secondary">{getText('exp-2-position')}</p>
                  </div>
                  <span className="text-xs text-gray-500">{getText('exp-2-period')}</span>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                  <li>{getText('exp-2-desc-1')}</li>
                  <li>{getText('exp-2-desc-2')}</li>
                  <li>{getText('exp-2-desc-3')}</li>
                </ul>
              </div>
      
              <div className="experience-item rounded-md p-[1.5vh]   transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-600">{getText('exp-3-company')}</h4>
                    <p className="text-sm font-semibold concept-text-secondary">{getText('exp-3-position')}</p>
                  </div>
                  <span className="text-xs text-gray-500">{getText('exp-3-period')}</span>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                  <li>{getText('exp-3-desc-1')}</li>
                  <li>{getText('exp-3-desc-2')}</li>
                </ul>
              </div>
      
            </div>
          </div>
      
          <div className="concept-card rounded-lg p-6">
            <h3 className="font-semibold mb-6 text-xl border-b pb-2">{getText('education-title')}</h3>
            <ul className="space-y-4 concept-text-secondary pt-2">
              <li className='py-3'>
                  <p className="font-bold">{getText('edu-1-school')}</p>
                  <p className="text-sm">{getText('edu-1-major')}</p>
              </li>
              <li>
                  <p className="font-bold">{getText('edu-2-school')}</p>
                  <p className="text-sm">{getText('edu-2-major')}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Slider View */}

       

        <div className="md:hidden relative  mx-auto">
          {/* Debug Info */}

               {/* Progress Bar Indicator */}
               <div className="h-auto" >
            <div className="w-full   bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-1 w-full bg-blue-600 transition-all duration-300 ease-in-out"
                style={{ 
                  width: currentSlide === 0 ? '50%' : '100%',
                  marginLeft: currentSlide === 0 ? '0%' : '50%'
                }}
              />
            </div>
            <div className="flex">
               <button
                 onClick={() => {
                   console.log('경력 버튼 클릭');
                   setCurrentSlide(0);
                 }}
                 className={`py-4  md:py-5 flex-1 text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                   currentSlide === 0 
                     ? 'text-blue-600 dark:text-blue-400' 
                     : 'text-gray-500 dark:text-gray-400'
                 }`}
               >
                 {getText('experience-btn')}
               </button>
               <button
                 onClick={() => {
                   console.log('학력 버튼 클릭');
                   setCurrentSlide(1);
                 }}
                 className={`py-3 sm:py-4  md:py-5 flex-1 text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                   currentSlide === 1 
                     ? 'text-blue-600 dark:text-blue-400' 
                     : 'text-gray-500 dark:text-gray-400'
                 }`}
               >
                 {getText('education-btn')}
               </button>
            </div>
          </div>


          <div className="overflow-hidden">
            <div 
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1: Experience */}
              <div className=" w-full flex-shrink-0">
                <div className="concept-card rounded-lg p-2 sm:p-4 md:p-6">
                  <div className="">
                    <div className="experience-item rounded-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-blue-600">{getText('exp-1-company')}</h4>
                          <span className="text-xs text-gray-500">{getText('exp-1-period')}</span>
                          <p className="text-sm font-semibold concept-text-secondary">{getText('exp-1-position')}</p>
                        </div>
                
                      </div>
                      <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                        <li>{getText('exp-1-desc-1')}</li>
                        <li>{getText('exp-1-desc-2')}</li>
                        <li>{getText('exp-1-desc-3')}</li>
                      </ul>
                    </div>
                    <div className="experience-item rounded-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-blue-600">{getText('exp-2-company')}</h4>
                          <span className="text-xs text-gray-500">{getText('exp-2-period')}</span>
                          <p className="text-sm font-semibold concept-text-secondary">{getText('exp-2-position')}</p>
                        </div>
                     
                      </div>
                      <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                        <li>{getText('exp-2-desc-1')}</li>
                        <li>{getText('exp-2-desc-2')}</li>
                        <li>{getText('exp-2-desc-3')}</li>
                      </ul>
                    </div>
                    <div className="experience-item rounded-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-blue-600">{getText('exp-3-company')}</h4>
                          <span className="text-xs text-gray-500">{getText('exp-3-period')}</span>
                          <p className="text-sm font-semibold concept-text-secondary">{getText('exp-3-position')}</p>
                        </div>
                       
                      </div>
                      <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                        <li>{getText('exp-3-desc-1')}</li>
                        <li>{getText('exp-3-desc-2')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2: Education */}
              <div className=" w-full flex-shrink-0">
          <div className="concept-card rounded-lg p-6">
            <h3 className="font-semibold mb-6 text-xl border-b pb-2">{getText('education-title')}</h3>
            <ul className="space-y-4 concept-text-secondary pt-2">
              <li className='py-3'>
                  <p className="font-bold">{getText('edu-1-school')}</p>
                  <p className="text-sm">{getText('edu-1-major')}</p>
              </li>
              <li>
                  <p className="font-bold">{getText('edu-2-school')}</p>
                  <p className="text-sm">{getText('edu-2-major')}</p>
              </li>
            </ul>
          </div>
              </div>
            </div>
          </div>

     
        </div>
        </div>
      </div>
      )
    },
    {
      children: (
        <div className='flex flex-col'>
               <h1 className="max-w-4xl mx-auto concept-text-primary px-8 responsive-h2 font-bold mb-2 md:mb-8 text-center">{getText('DES-5')}</h1>
               <MyStack></MyStack>
        </div>
      )
    },
    {
      children: (
        <div className='flex flex-col'>
          <h1 className="max-w-4xl mx-auto concept-text-primary px-8 responsive-h2 font-bold mb-8 text-center">{getText('c-0')}</h1>
          <Contact />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen concept-bg transition-colors duration-300">
      {/* Header */}
      <header className="concept-card shadow-sm transition-colors duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 concept-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h2 className="concept-text-primary">{getText('h-1')}</h2>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <LanguageSelector />
              
              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-lg concept-interactive-hover concept-text-secondary transition-colors duration-200"
              >
                {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16 px-4"
        >
            <div className='h-screen flex flex-col justify-center items-center'>
              <div className='flex flex-col items-center justify-center '>
                <h1 className="font-bold responsive-h1 concept-text-primary mb-4 text-center">
                  {getText('m-0')}
                    </h1>
                  <div className='responsive-h1 pb-5 w-full flex items-center justify-center'>
                      <RotatingText
                      texts={getText('rotating-texts').split(',')}
                      mainClassName="px-2 sm:px-3 md:px-5 concept-gradient-primary text-white overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg font-bold"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-2"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
            
              </div>
              <div>
              <h1 className="responsive-h1 font-bold concept-text-primary mb-4">
                    {getText('m-0-0')}
              </h1>
              </div>
              <div className="flex py-6 sm:py-10 flex-col sm:flex-row gap-4 items-center justify-center">
                <SwipeButton
                  onSwipeComplete={() => {
                  
                  }}
                  targetRef={dynamicScrollRef}
                  className="h-12 sm:h-16 w-64 sm:w-72"
                >
                  <></>
                </SwipeButton>
              </div>
          </div>


        
        </motion.section>

        {/* DynamicEntireScroll - motion.section 밖으로 이동 */}
        <div ref={dynamicScrollRef}>
          <DynamicEntireScroll sections={resumeSections} targetRef={dynamicScrollRef} />
        </div>



     
        {/* Projects Section with Slider */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 mx-auto w-[95%]">
          <ProjectsSection projects={projects} />
        </section>

        <section className="py-16 mx-auto w-[90%]">
            <BlogSection blogs={blogs}/>
        </section>

        {/* Project Detail Modal */}
        <ProjectDetailModal />
   
    </div>
  );
};

export default MainPage;
