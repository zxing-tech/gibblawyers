import { ExternalLink, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const locations = [
    {
      name: 'PERAK',
      url: 'https://goo.gl/maps/iRwwNmCwdux9ZpfC6'
    },
    {
      name: 'KUALA LUMPUR', 
      url: 'https://maps.app.goo.gl/LZ94GM2gRjVtHpUz9'
    },
    {
      name: 'PENANG',
      url: 'https://www.google.com/maps/place/5,+Lorong+Abbas+1,+10200+Tanjung+Bungah,+Pulau+Pinang/@5.4648078,100.2971642,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac2d729b95e09:0x29effb1538d99ca8!8m2!3d5.4648025!4d100.2997391!16s%2Fg%2F11v0__yr1l?entry=ttu'
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Office Image */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img 
            src="/images/window.png" 
            alt="Gibb Lawyers Office" 
            className="h-24 sm:h-32 lg:h-40 object-contain"
          />
        </div>

        {/* Location Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 mb-6 sm:mb-8 px-2">
          {locations.map((location) => (
            <a
              key={location.name}
              href={location.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm sm:text-base font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px] py-2 px-2"
            >
              <span>{location.name}</span>
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mb-6 sm:mb-8 px-2">
          <Button 
            asChild
            className="bg-green-600 hover:bg-green-700 text-white min-h-[44px] w-full sm:w-auto px-4 py-3"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=60124775779&text=Hi+there&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <MessageCircle className="h-4 w-4 flex-shrink-0" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </Button>

          <Button 
            variant="outline"
            asChild
            className="min-h-[44px] w-full sm:w-auto px-4 py-3"
          >
            <a
              href="https://gibblawyers.com/wp-content/uploads/2024/06/GIBB-PROFILE_book2024_Digital_V02.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <Download className="h-4 w-4 flex-shrink-0" />
              <span>DOWNLOAD FIRM PROFILE</span>
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-muted-foreground border-t border-border pt-4 sm:pt-6 px-2">
          <p className="leading-relaxed">
            © 2020 Copyright All Rights Reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline mx-2">|</span>
            <a href="#" className="hover:text-foreground transition-colors underline-offset-4 hover:underline min-h-[44px] inline-block py-2">Disclaimer</a>
            <span className="mx-2">|</span> 
            <a href="#" className="hover:text-foreground transition-colors underline-offset-4 hover:underline min-h-[44px] inline-block py-2">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;