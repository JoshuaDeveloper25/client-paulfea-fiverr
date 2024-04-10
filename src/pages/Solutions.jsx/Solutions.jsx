import ReadyGetStarted from "../../components/ReadyGetStarted";
import CustomerScreening from "./components/CustomerScreening";
import DueDiligenceAndComplance from "./components/DueDiligenceAndComplance";
import IdentityAssurance from "./components/IdentityAssurance";

const Solutions = () => {
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
