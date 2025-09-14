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
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Legal Disclaimer
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Important information about our legal services and website content. Please read carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Attorney-Client Relationship */}
            <Card className="border border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <AlertCircle className="h-6 w-6 text-destructive mr-3" />
                  No Attorney-Client Relationship
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  IMPORTANT: Viewing this website or contacting us does not create an attorney-client relationship.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>An attorney-client relationship is only established through a signed retainer agreement</li>
                  <li>Information submitted through our website contact forms is not confidential until a formal relationship exists</li>
                  <li>Do not send confidential information through unsecured email or website forms</li>
                  <li>We are not obligated to maintain confidentiality of unsolicited information</li>
                  <li>Time limitations may apply to your legal matter - do not delay seeking legal advice</li>
                </ul>
              </CardContent>
            </Card>

            {/* General Information Only */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Info className="h-6 w-6 text-primary mr-3" />
                  General Information Only
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>The information on this website:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Is for general informational purposes only</li>
                  <li>Does not constitute legal advice</li>
                  <li>May not reflect current legal developments</li>
                  <li>Should not be relied upon for specific legal matters</li>
                  <li>May not be applicable to your particular circumstances</li>
                </ul>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p><strong>Seek Professional Advice:</strong> Always consult with a qualified lawyer for advice specific to your legal situation.</p>
                </div>
              </CardContent>
            </Card>

            {/* No Legal Advice */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Scale className="h-6 w-6 text-primary mr-3" />
                  No Legal Advice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>This website does not provide legal advice because:</p>
                <ul className="space-y-2 list-disc list-inside">
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
                  <p>Phone: +605 547 1313</p>
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