import ServicePageTemplate from '@/components/ServicePageTemplate';

const FamilyLaw = () => {
  return (
    <ServicePageTemplate
      title="Family Law"
      subtitle="The branch of law that deals with matters relating to the family, such as divorce and child custody."
      description="Family and matrimonial disputes are sensitive matters and we believe that litigation should be the last resort."
      overview="Family and matrimonial disputes are sensitive matters and we believe that litigation should be the last resort. We guide our clients towards settlement by focusing on solutions and conclusions that are viable for all parties. In the event we move onto litigation, our priority is to safeguard our clients' interest."
      services={[
        "Deed of family settlements",
        "Divorce, Nullity",
        "Custody & Maintenance", 
        "Adoption"
      ]}
      metaDescription="Compassionate family law services including divorce, custody, maintenance, adoption, and family settlements in Malaysia."
    />
  );
};

export default FamilyLaw;