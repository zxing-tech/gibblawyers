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
  CheckCircle,
  Gavel
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ErnestProfile = () => {
  const specializations = [
    "Employment Law",
    "Industrial Relations Litigation",
    "Organisational Right-Sizing & Compliance",
    "Judicial Review",
    "Wills & Trusts",
    "Estate Administration & Executorship",
    "General Civil Litigation",
    "Conveyancing"
  ];

  const achievements = [
    "Senior Partner at Gibb & Co. focusing on employment law, industrial relations, and judicial review",
    "Founder of Back2Basics Consultants, an HRDCorp Registered Training Provider",
    "Accredited HRDCorp trainer (2024) and Level 1 ESG practitioner (2025)",
    "Certified Neuro Linguistic Programming practitioner (2022)",
    "Instrumental in forming the Malaysian and Perak Triathlon Associations in the early 1990s",
    "Cycling-based charity advocate with Sepeda Amal Borneo (SAB) and AWOL Riders"
  ];

  const education = [
    {
      degree: "Bachelor of Laws (Hons)",
      institution: "University of Wolverhampton",
      year: "1995"
    },
    {
      degree: "Bachelor of Physical & Health Education",
      institution: "University of Toronto",
      year: "1988"
    }
  ];

  const experience = [
    {
      period: "2005 - Present",
      role: "Senior Partner",
      company: "Gibb & Co",
      description: "Leading the employment law and industrial relations department, advising on high-stakes restructuring, employee misconduct investigations, and regulatory compliance mandates."
    },
    {
      period: "1995 - 2005",
      role: "Partner",
      company: "Gibb & Co",
      description: "Specialized in employment law, industrial relations, and judicial review, with a focus on HR consulting and workplace mental health."
    },
    {
      period: "1988 - 1995",
      role: "Associate",
      company: "Gibb & Co",
      description: "Built foundation in general litigation and employment law practice."
    }
  ];

  const notableCase = {
    title: "Strategic Workforce Restructuring Advisory",
    year: "2024",
    description: "Advised a regional conglomerate through high-stakes restructuring, balancing regulatory compliance, employee relations, and organisational renewal."
  };

  return (
    <Layout 
      title="E. Ernest Balasingam - Senior Partner | Gibb Lawyers"
      description="Meet E. Ernest Balasingam, Senior Partner at Gibb & Co with expertise in employment law, industrial relations, and judicial review."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/10 via-secondary/20 to-background py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Profile Image */}
              <div className="relative">
                <Card className="border border-border/50 overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ERNEST_thumbnail.jpg"
                      alt="E. Ernest Balasingam - Senior Partner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </Card>
              </div>

              {/* Profile Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-sm font-medium text-accent">SENIOR PARTNER</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    E. Ernest Balasingam
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Lawyer, HR strategist, and trainer specialising in employment law, industrial relations, and judicial review—valued for legal precision, strategic pragmatism, and a deep understanding of organisational dynamics.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border border-accent/20 bg-accent/5">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                      <div className="text-2xl font-bold text-accent mb-1">29+</div>
                      <div className="text-sm text-muted-foreground">Years in Practice</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/20 bg-accent/5">
                    <CardContent className="p-6 text-center">
                      <Gavel className="h-8 w-8 text-accent mx-auto mb-3" />
                      <div className="text-2xl font-bold text-accent mb-1">40 Years</div>
                      <div className="text-sm text-muted-foreground">Endurance Athlete & Charity Rider</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Info */}
                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-accent" />
                        <span className="text-sm text-muted-foreground">ernest@gibblawyers.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-accent" />
                        <span className="text-sm text-muted-foreground">+60 5-254 6445</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ernest Balasingam is Senior Partner at Gibb & Co. Advocates & Solicitors, where he has spent more than two decades specialising in employment law, industrial relations, and judicial review. He is engaged for high-stakes restructuring, employee misconduct investigations, and regulatory compliance mandates that call for legal rigor and a nuanced grasp of organisational dynamics.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His academic grounding in Physical & Health Education (University of Toronto) and Law (University of Wolverhampton) reflects the discipline and adaptability that shape his work. As founder of Back2Basics Consultants—an HRDCorp Registered Training Provider—Ernest trains and advises companies on HR best practices, workplace mental health, leadership, and compliance frameworks, championing evidence-based policies over superficial fixes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Outside chambers, Ernest’s four-decade journey as an endurance athlete fuels his community commitments. A former triathlete, he helped establish the Malaysian and Perak Triathlon Associations in the early 1990s and continues to raise funds for underserved causes through cycling initiatives such as Sepeda Amal Borneo (SAB) and AWOL Riders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signature Matter */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-accent/30 bg-accent/5">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium text-accent">SIGNATURE MATTER</span>
                </div>
                <CardTitle className="text-2xl">{notableCase.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{notableCase.year}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{notableCase.description}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Areas of Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive litigation and legal advocacy services
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {specializations.map((spec, index) => {
                const serviceMap: Record<string, string> = {
                  "Employment Law": "/services/employment",
                  "Industrial Relations Litigation": "/services/employment",
                  "Organisational Right-Sizing & Compliance": "/services/employment",
                  "Judicial Review": "/services/administrative-law",
                  "Wills & Trusts": "/services/trust-estates",
                  "Estate Administration & Executorship": "/services/trust-estates",
                  "General Civil Litigation": "/services/litigation-adr",
                  "Conveyancing": "/services/real-estate-conveyancing"
                };
                const url = serviceMap[spec];
                return url ? (
                  <Link key={index} to={url}>
                    <Badge variant="outline" className="w-full p-3 text-center justify-center border-accent/30 text-accent hover:bg-accent/10 cursor-pointer transition">
                      {spec}
                    </Badge>
                  </Link>
                ) : (
                  <Badge key={index} variant="outline" className="p-3 text-center justify-center border-accent/30 text-accent">
                    {spec}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 sm:py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <span>Education & Credentials</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-accent font-medium">{edu.year}</p>
                      {index < education.length - 1 && <div className="w-full h-px bg-border mt-4"></div>}
                    </div>
                  ))}
                  <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <p className="text-sm font-medium text-accent">
                      Called to Malaysian Bar: 1996
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-accent" />
                    <span>Key Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
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
                Professional Experience
              </h2>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-1">
                        <div className="text-sm font-medium text-accent">{exp.period}</div>
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

      {/* Advocacy Philosophy */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-accent/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Scale className="h-16 w-16 text-accent mx-auto" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Advocacy Philosophy
              </h2>
              <blockquote className="text-xl italic text-muted-foreground leading-relaxed">
                "Justice is not just about winning cases, but ensuring that every client receives 
                the passionate advocacy and meticulous preparation they deserve. Experience teaches us 
                that the foundation of successful litigation lies in understanding both the law and the human story behind it."
              </blockquote>
              <p className="text-accent font-medium">- E. Ernest Balasingam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Need Legal Representation?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get expert legal representation for litigation, criminal defense, and civil disputes.
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

export default ErnestProfile;