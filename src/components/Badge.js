import React from 'react';

const Badge = ({ color, label }) => {
   return (
      <span className={`badge badge-${color}`}>
         {label}
      </span>
  );
}

export default Badge;