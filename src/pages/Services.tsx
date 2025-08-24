import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const practices = [
    { name: "ADMINISTRATIVE LAW", url: "/services/administrative-law" },
    { name: "ALTERNATE DISPUTE RESOLUTION & LITIGATION", url: "/services/litigation-adr" },
    { name: "BANKING & FINANCE", url: "/services/banking-finance" },
    { name: "CONSTRUCTION & ENGINEERING LAW", url: "/services/construction-engineering" },
    { name: "CORPORATE & COMMERCIAL LAW", url: "/services/corporate-commercial" },
    { name: "CRIMINAL LAW", url: "/services/criminal-law" },
    { name: "DEBT RECOVERY", url: "/services/debt-recovery" },
    { name: "EMPLOYMENT INDUSTRIAL & HUMAN RESOURCES", url: "/services/employment" },
    { name: "FAMILY LAW", url: "/services/family-law" },
    { name: "INSOLVENCY & LIQUIDATION", url: "/services/insolvency-liquidation" },
    { name: "INSURANCE", url: "/services/insurance" },
    { name: "INTELLECTUAL PROPERTY", url: "/services/intellectual-property" },
    { name: "REAL ESTATE & CONVEYANCING", url: "/services/real-estate-conveyancing" },
    { name: "TRUST & ESTATE PLANNING", url: "/services/trust-estates" }
  ];

  const trainingTopics = [
    "Understanding the Employment Laws of Brunei Darrussalam",
    "Safeguarding your company's interest in commercial transactions", 
    "The role of the Industrial Court",
    "Assessing documents for Motor Vehicle Accident Claims",
    "Understanding Termination, Retrenchment & Redundancy",
    "The role of Adjusters in Motor Vehicle Claims Investigations",
    "Risk Assessment on Property & Banking Security Documentation",
    "Recovery Rights of Financial Institutions for Abandoned Projects", 
    "The Amendments To Improve The Housing Delivery System",
    "The Architect's Duty Of Care"
  ];

  return (
    <Layout 
      title="Our Legal Services - Gibb Lawyers"
      description="In our Client-Partner relationship, we listen with compassion to understand our clients, their business, its corporate culture."
    >
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Hero Image */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="relative max-w-5xl mx-auto">
              <img 
                src="/images/services-hero.jpg" 
                alt="Our Legal Services - Professional team meeting" 
                className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto px-2">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Our Legal Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              In our Client-Partner relationship, we listen with compassion to understand our clients, their business, its corporate culture so as to better equip our clients for the ever-evolving complex environments and provide winning solutions while mitigating the risks.
            </p>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Practices
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {practices.map((practice, index) => (
              <Link
                key={index}
                to={practice.url}
                className="group block"
              >
                <Card className="h-full hover:shadow-elegant hover:border-primary/20 transition-all duration-500 border border-border/50">
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between min-h-[60px] sm:min-h-[80px]">
                    <span className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                      {practice.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-secondary/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
              Training
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <Card className="border border-border/50">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl text-foreground">Overview</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Training is an integral part of the firm's practice. We believe in better equipping our clients in the manner they manage their organization, advising and addressing issues in their operations. Over the years we have conducted training for several of our clients in the areas of Insurance, Employment, Banking & Commercial law and Construction Law.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl text-foreground">Some of the topics we have covered</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 sm:space-y-4">
                    {trainingTopics.map((topic, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Notarial Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
              Notarial Services
            </h2>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl text-foreground">Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We offer Notary Public services for attestation and notarisation of documents in Malaysia. We are a firm which has been providing a wide range of legal services in the bustling business hubs of Malaysia.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Notaries Public are internationally recognised witnesses whose primary functions include the authentication and attestation of documents to be used overseas and locally (when necessary) The service is essential for the certification of documents namely identity cards, passports and certificates. In addition, the attestation is essential in the transfer of properties and estate and probate matters and any other legal matters beyond the jurisdiction of Malaysian Law.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  The benefit for such a service is that it saves an individual time and the cost of travel of attending to the matter personally overseas
                </p>
                <div className="mt-6 p-4 sm:p-6 bg-primary/10 rounded-lg">
                  <p className="text-sm sm:text-base text-foreground font-medium">
                    Please contact <a href="tel:+60125050713" className="text-primary hover:underline underline-offset-4 min-h-[44px] inline-block py-1">Mr William Balasingam at +60125050713</a> for more information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;