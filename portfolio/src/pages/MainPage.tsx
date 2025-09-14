import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';
import { Sun, Moon, User, Briefcase, Code, Mail, Github, Linkedin, Twitter, ArrowRight, Star, Award, Zap, ExternalLink } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import MyStack from '../components/MyStack';
import DynamicEntireScroll from '../components/DynamicCompoents/DynamicEntireScroll';
import SwipeButton from '../components/SwipeButton';
import ShinyTextProps from '../components/DynamicCompoents/ShinyTextProps';
import TiltedCard from '../components/DynamicCompoents/ProfileImage';
import ProjectDetailModal from '../components/ProjectDetailModal';
import ProjectsSection from '../components/ProjectsSection';
import RotatingText from '../components/DynamicCompoents/RotatingText';
import BlogSection from '../components/BlogSection';
import { Project,Blog } from '../types/Project';

const MainPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getText } = useLanguage();
  const { openModal } = useModal();
  const dynamicScrollRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Briefcase, label: getText('m-4'), value: '50+' },
    { icon: Award, label: getText('m-5'), value: '12' },
    { icon: Star, label: getText('m-6'), value: '100+' },
    { icon: Zap, label: getText('m-7'), value: '5+' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'The Clipo Project',
      description: 'React와 Tailwind CSS TypeScript를 사용한 소셜미디어 플랫폼 포트폴리오',
      shortDescription: '개인 포트폴리오 웹사이트',
      image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.00.41.png',
      images: [
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.00.41.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.06.26.png',
        'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-10+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.06.33.png'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS',  'Spring Boot', 'MariaDB'],
      featured: true,
      github: 'https://github.com/jacoong/Clipo-front',
      demo: 'https://portfolio-demo.com',
      category: 'main' as const,
      status: 'completed' as const,
      createdAt: '2024-09-12',
      details: {
        overview: '개인 포트폴리오를 위한 반응형 웹사이트로, 다크/라이트 모드, Access Token, Refresh Token  포함합니다. 친구와 한번 소셜미디어를 만든다는 생각을 가지고 한번 열심히 현업하듯이 만들어 보았습니다.',
        features: [
          '인증 및 토큰 관리 시스템',
          'Redux 기반 다중 중첩 모달 시스템',
          '소셜 미디어 핵심 기능',
          'UI 컴포넌트 및 디자인 시스템',
          '데이터 관리 및 상태 관리',
          '실시간 기능'
        ],
        challenges: '낙관적 업데이트와 데이터 동기화/ 백엔드와 전체적인 협업',
        solutions: 'React-query를 활용하여 네트워크 오류시 전의 쿼리를 가져와 동기화',
        numberOfDevelopers: 2,
        role: '프론트엔드 / 기획자 '
      }
    },
    {
      id: 2,
      title: '축구 동영상 자동화',
      description: 'Aws Lamda Python을 활용하여, Movie.py로 동영상 자동화',
      shortDescription: '',
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
      title: 'Calender Auto',
      description: '자동화 달력 플랫폼',
      shortDescription: 'Open Ai Api 를 활용하여 달력 스케줄 자동화 시스템',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop'
      ],
      tech: ['React', 'TypeScript','TypeScript', 'Spring Boot', 'Open Ai Api'],
      featured: true,
      github: 'https://github.com/username/ecommerce',
      demo: 'https://ecommerce-demo.com',
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
      title: 'Weather Dashboard',
      description: '데이터 시각화가 포함된 날씨 대시보드',
      shortDescription: '날씨 정보 대시보드',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop'
      ],
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      featured: false,
      github: 'https://github.com/username/weather-dashboard',
      demo: 'https://weather-dashboard-demo.com',
      category: 'side' as const,
      status: 'completed' as const,
      createdAt: '2023-11-01',
      details: {
        overview: '실시간 날씨 정보와 데이터 시각화를 제공하는 대시보드 애플리케이션입니다.',
        features: [
          '실시간 날씨 정보',
          '7일간 날씨 예보',
          '인터랙티브 차트',
          '위치 기반 날씨',
          '다크/라이트 테마',
          'PWA 지원'
        ],
        challenges: 'API 호출 최적화와 차트 성능',
        solutions: '캐싱 전략과 Chart.js 최적화를 통한 성능 개선',
        numberOfDevelopers: 1,
        role: '프론트엔드 개발자'
      }
    },
    {
      id: 4,
      title: 'AI 챗봇 서비스',
      description: 'OpenAI API를 활용한 지능형 챗봇 플랫폼',
      shortDescription: 'AI 기반 고객 서비스 챗봇',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
      ],
      tech: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
      featured: false,
      github: 'https://github.com/username/ai-chatbot',
      demo: 'https://ai-chatbot-demo.com',
      category: 'latest' as const,
      status: 'completed' as const,
      createdAt: '2024-02-01',
      details: {
        overview: 'OpenAI GPT API를 활용한 지능형 챗봇 서비스로, 자연어 처리와 대화형 인터페이스를 제공합니다.',
        features: [
          '자연어 처리 및 이해',
          '컨텍스트 기반 대화',
          '다국어 지원',
          '관리자 대시보드',
          '대화 기록 저장',
          '실시간 응답'
        ],
        challenges: 'API 비용 최적화와 응답 속도 개선',
        solutions: '캐싱 시스템과 스트리밍 응답을 통한 성능 최적화',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    },
    {
      id: 5,
      title: '블록체인 NFT 마켓플레이스',
      description: 'Web3 기술을 활용한 NFT 거래 플랫폼',
      shortDescription: 'NFT 거래 마켓플레이스',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop'
      ],
      tech: ['React', 'Web3.js', 'Solidity', 'IPFS', 'MetaMask'],
      featured: true,
      github: 'https://github.com/username/nft-marketplace',
      demo: 'https://nft-marketplace-demo.com',
      category: 'latest' as const,
      status: 'in-progress' as const,
      createdAt: '2024-02-15',
      details: {
        overview: '블록체인 기술을 활용한 NFT 거래 플랫폼으로, 스마트 컨트랙트와 Web3 지갑 연동을 제공합니다.',
        features: [
          'NFT 생성 및 업로드',
          '메타마스크 지갑 연동',
          '스마트 컨트랙트 거래',
          'IPFS 파일 저장',
          '경매 시스템',
          '거래 내역 추적'
        ],
        challenges: '가스비 최적화와 사용자 경험 개선',
        solutions: 'Layer 2 솔루션과 UX 개선을 통한 문제 해결',
        numberOfDevelopers: 1,
        role: '블록체인 개발자'
      }
    },
    {
      id: 6,
      title: '실시간 협업 에디터',
      description: 'Google Docs 스타일의 실시간 협업 문서 편집기',
      shortDescription: '실시간 협업 문서 편집기',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
      ],
      tech: ['React', 'Socket.io', 'MongoDB', 'Quill.js', 'Redis'],
      featured: false,
      github: 'https://github.com/username/collaborative-editor',
      demo: 'https://collaborative-editor-demo.com',
      category: 'side' as const,
      status: 'completed' as const,
      createdAt: '2023-12-01',
      details: {
        overview: '실시간 협업이 가능한 문서 편집기로, 여러 사용자가 동시에 문서를 편집할 수 있습니다.',
        features: [
          '실시간 동시 편집',
          '사용자 커서 표시',
          '변경사항 실시간 동기화',
          '문서 버전 관리',
          '권한 관리',
          '댓글 시스템'
        ],
        challenges: '동시 편집 시 충돌 해결과 성능 최적화',
        solutions: 'Operational Transform 알고리즘과 Redis 캐싱을 통한 해결',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    },
    {
      id: 7,
      title: '모바일 피트니스 앱',
      description: 'React Native로 개발한 개인 맞춤형 피트니스 앱',
      shortDescription: '개인 맞춤형 피트니스 앱',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
      ],
      tech: ['React Native', 'Firebase', 'Expo', 'Redux'],
      featured: false,
      github: 'https://github.com/username/fitness-app',
      demo: 'https://fitness-app-demo.com',
      category: 'side' as const,
      status: 'in-progress' as const,
      createdAt: '2024-01-20',
      details: {
        overview: '개인 맞춤형 운동 계획과 진행 상황을 추적할 수 있는 모바일 피트니스 앱입니다.',
        features: [
          '개인 맞춤 운동 계획',
          '운동 진행 상황 추적',
          '칼로리 계산',
          '운동 영상 제공',
          '목표 설정 및 달성률',
          '소셜 기능'
        ],
        challenges: '모바일 성능 최적화와 오프라인 지원',
        solutions: 'React Native 최적화와 로컬 스토리지를 통한 오프라인 지원',
        numberOfDevelopers: 1,
        role: '모바일 개발자'
      }
    },
    {
      id: 8,
      title: '클라우드 스토리지 서비스',
      description: 'AWS S3를 활용한 개인 클라우드 스토리지 플랫폼',
      shortDescription: '개인 클라우드 스토리지',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
      ],
      tech: ['React', 'Node.js', 'AWS S3', 'MongoDB', 'JWT'],
      featured: false,
      github: 'https://github.com/username/cloud-storage',
      demo: 'https://cloud-storage-demo.com',
      category: 'side' as const,
      status: 'completed' as const,
      createdAt: '2023-11-15',
      details: {
        overview: 'AWS S3를 백엔드로 활용한 개인 클라우드 스토리지 서비스로, 파일 업로드, 다운로드, 공유 기능을 제공합니다.',
        features: [
          '파일 업로드/다운로드',
          '폴더 구조 관리',
          '파일 공유 링크',
          '버전 관리',
          '검색 기능',
          '권한 관리'
        ],
        challenges: '대용량 파일 처리와 보안',
        solutions: '청크 업로드와 JWT 인증을 통한 안전한 파일 관리',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    },
    {
      id: 9,
      title: '소셜 미디어 대시보드',
      description: '다양한 소셜 미디어 플랫폼 통합 관리 도구',
      shortDescription: '소셜 미디어 통합 관리',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop'
      ],
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js', 'API Integration'],
      featured: false,
      github: 'https://github.com/username/social-dashboard',
      demo: 'https://social-dashboard-demo.com',
      category: 'side' as const,
      status: 'completed' as const,
      createdAt: '2023-10-01',
      details: {
        overview: 'Instagram, Twitter, Facebook 등 다양한 소셜 미디어 플랫폼을 통합 관리할 수 있는 대시보드입니다.',
        features: [
          '다중 플랫폼 연동',
          '포스트 스케줄링',
          '분석 및 리포트',
          '해시태그 추천',
          '댓글 관리',
          '성과 측정'
        ],
        challenges: 'API 제한과 데이터 동기화',
        solutions: 'API 레이트 리미팅과 배치 처리로 최적화',
        numberOfDevelopers: 1,
        role: '풀스택 개발자'
      }
    },
    {
      id: 10,
      title: 'IoT 스마트홈 시스템',
      description: 'Raspberry Pi와 센서를 활용한 스마트홈 제어 시스템',
      shortDescription: '스마트홈 IoT 시스템',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      tech: ['React', 'Node.js', 'MQTT', 'Raspberry Pi', 'Python'],
      featured: false,
      github: 'https://github.com/username/smart-home',
      demo: 'https://smart-home-demo.com',
      category: 'side' as const,
      status: 'in-progress' as const,
      createdAt: '2024-03-01',
      details: {
        overview: 'Raspberry Pi와 다양한 센서를 활용한 스마트홈 자동화 시스템으로, 원격 제어와 모니터링이 가능합니다.',
        features: [
          '조명 자동 제어',
          '온도 및 습도 모니터링',
          '보안 시스템',
          '에너지 사용량 추적',
          '음성 제어',
          '모바일 앱 연동'
        ],
        challenges: '하드웨어 통합과 실시간 데이터 처리',
        solutions: 'MQTT 프로토콜과 WebSocket을 통한 실시간 통신 구현',
        numberOfDevelopers: 1,
        role: 'IoT 개발자'
      }
    }
  ];

  const blogs: Blog[] = [
    {
      id: 1,
      title: 'React 19의 새로운 기능들',
      description: 'React 19에서 도입된 새로운 기능들과 개선사항들을 살펴보고, 실제 프로젝트에 어떻게 적용할 수 있는지 알아봅니다.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      tech: ['React', 'JavaScript', 'Frontend'],
      link: 'https://blog.naver.com/yuh0812'
    },
    {
      id: 2,
      title: 'TypeScript로 더 안전한 코드 작성하기',
      description: 'TypeScript의 타입 시스템을 활용하여 런타임 에러를 줄이고 코드의 가독성과 유지보수성을 높이는 방법을 소개합니다.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
      tech: ['TypeScript', 'JavaScript', 'Development'],
      link: 'https://blog.naver.com/yuh0812'
    },
    {
      id: 3,
      title: 'Tailwind CSS로 빠른 UI 개발하기',
      description: 'Tailwind CSS의 유틸리티 클래스를 활용하여 빠르고 일관성 있는 UI를 개발하는 방법과 팁을 공유합니다.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      tech: ['Tailwind CSS', 'CSS', 'UI/UX'],
      link: 'https://blog.naver.com/yuh0812'
    }
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'AWS', level: 75 },
  ];


  
  const resumeSections = [
    {
      children: (
        <div className="flex flex-col items-center justify-center text-center concept-text-primary">
          <div className="mb-16">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
        </div>
      )
    },
    {
      children: (
        <div className="max-w-4xl mx-auto concept-text-primary px-8">
        <h2 className="responsive-h2 font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
          <div className="concept-card rounded-lg p-6">
            <h3 className="font-semibold mb-6 text-xl border-b pb-2">💼 경력 (Experience)</h3>
            <div className="space-y-6">
      
              <div className="experience-item rounded-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-600">Coboct (프랑스)</h4>
                    <p className="text-sm font-semibold concept-text-secondary">홈페이지 리뉴얼 인턴</p>
                  </div>
                  <span className="text-xs text-gray-500">2023.09 - 2023.12 (4개월)</span>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                  <li>react.js와 ModuleCSS를 활용한 프론트엔드 UI/UX 개선</li>
                  <li>반응형 웹 디자인 적용</li>
                  <li>Three.js를 활용한 3D 효과 적용 시도</li>
                </ul>
              </div>
      
              <div className="experience-item rounded-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-600">알서포트 (Rsupport)</h4>
                    <p className="text-sm font-semibold concept-text-secondary">QA Engineer</p>
                  </div>
                  <span className="text-xs text-gray-500">2021.06 - 2022.12 (1년 6개월)</span>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                  <li>개발 기획 회의 참여</li>
                  <li>테스트 케이스 작성 인증</li>
                  <li>자바 셀레니움 자동화 테스트 스크립트 작성 및 유지보수 참여</li>
                </ul>
              </div>
      
              <div className="experience-item rounded-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-600">대한민국 육군</h4>
                    <p className="text-sm font-semibold concept-text-secondary">8사단 만기 전역</p>
                  </div>
                  <span className="text-xs text-gray-500">2019.04 - 2021.10</span>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm space-y-1 concept-text-secondary">
                  <li>분대장 임무 수행을 통한 리더십 및 책임감 함양</li>
                  <li>원활한 소통 능력을 바탕으로 한 팀워크 증진</li>
                </ul>
              </div>
      
            </div>
          </div>
      
          <div className="concept-card rounded-lg p-6">
            <h3 className="font-semibold mb-6 text-xl border-b pb-2">🎓 학력 (Education)</h3>
            <ul className="space-y-4 concept-text-secondary pt-2">
              <li className='py-3'>
                  <p className="font-bold">고려사이버대학교</p>
                  <p className="text-sm">소프트웨어응용학과 졸업 (2021-2024)</p>
              </li>
              <li>
                  <p className="font-bold">한림대학교</p>
                  <p className="text-sm">경제학과 중퇴 (2018-2019)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      )
    },
    {
      children: (
        <div className='flex flex-col'>
               <h1 className="max-w-4xl mx-auto concept-text-primary px-8 responsive-h2 font-bold mb-8 text-center">{getText('DES-5')}</h1>
               <MyStack></MyStack>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen concept-bg transition-colors duration-300">
      {/* Header */}
      <header className="concept-card shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 concept-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h1 className="concept-text-primary">{getText('h-1')}</h1>
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
                      texts={['창의적인', '열정적인', '갈망하는', '도전하는']}
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
              <div className="flex py-6 sm:py-10 flex-col sm:flex-row gap-4 justify-center">
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


          <p className="responsive-text concept-text-secondary mb-8 max-w-2xl mx-auto px-4">
            {getText('m-1')}
          </p>
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
        <section className="py-16 mx-auto w-[70%]">
          <ProjectsSection projects={projects} />
        </section>

        <section className="py-16 mx-auto w-[70%]">
            <BlogSection blogs={blogs}/>
        </section>

        {/* Project Detail Modal */}
        <ProjectDetailModal />
   
    </div>
  );
};

export default MainPage;
