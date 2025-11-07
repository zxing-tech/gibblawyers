import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/lawyers-hero.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Our Partners
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                The senior team guiding clients through Malaysia's most complex matters
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                With more than 95 years of combined practice, our partners pair heritage experience with modern insight to deliver decisive legal strategies for businesses and families alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lawyers.map((lawyer) => (
              <Link
                key={lawyer.name}
                to={lawyer.url}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-background/90 shadow-lg ring-1 ring-border/40 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={lawyer.image}
                    alt={`${lawyer.name} - ${lawyer.position}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition" />
                  <ArrowRight className="absolute top-4 right-4 h-5 w-5 text-white opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                <CardContent className="flex flex-1 flex-col gap-3 p-6 text-center">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {lawyer.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                      {lawyer.position}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">{lawyer.experience}</p>
                    <p className="text-xs sm:text-sm leading-relaxed">{lawyer.credentials}</p>
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {lawyer.specializations.map((spec) => (
                        <span key={spec} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-background/90 p-10 text-center shadow-lg ring-1 ring-border/30">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Commitment</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Each partner leads dedicated practice teams to ensure every matter is handled with diligence, clarity, and the full weight of the firm's heritage.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Lawyers;