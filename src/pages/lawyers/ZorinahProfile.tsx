import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Scale, 
  Users,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ZorinahProfile = () => {
  const specializations = [
    "Civil Litigation",
    "Commercial Litigation", 
    "Corporate Advisory",
    "Contract Advisory",
    "Probate & Estate Administration",
    "Family & Matrimonial Matters",
    "Property Transactions",
    "Dispute Resolution"
  ];

  const education = [
    {
      degree: "Bachelor of Laws (Hons)",
      institution: "University of Malaya",
      year: "1987"
    },
    {
      degree: "Advocate & Solicitor",
      institution: "High Court of Malaya",
      year: "Called to Bar in 1988"
    }
  ];

  const experience = [
    {
      period: "1988 - Present",
      role: "Partner",
      company: "Gibb & Co., Advocates & Solicitors",
      description: "Throughout my practice, I have represented individuals and corporations, providing guidance on property transactions, commercial contracts, and dispute resolution. My approach is client-centric, pragmatic, and built on trust and long-term relationships."
    }
  ];

  const professionalValues = [
    {
      title: "Integrity",
      description: "Upholding honesty and ethical standards in every matter"
    },
    {
      title: "Professionalism",
      description: "Maintaining the highest standards of legal excellence"
    },
    {
      title: "Service",
      description: "Dedicated to serving clients and mentoring future practitioners"
    }
  ];

  return (
    <Layout 
      title="Zorinah binti Mohd Sobri - Partner | Gibb Lawyers"
      description="Meet Zorinah binti Mohd Sobri, Partner at Gibb & Co with over 36 years of legal experience in civil litigation, corporate advisory, and estate administration."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-background py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Profile Image */}
              <div className="relative">
                <Card className="border border-border/50 overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] relative">
                       <img
                      src="https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_PuanZ_thumbnail.jpg"
                      alt="Zorinah binti Mohd Sobri - Partner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </Card>
              </div>

              {/* Profile Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-sm font-medium text-primary">PARTNER</span>
                  </div>
                  
                  <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl leading-tight">
                    Zorinah binti Mohd Sobri
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed font-body">
                    Partner | Advocate & Solicitor, High Court of Malaya | Civil Litigation | Corporate Advisory
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-lg text-muted-foreground italic leading-relaxed">
                      "Justice begins with integrity, and integrity begins with how we serve."
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">{new Date().getFullYear() - 1988}+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">Since 1988</div>
                      <div className="text-sm text-muted-foreground">Called to Bar</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Info */}
                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">zorinah@gibblawyers.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <a 
                          href="tel:+60524100027" 
                          className="text-sm text-muted-foreground hover:text-primary transition"
                        >
                          +60 5 241 0027
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About
              </h2>
            </div>
            
            <Card className="border border-border/50">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Zorinah binti Mohd Sobri is a Partner at Gibb & Co., one of Ipoh’s longest-standing firms. Called to the Malaysian Bar in 1988 after completing her LL.B (Hons) at the University of Malaya, she has dedicated more than three decades to advancing justice through professionalism and service.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Her practice spans civil and commercial litigation, corporate and contract advisory, and probate and estate administration. She is recognised for delivering clear, practical strategies grounded in integrity and diligence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Zorinah advises individuals, families, and corporations on property transactions, commercial agreements, dispute resolution, and family matters, always with a client-centric, pragmatic approach built on trust and long-term relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Practice Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive legal services grounded in integrity and diligence
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {specializations.map((spec, index) => {
                const serviceMap: Record<string, string> = {
                  "Civil Litigation": "/services/litigation-adr",
                  "Commercial Litigation": "/services/litigation-adr",
                  "Corporate Advisory": "/services/corporate-commercial",
                  "Contract Advisory": "/services/corporate-commercial",
                  "Probate & Estate Administration": "/services/trust-estates",
                  "Family & Matrimonial Matters": "/services/family-law",
                  "Property Transactions": "/services/real-estate-conveyancing",
                  "Dispute Resolution": "/services/litigation-adr"
                };
                const url = serviceMap[spec];
                return url ? (
                  <Link key={index} to={url}>
                    <Badge variant="outline" className="w-full p-3 text-center justify-center border-primary/30 text-primary hover:bg-primary/10 cursor-pointer transition">
                      {spec}
                    </Badge>
                  </Link>
                ) : (
                  <Badge key={index} variant="outline" className="p-3 text-center justify-center border-primary/30 text-primary">
                    {spec}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Professional Values */}
      <section className="py-16 sm:py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span>Education & Credentials</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-primary font-medium">{edu.year}</p>
                      {index < education.length - 1 && <div className="w-full h-px bg-border mt-4"></div>}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Professional Values */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-primary" />
                    <span>Professional Values</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    She holds fast to the principles of integrity, professionalism, and service, values that define both her work and the ethos of Gibb & Co. Her commitment remains to uphold the highest standards of legal excellence while mentoring the next generation of practitioners.
                  </p>
                  {professionalValues.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Professional Journey
              </h2>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-1">
                        <div className="text-sm font-medium text-primary">{exp.period}</div>
                      </div>
                      <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Need Legal Consultation?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with Zorinah for expert legal advice on civil litigation, corporate matters, and estate administration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/lawyers">View All Lawyers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ZorinahProfile;