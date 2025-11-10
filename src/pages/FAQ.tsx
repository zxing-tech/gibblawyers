import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, Scale, Clock, DollarSign, FileText, Users } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

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
          a: "Our office is located at Unit 2, 7th floor, Ipoh Tower, Jalan Dato Seri Ahmad Said, 31350 Ipoh."
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/faq-hero.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                FAQ
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Answers to the questions clients ask most often
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Learn how we work, what to expect from your first consultation, and how we approach timelines, fees, and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="rounded-3xl border border-border/40 bg-background/95 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                    <category.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="overflow-hidden rounded-2xl border border-border/30"
                      >
                        <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-foreground hover:no-underline sm:text-base">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="mb-6 flex justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Still have questions?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                  Reach out for personalised advice. We’ll align you with the right partner to discuss your matter.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" className="min-h-[52px] px-6 sm:px-8 font-semibold">
                    <Link to="/contact">Schedule consultation</Link>
                  </Button>
                  <WhatsAppButton
                    variant="outline"
                    size="lg"
                    label="WhatsApp Us"
                    className="min-h-[52px] px-6 sm:px-8 font-semibold"
                  />
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