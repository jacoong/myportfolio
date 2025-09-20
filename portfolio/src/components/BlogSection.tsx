import { Blog } from '../types/Project';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Tag } from 'lucide-react';

const BlogSection: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="responsive-h2 font-bold concept-text-primary mb-4">
                    Latest Blog Posts
                </h2>
                <p className="responsive-text concept-text-secondary max-w-2xl mx-auto">
                    자세한 내용은 Notion 바로가기를 클릭해주세요
                </p>
            </div>

                   {/* View All Button */}
                   <div className="text-center my-10 sm:my-12">
                <motion.a
                    href="https://www.notion.so/Develop-Study-df25474a70d24aac9c4a8f6d4dc8ac08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 concept-card concept-border concept-text-primary rounded-lg font-medium concept-interactive-hover transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Tag className="h-5 w-5" />
                    <span>Notion 바로가기</span>
                    <ExternalLink className="h-4 w-4" />
                </motion.a>
            </div>


            {/* Blog Grid */}
            <div className="grid grid-cols-1 gap-8">
                {blogs.map((blog, index) => (
                    <motion.article
                        key={blog.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-auto md:h-auto flex flex-col sm:flex-row group concept-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 concept-interactive-hover"
                    >
                        {/* Blog Image */}
                        <div className="relative overflow-hidden max-w-[640px] w-full h-full">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Tech Tags Overlay */}
                            <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                {blog.tech.slice(0, 2).map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="flex flex-col  justify-between p-4 md:p-6">
                            {/* Blog Title */}
                            <h3 className="text-lg sm:text-xl font-bold concept-text-primary mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                                {blog.title}
                            </h3>

                            {/* Blog Description */}
                            <p className="text-sm sm:text-base concept-text-secondary mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                                {blog.description}
                            </p>

                          
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm concept-text-secondary">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                        <span>2024.03.15</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <User className="h-3 w-3 sm:h-4 sm:w-4" />
                                        <span>You Hyun Woo</span>
                                    </div>
                                </div>
                            </div>

                            {/* Read More Button */}
                            <div className='flex justify-end'>
                            <motion.a
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 concept-gradient-primary text-white rounded-lg text-sm sm:text-base font-medium hover:concept-gradient-primary-hover transition-all duration-200 group/btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Read More</span>
                                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                            </motion.a>
                            </div>
                       
                          
                            {/* Blog Meta */}
                           
                       
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;