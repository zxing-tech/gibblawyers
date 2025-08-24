import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  services: string[];
  practices?: string[];
  image?: string;
  metaDescription?: string;
}

const ServicePageTemplate = ({
  title,
  subtitle,
  description,
  overview,
  services,
  practices = [],
  image = "/images/office-interior.jpg",
  metaDescription
}: ServicePageProps) => {
  return (
    <Layout 
      title={`${title} - Gibb Lawyers`}
      description={metaDescription || description}
    >
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Hero Image */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="relative max-w-5xl mx-auto">
              <img 
                src={image}
                alt={`${title} - Professional legal services`}
                className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto px-2">
            {/* Back Navigation */}
            <div className="mb-6 sm:mb-8">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary">
                <Link to="/services" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
            </div>
            
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                {title}
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-primary font-medium italic">
                {subtitle}
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-2xl sm:text-3xl text-foreground">Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {overview}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-secondary/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
              How We Help
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas (if available) */}
      {practices.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
                Practice Areas
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {practices.map((practice, index) => (
                  <Card key={index} className="border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <p className="text-sm sm:text-base text-muted-foreground font-medium">
                        {practice}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-gibb-gray-50 to-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 px-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="w-16 sm:w-20 h-px bg-primary/60 mx-auto"></div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                Need Legal Assistance?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
                Contact our experienced legal team for personalized advice and solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold tracking-wide min-h-[44px] w-full sm:w-auto"
              >
                <Link to="/contact">
                  SCHEDULE CONSULTATION
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold tracking-wide min-h-[44px] w-full sm:w-auto"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=60124775779&text=Hi+there&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WHATSAPP US
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePageTemplate;