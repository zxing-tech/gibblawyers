import ServicePageTemplate from '@/components/ServicePageTemplate';

const AdministrativeLaw = () => {
  return (
    <ServicePageTemplate
      title="Administrative Law"
      subtitle="Law dealing with the establishment, duties, and powers of and available remedies against authorized agencies in the executive branch of the government"
      description="We are at the forefront of issues which are of public concern to the community as well as for the commercial and industrial sectors with matters relating to complex public laws."
      overview="We are at the forefront of issues which are of public concern to the community as well as for the commercial and industrial sectors with matters relating to complex public laws. The act, omission and neglect by any Public Authority is analyzed against the prejudice and detriment to the community. Our objective is to engage public authority into a discussion and to make decisions which will serve to benefit the community. Our lawyers are experienced judicial review, tribunal proceedings, disciplinary proceedings and statutory appeal work."
      services={[
        "On breaches under Town & Country Planning Act 1976, Local Government Act 1976 & Street Drainage & Building Act 1974",
        "On Forfeiture & Compulsory Acquisition by Local Authorities", 
        "Applications for Judicial Review, Declarations & Injunctions"
      ]}
      metaDescription="Expert administrative law services dealing with public authority matters, judicial review, and statutory appeals in Malaysia."
    />
  );
};

export default AdministrativeLaw;