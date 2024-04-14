import { useEffect, useState } from 'react';
import { faqs } from '../../../DB/DB';
import FAQInfo from './FAQInfo';
import { useLocation } from 'react-router-dom';

const FAQ = () => {
  const [activeElement, setActiveElement] = useState('');
  const location = useLocation();

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement('');
    } else {
      setActiveElement(value);
    }
  };

  useEffect(() => {
    const faq = document.getElementById('faq');

    if (faq && location.hash) {
      // Desplaza la ventana para que la sección sea visible
      faq.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="faq" className="container-page px-3 mt-28">
      <div className="text-center my-10">
        <h2 className=" px-5 inline-block text-4xl border-b border-secondary">
          Frequently {` `}
          <span className="font-bold text-secondary animate-pulse">
            Asked
          </span>{' '}
          Questions
        </h2>
      </div>

      <div className="mb-14">
        {faqs?.map((faq) => {
          return (
            <FAQInfo
              key={faq?.faqId}
              handleClick={handleClick}
              activeElement={activeElement}
              {...faq}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
