import Layout from '@/components/Layout';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, MapPin, Users, BookOpen, Scale } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      year: "1892",
      title: "Foundation",
      description: "Alfred Montagu Gibb arrives in Penang, Malaya aboard a British ship and establishes Gibb & Co in Ipoh, marking the beginning of our legal legacy.",
      icon: Award,
      highlight: true
    },
    {
      year: "1906", 
      title: "Leadership Transition",
      description: "Upon Alfred Montagu Gibb's retirement, Ashworth Hope joins as partner, and the firm is renamed to Gibb & Hope, continuing the tradition of excellence.",
      icon: Users,
      highlight: false
    },
    {
      year: "1920s",
      title: "Expansion & Growth", 
      description: "The firm establishes itself as a leading legal practice in Perak, serving the growing commercial and colonial community with comprehensive legal services.",
      icon: Scale,
      highlight: false
    },
    {
      year: "1930",
      title: "Heritage Milestone",
      description: "After decades of distinguished service, the firm reaches its 38th year of continuous legal practice, having built a reputation for integrity and professional excellence.",
      icon: BookOpen,
      highlight: false
    }
  ];

  const firmHeritageGallery = [
    {
      src: "/images/heritage/historic-chambers-building.jpg",
      title: "Historic Chambers Building (1900-1997)",
      description: "The iconic colonial-era building that housed Gibb & Co for nearly a century opposite the Ipoh padang."
    },
    {
      src: "/images/heritage/chambers-portrait-wall.jpg",
      title: "Judiciary Portrait Wall",
      description: "Caricatured judges surround the Inns of Court crest, reflecting the British legal lineage alive in our Ipoh chambers."
    },
    {
      src: "/images/heritage/chambers-vignette.jpg",
      title: "Chambers Welcome Display",
      description: "The Inns of Court crest, W.E. Balasingam portrait, and barrister's wig that greet every visitor to our Ipoh office."
    },
    {
      src: "/images/heritage/1914-power-of-attorney-open.jpg",
      title: "1914 Power of Attorney",
      description: "Handwritten deed executed by Gibb & Co with original seals and endorsements."
    },
    {
      src: "/images/heritage/1914-deed-cover.jpg",
      title: "Stamped Deed Cover",
      description: "Outer sheet featuring duty stamps that authenticated early firm matters."
    },
    {
      src: "/images/heritage/1948-sitwell-letter.jpg",
      title: "1948 Solicitors' Letter",
      description: "Correspondence confirming fees owed to Gibb & Co, evidencing long-standing international work."
    },
    {
      src: "/images/heritage/heritage-ledger-safe.jpg",
      title: "Heritage Ledger Safe",
      description: "Fireproof safe still protecting wills and deeds within chambers today."
    }
  ];

  const ipohHeritageGallery = [
    {
      src: "/images/heritage/ipoh-tower.jpg",
      title: "Ipoh Tower (Current Chambers)",
      description: "Our present office in Greentown, linking a century of tradition to modern Ipoh."
    }
  ];

  const foundingPrinciples = [
    {
      title: "Legal Excellence",
      description: "Commitment to the highest standards of legal practice and professional conduct",
      icon: Scale
    },
    {
      title: "Client Service",
      description: "Dedicated service to clients with integrity, confidentiality, and trust",
      icon: Users
    },
    {
      title: "Community Leadership",
      description: "Active participation in the development of Malaya's legal framework",
      icon: MapPin
    },
    {
      title: "Professional Heritage",
      description: "Building a lasting legacy of legal expertise and institutional knowledge",
      icon: Award
    }
  ];

  const [preview, setPreview] = useState<{ src: string; title: string; description: string } | null>(null);

  return (
    <Layout 
      title="Our History | 130+ Years of Legal Excellence Since 1892 - Gibb Lawyers"
      description="Discover Gibb & Co's rich heritage - established in 1892 by Alfred Montagu Gibb in Ipoh, Malaysia. Over 130 years of legal excellence, serving generations of clients with integrity and expertise."
    >
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/history-hero.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Established 1892
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Our heritage of legal excellence
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                From Alfred Montagu Gibb’s arrival in Malaya to today’s multi-disciplinary practice, we’ve spent over 130 years pairing integrity with impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-10">
              <div className="space-y-8">
                <div className="space-y-5">
                  <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    The beginning
                  </span>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                    Alfred Montagu Gibb’s vision for service
                  </h2>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    In 1892, Alfred Montagu Gibb arrived in Penang, envisioning a legal practice grounded in trust and community impact. Gibb & Co grew from those principles, serving a rapidly developing Malaya with dependable counsel.
                  </p>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    His dedication to rigorous standards and client advocacy set the values that continue to guide our partners today.
                  </p>
                </div>
              </div>

              <Card className="mx-auto w-full lg:max-w-[calc(50%-0.75rem)] rounded-3xl border border-border/40 bg-background/95 shadow-lg">
                <CardContent className="space-y-4 p-8 text-center">
                  <Award className="mx-auto h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">Founded 1892</h3>
                  <p className="text-base text-muted-foreground sm:text-lg">
                    “Integrity, excellence, and unwavering commitment to justice.”
                  </p>
                  <p className="text-xs font-medium text-primary sm:text-sm">- Alfred Montagu Gibb</p>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2 items-stretch">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {foundingPrinciples.map((principle, index) => (
                    <Card key={index} className="rounded-2xl border border-border/40 bg-background/95 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <principle.icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base font-semibold text-foreground">{principle.title}</h3>
                          <p className="text-sm text-muted-foreground">{principle.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-background/95 shadow-xl"
                  onMouseEnter={() => setPreview({
                    src: "/images/heritage/1914-power-of-attorney-open.jpg",
                    title: "1914 Power of Attorney",
                    description: "Original Power of Attorney drafted by Gibb & Co, complete with sealing wax and endorsements, illustrating early twentieth-century legal craftsmanship."
                  })}
                  onMouseLeave={() => setPreview(null)}
                >
                  <div className="relative w-full bg-primary/5">
                    <div className="aspect-[4/3]"></div>
                    <img
                      src="/images/heritage/1914-power-of-attorney-open.jpg"
                      alt="1914 Power of Attorney executed by Gibb & Co"
                      className="absolute inset-0 h-full w-full object-contain p-6"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="space-y-3 p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">1914 Power of Attorney</h3>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      Original Power of Attorney drafted by Gibb &amp; Co, complete with sealing wax and endorsements, illustrating early twentieth-century legal craftsmanship.
                    </p>
                    <p className="text-xs font-medium text-primary sm:text-sm">Preserved in the firm’s heritage archives</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4 sm:space-y-6">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Heritage timeline
              </span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Our journey through history
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Milestones that shaped Gibb & Co’s reputation for trusted advocacy across Malaysia.
              </p>
            </div>

            <div className="mt-10 space-y-6 sm:mt-14">
              {timelineEvents.map((event, index) => (
                <Card
                  key={index}
                  className={`rounded-3xl border ${
                    event.highlight ? 'border-primary/40 bg-primary/5 shadow-lg' : 'border-border/40 bg-background/95 shadow'
                  } transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
                    <div
                      className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-primary ${
                        event.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                      }`}
                    >
                      <event.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`text-xl font-semibold sm:text-2xl ${event.highlight ? 'text-primary' : 'text-foreground'}`}>
                          {event.year}
                        </span>
                        {event.highlight && (
                          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Foundation year
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{event.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Firm Heritage Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-10 text-center">
            <div className="space-y-6 sm:space-y-8">
              <span className="inline-flex h-0.5 w-20 items-center justify-center bg-primary/60" aria-hidden="true"></span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Firm Heritage</h2>
              <p className="text-base font-medium text-primary sm:text-lg">
                Archival documents and artifacts that chart more than a century of counsel from Ipoh.
              </p>
              <p className="text-sm text-muted-foreground sm:text-base">
                These original materials record the firm’s early mandates, client relationships, and stewardship of vital legal records.
              </p>
            </div>

            <Card className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-background/95 to-accent/10 shadow-lg">
              <CardContent className="grid gap-6 p-8 sm:grid-cols-3 sm:items-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary sm:text-4xl">130+</div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Years of service</p>
                </div>
                <div className="hidden h-12 w-px bg-border sm:block" aria-hidden="true"></div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary sm:text-4xl">3</div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Generations</p>
                </div>
                <div className="hidden h-12 w-px bg-border sm:block" aria-hidden="true"></div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary sm:text-4xl">1892</div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Established</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 pt-10 sm:grid-cols-2">
              {firmHeritageGallery.map((item) => (
                <Card
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-border/40 bg-background/95 shadow-lg"
                  onMouseEnter={() => setPreview(item)}
                  onMouseLeave={() => setPreview(null)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <CardContent className="space-y-2 p-6">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ipoh Heritage Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-10 text-center">
            <div className="space-y-6 sm:space-y-8">
              <span className="inline-flex h-0.5 w-20 items-center justify-center bg-accent/60" aria-hidden="true"></span>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Ipoh Heritage</h2>
              <p className="text-base font-medium text-accent sm:text-lg">
                Scenes from the city that shaped our culture of service.
              </p>
              <p className="text-sm text-muted-foreground sm:text-base">
                From the landmark HSBC building that housed chambers to the memorabilia that welcomes guests, Ipoh’s history lives in every detail of our practice.
              </p>
            </div>

            <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {ipohHeritageGallery.map((item) => (
                <Card
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-border/40 bg-background/95 shadow-lg"
                  onMouseEnter={() => setPreview(item)}
                  onMouseLeave={() => setPreview(null)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-60 w-full object-cover"
                  />
                  <CardContent className="space-y-2 p-6">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Hover Preview Overlay (desktop) */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 pointer-events-none">
          <div className="max-w-[90vw] pointer-events-none">
            <img
              src={preview.src}
              alt={preview.title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center px-4">
              <h4 className="text-lg font-semibold text-background/90 drop-shadow-sm">{preview.title}</h4>
              <p className="text-sm text-background/80">{preview.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default History;