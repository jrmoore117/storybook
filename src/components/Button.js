import React from 'react';

const Button = ({ color, label }) => {
   return (
      <button className={`button button-${color}`}>
         {label}
      </button>
  );
}

export default Button;