import React from 'react';

const Button = ({ color, label }) => {
   return (
      <button className={`btn btn-${color}`}>
         {label}
      </button>
  );
}

export default Button;