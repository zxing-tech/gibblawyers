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
    "Litigation",
    "Criminal Law", 
    "Civil Disputes",
    "Commercial Disputes",
    "Employment Disputes",
    "Contract Law",
    "Tort Law",
    "Administrative Law"
  ];

  const achievements = [
    "Successfully defended over 1000 criminal cases",
    "Leading advocate in Malaysian High Court",
    "Expert in complex commercial litigation",
    "Recognized for outstanding advocacy skills",
    "Regular speaker at legal training programs",
    "Mentor to junior advocates"
  ];

  const education = [
    {
      degree: "Bachelor of Laws (Hons)",
      institution: "University of London",
      year: "1988"
    },
    {
      degree: "Certificate in Legal Practice",
      institution: "Legal Profession Qualifying Board",
      year: "1988"
    }
  ];

  const experience = [
    {
      period: "2005 - Present",
      role: "Senior Partner",
      company: "Gibb & Co",
      description: "Leading the litigation department and handling complex criminal and civil matters"
    },
    {
      period: "1995 - 2005",
      role: "Partner",
      company: "Gibb & Co",
      description: "Specialized in criminal defense and commercial litigation"
    },
    {
      period: "1988 - 1995",
      role: "Associate",
      company: "Gibb & Co",
      description: "Built foundation in general litigation and criminal law practice"
    }
  ];

  const notableCase = {
    title: "Landmark Commercial Dispute Resolution",
    year: "2022",
    description: "Successfully represented multinational corporation in complex contractual dispute worth RM50 million, achieving favorable settlement through strategic litigation approach."
  };

  return (
    <Layout 
      title="E. Ernest Balasingam - Senior Partner | Gibb Lawyers"
      description="Meet E. Ernest Balasingam, Senior Partner at Gibb & Co with 36+ years of experience in Litigation, Criminal Law, and Civil Disputes."
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
                    A distinguished litigator with 36+ years of experience, specializing in criminal law, 
                    civil disputes, and complex commercial litigation matters.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border border-accent/20 bg-accent/5">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                      <div className="text-2xl font-bold text-accent mb-1">36+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/20 bg-accent/5">
                    <CardContent className="p-6 text-center">
                      <Gavel className="h-8 w-8 text-accent mx-auto mb-3" />
                      <div className="text-2xl font-bold text-accent mb-1">1000+</div>
                      <div className="text-sm text-muted-foreground">Cases Defended</div>
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

      {/* Notable Case Spotlight */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-accent/30 bg-accent/5">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium text-accent">NOTABLE CASE</span>
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
              {specializations.map((spec, index) => (
                <Badge key={index} variant="outline" className="p-3 text-center justify-center border-accent/30 text-accent hover:bg-accent/10">
                  {spec}
                </Badge>
              ))}
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
                      Called to Malaysian Bar: 1988
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