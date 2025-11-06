import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Scale, Calendar, ArrowRight, Star, Award, Shield, Quote, Trophy, CheckCircle } from 'lucide-react';

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
      description: "Three experienced partners with 95+ years combined experience"
    },
    {
      icon: Star,
      title: "Client Success", 
      description: "Dedicated to achieving the best outcomes for our clients"
    }
  ];

  const testimonials = [
    {
      quote: "Gibb & Co provided exceptional legal guidance during our corporate restructuring. Their expertise in Malaysian commercial law and attention to detail made all the difference.",
      author: "Sarah Chen",
      position: "CEO, Tech Solutions Sdn Bhd",
      rating: 5
    },
    {
      quote: "The team's professionalism and deep knowledge of property law helped us navigate a complex real estate transaction smoothly. Highly recommended.",
      author: "Ahmad Rahman",
      position: "Property Developer",
      rating: 5
    },
    {
      quote: "Outstanding legal representation in our family law matter. They provided compassionate yet strong advocacy when we needed it most.",
      author: "Jennifer Wong",
      position: "Private Client",
      rating: 5
    }
  ];

  const awards = [
    {
      icon: Trophy,
      title: "Legal Excellence Award",
      year: "2023",
      description: "Recognized for outstanding legal services in Perak"
    },
    {
      icon: Star,
      title: "Heritage Law Firm",
      year: "Continuous",
      description: "Over 130 years of continuous legal practice"
    },
    {
      icon: CheckCircle,
      title: "Bar Council Recognition",
      year: "2022",
      description: "Acknowledged for professional standards and ethics"
    }
  ];

  return (
    <Layout 
      title="Gibb Lawyers - Experience you need. Achievements you get."
      description="Let Us Take Care of You Legally. Experience you need. Achievements you get."
    >
      {/* Hero Section - Awwwards Enhanced */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        {/* Multi-Layer Gradient Overlay Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-gavel-books.jpg')] bg-cover bg-top opacity-65"></div>
        
        {/* Premium Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70"></div>
        
        {/* Dynamic Animated Overlay */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 animate-gradient-shift"></div>
        </div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 shape-organic bg-gradient-to-br from-primary/20 to-accent/10 animate-float blur-sm"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 shape-diamond bg-gradient-to-br from-accent/30 to-primary/20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 shape-hexagon bg-gradient-to-br from-primary/15 to-transparent animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 glass opacity-60"></div>
        
        <div className="relative w-full z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
              
              {/* Enhanced Heritage Badge */}
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 animate-fade-in">
                <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-glow"></div>
                <div className="glass-intense px-6 py-3 rounded-full shadow-2xl hover-lift">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary animate-pulse" />
                    <span className="text-sm sm:text-base lg:text-lg font-heading font-semibold text-gradient tracking-wider uppercase">EST. 1892</span>
                  </div>
                </div>
                <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-glow"></div>
              </div>
              
              {/* Enhanced Tagline */}
              <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-body font-medium tracking-wide backdrop-blur-sm">
                  Let Us Take Care of You 
                  <span className="text-primary font-semibold">Legally</span>
                </p>
              </div>
              
              {/* Revolutionary Main Heading */}
              <div className="space-y-4 sm:space-y-6 animate-scale-in" style={{animationDelay: '0.4s'}}>
                <h1 className="heading-hero text-4xl sm:text-6xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight">
                  <span className="block text-foreground mb-4 sm:mb-6 hover-magnetic will-change-transform">
                    <span className="text-balance">Experience you need.</span>
                  </span>
                  <span className="block text-gradient font-black hover-magnetic will-change-transform">
                    <span className="text-balance">Achievements you get.</span>
                  </span>
                </h1>
              </div>
              
              {/* Advanced CTA Buttons */}
              <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary/90 backdrop-blur-sm text-lg px-10 py-6 font-bold tracking-wide min-h-[60px] w-full sm:w-auto hover-lift micro-bounce group relative overflow-hidden hover:bg-primary"
                >
                  <Link to="/contact" className="flex items-center gap-3 relative z-10">
                    <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative">
                      SCHEDULE CONSULTATION
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded"></div>
                    </span>
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="glass text-lg px-10 py-6 font-bold tracking-wide min-h-[60px] w-full sm:w-auto border-2 border-primary/30 hover-lift micro-bounce group relative overflow-hidden"
                >
                  <Link to="/services" className="flex items-center gap-3 relative z-10">
                    <Scale className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative">
                      EXPLORE SERVICES
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded"></div>
                    </span>
                  </Link>
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Bar */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/5 to-primary/3"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full opacity-20">
            <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto glass-intense rounded-3xl flex items-center justify-center hover-lift group-hover:animate-glow transition-all duration-700">
                    <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300" style={{animationDelay: '0.2s'}}></div>
                </div>
                <h3 className="heading-section text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-body max-w-sm mx-auto text-pretty">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-bl from-accent/8 to-transparent rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="animate-slide-up">
              <div className="inline-block glass px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Expertise</span>
              </div>
              <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-6 text-balance">
                How We Can 
                <span className="text-primary">Help</span>
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body text-pretty">
                Explore our expertise and discover the right legal solution for your needs
              </p>
            </div>
          </div>
          
          <div className="grid-staggered max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <Link to={service.link} className="block h-full">
                  <div className="glass-intense rounded-3xl p-8 sm:p-10 lg:p-12 h-full hover-lift transition-all duration-700 group relative overflow-hidden">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    
                    <div className="relative z-10 text-center space-y-8">
                      <div className="relative">
                        <div className={`w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl ${service.color}`}>
                          <service.icon className="h-12 w-12 sm:h-14 sm:w-14 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        
                        {/* Animated Accent Elements */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/40 shape-diamond opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700"></div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider font-medium opacity-80">
                          {service.subtitle}
                        </p>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground group-hover:text-primary transition-all duration-500">
                          {service.title}
                        </h3>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                          <span className="text-sm font-medium">Explore</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/5"></div>
        
        {/* Geometric Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-10 w-64 h-64 shape-hexagon bg-gradient-to-br from-primary/10 to-transparent blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 right-20 w-48 h-48 shape-organic bg-gradient-to-bl from-accent/15 to-transparent blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="animate-slide-up">
              <div className="glass px-8 py-3 rounded-full inline-block mb-8">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Client Testimonials</span>
              </div>
              <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
                What Our 
                <span className="text-primary">Clients</span> Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Over 130 years of client trust and successful legal outcomes
              </p>
            </div>
          </div>
          
          <div className="grid-masonry max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-scale-in hover-lift" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="glass-intense rounded-3xl p-8 lg:p-10 h-full group relative overflow-hidden">
                  {/* Quote Background */}
                  <div className="absolute top-4 right-4 opacity-5">
                    <Quote className="h-24 w-24 text-primary" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <Quote className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-muted-foreground text-lg leading-relaxed italic text-pretty group-hover:text-foreground transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="border-t border-border/30 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-foreground text-lg group-hover:text-primary transition-all duration-300">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {testimonial.position}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform duration-300" 
                              style={{animationDelay: `${i * 0.1}s`}}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">RECOGNITION & AWARDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6">
              Legal Excellence Recognized
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to legal excellence has been recognized throughout our 130+ year history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="border border-border/50 bg-gradient-to-br from-card via-card to-primary/5 hover:shadow-xl transition-all duration-500 text-center group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <award.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{award.title}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{award.year}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
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
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-medium leading-relaxed">
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