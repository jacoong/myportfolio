export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'main': return '메인 프로젝트';
    case 'latest': return '최신 프로젝트';
    case 'side': return '사이드 프로젝트';
    default: return category;
  }
};

export const getStatusLabel = (status: string): string => {
  switch (status) {
    case 'completed': return '완성';
    case 'in-progress': return '제작중';
    default: return status;
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'completed': return 'bg-green-500 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};
