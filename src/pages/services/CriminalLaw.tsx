import ServicePageTemplate from '@/components/ServicePageTemplate';

const CriminalLaw = () => {
  return (
    <ServicePageTemplate
      title="Criminal Law"
      subtitle="Law concerned with the punishment of offenders, threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people inclusive of one's self."
      description="With our experienced and dedicated lawyers, we handle a broad spectrum of cases which are of diverse criminal nature with tenacity."
      overview="With our experienced and dedicated lawyers, we handle a broad spectrum of cases which are of diverse criminal nature with tenacity. Whatever the challenge, we partner with our clients every step in the process"
      services={[
        "The Penal Code",
        "Road Transport Act",
        "Prevention of Corruption Act", 
        "Companies Act",
        "Firearms Act",
        "Dangerous Drugs (DDA) Act",
        "Employee Provident Fund(EPF) Act and Social Security(SOCSO) Act",
        "Security Industries Act",
        "Local Government Act and subsidiary legislation",
        "Dangerous Drugs (Forfeiture of Property) Act 1988",
        "Security Offences (Special Measures) Act 2012",
        "Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001"
      ]}
      metaDescription="Experienced criminal law defense services covering a broad spectrum of criminal matters under Malaysian law."
    />
  );
};

export default CriminalLaw;