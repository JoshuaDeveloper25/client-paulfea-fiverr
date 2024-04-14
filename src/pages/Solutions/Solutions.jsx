import { useEffect } from 'react';
import ReadyGetStarted from '../../components/ReadyGetStarted';
import CustomerScreening from './components/CustomerScreening';
import DueDiligenceAndComplance from './components/DueDiligenceAndComplance';
import IdentityAssurance from './components/IdentityAssurance';
import { useLocation } from 'react-router-dom';

const Solutions = () => {
  const location = useLocation();

  useEffect(() => {
    const [voidText, id] = location.hash.split('#');

    if (id) {
      const faq = document.getElementById(id);
      // Desplaza la ventana para que la sección sea visible
      faq.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.key]);

  return (
    <>
      {/* Customer Screening */}
      <CustomerScreening />

      {/* Identity Assurance */}
      <IdentityAssurance />

      {/* Due Diligence And Complance */}
      <DueDiligenceAndComplance />

      {/* Ready to get started? */}
      <ReadyGetStarted />
    </>
  );
};

export default Solutions;
