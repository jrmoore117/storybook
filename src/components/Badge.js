import React from 'react';

const Badge = ({ label }) => {
   return (
      <span className={'px-2 py-1 text-xs text-rose-800 bg-rose-200 rounded-full'}>
         {label}
      </span>
  );
}

export default Badge;