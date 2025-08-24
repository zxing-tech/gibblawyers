import ServicePageTemplate from '@/components/ServicePageTemplate';

const DebtRecovery = () => {
  return (
    <ServicePageTemplate
      title="Debt Recovery"
      subtitle="Legal processes and procedures for recovering outstanding debts and financial obligations"
      description="We provide comprehensive debt recovery services to help businesses and individuals recover outstanding debts efficiently and effectively."
      overview="Our debt recovery services are designed to help clients recover outstanding debts through various legal mechanisms while maintaining professional relationships where possible. We understand that debt recovery requires a balance between firm legal action and commercial sensitivity."
      services={[
        "Demand letters and notices",
        "Debt recovery litigation",
        "Asset tracing and recovery",
        "Enforcement proceedings",
        "Negotiation and settlement agreements",
        "Bankruptcy and winding up proceedings",
        "Security enforcement"
      ]}
      metaDescription="Professional debt recovery services including litigation, asset tracing, and enforcement proceedings in Malaysia."
    />
  );
};

export default DebtRecovery;