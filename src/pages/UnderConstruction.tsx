import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <>
      <title>Under Construction - Gibb Lawyers</title>
      <meta name="description" content="Our website is under construction. We're working hard to improve your experience." />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-background text-foreground">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/images/gibb-logo.png" 
              alt="Gibb & Co Logo" 
              className="h-16 w-auto mx-auto"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Our Website is Under Construction
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-body leading-relaxed">
            We're working hard to improve your experience. Stay Tuned
          </p>

          {/* Contact Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="/contact" className="inline-flex items-center gap-3">
              <Mail className="h-5 w-5" />
              Contact us
            </a>
          </Button>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-muted-foreground text-sm font-body">
            © 2025 Gibb & Co. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default UnderConstruction;