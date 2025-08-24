import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Scale, Building, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    { name: "ADMINISTRATIVE LAW", url: "/services/administrative-law", icon: Scale },
    { name: "ALTERNATE DISPUTE RESOLUTION & LITIGATION", url: "/services/litigation-adr", icon: Shield },
    { name: "BANKING & FINANCE", url: "/services/banking-finance", icon: Building },
    { name: "CONSTRUCTION & ENGINEERING LAW", url: "/services/construction-engineering", icon: Building },
    { name: "CORPORATE & COMMERCIAL LAW", url: "/services/corporate-commercial", icon: Building },
    { name: "CRIMINAL LAW", url: "/services/criminal-law", icon: Scale },
    { name: "DEBT RECOVERY", url: "/services/debt-recovery", icon: Shield },
    { name: "EMPLOYMENT INDUSTRIAL & HUMAN RESOURCES", url: "/services/employment", icon: Users },
    { name: "FAMILY LAW", url: "/services/family-law", icon: Shield },
    { name: "INSOLVENCY & LIQUIDATION", url: "/services/insolvency-liquidation", icon: Building },
    { name: "INSURANCE", url: "/services/insurance", icon: Shield },
    { name: "INTELLECTUAL PROPERTY", url: "/services/intellectual-property", icon: Award },
    { name: "REAL ESTATE & CONVEYANCING", url: "/services/real-estate-conveyancing", icon: Building },
    { name: "TRUST & ESTATE PLANNING", url: "/services/trust-estates", icon: Shield }
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
      description="Comprehensive legal services with over 130 years of experience. We provide expert solutions across multiple areas of law."
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {/* Header Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Hero Image */}
            <div className="mb-12 lg:mb-16">
              <div className="relative max-w-6xl mx-auto">
                <img 
                  src="/images/services-hero.jpg" 
                  alt="Our Legal Services - Professional team meeting" 
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="inline-block px-6 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-6">
                      <span className="text-sm font-medium">EST. 1892</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                      Expert Legal Services
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                      130+ Years of Legal Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  Client-Partner Relationship Excellence
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  We listen with compassion to understand our clients, their business, and corporate culture to better equip them for ever-evolving complex environments while providing winning solutions and mitigating risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">LEGAL EXPERTISE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Our Legal Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive legal solutions across multiple areas of law with decades of proven expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="group block animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full hover:shadow-2xl hover:border-primary/30 transition-all duration-500 border border-border/50 bg-card/50 backdrop-blur-sm group-hover:bg-card">
                    <CardContent className="p-6 flex items-center space-x-4 min-h-[100px]">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-tight block">
                          {service.name}
                        </span>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Learn more</span>
                          <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-accent/5 via-transparent to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
                  <span className="text-sm font-medium text-accent">KNOWLEDGE TRANSFER</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6">
                  Professional Training
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Empowering organizations with specialized legal knowledge and practical insights
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <Card className="border border-border/50 backdrop-blur-sm bg-card/50 shadow-xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl lg:text-3xl text-foreground flex items-center">
                      <Award className="w-8 h-8 text-primary mr-3" />
                      Training Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      Training is an integral part of our firm's services. We believe in better equipping our clients in managing their organizations, advising and addressing operational issues.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Over the years, we have conducted specialized training for clients across Insurance, Employment, Banking & Commercial Law, and Construction Law.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 backdrop-blur-sm bg-card/50 shadow-xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl lg:text-3xl text-foreground flex items-center">
                      <Users className="w-8 h-8 text-accent mr-3" />
                      Training Topics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {trainingTopics.slice(0, 6).map((topic, index) => (
                        <div key={index} className="flex items-start space-x-3 group">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{topic}</span>
                        </div>
                      ))}
                      {trainingTopics.length > 6 && (
                        <div className="pt-4">
                          <p className="text-sm text-muted-foreground italic">...and {trainingTopics.length - 6} more specialized topics</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Notarial Services Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                  <span className="text-sm font-medium text-primary">AUTHENTICATION SERVICES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                  Notarial Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Professional document authentication and attestation services for international and local use
                </p>
              </div>
              
              <Card className="border border-border/50 backdrop-blur-sm bg-card/50 shadow-2xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground flex items-center">
                          <Shield className="w-8 h-8 text-primary mr-3" />
                          Professional Attestation
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          We offer comprehensive Notary Public services for attestation and notarisation of documents in Malaysia. As an established firm providing legal services across Malaysia's business hubs, we ensure your documents meet international standards.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-foreground">Key Benefits:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">International recognition and authentication</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">Saves time and travel costs for overseas matters</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">Essential for property transfers and estate matters</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Document Types We Certify:</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                          <div>• Identity Cards</div>
                          <div>• Passports</div>
                          <div>• Certificates</div>
                          <div>• Legal Documents</div>
                          <div>• Property Papers</div>
                          <div>• Estate Documents</div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-card border border-border/50 rounded-2xl">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Contact Information:</h4>
                        <div className="space-y-3">
                          <p className="text-base text-muted-foreground">
                            For notarial services inquiries, please contact:
                          </p>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="w-full h-14 text-base border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                            onClick={() => window.open('tel:+60125050713', '_self')}
                          >
                            <Shield className="w-5 h-5 mr-3" />
                            Mr William Balasingam: +60125050713
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;