import React from 'react';

const Button = ({ label }) => {
   return (
      <button className="px-2 outline-none bg-red-500">
         {label}
      </button>
  );
}

export default Button;