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
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-px bg-primary/60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Your privacy is important to us. This policy explains how Gibb & Co collects, uses, and protects your personal information.
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
            
            {/* Information We Collect */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We may collect the following types of personal information:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                  <li><strong>Legal Matter Information:</strong> Details about your legal needs and case information</li>
                  <li><strong>Communication Records:</strong> Records of our communications with you</li>
                  <li><strong>Website Usage:</strong> Information about how you use our website</li>
                  <li><strong>Professional Information:</strong> Business details if you represent an organization</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Eye className="h-6 w-6 text-primary mr-3" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use your personal information for:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Providing legal services and advice</li>
                  <li>Communicating with you about your legal matters</li>
                  <li>Processing payments and maintaining financial records</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving our services and website functionality</li>
                  <li>Marketing our services (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Lock className="h-6 w-6 text-primary mr-3" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Secure data transmission using encryption technology</li>
                  <li>Access controls limiting who can view your information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure storage of physical and electronic records</li>
                  <li>Staff training on data protection requirements</li>
                </ul>
                <p className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <strong>Legal Professional Privilege:</strong> Communications between you and our lawyers are protected by legal professional privilege and client confidentiality obligations.
                </p>
              </CardContent>
            </Card>

            {/* Sharing Information */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-foreground">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We do not sell your personal information. We may share information only in limited circumstances:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>With trusted service providers who assist us (under strict confidentiality agreements)</li>
                  <li>In connection with legal proceedings involving you</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Under Malaysian Personal Data Protection Act 2010 (PDPA), you have the right to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Access your personal data that we hold</li>
                  <li>Correct any inaccurate personal data</li>
                  <li>Withdraw consent for processing (where applicable)</li>
                  <li>Request restriction or cessation of processing</li>
                  <li>File a complaint with the Personal Data Protection Department</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at admin@gibblawyers.com
                </p>
              </CardContent>
            </Card>

            {/* Retention */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We retain your personal information for as long as necessary to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Provide legal services and maintain client relationships</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Meet professional standards and requirements</li>
                </ul>
                <p className="mt-4">
                  Client files are typically retained for a minimum of 7 years after completion of legal services, or as required by law.
                </p>
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
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;