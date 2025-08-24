import ServicePageTemplate from '@/components/ServicePageTemplate';

const LitigationADR = () => {
  return (
    <ServicePageTemplate
      title="Alternate Dispute Resolution & Litigation"
      subtitle="The procedure for settling disputes without litigation, such as adjudication, arbitration, mediation, or negotiation while litigation is the process of taking legal action."
      description="We assist to balance our client's objectives with regards to their legal and commercial risk and guide them to solve disputes efficiently and effectively."
      overview="We assist to balance our client's objectives with regards to their legal and commercial risk and guide them to solve disputes efficiently and effectively. Disputes can be commercially and emotionally exhaustive for the parties involved. We strongly believe in the benefits of Alternative Dispute Resolution namely Adjudication, Arbitration and Mediation as an alternative to litigation. In the event litigation is unavoidable or at the preference of our client, our tenacious lawyers have a vast experience in general litigation matters."
      services={[
        "Banking",
        "Corporate", 
        "Insolvency Securities",
        "Winding Up and Breach of Duty by Directors",
        "Employment",
        "Construction & Building Contracts",
        "Land Disputes",
        "Sale of Goods",
        "Insurance Securities"
      ]}
      metaDescription="Expert litigation and alternative dispute resolution services including arbitration, mediation, and commercial disputes in Malaysia."
    />
  );
};

export default LitigationADR;