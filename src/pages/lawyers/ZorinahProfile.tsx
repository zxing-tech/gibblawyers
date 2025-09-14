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
    "Corporate Law",
    "Banking & Finance", 
    "Real Estate",
    "Mergers & Acquisitions",
    "Commercial Litigation",
    "Securities Law"
  ];

  const achievements = [
    "Successfully led over 500 corporate transactions",
    "Recognized by Malaysian Legal Awards 2023",
    "Expert advisor on banking regulations",
    "Speaker at International Corporate Law Conference",
    "Published articles in Malaysian Bar Journal"
  ];

  const education = [
    {
      degree: "Bachelor of Laws (Hons)",
      institution: "University of Malaya",
      year: "1995"
    },
    {
      degree: "Certificate in Legal Practice",
      institution: "Legal Profession Qualifying Board",
      year: "1995"
    }
  ];

  const experience = [
    {
      period: "2010 - Present",
      role: "Managing Partner",
      company: "Gibb & Co",
      description: "Leading the firm's strategic direction and overseeing major corporate transactions"
    },
    {
      period: "2000 - 2010",
      role: "Senior Associate",
      company: "Gibb & Co",
      description: "Specialized in banking law and corporate finance matters"
    },
    {
      period: "1995 - 2000",
      role: "Associate",
      company: "Gibb & Co",
      description: "Started career focusing on general commercial law and real estate"
    }
  ];

  return (
    <Layout 
      title="Zorinah Bt. Mohd Sobri - Managing Partner | Gibb Lawyers"
      description="Meet Zorinah Bt. Mohd Sobri, Managing Partner at Gibb & Co with 29+ years of experience in Corporate Law, Banking & Finance, and Real Estate."
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
                      alt="Zorinah Bt. Mohd Sobri - Managing Partner"
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
                    <span className="text-sm font-medium text-primary">MANAGING PARTNER</span>
                  </div>
                  
                  <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl leading-tight">
                    Zorinah Bt. Mohd Sobri
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed font-body">
                    With 29+ years of distinguished legal practice, Zorinah leads our firm with expertise in 
                    corporate law, banking & finance, and real estate transactions.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">29+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-primary mb-1">500+</div>
                      <div className="text-sm text-muted-foreground">Transactions Led</div>
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
              <h2 className="heading-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Areas of Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Specialized legal services across multiple practice areas
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {specializations.map((spec, index) => (
                <Badge key={index} variant="outline" className="p-3 text-center justify-center border-primary/30 text-primary hover:bg-primary/10">
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
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary">
                      Called to Malaysian Bar: 1995
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-primary" />
                    <span>Key Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
              Get in touch with Zorinah for expert legal advice on corporate matters, banking & finance, and real estate.
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