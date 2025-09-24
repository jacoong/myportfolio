import LanguagePack from '../components/LanguagePack';

export const getCategoryLabel = (category: string, language: keyof typeof LanguagePack = 'ko'): string => {
  const pack = LanguagePack[language];
  switch (category) {
    case 'main': return pack['badge-main'];
    case 'latest': return pack['badge-latest'];
    case 'side': return pack['badge-side'];
    default: return category;
  }
};

export const getStatusLabel = (status: string, language: keyof typeof LanguagePack = 'ko'): string => {
  const pack = LanguagePack[language];
  switch (status) {
    case 'completed': return pack['badge-completed'];
    case 'in-progress': return pack['badge-in-progress'];
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
