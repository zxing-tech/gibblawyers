import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Mail } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <Layout
      title="Under Construction - Gibb Lawyers"
      description="Our website is under construction. We're working hard to improve your experience."
    >
      <div className="min-h-[calc(100vh-5rem)] bg-background">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-gavel.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55"></div>

          <div className="relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
              <div className="mx-auto max-w-2xl text-center space-y-6 sm:space-y-8">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Coming soon
                </span>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Our website is being refreshed
                </h1>
                <p className="text-base text-muted-foreground sm:text-lg">
                  We’re upgrading your experience. In the meantime, reach out directly—we’re ready to help.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 text-base font-semibold"
                  >
                    <a href="mailto:ernest@gibblawyers.com" className="inline-flex items-center justify-center gap-3">
                      <Mail className="h-5 w-5" />
                      Email Ernest directly
                    </a>
                  </Button>

                  <WhatsAppButton
                    label="Chat on WhatsApp"
                    className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 text-base font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground sm:text-sm">© {new Date().getFullYear()} Gibb &amp; Co. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default UnderConstruction;