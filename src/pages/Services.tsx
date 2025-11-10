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
      title="Legal Services Malaysia | Corporate, Litigation & Property Law - Gibb Lawyers"
      description="Comprehensive legal services in Malaysia: Corporate & Commercial Law, Litigation & ADR, Real Estate, Employment Law, Family Law, Banking & Finance. Expert lawyers with 130+ years of experience in Ipoh and Teluk Intan."
    >
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center md:bg-top"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

          <div className="relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
              <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Our Services
                </span>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Specialist legal counsel across corporate, commercial, and personal matters
                </h1>
                <p className="text-base text-muted-foreground sm:text-lg">
                  For over 130 years, we’ve partnered with organisations and families to navigate complex legal landscapes with clarity, strategy, and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Legal Expertise
              </span>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Tailored solutions across Malaysia’s key legal practice areas
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Explore the core services our partners lead, with dedicated teams supporting each specialty.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="group flex h-full flex-col rounded-3xl bg-background/90 p-8 shadow-lg ring-1 ring-border/30 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground sm:text-base flex-1">
                    Strategic advice and representation guided by senior partners who specialise in this field.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-20 sm:py-24 lg:py-28 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <span className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Knowledge Transfer
              </span>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Training programmes that equip your teams with legal insight
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                We design bespoke workshops and briefings that help leadership teams anticipate risk and navigate regulatory change.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border border-border/40 bg-background/90 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-foreground">
                    <Award className="h-7 w-7 text-primary" />
                    Training excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                  <p>
                    From employment law to construction risk, we run practical sessions that translate legislation into actionable policies and workflows for your teams.
                  </p>
                  <p>
                    Clients across insurance, banking, and heavy industry rely on our trainers to deliver scenario-based learning that prepares them for real-world decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-background/90 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-foreground">
                    <Users className="h-7 w-7 text-primary" />
                    Recent topics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {trainingTopics.slice(0, 6).map((topic) => (
                    <div key={topic} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span className="text-sm text-muted-foreground sm:text-base">{topic}</span>
                    </div>
                  ))}
                  {trainingTopics.length > 6 && (
                    <p className="pt-2 text-sm italic text-muted-foreground sm:text-base">
                      …plus {trainingTopics.length - 6} additional programmes tailored to specific sectors.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Notarial Services Section */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Authentication Services
              </span>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Notarial services recognised locally and abroad
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Ensure your documents meet international standards with attestation handled by our experienced notary public.
              </p>
            </div>

            <Card className="border border-border/40 bg-background/90 shadow-xl">
              <CardContent className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-foreground">
                      <Shield className="h-7 w-7 text-primary" />
                      Professional attestation
                    </h3>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      Whether you’re completing a property transfer, managing overseas business filings, or arranging estate documentation, our notarial team provides fast, compliant certification.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">Why clients choose us:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
                      <li>• Documents trusted by embassies and regulators worldwide</li>
                      <li>• Efficient scheduling without unnecessary delays</li>
                      <li>• Guidance on required supporting paperwork</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                    <h4 className="text-lg font-semibold text-foreground">Common documents we certify:</h4>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:text-base">
                      <span>• Identity cards</span>
                      <span>• Passports</span>
                      <span>• Academic certificates</span>
                      <span>• Commercial agreements</span>
                      <span>• Property transfers</span>
                      <span>• Estate paperwork</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/40 bg-background p-6">
                    <h4 className="text-lg font-semibold text-foreground">Book an appointment</h4>
                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                      Contact our Ipoh office to schedule notarisation with William Balasingam.
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="mt-5 w-full min-h-[52px] text-base font-semibold border-primary/30"
                      asChild
                    >
                      <a href="tel:+60125050713">
                        <Shield className="mr-2 h-5 w-5" />
                        Call +60 12-505 0713
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Services;