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
  FileText,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EdwinProfile = () => {
  const specializations = [
    "Employment Law",
    "Industrial Relations", 
    "Commercial Law",
    "Labor Disputes",
    "Workplace Issues",
    "Contract Negotiations",
    "HR Compliance",
    "Trade Union Matters"
  ];

  const achievements = [
    "Successfully resolved over 800 employment disputes",
    "Expert advisor on Malaysian Employment Act",
    "Leading advocate in Industrial Court proceedings",
    "Regular contributor to employment law publications",
    "Keynote speaker at HR and legal conferences",
    "Recognized for innovative dispute resolution approaches"
  ];

  const education = [
    {
      degree: "Bachelor of Laws (Hons)",
      institution: "University of Malaya",
      year: "1992"
    },
    {
      degree: "Certificate in Legal Practice",
      institution: "Legal Profession Qualifying Board", 
      year: "1992"
    },
    {
      degree: "Advanced Certificate in Employment Law",
      institution: "Malaysian Institute of Management",
      year: "1998"
    }
  ];

  const experience = [
    {
      period: "2008 - Present",
      role: "Senior Partner",
      company: "Gibb & Co",
      description: "Leading the employment law practice and advising multinational corporations on complex industrial relations matters"
    },
    {
      period: "2000 - 2008", 
      role: "Partner",
      company: "Gibb & Co",
      description: "Specialized in employment law and commercial litigation, building reputation as employment law expert"
    },
    {
      period: "1992 - 2000",
      role: "Associate",
      company: "Gibb & Co",
      description: "Developed expertise in general commercial law with focus on employment and industrial relations"
    }
  ];

  const certifications = [
    "Advocate & Solicitor of High Court of Malaya",
    "Certified Mediator - Malaysian Mediation Centre",
    "Industrial Relations Specialist Certificate",
    "Employment Law Expert - Malaysian Bar"
  ];

  return (
    <Layout 
      title="Edwin Seibel (A.M.P) - Senior Partner | Gibb Lawyers"
      description="Meet Edwin Seibel, Senior Partner at Gibb & Co with 32+ years of experience in Employment Law, Industrial Relations, and Commercial Law."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/10 to-background py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Profile Image */}
              <div className="relative">
                <Card className="border border-border/50 overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ES_thumbnail-copy.jpg"
                      alt="Edwin Seibel - Senior Partner"
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
                    <span className="text-sm font-medium text-primary">SENIOR PARTNER</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Edwin Seibel
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground block mt-2">(A.M.P)</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A leading employment law specialist with 32+ years of experience, providing expert counsel 
                    on industrial relations, workplace compliance, and commercial matters.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">32+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">800+</div>
                      <div className="text-sm text-muted-foreground">Disputes Resolved</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Info */}
                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">edwin@gibblawyers.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
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

      {/* Specializations */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Areas of Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive employment law and industrial relations services
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {specializations.map((spec, index) => (
                <Badge key={index} variant="outline" className="p-3 text-center justify-center border-primary/30 text-primary hover:bg-primary/10">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 sm:py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span>Education & Qualifications</span>
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

              {/* Certifications */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-primary" />
                    <span>Professional Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Key Achievements
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
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

      {/* Employment Law Expertise */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-sm font-medium text-accent">SPECIALTY FOCUS</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Employment Law Excellence
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Edwin's deep understanding of Malaysian employment legislation, combined with practical 
                    business insight, makes him the go-to advisor for complex workplace issues and 
                    industrial relations matters.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Corporate Advisory</h3>
                      <p className="text-muted-foreground">Strategic counsel on employment policies, compliance frameworks, and HR best practices.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Scale className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Dispute Resolution</h3>
                      <p className="text-muted-foreground">Expert representation in Industrial Court proceedings and employment tribunal matters.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Contract Negotiations</h3>
                      <p className="text-muted-foreground">Skilled in drafting and negotiating employment contracts, collective agreements, and workplace policies.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-center">Employment Law Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">800+</div>
                      <div className="text-sm text-muted-foreground">Cases Handled</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Corporate Clients Served</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Employment Law Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Get expert advice on employment matters, industrial relations, and workplace compliance.
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

export default EdwinProfile;