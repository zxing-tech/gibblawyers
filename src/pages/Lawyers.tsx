import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lawyers = () => {
  const lawyers = [
    {
      name: "ZORINAH BT.MOHD SOBRI",
      position: "MANAGING PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_PuanZ_thumbnail.jpg",
      url: "/lawyers/zorinah-mohd-sobri",
      credentials: "LLB (Hons), University of Malaya • Called to Malaysian Bar 1995",
      experience: "29+ years of legal practice",
      specializations: ["Corporate Law", "Banking & Finance", "Real Estate"]
    },
    {
      name: "E. ERNEST BALASINGAM",
      position: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ERNEST_thumbnail.jpg",
      url: "/lawyers/ernest-balasingam",
      credentials: "LLB (Hons), University of London • Called to Malaysian Bar 1988",
      experience: "36+ years of legal practice",
      specializations: ["Litigation", "Criminal Law", "Civil Disputes"]
    },
    {
      name: "EDWIN SEIBEL (A.M.P)",
      position: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ES_thumbnail-copy.jpg",
      url: "/lawyers/edwin-seibel",
      credentials: "LLB (Hons), University of Malaya • Advocate & Solicitor of High Court of Malaya",
      experience: "32+ years of legal practice",
      specializations: ["Employment Law", "Industrial Relations", "Commercial Law"]
    }
  ];

  return (
    <Layout 
      title="Meet Our Lawyers - Gibb Lawyers"
      description="We invest in our people to be better stakeholders for our Client-Partners. Our lawyers are vastly experienced in their array of expertise."
    >
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <div className="max-w-4xl mx-auto px-2">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
            </div>
            <h1 className="heading-hero text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-8">
              Meet Our Lawyers
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-body">
              Our experienced legal team of three senior partners brings over 95 years of combined legal expertise. We are dedicated to our clients' success and committed to delivering exceptional legal services with the heritage and trust that comes from over 130 years of legal excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Centered grid for exactly 3 lawyers */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 justify-items-center">
              {lawyers.map((lawyer, index) => (
                <div key={index} className="w-full max-w-sm">
                  <Link
                    to={lawyer.url}
                    className="group block"
                  >
                    <Card className="h-full hover:shadow-elegant hover:border-primary/20 transition-all duration-500 border border-border/50 overflow-hidden">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={lawyer.image}
                          alt={`${lawyer.name} - ${lawyer.position}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading={index < 6 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6 text-center space-y-3">
                        <h3 className="font-bold text-sm sm:text-base lg:text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                          {lawyer.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                          {lawyer.position}
                        </p>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p className="font-medium">{lawyer.experience}</p>
                          <p className="text-xs leading-relaxed">{lawyer.credentials}</p>
                          <div className="flex flex-wrap gap-1 justify-center mt-2">
                            {lawyer.specializations.map((spec, idx) => (
                              <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-secondary/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 px-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="w-16 sm:w-20 h-px bg-primary/60 mx-auto"></div>
              <h2 className="heading-display text-xl sm:text-2xl lg:text-3xl text-foreground">
                Our Commitment
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-body font-medium leading-relaxed">
                We invest in our people to serve our stakeholders better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lawyers;