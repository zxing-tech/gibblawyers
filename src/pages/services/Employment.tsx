import ServicePageTemplate from '@/components/ServicePageTemplate';

const Employment = () => {
  return (
    <ServicePageTemplate
      title="Employment Industrial & Human Resources"
      subtitle="The area of law that governs the employer-employee relationship."
      description="Employment law has become increasingly complex in view of numerous status which protect the rights and interest of workers / employees."
      overview="Employment law has become increasingly complex in view of numerous status which protect the rights and interest of workers / employees. In view of such complexities, we are focused in practical outcomes which benefit both the Employer and the Employee. We offer practical solutions by providing hands on advise in respect of disputes which arise in the work place. We work closely with our clients to manage employment and safety risks, protect corporate reputation and manage employer-employee relations as these are factors that impacts our client's commercial decision-making."
      services={[
        "Reorganisations and separation of work force to ensure companies operate profitably and efficiently",
        "Creating strategies on the right sizing of companies",
        "Drafting of Contracts of Employment and HR Policies to ensure that they are in compliance with local legislation",
        "Preparation of performa letters to assist in management of indiscipline and misconduct which is consistent with the legal requirements for fairness and just cause",
        "Assisting with setting up of a domestic inquiry panel to investigate any allegations of misconduct",
        "Representing parties at the Department of Industrial Relations in respect of complaints made under Section 20 of the Industrial Relations Act 1967",
        "Representing parties at the Industrial Court and Court of Appeal on disputes arising out of dismissals and trade disputes"
      ]}
      metaDescription="Comprehensive employment law services covering HR policies, workplace disputes, industrial relations, and employee rights in Malaysia."
    />
  );
};

export default Employment;