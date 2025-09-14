import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, ExternalLink, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { EmailService, type ContactFormData } from '@/lib/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert the contact form data into Supabase
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          consent: true
        }
      ]);

      if (error) {
        console.error('Supabase error:', error);
        toast.error('There was an error submitting your message. Please try again or contact us directly.');
        return;
      }

      // Send email notifications
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      // Send admin notification
      const adminEmailResult = await EmailService.sendContactNotification(contactData);
      
      // Send client acknowledgment
      const clientEmailResult = await EmailService.sendClientAcknowledgment(formData.email, formData.name);
      
      // Success response
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      
      if (adminEmailResult.success && clientEmailResult.success) {
        toast.success('Thank you for your message! We will get back to you within 24 hours. A confirmation email has been sent to you.');
      } else if (adminEmailResult.success) {
        toast.success('Thank you for your message! We will get back to you within 24 hours.');
      } else {
        toast.success('Your message has been received. We will get back to you within 24 hours.');
        console.warn('Email notification issues:', { adminEmailResult, clientEmailResult });
      }
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('There was an error submitting your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const offices = [
    {
      name: "Ipoh Office",
      addresses: [
        {
          address: "Unit 2, 7th floor, Ipoh Tower. Jalan Dato Seri Ahmad Said, 31350 Ipoh.",
          phone: "+605 547 1313",
          fax: "+605 548 1313",
          email: "admin@gibblawyers.com",
          mapUrl: "https://goo.gl/maps/iRwwNmCwdux9ZpfC6"
        }
      ]
    },
    {
      name: "Teluk Intan Office",
      addresses: [
        {
          address: "28A (1st Floor) Taman Ros, Jalan Sultan Abdullah, 36000, Teluk Intan, Perak, Malaysia.",
          phone: "+605 623 1713",
          fax: "+605 623 2713",
          email: "admin-ti@gibblawyers.com",
          mapUrl: "https://www.google.com/maps/place/Gibb+%26+Hope+Advocates+and+Solicitors/@4.0147023,101.0183558,15z/data=!4m9!1m2!2m1!1s28A+(1st+Floor)+Taman+Ros,+Jalan+Sultan+Abdullah,+36000,+Teluk+Intan,+Perak,+Malaysia!3m5!1s0x31cb15257124b8df:0xf59a1ceb4f398d43!8m2!3d4.0219803!4d101.0380411!15sClUyOEEgKDFzdCBGbG9vcikgVGFtYW4gUm9zLCBKYWxhbiBTdWx0YW4gQWJkdWxsYWgsIDM2MDAwLCBUZWx1ayBJbnRhbiwgUGVyYWssIE1hbGF5c2lhkgEGbGF3eWVy"
        }
      ]
    }
  ];

  return (
    <Layout 
      title="Contact Us - Gibb Lawyers"
      description="In case you have some questions, feel free to call, email or even visit us. Trust your need, knowing we will succeed."
    >
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Office Image */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="relative max-w-5xl mx-auto">
              <img 
                src="/images/office-main.jpg" 
                alt="Gibb Lawyers Office Interior" 
                className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto px-2">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              In case you have some questions, feel free to call, email or even visit us. You can even drop us a line or two about any enquiries you might have. Trust your need, knowing we will succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {offices.map((office, officeIndex) => (
              <div key={officeIndex} className="space-y-4 sm:space-y-6">
                {office.addresses.map((location, locationIndex) => (
                  <Card key={locationIndex} className="border border-border/50 hover:shadow-elegant transition-all duration-300">
                    <CardHeader className="pb-4 sm:pb-6">
                      <CardTitle className="text-xl sm:text-2xl text-foreground flex items-center gap-2">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                        {office.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {location.address}
                      </p>
                      
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                          <a 
                            href={`tel:${location.phone}`} 
                            className="text-sm sm:text-base text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline min-h-[44px] flex items-center"
                          >
                            {location.phone}
                          </a>
                        </div>
                        
                        {location.fax && (
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm sm:text-base text-muted-foreground">F: {location.fax}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                          <a 
                            href={`mailto:${location.email}`} 
                            className="text-sm sm:text-base text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline min-h-[44px] flex items-center break-all"
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
                          className="inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:text-primary/80 transition-colors font-medium underline-offset-4 hover:underline min-h-[44px] py-2"
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
          </div>
        </div>
      </section>

      {/* Notary Services */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-secondary/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border border-border/50">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-foreground">
                  Notary Public Service (Ipoh)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-medium text-foreground">William Balasingam</p>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a 
                      href="tel:+601250507138" 
                      className="text-sm sm:text-base text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline min-h-[44px] flex items-center"
                    >
                      +6012 505 0713
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Drop us a message and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <Card className="border border-border/50">
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We will review your inquiry and respond within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input 
                          id="name" 
                          type="text" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="min-h-[44px]"
                          placeholder="Your full name"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="min-h-[44px]"
                          placeholder="Your phone number"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="min-h-[44px]"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        type="text" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="min-h-[44px]"
                        placeholder="Brief subject of your inquiry"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        required 
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="resize-none"
                        placeholder="Please describe your legal inquiry or questions..."
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="min-h-[44px] w-full sm:w-auto px-6 py-3 font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        className="min-h-[44px] w-full sm:w-auto px-6 py-3 font-semibold"
                        disabled={isSubmitting}
                      >
                        <a
                          href="https://api.whatsapp.com/send/?phone=60124775779&text=Hi+there&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp Us
                        </a>
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;