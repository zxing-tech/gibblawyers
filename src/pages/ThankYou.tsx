import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const ThankYou = () => {
  return (
    <Layout
      title="Thank You - Gibb Lawyers"
      description="Thank you for contacting Gibb & Co Lawyers. We will review your inquiry and respond within 24 hours."
    >
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-gibb-gray-50 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-5 sm:p-6">
                <CheckCircle2 className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Thank You for Reaching Out
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We appreciate you taking the time to contact Gibb & Co Lawyers. Our team has received your message and will review it carefully. One of our experienced lawyers will respond within 24 hours during business days.
              </p>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                For urgent matters, please call us directly at <a href="tel:+6055471313" className="font-semibold text-primary underline-offset-4 hover:underline">+605 547 1313 (Ipoh)</a> or <a href="tel:+6056231713" className="font-semibold text-primary underline-offset-4 hover:underline">+605 623 1713 (Teluk Intan)</a>.
              </p>
              <p>
                Prefer WhatsApp? Reach us instantly:
              </p>
            </div>

            <div className="flex justify-center">
              <WhatsAppButton
                href="https://api.whatsapp.com/send/?phone=60125162687&text=Hi+there&app_absent=0"
                label="WhatsApp Us"
                className="min-h-[52px] px-8 py-4 font-semibold"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
              <Button asChild size="lg" className="min-h-[52px] px-8 py-4 font-semibold">
                <Link to="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Return Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[52px] px-8 py-4 font-semibold">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
