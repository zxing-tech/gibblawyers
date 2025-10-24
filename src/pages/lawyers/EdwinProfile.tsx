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
    "Civil Litigation",
    "Commercial Litigation",
    "Corporate Advisory", 
    "Property & Trust Matters",
    "Employment Law",
    "Family Law",
    "Real Estate Transactions",
    "Dispute Resolution"
  ];

  const achievements = [
    "78th & 95th President of Rotary Club of Ipoh (2008-2009 & 2025-2026)",
    "Former Assistant Governor, Rotary International District 3300 (two terms)",
    "Actively involved in projects serving orphans and underprivileged families",
    "Community leader dedicated to serving special-needs children",
    "Expert in drafting complex commercial agreements",
    "Experienced in shareholder arrangements and joint ventures"
  ];

  const education = [
    {
      degree: "Bachelor of Laws (Hons)",
      institution: "University of London",
      year: "Graduated"
    },
    {
      degree: "Advocate & Solicitor",
      institution: "High Court of Malaya", 
      year: "Admitted 1997"
    }
  ];

  const experience = [
    {
      period: "1997 - Present",
      role: "Senior Partner",
      company: "Gibb & Co., Advocates & Solicitors",
      description: "Overseeing litigation, conveyancing, and advisory portfolios. Regularly advises corporations, SMEs, and individuals on dispute resolution, shareholder arrangements, joint ventures, and real estate transactions."
    }
  ];

  const leadership = [
    {
      role: "78th & 95th President",
      organization: "Rotary Club of Ipoh",
      period: "2008-2009 & 2025-2026"
    },
    {
      role: "Former Assistant Governor",
      organization: "Rotary International District 3300",
      period: "Two Terms"
    }
  ];

  const certifications = [
    "Advocate & Solicitor of the High Court of Malaya (Since 1997)",
    "Expert in Commercial Agreement Drafting",
    "Specialist in Sale & Purchase Documentation",
    "Trust Instruments & Settlement Terms Expert"
  ];

  return (
    <Layout 
      title="Edwin Seibel - Senior Partner | Gibb Lawyers"
      description="Meet Edwin Seibel, Senior Partner at Gibb & Co with over 28 years of legal experience in civil litigation, corporate advisory, and community leadership."
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
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Advocate & Solicitor | Senior Partner at Gibb & Co., Ipoh | Community Leader | Rotarian | Inner Wheel Supporter
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-lg text-muted-foreground italic leading-relaxed">
                      "Life is God's gift to us. What we do with it is our gift to God."
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">{new Date().getFullYear() - 1997}+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">Since 1997</div>
                      <div className="text-sm text-muted-foreground">Admitted to Bar</div>
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
                  With over 28 years of legal experience, I am an Advocate and Solicitor based in Ipoh, serving as Senior Partner at Gibb & Co., Advocates & Solicitors, one of the city's longstanding law firms.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My practice spans civil and commercial litigation, corporate advisory, property and trust matters, employment law, and family law. I take pride in delivering clear, practical, and solution-oriented counsel rooted in professionalism, ethics, and empathy for clients' needs.
                </p>
                <p className="text-lg text-primary font-medium leading-relaxed italic">
                  I believe that every case deserves diligence, every client deserves respect, and every outcome should reflect fairness and integrity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond the courtroom, I am passionate about community leadership and service above self. Faith, gratitude, and service guide both my professional journey and personal purposes.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Practice Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive legal services rooted in professionalism, ethics, and empathy
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
                Professional Highlights & Community Leadership
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

      {/* Leadership & Community Service */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Leadership & Service
              </h2>
              <p className="text-lg text-muted-foreground">
                Committed to service above self through Rotary International
              </p>
            </div>
            
            <div className="space-y-6">
              {leadership.map((item, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-1">
                        <div className="text-sm font-medium text-primary">{item.period}</div>
                      </div>
                      <div className="lg:col-span-3 space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                        <p className="text-muted-foreground font-medium">{item.organization}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="border border-primary/20 bg-primary/5 mt-8">
              <CardContent className="p-8">
                <p className="text-lg text-center text-muted-foreground leading-relaxed">
                  Actively involved in projects serving orphans, underprivileged families, and special-needs children. These experiences have strengthened my belief that leadership is not about titles, but about touching lives.
                </p>
              </CardContent>
            </Card>
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

      {/* Legal Practice Focus */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-sm font-medium text-accent">PROFESSIONAL EXPERTISE</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Comprehensive Legal Services
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Regularly advises corporations, SMEs, and individuals on dispute resolution, shareholder arrangements, joint ventures, and real estate transactions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Corporate & Commercial</h3>
                      <p className="text-muted-foreground">Expert advisory on shareholder arrangements, joint ventures, and complex commercial agreements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Scale className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Litigation Services</h3>
                      <p className="text-muted-foreground">Civil and commercial litigation with clear, practical, and solution-oriented counsel.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Documentation Excellence</h3>
                      <p className="text-muted-foreground">Experienced in drafting sale & purchase, loan documentation, settlement terms, and trust instruments.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-center">Professional Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-lg font-semibold text-primary mb-2">Diligence</div>
                      <div className="text-sm text-muted-foreground">Every case deserves thoroughness</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-lg font-semibold text-primary mb-2">Respect</div>
                      <div className="text-sm text-muted-foreground">Every client deserves dignity</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-lg font-semibold text-primary mb-2">Integrity</div>
                      <div className="text-sm text-muted-foreground">Every outcome reflects fairness</div>
                    </div>
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
              Legal Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Get expert advice on civil litigation, corporate matters, property transactions, and family law.
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