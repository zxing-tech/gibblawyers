import ServicePageTemplate from '@/components/ServicePageTemplate';

const IntellectualProperty = () => {
  return (
    <ServicePageTemplate
      title="Intellectual Property"
      subtitle="Protection and enforcement of intellectual property rights including trademarks, patents, and copyrights"
      description="We provide comprehensive intellectual property services to protect and enforce your valuable intellectual assets in Malaysia and internationally."
      overview="Our intellectual property practice covers all aspects of IP law, from registration and prosecution to enforcement and litigation. We help clients protect their innovations, brands, and creative works while navigating the complex landscape of IP rights in the digital age."
      services={[
        "Trademark registration and prosecution",
        "Patent applications and prosecution", 
        "Copyright registration and protection",
        "Industrial design registration",
        "IP due diligence and portfolio management",
        "IP licensing and assignment agreements",
        "IP enforcement and litigation",
        "Anti-counterfeiting measures"
      ]}
      metaDescription="Expert intellectual property services including trademark, patent, copyright, and design protection in Malaysia."
    />
  );
};

export default IntellectualProperty;