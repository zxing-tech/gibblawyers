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
    },
    {
      image: '/images/heritage/inns-of-court-crest.jpg',
      title: "Inns of Court Crest",
      year: "Presented to Gibb & Co",
      description: "Symbol of the British legal tradition that continues to guide our partners."
    }
  ];

  return (
    <Layout 
      title="Gibb Lawyers | Leading Law Firm in Malaysia Since 1892"
      description="Gibb & Co. Advocates & Solicitors - Malaysia's trusted law firm with 130+ years of excellence. Expert legal services in corporate law, litigation, property, employment, and family matters across Ipoh and Teluk Intan."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/images/hero-gavel-books.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        {/* Accent shapes (hidden on small screens) */}
        <div className="pointer-events-none hidden md:block">
          <div className="absolute top-24 left-10 w-28 h-28 rounded-full bg-primary/10 blur-2xl"></div>
          <div className="absolute bottom-32 right-12 w-24 h-24 rounded-full bg-accent/10 blur-2xl"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 md:flex-row md:items-end">
              <div className="w-full max-w-3xl space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-3 rounded-full bg-background/70 px-4 py-2 shadow-lg ring-1 ring-primary/10">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Established 1892</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance text-foreground">
                  Guiding Malaysian businesses & families with trusted legal expertise.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
                  From corporate strategy to personal legal matters, our senior partners bring over 95 years of combined experience to protect what matters most to you.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 font-semibold text-base sm:text-lg"
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-3">
                      <Calendar className="h-5 w-5" />
                      Schedule a Consultation
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 font-semibold text-base sm:text-lg border-primary/30"
                  >
                    <Link to="/services" className="flex items-center justify-center gap-3">
                      <Scale className="h-5 w-5" />
                      Explore Services
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3 sm:border-t sm:border-border/40 sm:pt-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">95+ Years</p>
                      <p>Combined partner experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">Client-first</p>
                      <p>Personalised legal strategies</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">Heritage</p>
                      <p>Serving Malaysia since 1892</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Highlights */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-2xl bg-background/80 p-6 shadow-lg ring-1 ring-border/40 transition hover:translate-y-[-4px] hover:shadow-xl md:items-start"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Our Expertise
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Comprehensive legal support for every stage of your journey
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Explore our core practice areas and discover the right team to partner with on your next matter.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group flex h-full flex-col rounded-3xl bg-background/90 p-8 shadow-lg ring-1 ring-border/30 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  {service.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Client Voices
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Trusted by clients across Malaysia
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Hear from organisations and individuals who have relied on Gibb &amp; Co for decisive legal guidance.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-3xl bg-background/90 p-8 shadow-lg ring-1 ring-border/30"
              >
                <Quote className="mb-4 h-8 w-8 text-primary" />
                <p className="flex-1 text-sm italic text-muted-foreground sm:text-base">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 border-t border-border/30 pt-4">
                  <p className="text-base font-semibold text-foreground sm:text-lg">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">{testimonial.position}</p>
                  <div className="mt-3 flex items-center gap-1 text-primary">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Recognition
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              A legacy of excellence acknowledged by the industry
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Awards and accolades that reflect our commitment to integrity, service, and results.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-5xl mx-auto">
            {awards.map((award) => (
              <Card key={award.title} className="h-full border border-border/40 bg-background/90 shadow-md">
                <CardContent className="flex h-full flex-col items-center text-center p-8">
                  {award.image ? (
                    <img
                      src={award.image}
                      alt={award.title}
                      className="mb-6 h-24 w-24 rounded-full object-cover object-center shadow-md"
                      loading="lazy"
                    />
                  ) : (
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <award.icon className="h-7 w-7" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{award.title}</h3>
                  <p className="mt-2 text-sm font-medium text-primary sm:text-base">{award.year}</p>
                  <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-background/90 p-10 text-center shadow-lg ring-1 ring-border/30">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Philosophy</h2>
            <p className="mt-4 text-lg font-medium text-primary sm:text-xl">
              We invest in our people to serve our stakeholders better.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              By combining heritage values with modern practice, we ensure every client receives attentive, solutions-driven support tailored to their goals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 font-semibold"
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Talk to us
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 font-semibold border-primary/30"
              >
                <Link to="/services" className="flex items-center justify-center gap-2">
                  <Award className="h-5 w-5" />
                  Our expertise
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