import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout title="Page Not Found - Gibb Lawyers">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/privacy-hero.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/60"></div>

        <div className="relative z-10 flex min-h-[60vh] items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="mx-auto max-w-xl space-y-6 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Error 404
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Page not found</h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                The page you’re looking for has moved or no longer exists. Let’s get you back on track.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="min-h-[48px] px-6 text-base font-semibold">
                  <Link to="/">Return to home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
