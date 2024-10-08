import {useEffect, useState,  useRef} from 'react'

const TypeWriter = ({text, speed}) => {

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text || currentIndex === text.length) return;

    const timeoutId = setTimeout(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 100 / speed);

    // Limpia el timeout si el componente se desmonta o si currentIndex alcanza la longitud del texto
    return () => clearTimeout(timeoutId);
  }, [text, currentIndex, speed]);

  // Reinicia el estado cuando cambia el texto
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);



  return (
      <p className='frase-text'>{displayText}</p>
    
  )
}

export default TypeWriter