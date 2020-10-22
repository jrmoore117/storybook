import React, { useState, useRef, useEffect } from 'react';
import '../index.css';

const FadeIn = ({ direction, className, children }) => {
   const [isVisible, setVisible] = useState(false);

   const domRef = React.useRef();

   useEffect(() => {
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => entry.isIntersecting && setVisible(true));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
   }, []);

   return (
      <div ref={domRef} className={`fade-in ${isVisible && direction} ${className || ''}`}>
         {children}
      </div>
   );
}

export default FadeIn;