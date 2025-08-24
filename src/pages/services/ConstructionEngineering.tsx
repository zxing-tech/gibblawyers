import ServicePageTemplate from '@/components/ServicePageTemplate';

const ConstructionEngineering = () => {
  return (
    <ServicePageTemplate
      title="Construction & Engineering Law"
      subtitle="Legal services for construction projects, engineering contracts, and infrastructure development"
      description="We provide specialized legal services for the construction and engineering industry, covering all aspects of project development and dispute resolution."
      overview="Our construction and engineering law practice serves contractors, developers, consultants, and other stakeholders in the construction industry. We provide practical legal solutions for complex construction projects, from initial planning through completion and beyond."
      services={[
        "Construction contract drafting and review",
        "FIDIC and standard form contracts",
        "Project financing and development",
        "Construction dispute resolution",
        "Adjudication and arbitration proceedings",
        "Professional negligence claims",
        "Delay and disruption claims",
        "Defects and warranty matters"
      ]}
      metaDescription="Specialized construction and engineering law services covering contracts, disputes, and project development in Malaysia."
    />
  );
};

export default ConstructionEngineering;