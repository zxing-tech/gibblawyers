import ServicePageTemplate from '@/components/ServicePageTemplate';

const InsolvencyLiquidation = () => {
  return (
    <ServicePageTemplate
      title="Insolvency & Liquidation"
      subtitle="Legal procedures dealing with companies and individuals unable to pay their debts"
      description="We provide expert advice and representation in insolvency and liquidation matters, helping clients navigate complex financial distress situations."
      overview="Our insolvency and liquidation practice covers all aspects of corporate and personal insolvency. We act for debtors, creditors, liquidators, and other stakeholders in insolvency proceedings, providing practical solutions during financially challenging times."
      services={[
        "Corporate voluntary arrangements",
        "Compulsory and voluntary liquidation",
        "Receivership appointments",
        "Scheme of arrangements",
        "Judicial management",
        "Personal bankruptcy proceedings",
        "Creditor rights and recovery",
        "Director disqualification proceedings"
      ]}
      metaDescription="Expert insolvency and liquidation services covering corporate and personal insolvency matters in Malaysia."
    />
  );
};

export default InsolvencyLiquidation;