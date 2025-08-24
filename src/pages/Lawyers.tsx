import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Lawyers = () => {
  const lawyers = [
    {
      name: "ZORINAH BT.MOHD SOBRI",
      position: "MANAGING PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_PuanZ_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/zorinah-bt-mohd-sobri/"
    },
    {
      name: "E. ERNEST BALASINGAM",
      position: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ERNEST_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/e-ernest-balasingam/"
    },
    {
      name: "EDWIN SEIBEL (A.M.P)",
      position: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_ES_thumbnail-copy.jpg",
      url: "https://gibblawyers.com/wp/ediwn-seibel-a-m-p/"
    },
    {
      name: "KENNY CHAN",
      position: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_CKL_thumbnail-copy.jpg",
      url: "https://gibblawyers.com/wp/kenny-chan/"
    },
    {
      name: "TERENCE NAIDU",
      position: "SENIOR PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_TN_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/terence-naidu/"
    },
    {
      name: "YAP KOK KHEONG",
      position: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_VIC_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/yap-kok-kheong/"
    },
    {
      name: "LIM POH LEONG",
      position: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_LPL_thumbnail-copy.jpg",
      url: "https://gibblawyers.com/wp/lim-poh-leong/"
    },
    {
      name: "ONG BEE KHOON",
      position: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2021/04/GIBB_OBK_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/ong-bee-khoon/"
    },
    {
      name: "Benjamin Chwee Yew Keng",
      position: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2023/05/GIBB_Benjamin_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/benjamin-chwee-yew-keng/"
    },
    {
      name: "Nur Liyana Izzati Binti Abd Aziz",
      position: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2023/05/GIBB_Liyana_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/nur-liyana-izzati-binti-abd-aziz/"
    },
    {
      name: "HO YI YERN",
      position: "PARTNER",
      image: "https://gibblawyers.com/wp-content/uploads/2024/05/GIBB_HYY_thumbnail.jpg",
      url: "https://gibblawyers.com/wp/ho-yi-yern/"
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Meet Our Lawyers
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We invest in our people to be better stakeholders for our Client-Partners. Our lawyers are vastly experienced in their array of expertise, dedicated to our clients' cause and committed to the betterment of the community.
            </p>
          </div>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {lawyers.map((lawyer, index) => (
              <a
                key={index}
                href={lawyer.url}
                target="_blank"
                rel="noopener noreferrer"
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
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6 text-center space-y-2">
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                      {lawyer.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                      {lawyer.position}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-secondary/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 px-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="w-16 sm:w-20 h-px bg-primary/60 mx-auto"></div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                Our Commitment
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
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