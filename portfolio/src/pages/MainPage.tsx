import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';
import { Sun, Moon, Briefcase, Code, Star, Award, Zap, ArrowUp } from 'lucide-react';
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
import RemoteBar from '../components/RemoteBar';
import { Project,Blog } from '../types/Project';
import { get } from 'axios';

const MainPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getText, lang } = useLanguage();
  const dynamicScrollRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const notionSectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetRef: React.RefObject<HTMLElement | null>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const remoteSections = useMemo(
    () => [
      { id: 'about', label: getText('remote-about'), targetRef: dynamicScrollRef },
      { id: 'projects', label: getText('remote-projects'), targetRef: projectsSectionRef },
      { id: 'blog', label: getText('remote-blog'), targetRef: notionSectionRef }
    ],
    [lang, getText]
  );


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
  {
    title: getText('proj-1-feature-1'),
    paraGraphs: [
      getText('proj-1-feature-1-c1'),
      getText('proj-1-feature-1-c2'),
      getText('proj-1-feature-1-c3')
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.01.13.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+11.11.15.png',
    
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+11.11.04.png'

    ],
  },

  {
    title: getText('proj-1-feature-2'),
    paraGraphs: [
      getText('proj-1-feature-2-c1'),
      getText('proj-1-feature-2-c2'),
      getText('proj-1-feature-2-c3'),
      getText('proj-1-feature-2-c4')
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-25+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.50.22.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-25+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.11.05.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.03.48.png'
    ],
    notionBlog: ''
  },

  {
    title: getText('proj-1-feature-3'),
    paraGraphs: [
      getText('proj-1-feature-3-c1'),
      getText('proj-1-feature-3-c2'),
      getText('proj-1-feature-3-c3')
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-25+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.54.18.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.04.28.png',
    
    ],
    notionBlog: ''
  },

  {
    title: getText('proj-1-feature-4'),
    paraGraphs: [
      getText('proj-1-feature-4-c1'),
      getText('proj-1-feature-4-c2')
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.28.28.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.27.02.png'
    ],
    notionBlog: ''
  },

  {
    title: getText('proj-1-feature-5'),
    paraGraphs: [
      getText('proj-1-feature-5-c1'),
      getText('proj-1-feature-5-c2')
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.24.42.png',
     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+11.23.33.png'
    ],
    notionBlog: 'https://www.notion.so/2c47855813648054bf68fef70b4bcaa6?source=copy_link'
  },

  {
    title: getText('proj-1-feature-6'),
    paraGraphs: [
      getText('proj-1-feature-6-c1'),
      getText('proj-1-feature-6-c2'),
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-25+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.11.33.png',
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-25+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.11.15.png'
    ],
    notionBlog: ''
  },
   {
    title: getText('proj-1-feature-7'),
    paraGraphs: [
      getText('proj-1-feature-7-c1'),
      getText('proj-1-feature-7-c2'),
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.23.00.png'
    ],
    notionBlog: ''
   },
     {
    title: getText('proj-1-feature-9'),
    paraGraphs: [
      getText('proj-1-feature-9-c1'),
    ],
    pictures: [
      'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/project/clipo/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-12-22+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.31.27.png'
    ],
    notionBlog: ''
  },
       {
    title: getText('proj-1-feature-10'),
    paraGraphs: [
      getText('proj-1-feature-10-c1'),
      getText('proj-1-feature-10-c2'),
      getText('proj-1-feature-10-c3')
    ],
    pictures: [
      
    ],
    notionBlog: ''}
],

      challenges:[
            {
            title: getText('proj-1-challenge-1'),
            paraGraphs: [
              getText('proj-1-challenge-1-c1'),
              getText('proj-1-challenge-1-c2'),
              getText('proj-1-challenge-1-c3')
            ],
            pictures: [
             
            ],
            notionBlog: 'https://www.notion.so/2c47855813648054bf68fef70b4bcaa6?source=copy_link'
          },
               {
            title: getText('proj-1-challenge-2'),
            paraGraphs: [
              getText('proj-1-challenge-2-c1'),
              getText('proj-1-challenge-2-c2'),
      
            ],
            pictures: [
             
            ],
            notionBlog: 'https://www.notion.so/ID-2d678558136480c9bd47f025f7ccc4e3?source=copy_link'
          },
                       {
            title: getText('proj-1-challenge-3'),
            paraGraphs: [
              getText('proj-1-challenge-3-c1'),
              getText('proj-1-challenge-3-c2'),
              getText('proj-1-challenge-3-c3'),
              getText('proj-1-challenge-3-c4'),
            ],
            pictures: [
             
            ],
            notionBlog: 'https://www.notion.so/2d67855813648076998ff21e5177cb8f?source=copy_link'
          },
                           {
            title: getText('proj-1-challenge-4'),
            paraGraphs: [
              getText('proj-1-challenge-4-c1'),
              getText('proj-1-challenge-4-c2'),
              getText('proj-1-challenge-4-c3'),
            ],
            pictures: [
             
            ],
            notionBlog: 'https://www.notion.so/2d6785581364807b9285ce20f04c1b69?source=copy_link'
          }
        ],
        solutions: getText('proj-1-solution'),
        numberOfDevelopers: 2,
        role: getText('proj-1-role')
      }
    },
    // {
    //   id: 2,
    //   title: getText('proj-2-title'),
    //   description: getText('proj-2-desc'),
    //   shortDescription: getText('proj-2-short'),
    //   image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/runscreen.png',
    //   images: [
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.11.28.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/IMG_5834.PNG',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/IMG_5835.PNG'
    //   ],
    //   tech: ['Python', 'Movie.py', 'Aws Lamda', 'Aws S3'],
    //   featured: false,
    //   github: 'https://github.com/jacoong/footballApi/tree/master',
    //   demo: 'https://www.youtube.com/shorts/br4ZXMDxF1o',
    //   category: 'main' as const,
    //   status: 'completed' as const,
    //   createdAt: '2023-12-15',
    //   details: {
    //     overview: getText('proj-2-overview'),
    //     features: [
    //       getText('proj-2-feature-1'),
    //       getText('proj-2-feature-2'),
    //       getText('proj-2-feature-3'),
    //       getText('proj-2-feature-4'),
    //       getText('proj-2-feature-5'),
    //       getText('proj-2-feature-6'),
    //       getText('proj-2-feature-7'),
    //     ],
    //     challenges: getText('proj-2-challenge'),
    //     solutions: getText('proj-2-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-2-role')
    //   }
    // },
    // {
    //   id: 3,
    //   title: getText('proj-3-title'),
    //   description: getText('proj-3-desc'),
    //   shortDescription: getText('proj-3-short'),
    //   image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/calender+Project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-24+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.06.11.png',
    //   images: [
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/calender+Project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-24+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.06.06.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/calender+Project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-24+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.06.11.png'
    //   ],
    //   tech: ['React', 'TypeScript','TypeScript', 'Spring Boot', 'Open Ai Api'],
    //   featured: true,
    //   github: 'https://github.com/jacoong/calanderFront/tree/master',
    //   demo: '/welcome',
    //   category: 'main' as const,
    //   status: 'in-progress' as const,
    //   createdAt: '2024-01-01',
    //   details: {
    //     overview: getText('proj-3-overview'),
    //     features: [
    //       getText('proj-3-feature-1'),
    //       getText('proj-3-feature-2'),
    //       getText('proj-3-feature-3'),
    //       getText('proj-3-feature-4'),
    //       getText('proj-3-feature-5'),
    //       getText('proj-3-feature-6'),
    //     ],
    //     challenges: getText('proj-3-challenge'),
    //     solutions: getText('proj-3-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-3-role')
    //   }
    // },
    // {
    //   id: 4,
    //   title: getText('proj-4-title'),
    //   description: getText('proj-4-desc'),
    //   shortDescription: getText('proj-4-short'),
    //   image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/python_webscrapper/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.09.51.png',
    //   images: [
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/python_webscrapper/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.09.51.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/python_webscrapper/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.10.26.png',
    //   ],
    //   tech: ['python', 'flask', 'selenium', 'beautifulsoup4', 'requests', 'render', 'html5lib', 'webdriver-manager'],
    //   featured: true,
    //   github: 'https://github.com/jacoong/The-web-scrapper',
    //   demo: 'https://job-scraper-demo.onrender.com',
    //   category: 'side' as const,
    //   status: 'completed' as const,
    //   createdAt: '2025-09-12',
    //   details: {
    //     overview: getText('proj-4-overview'),
    //     features: [
    //       getText('proj-4-feature-1'),
    //       getText('proj-4-feature-2'),
    //       getText('proj-4-feature-3'),
    //       getText('proj-4-feature-4'),
    //       getText('proj-4-feature-5'),
    //       getText('proj-4-feature-6'),
    //       getText('proj-4-feature-7'),
    //       getText('proj-4-feature-8'),
    //       getText('proj-4-feature-9'),
    //       getText('proj-4-feature-10'),
    //     ],
    //     challenges: getText('proj-4-challenge'),
    //     solutions: getText('proj-4-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-4-role')
    //   }
    // },
    // {
    //   id: 5,
    //   title: getText('proj-5-title'),
    //   description: getText('proj-5-desc'),
    //   shortDescription: getText('proj-5-short'),
    //   image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.18.44.png',
    //   images: [
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.18.44.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.19.13.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/chord/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.18.56.png'
    //   ],
    //   tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Web Speech API', 'Local Storage'],
    //   featured: false,
    //   github: 'https://github.com/jacoong/random-chord',
    //   demo: 'https://random-chord-practice.netlify.app',
    //   category: 'latest' as const,
    //   status: 'completed' as const,
    //   createdAt: '2024-01-15',
    //   details: {
    //     overview: getText('proj-5-overview'),
    //     features: [
    //       getText('proj-5-feature-1'),
    //       getText('proj-5-feature-2'),
    //       getText('proj-5-feature-3'),
    //       getText('proj-5-feature-4'),
    //       getText('proj-5-feature-5'),
    //       getText('proj-5-feature-6'),
    //       getText('proj-5-feature-7'),
    //       getText('proj-5-feature-8'),
    //       getText('proj-5-feature-9'),
    //       getText('proj-5-feature-10'),
    //     ],
    //     challenges: getText('proj-5-challenge'),
    //     solutions: getText('proj-5-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-5-role')
    //   }
    // },
    // {
    //   id: 6,
    //   title: getText('proj-6-title'),
    //   description: getText('proj-6-desc'),
    //   shortDescription: getText('proj-6-short'),
    //   image: "https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.19.26.png",
    //   images: ["https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.20.08.png","https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.49.30.png",
    //     "https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/The_Area/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.20.17.png"
    //   ],
    //   tech: ["React", "JavaScript", "CSS3", "HTML5", "React Router"],
    //   featured: true,
    //   github: "https://github.com/jacoong/The-Area",
    //   demo: "https://jacoong.github.io/The-Area/",
    //   category: "main" as const,
    //   status: "completed" as const,
    //   createdAt: "2024-02-01",
    //   details: {
    //     overview: getText('proj-6-overview'),
    //     features: [
    //       getText('proj-6-feature-1'),
    //       getText('proj-6-feature-2'),
    //       getText('proj-6-feature-3'),
    //       getText('proj-6-feature-4'),
    //       getText('proj-6-feature-5'),
    //       getText('proj-6-feature-6'),
    //     ],
    //     challenges: getText('proj-6-challenge'),
    //     solutions: getText('proj-6-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-6-role')
    //   }
    // },
    // {
    //   id: 7,
    //   title: getText('proj-7-title'),
    //   description: getText('proj-7-desc'),
    //   shortDescription: getText('proj-7-short'),
    //   image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.51.44.png',
    //   images: [
    //   'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.51.44.png',
    //   'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.03.png',
    //   'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.16.png',
    //   'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.20.png',
    //   'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/cocoatalk/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.52.25.png'
    //   ],
    //   tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
    //   featured: false,
    //   github: 'https://github.com/jacoong/cocoa-talk',
    //   demo: 'https://cocoatalkproject.netlify.app/',
    //   category: 'side' as const,
    //   status: 'completed' as const,
    //   createdAt: '2024-01-15',
    //   details: {
    //     overview: getText('proj-7-overview'),
    //     features: [
    //       getText('proj-7-feature-1'),
    //       getText('proj-7-feature-2'),
    //       getText('proj-7-feature-3'),
    //       getText('proj-7-feature-4'),
    //       getText('proj-7-feature-5'),
    //       getText('proj-7-feature-6'),
    //       getText('proj-7-feature-7'),
    //       getText('proj-7-feature-8'),
    //       getText('proj-7-feature-9'),
    //     ],
    //     challenges: getText('proj-7-challenge'),
    //     solutions: getText('proj-7-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-7-role')
    //   }
    // },
    // {
    //   id: 8,
    //   title: getText('proj-8-title'),
    //   description: getText('proj-8-desc'),
    //   shortDescription: getText('proj-8-short'),
    //   image: 'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.59.05.png',
    //   images: [
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.59.05.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.21.01.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+6.59.05.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/js_vanilla_project/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-12+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.21.11.png'
    //   ],
    //   tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Geolocation API', 'OpenWeather API', 'YouTube API', 'Local Storage'],
    //   featured: false,
    //   github: 'https://github.com/jacoong/Js_vanilla_Project',
    //   demo: 'https://momentum-dashboard-demo.netlify.app',
    //   category: 'latest' as const,
    //   status: 'completed' as const,
    //   createdAt: '2024-02-10',
    //   details: {
    //     overview: getText('proj-8-overview'),
    //     features: [
    //       getText('proj-8-feature-1'),
    //       getText('proj-8-feature-2'),
    //       getText('proj-8-feature-3'),
    //       getText('proj-8-feature-4'),
    //       getText('proj-8-feature-5'),
    //       getText('proj-8-feature-6'),
    //       getText('proj-8-feature-7'),
    //       getText('proj-8-feature-8'),
    //       getText('proj-8-feature-9'),
    //       getText('proj-8-feature-10'),
    //       getText('proj-8-feature-11'),
    //       getText('proj-8-feature-12'),
    //       getText('proj-8-feature-13'),
    //     ],
    //     challenges: getText('proj-8-challenge'),
    //     solutions: getText('proj-8-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-8-role')
    //   }
    // },
  
    // {
    //   id: 9,
    //   title: getText('proj-9-title'),
    //   description: getText('proj-9-desc'),
    //   shortDescription: getText('proj-9-short'),
    //   image:  'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.32.png',
    //   images: [
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.39.03.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.32.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.19.png',
    //     'https://elasticbeanstalk-ap-northeast-2-740783871476.s3.ap-northeast-2.amazonaws.com/portfolio/camping/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-09-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+5.33.03.png'
    //   ],
    //   tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap 5', 'Passport.js', 'Joi'],
    //   featured: false,
    //   github: 'https://github.com/jacoong/camping',
    //   demo: '/welcome',
    //   category: 'side' as const,
    //   status: 'completed' as const,
    //   createdAt: '2024-01-15',
    //   details: {
    //     overview: getText('proj-9-overview'),
    //     features: [
    //       getText('proj-9-feature-1'),
    //       getText('proj-9-feature-2'),
    //       getText('proj-9-feature-3'),
    //       getText('proj-9-feature-4'),
    //       getText('proj-9-feature-5'),
    //       getText('proj-9-feature-6'),
    //       getText('proj-9-feature-7'),
    //       getText('proj-9-feature-8'),
    //       getText('proj-9-feature-9'),
    //     ],
    //     challenges: getText('proj-9-challenge'),
    //     solutions: getText('proj-9-solution'),
    //     numberOfDevelopers: 1,
    //     role: getText('proj-9-role')
    //   }
    // }
  
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
          <p className="responsive-text concept-text-primary-light mt-4 max-w-2xl mx-auto px-4">
            <div className='mb-1'>
            {getText('m-1')}
            </div>
            <div className='mb-3'>
            {getText('m-1-1')}
            </div>
       
                      <div className='mb-1'> 
            <a
              href="https://www.notion.so/Develop-Study-20f7855813648074a045e45a47d744be?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 rounded-sm"
            >
              Notion
            </a>{' '}

              {getText('m-1-2')}
            </div>
            {getText('m-1-3')}
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
                 }}                 className={`py-3 sm:py-4  md:py-5 flex-1 text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${                   currentSlide === 0 
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
                    <div className="experience-item rounded-md p-[1.5vh] transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
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
                    <div className="experience-item rounded-md p-[1.5vh] transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
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
                    <div className="experience-item rounded-md p-[1.5vh] transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1">
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
        <div className="w-[90%]  md:max-w-2xl mx-auto concept-text-primary sm:px-8 md:h-auto">
          <h1 className=" concept-text-primary  responsive-h2 font-bold mb-[1vh] sm:mb-8 text-center">{getText('c-0')}</h1>
          <Contact />
        </div>
      )
    }
  ];

  return (
    <div className="h-auto w-full concept-bg transition-colors duration-300">
      {/* Header */}
      <header className="absolute z-40 top-0 left-0 right-0 concept-card shadow-sm transition-colors duration-300 overflow-hidden">
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
            <RemoteBar sections={remoteSections} onNavigate={scrollToSection} />
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

              <div className="flex flex-col items-center gap-4 py-6 sm:py-10">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection(projectsSectionRef)}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 45px rgba(59, 130, 246, 0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-full concept-gradient-primary text-white font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
                  >
                    {getText('hero-project-button')}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection(notionSectionRef)}
                    whileHover={{ y: -4, boxShadow: '0 18px 30px rgba(15, 23, 42, 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-full concept-card concept-text-primary font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base border border-transparent hover:border-blue-300 hover:bg-white/60 dark:hover:bg-gray-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
                  >
                    {getText('hero-notion-button')}
                  </motion.button>
                </div>
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
        <section className="py-16 mx-auto w-[95%]" ref={projectsSectionRef}>
          <ProjectsSection projects={projects} />
        </section>

        <section className="py-16 mx-auto w-[90%]" ref={notionSectionRef}>
            <BlogSection blogs={blogs}/>
        </section>

        {/* Project Detail Modal */}
        <ProjectDetailModal />

        {/* Scroll to Top Button */}
        <motion.div
          className="fixed bottom-9 right-9 z-50 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showScrollButton ? 1 : 0, 
            scale: showScrollButton ? 1 : 0,
            y: showScrollButton ? 0 : 20
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.3
          }}
        >
          {/* 말풍선 툴팁 */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {getText('scroll-to-top')}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 dark:border-t-gray-200"></div>
          </div>

          {/* 메인 버튼 */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="concept-gradient-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            animate={{
              boxShadow: [
                "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* 내부 애니메이션 효과 */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0 rounded-full"
              whileHover={{
                opacity: [0, 0.2, 0],
                scale: [1, 1.2, 1],
                transition: { duration: 0.6 }
              }}
            />
            
            <motion.div
              animate={{
                y: [0, -2, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <ArrowUp className="h-5 w-5 relative z-10" />
            </motion.div>
          </motion.button>
        </motion.div>
   
    </div>
  );
};

export default MainPage;
