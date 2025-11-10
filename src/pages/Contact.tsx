import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { OFFICES } from '@/data/offices';
const Contact = () => {
  return (
    <Layout 
      title="Contact Us | Law Firm in Ipoh & Teluk Intan Malaysia - Gibb Lawyers"
      description="Contact Gibb & Co. Advocates & Solicitors in Ipoh and Teluk Intan, Malaysia. Call +605 547 1313 (Ipoh) or +605 623 1713 (Teluk Intan). Schedule a legal consultation today."
    >
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/office-main.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Get in touch
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                We're here to discuss your legal strategy in confidence
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Call, email, or send us a note. Our team will review your enquiry and respond within one working day so we can move your matter forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {OFFICES.map((office) => (
              <div key={office.name} className="space-y-4 sm:space-y-6">
                {office.addresses.map((location, locationIndex) => (
                  <Card key={`${office.name}-${locationIndex}`} className="h-full rounded-3xl border border-border/40 bg-background/95 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader className="pb-4 sm:pb-5">
                      <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-xl">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                        {office.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col h-full">
                      <div className="flex-grow mb-4 text-sm text-muted-foreground sm:text-base">
                        <p className="leading-relaxed">
                          {location.address}
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-primary" />
                          <a 
                            href={`tel:${location.phone}`} 
                            className="text-sm text-foreground underline-offset-4 transition hover:text-primary hover:underline sm:text-base"
                          >
                            {location.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground sm:text-base">
                            {location.fax ? `F: ${location.fax}` : '\u00A0'}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-primary" />
                          <a 
                            href={`mailto:${location.email}`} 
                            className="text-sm text-foreground underline-offset-4 transition hover:text-primary hover:underline break-all sm:text-base"
                          >
                            {location.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <a
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 transition hover:text-primary/80 hover:underline sm:text-base"
                        >
                          <ExternalLink className="h-4 w-4" />
                          VIEW ON MAP
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
            <Card className="overflow-hidden rounded-3xl border border-border/40 bg-background/95 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2">
                <img
                  src="/images/heritage/chambers-vignette.jpg"
                  alt="Heritage chambers welcome display"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <CardContent className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                  <span className="inline-flex w-max items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Visit our chambers
                  </span>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    A welcome shaped by tradition
                  </h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    The Inns of Court crest, barrister’s wig, and William Ernest Balasingam’s portrait greet every visitor—reminders that our counsel is grounded in more than a century of advocacy.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Notary Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl bg-background/90 p-8 text-center shadow-lg ring-1 ring-border/30">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Notary Public Service (Ipoh)</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Arrange document attestation with our Notary Public for international and local matters.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              <p className="text-base font-medium text-foreground">William Balasingam</p>
              <a
                href="tel:+601250507138"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 transition hover:text-primary/80 hover:underline sm:text-base"
              >
                <Phone className="h-4 w-4" />
                +60 12-505 0713
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Share a few details and our team will respond within one working day.
              </p>
            </div>
            
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <form
                  action="https://formsubmit.co/admin@gibblawyers.com"
                  method="POST"
                  className="space-y-4 sm:space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="/thank-you" />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          type="text" 
                          required 
                          className="min-h-[44px]"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          className="min-h-[44px]"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        required 
                        className="min-h-[44px]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input 
                        id="subject" 
                        name="subject"
                        type="text" 
                        required 
                        className="min-h-[44px]"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        required 
                        rows={5}
                        className="resize-none"
                        placeholder="Please describe your legal inquiry or questions..."
                      />
                    </div>
                    
                    <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                      <Button 
                        type="submit" 
                        className="min-h-[44px] w-full sm:w-auto px-6 py-3 font-semibold"
                      >
                        Send Message
                      </Button>
                      <WhatsAppButton
                        variant="outline"
                        className="min-h-[44px] w-full sm:w-auto px-6 py-3 font-semibold"
                        label="WhatsApp Us"
                      />
                    </div>
                  </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;