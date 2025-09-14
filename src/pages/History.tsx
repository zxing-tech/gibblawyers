import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Award, MapPin, Users, BookOpen, Scale } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      year: "1892",
      title: "Foundation",
      description: "Alfred Montagu Gibb arrives in Penang, Malaya aboard a British ship and establishes Gibb & Co in Ipoh, marking the beginning of our legal legacy.",
      icon: Award,
      highlight: true
    },
    {
      year: "1906", 
      title: "Leadership Transition",
      description: "Upon Alfred Montagu Gibb's retirement, Ashworth Hope joins as partner, and the firm is renamed to Gibb & Hope, continuing the tradition of excellence.",
      icon: Users,
      highlight: false
    },
    {
      year: "1920s",
      title: "Expansion & Growth", 
      description: "The firm establishes itself as a leading legal practice in Perak, serving the growing commercial and colonial community with comprehensive legal services.",
      icon: Scale,
      highlight: false
    },
    {
      year: "1930",
      title: "Heritage Milestone",
      description: "After decades of distinguished service, the firm reaches its 38th year of continuous legal practice, having built a reputation for integrity and professional excellence.",
      icon: BookOpen,
      highlight: false
    }
  ];

  const foundingPrinciples = [
    {
      title: "Legal Excellence",
      description: "Commitment to the highest standards of legal practice and professional conduct",
      icon: Scale
    },
    {
      title: "Client Service",
      description: "Dedicated service to clients with integrity, confidentiality, and trust",
      icon: Users
    },
    {
      title: "Community Leadership",
      description: "Active participation in the development of Malaya's legal framework",
      icon: MapPin
    },
    {
      title: "Professional Heritage",
      description: "Building a lasting legacy of legal expertise and institutional knowledge",
      icon: Award
    }
  ];

  return (
    <Layout 
      title="Our History - Gibb Lawyers"
      description="Discover the rich heritage of Gibb & Co, established in 1892 by Alfred Montagu Gibb. Over 130 years of legal excellence in Malaysia."
    >
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-px bg-primary/60"></div>
            </div>
            
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <span className="text-sm font-medium text-primary">ESTABLISHED 1892</span>
            </div>
            
            <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
              Our Heritage
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-8">
              A Legacy of Legal Excellence Since 1892
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From the arrival of Alfred Montagu Gibb in Penang to the establishment of one of Malaysia's oldest law firms, 
              our story is one of dedication, integrity, and unwavering commitment to legal excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-sm font-medium text-accent">THE BEGINNING</span>
                  </div>
                  
                  <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                    Alfred Montagu Gibb's Vision
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In 1892, Alfred Montagu Gibb arrived in Penang, Malaya aboard a British ship, bringing with him 
                    a vision to establish a legal practice that would serve the growing community with integrity and expertise.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    He founded Gibb & Co in Ipoh, laying the foundation for what would become one of Malaysia's most 
                    enduring legal institutions. His commitment to professional excellence and ethical practice established 
                    the principles that continue to guide our firm today.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {foundingPrinciples.map((principle, index) => (
                    <Card key={index} className="border border-border/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <principle.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Card className="border border-border/50 overflow-hidden">
                  <div className="aspect-[4/5] bg-gradient-to-b from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Award className="h-16 w-16 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4">Founded 1892</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        "To serve with integrity, excellence, and unwavering commitment to justice"
                      </p>
                      <p className="text-sm text-primary mt-4 font-medium">- Alfred Montagu Gibb</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">HERITAGE TIMELINE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Our Journey Through History
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Key milestones in the establishment and early development of Gibb & Co
              </p>
            </div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <Card key={index} className={`border ${event.highlight ? 'border-primary/30 bg-primary/5' : 'border-border/50'} hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        event.highlight 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <event.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className={`text-2xl sm:text-3xl font-bold ${
                            event.highlight ? 'text-primary' : 'text-foreground'
                          }`}>
                            {event.year}
                          </span>
                          {event.highlight && (
                            <div className="px-3 py-1 bg-primary/20 rounded-full">
                              <span className="text-xs font-medium text-primary uppercase tracking-wider">Foundation Year</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <div className="w-20 h-px bg-primary/60 mx-auto"></div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                A Heritage of Excellence
              </h2>
              
              <p className="text-xl sm:text-2xl text-primary font-medium leading-relaxed">
                From 1892 to today, we continue the tradition of legal excellence established by our founders.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The principles established by Alfred Montagu Gibb and continued by Ashworth Hope form the foundation 
                of our practice today. Our commitment to integrity, excellence, and client service remains unchanged 
                after more than 130 years of continuous legal practice.
              </p>
            </div>
            
            <Card className="border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 sm:p-12">
                <div className="flex items-center justify-center space-x-8 text-center">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">130+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Years of Service</div>
                  </div>
                  <div className="w-px h-16 bg-border"></div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Generations</div>
                  </div>
                  <div className="w-px h-16 bg-border"></div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">1892</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Established</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;