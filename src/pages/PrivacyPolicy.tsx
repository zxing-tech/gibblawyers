import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout 
      title="Privacy Policy - Gibb Lawyers"
      description="Gibb & Co Privacy Policy - How we collect, use, and protect your personal information in compliance with Malaysian data protection laws."
    >
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/privacy-hero.jpg')] bg-cover bg-center md:bg-top"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Privacy commitments
              </span>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                How we protect and use your data responsibly
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Learn how we collect, store, and safeguard personal information in line with Malaysian law and our professional obligations.
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
            
            {/* Information We Collect */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <FileText className="h-6 w-6 text-primary" />
                  Information we collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>We may collect the following types of personal information:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong>Contact:</strong> Name, email, phone number, postal address</li>
                  <li><strong>Legal matter:</strong> Details related to your instructions or enquiries</li>
                  <li><strong>Communication:</strong> Records of calls, meetings, and correspondence</li>
                  <li><strong>Website usage:</strong> Analytics on interactions with our digital services</li>
                  <li><strong>Professional profile:</strong> Business and role information when relevant</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <Eye className="h-6 w-6 text-primary" />
                  How we use your information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>We use personal information to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Deliver legal advice and representation</li>
                  <li>Communicate updates about your matters</li>
                  <li>Manage billing, payments, and records</li>
                  <li>Meet regulatory and compliance obligations</li>
                  <li>Improve services, security, and user experience</li>
                  <li>Provide updates and insights (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <Lock className="h-6 w-6 text-primary" />
                  Data protection & security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>We implement layered safeguards to protect your personal information:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Encryption for data in transit and secure storage for records</li>
                  <li>Role-based access controls and audit trails</li>
                  <li>Regular security assessments and system updates</li>
                  <li>Secure archiving for physical and digital files</li>
                  <li>Team training on privacy and confidentiality obligations</li>
                </ul>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <strong>Legal professional privilege:</strong> Lawyer-client communications remain strictly confidential and privileged under Malaysian law.
                </div>
              </CardContent>
            </Card>

            {/* Sharing Information */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-2xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Information sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>We do not sell personal data. Information is shared only when:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>You provide explicit consent</li>
                  <li>Compliance with legal obligations or court orders is required</li>
                  <li>Trusted service providers support our work under confidentiality</li>
                  <li>Legal proceedings or dispute resolution requires disclosure</li>
                  <li>Protection of rights, property, or safety demands action</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground sm:text-2xl">
                  Your rights under the PDPA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>You are entitled to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Request access to personal data we hold</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Withdraw consent where processing is consent-based</li>
                  <li>Request we restrict or stop specific processing</li>
                  <li>Lodge a complaint with the PDPA Commissioner</li>
                </ul>
                <p className="text-sm font-medium text-primary">
                  Contact admin@gibblawyers.com to exercise your rights or ask questions.
                </p>
              </CardContent>
            </Card>

            {/* Retention */}
            <Card className="rounded-3xl border border-border/40 bg-background/95 shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground sm:text-2xl">
                  Data retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground sm:text-base">
                <p>We retain data only as long as necessary to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Deliver legal services and preserve client history</li>
                  <li>Meet statutory and regulatory timelines</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Satisfy professional practice standards</li>
                </ul>
                <p>Client files are generally kept for at least seven years following matter completion, unless law or professional rules require longer.</p>
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
                <p>If you have questions about this policy or wish to exercise your rights, reach us at:</p>
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

export default PrivacyPolicy;