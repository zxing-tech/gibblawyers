import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, AlertTriangle, FileText, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <Layout 
      title="Terms of Service - Gibb Lawyers"
      description="Gibb & Co Terms of Service - Legal terms and conditions for using our legal services and website."
    >
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              These terms govern your use of our legal services and website. Please read them carefully.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: September 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Legal Services */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Scale className="h-6 w-6 text-primary mr-3" />
                  Legal Services Agreement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>When you engage our legal services:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>A formal attorney-client relationship is established through a written retainer agreement</li>
                  <li>Our services are subject to Malaysian legal practice standards and regulations</li>
                  <li>We are bound by professional conduct rules and confidentiality obligations</li>
                  <li>Fees and billing arrangements are specified in the retainer agreement</li>
                  <li>Our liability is limited as permitted by law and professional regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Website Use */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  Website Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>By using our website, you agree to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Use the website for lawful purposes only</li>
                  <li>Not interfere with the website's operation or security</li>
                  <li>Not attempt to gain unauthorized access to any part of the website</li>
                  <li>Respect intellectual property rights in the content</li>
                  <li>Provide accurate information when contacting us</li>
                </ul>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p><strong>Information Accuracy:</strong> While we strive to keep information current, website content is for general information only and should not be relied upon as legal advice.</p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Responsibilities */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  Professional Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>As licensed legal practitioners in Malaysia, we are bound by:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>The Legal Profession Act 1976</li>
                  <li>Rules of the High Court of Malaya and Sabah & Sarawak</li>
                  <li>Malaysian Bar Council professional conduct rules</li>
                  <li>Solicitors' Code of Professional Conduct</li>
                  <li>Anti-money laundering and counter-terrorism financing regulations</li>
                </ul>
                <p className="mt-4">
                  We are regulated by the Malaysian Bar Council and must maintain professional indemnity insurance as required by law.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <AlertTriangle className="h-6 w-6 text-primary mr-3" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Our liability is limited as follows:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Professional liability is covered by our professional indemnity insurance</li>
                  <li>We are not liable for losses arising from circumstances beyond our control</li>
                  <li>Our liability for any claim is limited to the amount of fees paid for the relevant service</li>
                  <li>We exclude liability for indirect, consequential, or punitive damages where permitted by law</li>
                  <li>Claims must be brought within the time limits specified by Malaysian law</li>
                </ul>
                <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p><strong>Important:</strong> Nothing in these terms excludes liability that cannot be excluded by law, including liability for fraud, death, or personal injury caused by negligence.</p>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Confidentiality & Legal Professional Privilege
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="space-y-2 list-disc list-inside">
                  <li>All communications with us are protected by legal professional privilege</li>
                  <li>We maintain strict confidentiality of client information</li>
                  <li>Information may only be disclosed with your consent or as required by law</li>
                  <li>Confidentiality obligations continue after termination of our services</li>
                  <li>We may be required to disclose information to prevent money laundering or terrorism financing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Termination of Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Either party may terminate our legal services relationship:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Upon completion of the agreed legal work</li>
                  <li>By mutual agreement in writing</li>
                  <li>By either party giving reasonable notice</li>
                  <li>Immediately in cases of breach of agreement or professional conduct issues</li>
                </ul>
                <p className="mt-4">
                  Upon termination, we will provide your file documents as required by professional rules, subject to payment of outstanding fees.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Governing Law & Jurisdiction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <ul className="space-y-2 list-disc list-inside">
                  <li>These terms are governed by Malaysian law</li>
                  <li>Any disputes will be subject to the jurisdiction of Malaysian courts</li>
                  <li>Professional conduct matters are subject to Malaysian Bar Council jurisdiction</li>
                  <li>We will attempt to resolve disputes through discussion before litigation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border border-border/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  If you have questions about these terms or need legal assistance, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Gibb & Co</strong></p>
                  <p>Unit 2, 7th floor, Ipoh Tower</p>
                  <p>Jalan Dato Seri Ahmad Said, 31350 Ipoh</p>
                  <p>Email: admin@gibblawyers.com</p>
                  <p>Phone: +605 547 1313</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;