import { ExternalLink, Download, MessageCircle, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Footer = () => {
  const locations = [
    {
      name: 'IPOH',
      url: 'https://goo.gl/maps/iRwwNmCwdux9ZpfC6',
      icon: Building2
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gibb-gray-50 via-secondary/30 to-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Visit Our Offices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our office location to serve you in Malaysia
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-sm mx-auto">
          {locations.map((location) => (
            <Card key={location.name} className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <a
                  href={location.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-4"
                >
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <location.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm tracking-wider">
                      {location.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      <MapPin className="h-3 w-3" />
                      <span>View Location</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
          <Button 
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white min-h-[52px] w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=60124775779&text=Hi+there&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-base"
            >
              <MessageCircle className="h-5 w-5 flex-shrink-0" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </Button>

          <Button 
            variant="outline"
            size="lg"
            asChild
            className="min-h-[52px] w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://gibblawyers.com/wp-content/uploads/2024/06/GIBB-PROFILE_book2024_Digital_V02.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-base"
            >
              <Download className="h-5 w-5 flex-shrink-0" />
              <span>DOWNLOAD FIRM PROFILE</span>
            </a>
          </Button>
        </div>

        {/* Office Image */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="relative max-w-3xl mx-auto">
            <img 
              src="/images/office-interior.jpg" 
              alt="Gibb Lawyers Office Interior" 
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-border/50 pt-8 sm:pt-12">
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              © 2020 Copyright All Rights Reserved.
              <br className="sm:hidden" />
              <span className="hidden sm:inline mx-3">|</span>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline">
                Disclaimer
              </a>
              <span className="mx-3">|</span> 
              <a href="#" className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </a>
            </p>
            <div className="flex items-center justify-center space-x-3 pt-4">
              <div className="w-6 h-px bg-primary/40"></div>
              <span className="text-xs font-semibold text-primary tracking-wider uppercase">EST. 1892</span>
              <div className="w-6 h-px bg-primary/40"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;