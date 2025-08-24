import ServicePageTemplate from '@/components/ServicePageTemplate';

const TrustEstates = () => {
  return (
    <ServicePageTemplate
      title="Trust & Estate Planning"
      subtitle="Comprehensive estate planning, trust administration, and succession services"
      description="We provide expert estate planning and trust services to help clients protect and transfer their wealth efficiently and tax-effectively."
      overview="Our trust and estate planning practice helps individuals and families plan for the future through comprehensive estate planning strategies. We assist with will drafting, trust establishment, estate administration, and succession planning to ensure your assets are protected and transferred according to your wishes."
      services={[
        "Will drafting and estate planning",
        "Trust establishment and administration",
        "Probate and estate administration",
        "Succession planning for businesses",
        "Tax-efficient wealth transfer strategies",
        "Guardianship and power of attorney",
        "Estate disputes and litigation",
        "Cross-border estate planning"
      ]}
      metaDescription="Expert trust and estate planning services including wills, probate, trust administration, and succession planning in Malaysia."
    />
  );
};

export default TrustEstates;