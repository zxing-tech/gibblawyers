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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/terms-hero.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Terms & conditions
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Legal terms for using our services and site
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Review the contractual framework governing engagement with Gibb & Co and your use of our digital properties.
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">Last updated: September 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            
            {/* Legal Services */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <Scale className="h-6 w-6 text-primary" />
                  Legal services agreement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>When you engage our legal services:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>A formal attorney-client relationship is established through a written retainer agreement</li>
                  <li>Our services are subject to Malaysian legal practice standards and regulations</li>
                  <li>We are bound by professional conduct rules and confidentiality obligations</li>
                  <li>Fees and billing arrangements are specified in the retainer agreement</li>
                  <li>Our liability is limited as permitted by law and professional regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Website Use */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <FileText className="h-6 w-6 text-primary" />
                  Website use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>By using our website, you agree to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Use the website for lawful purposes only</li>
                  <li>Not interfere with the website's operation or security</li>
                  <li>Not attempt to gain unauthorized access to any part of the website</li>
                  <li>Respect intellectual property rights in the content</li>
                  <li>Provide accurate information when contacting us</li>
                </ul>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 p-4">
                  <p><strong>Information Accuracy:</strong> While we strive to keep information current, website content is for general information only and should not be relied upon as legal advice.</p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Responsibilities */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <Users className="h-6 w-6 text-primary" />
                  Professional responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>As licensed legal practitioners in Malaysia, we are bound by:</p>
                <ul className="list-disc space-y-2 pl-5">
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
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Limitation of liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>Our liability is limited as follows:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Professional liability is covered by our professional indemnity insurance</li>
                  <li>We are not liable for losses arising from circumstances beyond our control</li>
                  <li>Our liability for any claim is limited to the amount of fees paid for the relevant service</li>
                  <li>We exclude liability for indirect, consequential, or punitive damages where permitted by law</li>
                  <li>Claims must be brought within the time limits specified by Malaysian law</li>
                </ul>
                <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-4">
                  <p><strong>Important:</strong> Nothing in these terms excludes liability that cannot be excluded by law, including liability for fraud, death, or personal injury caused by negligence.</p>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground sm:text-2xl">
                  Confidentiality & legal professional privilege
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <ul className="list-disc space-y-2 pl-5">
                  <li>All communications with us are protected by legal professional privilege</li>
                  <li>We maintain strict confidentiality of client information</li>
                  <li>Information may only be disclosed with your consent or as required by law</li>
                  <li>Confidentiality obligations continue after termination of our services</li>
                  <li>We may be required to disclose information to prevent money laundering or terrorism financing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground sm:text-2xl">
                  Termination of services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>Either party may terminate our legal services relationship:</p>
                <ul className="list-disc space-y-2 pl-5">
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
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground sm:text-2xl">
                  Governing law & jurisdiction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <ul className="list-disc space-y-2 pl-5">
                  <li>These terms are governed by Malaysian law</li>
                  <li>Any disputes will be subject to the jurisdiction of Malaysian courts</li>
                  <li>Professional conduct matters are subject to Malaysian Bar Council jurisdiction</li>
                  <li>We will attempt to resolve disputes through discussion before litigation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="rounded-3xl border border-primary/30 bg-primary/5 shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground sm:text-2xl">
                  Contact us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>If you have questions about these terms or need legal assistance, please contact us:</p>
                <div className="space-y-2 text-foreground">
                  <p><strong>Gibb & Co</strong></p>
                  <p>Unit 2, 7th floor, Ipoh Tower</p>
                  <p>Jalan Dato Seri Ahmad Said, 31350 Ipoh</p>
                  <p>Email: admin@gibblawyers.com</p>
                  <p>Phone: +60 5-547 1313</p>
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