import ServicePageTemplate from '@/components/ServicePageTemplate';

const CorporateCommercial = () => {
  return (
    <ServicePageTemplate
      title="Corporate & Commercial Law"
      subtitle="Law governs the formation of companies, corporate restructuring, shareholder rights, mergers, and acquisitions and commercial transactions."
      description="With our dedicated team of corporate lawyers, we support your commercial decisions by investing time in understanding your objectives and working alongside you to achieve them."
      overview="With our dedicated team of corporate lawyers, we support your commercial decisions by investing time in understanding your objectives and working alongside you to achieve them by advising on a wide range of corporate and commercial law services such as banking and finance, company incorporation, privatization, accounting, joint ventures, insurance, investment and real estate. For Corporate Restructuring, we provide innovative, practical legal solutions to clients involved in distressed company situations. Our experience across a variety of industries and with all types of restructuring, combined with our wide-ranging practice capabilities and dedication to client service, allows us to address clients' needs in any restructuring situation. Our lawyers have a very diverse skill set, spanning dispute resolution, mergers and acquisitions, capital markets, and finance. This equips us to deal with the complex issues that arise in workouts, the rehabilitation process, and solvent reorganisations."
      services={[
        "Incorporation",
        "Joint Venture Agreements",
        "Purchase of shares",
        "Registration of off shore company",
        "Share buy back/Capital reduction",
        "Memorandum and Articles of Association",
        "Company secretarial work",
        "Mergers and Acquisitions",
        "Due Diligence",
        "Scheme of Arrangements",
        "Corporate Restructuring"
      ]}
      metaDescription="Expert corporate and commercial law services including incorporation, mergers & acquisitions, joint ventures, and corporate restructuring in Malaysia."
    />
  );
};

export default CorporateCommercial;