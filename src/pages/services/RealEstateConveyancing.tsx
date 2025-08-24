import ServicePageTemplate from '@/components/ServicePageTemplate';

const RealEstateConveyancing = () => {
  return (
    <ServicePageTemplate
      title="Real Estate & Conveyancing"
      subtitle="Real estate law governs who may own and use the land while in law, conveyancing is the transfer of legal title of real property from one person to another, or the granting of an encumbrance such as a charge, assignment or lien."
      description="Our lawyers have in-depth expertise for real estate transactional matters apart from the standard conveyance and application for loans for housing and development projects."
      overview="Our lawyers have in-depth expertise for real estate transactional matters apart from the standard conveyance and application for loans for housing and development projects. We service individual purchasers, investors, real estate companies, developers and financial institutions in a full range of real estate matters."
      services={[
        "Conversion, Amalgamation, Subdivision, Partition Land",
        "Forfeiture of Land by Virtue of Breach of Condition of Title",
        "Development Agreements",
        "Surrender and Exchange of Land with The State Government",
        "Tenancy Agreements"
      ]}
      metaDescription="Expert real estate and conveyancing services including property transactions, land development, and title transfers in Malaysia."
    />
  );
};

export default RealEstateConveyancing;