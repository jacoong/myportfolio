import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Project } from '../types/Project';
import { getCategoryLabel, getStatusLabel, getStatusColor } from '../utils/projectUtils';

interface ProjectCardProps {
  project: Project;
  openModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, openModal }) => {

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="concept-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${getStatusColor(project.status)}`}>
            {getStatusLabel(project.status)}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/50 text-white text-sm font-medium rounded-full">
            {getCategoryLabel(project.category)}
          </span>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="py-2 group-hover:text-blue-500 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Description - 고정 높이 */}
        <div className='py-1 sm:py-3 flex-grow'>
          <p className="concept-text-secondary mb-3 sm:mb-4 line-clamp-2 responsive-text">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-6">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="bg-[#f1f5f9] dark:bg-[#334155] px-3 py-1 hover:bg-concept-border-light dark:hover:bg-concept-border-dark concept-text-primary rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 concept-text-secondary rounded-full">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
        
        {/* Action Buttons - 바닥에 고정 */}
        <div className="flex gap-2 sm:gap-3 mt-auto">
          <button 
            onClick={() => openModal(project)}
            className="flex-1 px-3 sm:px-4 py-2 concept-interactive-hover concept-text-primary rounded-lg font-medium transition-colors duration-200"
          >
            자세히 보기
          </button>

          {/* <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-concept-border-light px-3 sm:px-4 py-2 concept-card concept-text-primary rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Github className="h-4 w-4" />
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 concept-gradient-primary text-white rounded-lg font-medium hover:concept-gradient-primary-hover transition-all duration-200"
          >
            <ExternalLink className="h-4 w-4" />
          </a> */}


<div className="flex items-center  space-x-2">


<div className="flex items-center space-x-2">

 {/* 두 버튼의 정렬과 간격을 관리하는 Flexbox 부모 컨테이너 */}
<div className="flex items-center space-x-2">

{/* 1. GitHub 아이콘 툴팁 */}
{/* 👇 각 툴팁 컨테이너에 group, relative, inline-block을 개별적으로 적용 */}
<div className="tooltip group relative inline-block">
  <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center h-10 w-10 border-2 border-concept-border-light rounded-full concept-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
  >
    <Github className="h-5 w-5" />
  </a>
  {/* GitHub 툴팁 내용 */}
  <div 
    className="tooltip-content absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200"
  >
    GitHub 코드 보기
  </div>
</div>

{/* 2. 데모 링크 툴팁 */}
{/* 👇 여기에도 동일하게 개별적으로 group 적용 */}
<div className="tooltip group relative inline-block">
  <a 
    href={project.demo} 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-3 sm:px-4 py-2 concept-gradient-primary text-white rounded-lg font-medium hover:concept-gradient-primary-hover transition-all duration-200"
  >
    Demo
  </a>
  {/* 데모 툴팁 내용 */}
  <div 
    className="tooltip-content absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200"
  >
    데모 사이트 보기
  </div>
</div>

</div>

</div>

</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;