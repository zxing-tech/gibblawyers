import ServicePageTemplate from '@/components/ServicePageTemplate';

const Insurance = () => {
  return (
    <ServicePageTemplate
      title="Insurance"
      subtitle="Legal services covering insurance claims, disputes, and regulatory compliance"
      description="We provide comprehensive insurance legal services to insurers, policyholders, and intermediaries across various insurance sectors."
      overview="Our insurance practice encompasses all aspects of insurance law, from policy drafting and claims handling to complex insurance disputes. We advise on motor, property, marine, professional indemnity, and other insurance matters, helping clients understand their rights and obligations under insurance policies."
      services={[
        "Insurance policy drafting and review",
        "Claims handling and assessment",
        "Insurance disputes and litigation",
        "Motor vehicle accident claims",
        "Property insurance claims",
        "Professional indemnity matters",
        "Marine insurance claims",
        "Regulatory compliance and licensing"
      ]}
      metaDescription="Comprehensive insurance legal services covering claims, disputes, and regulatory matters in Malaysia."
    />
  );
};

export default Insurance;