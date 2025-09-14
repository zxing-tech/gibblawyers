import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, Scale, Clock, DollarSign, FileText, Users } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          q: "How long has Gibb & Co been in operation?",
          a: "Gibb & Co has been serving clients since 1892, making us one of Malaysia's oldest law firms with over 130 years of legal heritage and experience."
        },
        {
          q: "Where are your offices located?",
          a: "Our main office is located at Unit 2, 7th floor, Ipoh Tower, Jalan Dato Seri Ahmad Said, 31350 Ipoh. We also have an office in Teluk Intan at 28A (1st Floor) Taman Ros, Jalan Sultan Abdullah, 36000, Teluk Intan, Perak."
        },
        {
          q: "What languages do you provide services in?",
          a: "We provide legal services in English, Bahasa Malaysia, Chinese, and Korean to serve our diverse client base effectively."
        },
        {
          q: "Do you handle cases outside of Perak?",
          a: "Yes, we handle legal matters throughout Malaysia and can appear in courts across the country as required by our clients' needs."
        }
      ]
    },
    {
      title: "Legal Services",
      icon: Scale,
      questions: [
        {
          q: "What areas of law do you practice?",
          a: "We provide comprehensive legal services including Corporate & Commercial Law, Real Estate & Conveyancing, Banking & Finance, Litigation & ADR, Family Law, Employment Law, Criminal Law, Intellectual Property, and many other practice areas."
        },
        {
          q: "Do you provide legal advice for small businesses?",
          a: "Yes, we serve clients of all sizes, from individuals to large corporations. We provide scalable legal solutions tailored to small and medium enterprises' specific needs and budgets."
        },
        {
          q: "Can you help with property transactions?",
          a: "Absolutely. Our Real Estate & Conveyancing practice handles all types of property transactions including purchases, sales, refinancing, and property development matters."
        },
        {
          q: "Do you handle court litigation?",
          a: "Yes, our experienced litigation team represents clients in all levels of Malaysian courts, from Magistrate Courts to the Federal Court, as well as alternative dispute resolution proceedings."
        }
      ]
    },
    {
      title: "Consultation & Fees",
      icon: DollarSign,
      questions: [
        {
          q: "How much do you charge for legal services?",
          a: "Our fees vary depending on the complexity and nature of the legal matter. We offer transparent fee structures including fixed fees for routine matters and hourly rates for complex cases. We'll provide a clear fee estimate after understanding your needs."
        },
        {
          q: "Do you offer free initial consultations?",
          a: "We offer an initial discussion to understand your legal needs. Contact us to schedule a consultation where we can assess your matter and provide information about our services and fee structure."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, bank transfers, cheques, and credit cards. Payment terms will be clearly outlined in our retainer agreement."
        },
        {
          q: "Do you require a retainer fee?",
          a: "For most legal matters, we require a retainer fee to commence work. The amount depends on the nature and expected scope of the legal work required."
        }
      ]
    },
    {
      title: "Process & Timeline",
      icon: Clock,
      questions: [
        {
          q: "How long do legal matters typically take?",
          a: "Timelines vary significantly depending on the type of legal matter. Simple property transactions may take 2-3 months, while complex litigation can take years. We'll provide realistic timeframe estimates for your specific case."
        },
        {
          q: "How do I start working with your firm?",
          a: "Contact us via phone, email, or our website contact form. We'll schedule an initial consultation to discuss your needs, explain our services, and if we proceed, prepare a retainer agreement outlining the scope of work and fees."
        },
        {
          q: "Will I be updated on my case progress?",
          a: "Yes, we believe in regular communication with our clients. You'll receive updates on significant developments, and you can contact us anytime for status updates on your matter."
        },
        {
          q: "What documents do I need to bring for consultation?",
          a: "Bring any relevant documents related to your legal matter, such as contracts, correspondence, court documents, or government notices. If you're unsure, contact us beforehand and we'll advise what to bring."
        }
      ]
    },
    {
      title: "Professional Standards",
      icon: FileText,
      questions: [
        {
          q: "Are your lawyers qualified to practice in Malaysia?",
          a: "Yes, all our lawyers are qualified advocates and solicitors admitted to practice in Malaysian courts. We are regulated by the Malaysian Bar Council and maintain current practicing certificates."
        },
        {
          q: "Do you maintain professional indemnity insurance?",
          a: "Yes, we maintain comprehensive professional indemnity insurance as required by Malaysian law to protect our clients' interests."
        },
        {
          q: "How do you ensure confidentiality?",
          a: "All communications with our lawyers are protected by legal professional privilege and strict confidentiality obligations. We have robust systems in place to protect client information and comply with data protection requirements."
        },
        {
          q: "What if I'm not satisfied with your services?",
          a: "We strive for client satisfaction and welcome feedback. If you have concerns, please discuss them with us directly. We are also subject to Malaysian Bar Council's complaint procedures if professional conduct issues arise."
        }
      ]
    }
  ];

  return (
    <Layout 
      title="Frequently Asked Questions - Gibb Lawyers"
      description="Find answers to common questions about our legal services, consultation process, fees, and more at Gibb & Co."
    >
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about our legal services, consultation process, and how we can help with your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                    <category.icon className="h-6 w-6 text-primary mr-3" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border/30 rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-medium text-foreground">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 sm:p-12">
                <div className="flex justify-center mb-6">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  If you don't see your question answered here, we're here to help. Contact us for personalized legal advice and consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="min-h-[52px] px-8 py-4 font-semibold">
                    <Link to="/contact">
                      Schedule Consultation
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="min-h-[52px] px-8 py-4 font-semibold border-2"
                  >
                    <a
                      href="https://api.whatsapp.com/send/?phone=60124775779&text=Hi+there&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;