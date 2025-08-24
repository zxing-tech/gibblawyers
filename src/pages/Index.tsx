import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Scale, Calendar, ArrowRight, Star, Award, Shield } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Users,
      title: "Lawyers",
      subtitle: "Meet Our Experienced",
      description: "Experienced legal professionals dedicated to your success",
      link: "/lawyers",
      color: "text-primary"
    },
    {
      icon: Scale,
      title: "Services", 
      subtitle: "Explore Our Legal",
      description: "Comprehensive legal services across multiple practice areas",
      link: "/services",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Consultation",
      subtitle: "Schedule Your",
      description: "Book a consultation with our expert legal team",
      link: "/contact", 
      color: "text-primary"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "EST. 1892",
      description: "Over 130 years of legal excellence and heritage"
    },
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Experienced lawyers across multiple practice areas"
    },
    {
      icon: Star,
      title: "Client Success", 
      description: "Dedicated to achieving the best outcomes for our clients"
    }
  ];

  return (
    <Layout 
      title="Gibb Lawyers - Experience you need. Achievements you get."
      description="Let Us Take Care of You Legally. Experience you need. Achievements you get."
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gibb-gray-50 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/office-interior.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10"></div>
        <div className="relative w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
              {/* Heritage Badge */}
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 animate-fade-in">
                <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 border border-primary/20 rounded-full bg-background/80 backdrop-blur-sm shadow-lg">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-primary tracking-wider uppercase">EST. 1892</span>
                </div>
                <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
              
              {/* Tagline */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gibb-bronze font-medium tracking-wide animate-fade-in">
                Let Us Take Care of You Legally
              </p>
              
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                  <span className="block text-foreground mb-2 sm:mb-4">Experience you need.</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                    Achievements you get.
                  </span>
                </h1>
              </div>
              
              {/* CTA Buttons */}
              <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold tracking-wide min-h-[52px] w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    SCHEDULE CONSULTATION
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold tracking-wide min-h-[52px] w-full sm:w-auto border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Link to="/services" className="flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    EXPLORE SERVICES
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-gibb-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              How We Can Help
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our expertise and discover the right legal solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Link to={service.link} className="block">
                  <Card className="h-full border-0 bg-background/50 backdrop-blur-sm hover:bg-background hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden hover:scale-105">
                    <CardContent className="p-8 sm:p-10 text-center space-y-6 sm:space-y-8">
                      <div className="relative">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${service.color}`}>
                          <service.icon className="h-10 w-10 sm:h-12 sm:w-12" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider font-medium">
                          {service.subtitle}
                        </p>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gibb-gray-50 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/office-interior.jpg')] bg-cover bg-center opacity-3"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Our Philosophy
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gibb-bronze via-primary to-gibb-bronze font-medium leading-relaxed">
                We invest in our people to serve our stakeholders better.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-8">
              <Button 
                asChild 
                size="lg" 
                className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold tracking-wide min-h-[52px] w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  TALK TO US
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold tracking-wide min-h-[52px] w-full sm:w-auto border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  OUR EXPERTISE
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;