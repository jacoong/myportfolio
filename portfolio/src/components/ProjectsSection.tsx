import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { Project, FilterType, StatusFilterType } from '../types/Project';
import { getCategoryLabel, getStatusLabel, getStatusColor } from '../utils/projectUtils';
import ProjectCard from './ProjectComponents';
import DynamicNumber from './DynamicCompoents/DynamicNumber';
interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const { openModal } = useModal();
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>('all');
  const [showAll, setShowAll] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // 필터링된 프로젝트
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = categoryFilter === 'all' || project.category === categoryFilter;
      const statusMatch = statusFilter === 'all' || project.status === statusFilter;
      return categoryMatch && statusMatch;
    });
  }, [projects, categoryFilter, statusFilter]);

  // 표시할 프로젝트 (페이징)
  const displayedProjects = useMemo(() => {
    if (showAll) return filteredProjects;
    return filteredProjects.slice(0, 4);
  }, [filteredProjects, showAll]);

  // 더보기 버튼 표시 여부
  const hasMoreProjects = filteredProjects.length > 4;


  return (
    <div className="max-w-7xl mx-auto concept-text-primary px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <div className='responsive-h1 flex items-center justify-center font-bold mb-2 sm:mb-4'>
          <div className="mr-2">
            <DynamicNumber
              from={0}
              to={filteredProjects.length}
              separator=","
              direction="up"
              duration={0.5}
              className="font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent animate-gradient"
            />
          </div>
          <h2 className="concept-text-primary font-bold">{`Projects`}</h2>
        </div>
        <p className="responsive-text concept-text-secondary">{`다양한 프로젝트를 확인해보세요`}</p>
      </div>

      {/* 필터 섹션 */}
      <div className="mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 concept-card rounded-lg concept-text-primary hover:concept-interactive-hover transition-colors duration-200 mb-4"
        >
          <Filter className="h-4 w-4" />
          필터
          {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="concept-card rounded-lg p-6 space-y-4">
                {/* 프로젝트 종류 필터 */}
                <div>
                  <h3 className="text-sm font-semibold concept-text-primary mb-2">프로젝트 종류</h3>
                  <div className="flex flex-wrap gap-2">
                    {(['all', 'main', 'latest', 'side'] as FilterType[]).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setCategoryFilter(filter)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                          categoryFilter === filter
                            ? 'concept-gradient-primary text-white'
                            : 'concept-interactive-hover concept-text-primary'
                        }`}
                      >
                        {filter === 'all' ? '전체' : getCategoryLabel(filter)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 완성 상태 필터 */}
                <div>
                  <h3 className="text-sm font-semibold concept-text-primary mb-2">완성 상태</h3>
                  <div className="flex flex-wrap gap-2">
                    {(['all', 'completed', 'in-progress'] as StatusFilterType[]).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setStatusFilter(filter)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                          statusFilter === filter
                            ? 'concept-gradient-primary text-white'
                            : 'concept-interactive-hover concept-text-primary'
                        }`}
                      >
                        {filter === 'all' ? '전체' : getStatusLabel(filter)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-8">
        <AnimatePresence mode="wait">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 더보기 버튼 */}
      {hasMoreProjects && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 concept-gradient-primary text-white rounded-lg font-medium hover:concept-gradient-primary-hover transition-all duration-200"
          >
            {showAll ? '접기' : `더보기 (${filteredProjects.length - 4}개 더)`}
          </button>
        </div>
      )}

    </div>
  );
};

export default ProjectsSection;
