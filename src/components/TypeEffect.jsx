import React, { useState, useEffect } from 'react';

const TypingEffectComponent = () => {
  const phrases = ['digital-marketing','Websites Development', 'custom softwares','CMS' , 'Mobile Applications' ,'Ai Solutions'];
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullPhrase = phrases[currentIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
          setCurrentPhrase(currentFullPhrase.substring(0, charIndex - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        if (charIndex < currentFullPhrase.length) {
          setCharIndex(prev => prev + 1);
          setCurrentPhrase(currentFullPhrase.substring(0, charIndex + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150; // Adjust speed
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex, phrases]);

  return (
    <div>
      <h1 className="h1 mb-2">
        Transform Your Business with
      </h1>
      <h1 className="h1 mb-6">
        <span className="inline-block relative">
          {currentPhrase}&nbsp;
        </span>
      </h1>
    </div>
  );
};

export default TypingEffectComponent;
