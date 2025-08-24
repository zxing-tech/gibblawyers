import ServicePageTemplate from '@/components/ServicePageTemplate';

const BankingFinance = () => {
  return (
    <ServicePageTemplate
      title="Banking & Finance"
      subtitle="Law that addresses the operations of banks and other regulated & licensed financial institutions"
      description="In the evolving financial environment of today, with the experience of our lawyers, we are adept at advising financial institutions in relation to loan and financing structures and security."
      overview="In the evolving financial environment of today, with the experience of our lawyers, we are adept at advising financial institutions in relation to loan and financing structures and security."
      services={[
        "Security / Collateral Documentation",
        "Legal Charges and Related Documents",
        "Loan Agreement cum Assignment and Related Documents",
        "Master Indemnity Agreements",
        "Bridging Loan Agreements", 
        "Islamic Financing Documentation",
        "Trade Financing Documentation"
      ]}
      metaDescription="Comprehensive banking and finance legal services including loan documentation, security arrangements, and Islamic financing in Malaysia."
    />
  );
};

export default BankingFinance;