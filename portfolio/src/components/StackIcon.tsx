import React, { useState } from 'react';

interface StackIconProps {
  icon: string;
  className?: string;
  fallbackText?: string;
}

const StackIcon: React.FC<StackIconProps> = ({ icon, className = '', fallbackText = '?' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center text-xs font-bold concept-text-secondary ${className}`}>
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={icon}
      alt="Tech stack icon"
      className={`w-full h-full object-contain ${className}`}
      onError={() => {
        console.warn(`Failed to load icon: ${icon}`);
        setHasError(true);
      }}
    />
  );
};

export default StackIcon;
