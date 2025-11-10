import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Info, Scale, Shield } from 'lucide-react';

const Disclaimer = () => {
  return (
    <Layout 
      title="Legal Disclaimer - Gibb Lawyers"
      description="Important legal disclaimers regarding the use of our website and legal services. Please read carefully before using our services."
    >
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/legal-bg.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Legal notice
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Legal disclaimer & professional limits
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Understand how website content, communications, and professional obligations operate before engaging our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            
            {/* Attorney-Client Relationship */}
            <Card className="rounded-3xl border border-destructive/30 bg-destructive/5 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  No attorney-client relationship
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p className="font-semibold text-foreground">
                  IMPORTANT: Viewing this website or contacting us does not create an attorney-client relationship.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>An attorney-client relationship is only established through a signed retainer agreement.</li>
                  <li>Information submitted through our forms is not confidential until a formal relationship exists.</li>
                  <li>Please do not send confidential information via unsecured email or website forms.</li>
                  <li>We are not obligated to maintain confidentiality of unsolicited information.</li>
                  <li>Time limits may apply to your matter, so seek legal advice without delay.</li>
                </ul>
              </CardContent>
            </Card>

            {/* General Information Only */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <Info className="h-6 w-6 text-primary" />
                  General information only
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>The information on this website:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Is for general informational purposes only</li>
                  <li>Does not constitute legal advice</li>
                  <li>May not reflect current legal developments</li>
                  <li>Should not be relied upon for specific legal matters</li>
                  <li>May not be applicable to your particular circumstances</li>
                </ul>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 p-4">
                  <p><strong>Seek Professional Advice:</strong> Always consult with a qualified lawyer for advice specific to your legal situation.</p>
                </div>
              </CardContent>
            </Card>

            {/* No Legal Advice */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <Scale className="h-6 w-6 text-primary" />
                  No legal advice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>This website does not provide legal advice because:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Legal advice requires knowledge of specific facts and circumstances</li>
                  <li>Malaysian law is complex and constantly evolving</li>
                  <li>Different legal strategies may apply to similar situations</li>
                  <li>Professional judgment is required to assess legal options</li>
                  <li>Generic information cannot replace personalized legal counsel</li>
                </ul>
                <p className="mt-4">
                  Our lawyers provide legal advice only after establishing an attorney-client relationship and reviewing relevant facts and documents.
                </p>
              </CardContent>
            </Card>

            {/* Accuracy of Information */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Accuracy of Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>While we strive for accuracy, we cannot guarantee that:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>All information on this website is current or complete</li>
                  <li>Legal information reflects the most recent law changes</li>
                  <li>Information is error-free or comprehensive</li>
                  <li>Links to external websites are accurate or current</li>
                  <li>Third-party information referenced is reliable</li>
                </ul>
                <p className="mt-4">
                  Malaysian law changes frequently through legislation, court decisions, and regulatory updates. Always verify current legal requirements with qualified counsel.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Gibb & Co and its lawyers are not liable for:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Decisions made based on website information</li>
                  <li>Damages resulting from reliance on general information</li>
                  <li>Losses due to failure to seek timely legal advice</li>
                  <li>Technical issues or website accessibility problems</li>
                  <li>Actions taken based on outdated or incomplete information</li>
                </ul>
                <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p><strong>Time Limitations:</strong> Legal matters often have strict time limits. Delay in seeking legal advice may result in loss of rights or remedies.</p>
                </div>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  External Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Links to external websites are provided for convenience only:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>We do not endorse or control external website content</li>
                  <li>External sites may have different privacy policies and terms</li>
                  <li>We are not responsible for external website accuracy or availability</li>
                  <li>Links do not constitute professional recommendations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Professional Standards */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Professional Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Our legal practice is governed by:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Malaysian Bar Council professional conduct rules</li>
                  <li>The Legal Profession Act 1976 and related regulations</li>
                  <li>Rules of the High Court of Malaya and Sabah & Sarawak</li>
                  <li>Anti-money laundering and counter-terrorism financing laws</li>
                  <li>Client confidentiality and legal professional privilege obligations</li>
                </ul>
                <p className="mt-4">
                  We maintain professional indemnity insurance as required by Malaysian law and are subject to oversight by the Malaysian Bar Council.
                </p>
              </CardContent>
            </Card>

            {/* Contact for Legal Advice */}
            <Card className="border border-border/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Contact for Legal Advice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  For specific legal advice about your situation, please contact us to discuss establishing an attorney-client relationship:
                </p>
                <div className="space-y-2">
                  <p><strong>Gibb & Co</strong></p>
                  <p>Unit 2, 7th floor, Ipoh Tower</p>
                  <p>Jalan Dato Seri Ahmad Said, 31350 Ipoh</p>
                  <p>Email: admin@gibblawyers.com</p>
                  <p>
                    Phone: 
                    <a href="tel:+6052410736">+6052410736</a> / 
                    <a href="tel:+6052545042">+6052545042</a>
                  </p>
                </div>
                <p className="mt-4 text-sm font-semibold">
                  Remember: Time limitations may apply to your legal matter. Do not delay seeking qualified legal advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;