import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageGallery from './ImageGallery';

interface ProjectDetailCardProps {
  title: string;
  paraGraphs: string[];
  pictures?: string[];
  notionBlog?: string;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({
  title,
  paraGraphs,
  pictures = [],
  notionBlog,
}) => {
  const { getText } = useLanguage();

  return (
    <div className="bg-gray-50 h-auto flex justify-center dark:bg-gray-800/60 rounded-2xl p-4 lg:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div
        className={`grid grid-cols-1 gap-6 ${
          pictures.length > 0 ? 'lg:grid-cols-[6fr_4fr]' : 'lg:grid-cols-1'
        }`}
      >
        {pictures.length > 0 && (
          <div className="order-1 lg:order-2">
            <ImageGallery
              images={pictures}
              title={title}
              className="mb-0"
              heightClassName="h-[350px] md:h-[300px]"
              imageClassName="max-h-[420px]"
            />
          </div>
        )}
        <div className="order-2 lg:order-1 w-full h-auto flex justify-around flex-col">
          <h4 className="text-xl  font-bold text-gray-900 dark:text-white tracking-tight">
            {title}
          </h4>
          <div className="flex flex-col items-start">
            {paraGraphs.map((paragraph, index) => (
              <p key={index} className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                • {paragraph}
              </p>
            ))}
          </div>
          {notionBlog && (
            <div className='mt-8'>
            <a
              href={notionBlog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
            >
              <ExternalLink className="h-4 w-4" />
              더 자세한 내용 Notion 에서 확인
            </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
