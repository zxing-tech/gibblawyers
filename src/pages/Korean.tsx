import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Building, MapPin, Phone, Mail, Download } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Korean = () => {
  const services = [
    "법인 및 상법",
    "부동산 및 부동산 거래 관련 양도법",
    "은행업무 및 금융",
    "가족법",
    "건설 및 엔지니어링 법률",
    "회사 비서 대행 서비스",
    "신탁 및 단지 계획(團地計劃)",
    "소송외 분쟁 해결 및 소송",
    "고용 산업 및 인적 자원",
    "부채 회수",
    "파산 및 청산",
    "정부 결정을 검토하는 행정법",
    "보험",
    "지적 재산권",
    "형법"
  ];

  return (
    <Layout
      title="Gibb Lawyers - 한국어 서비스" 
      description="1892년에 설립된 말레이시아에서 가장 오래된 로펌 중 하나로, 포괄적인 법률 서비스를 제공합니다."
    >
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-gavel-books.jpg')] bg-cover bg-center md:bg-top"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75 md:from-background/50 md:via-background/30 md:to-background/65"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/35 to-background/55 md:from-background/40 md:via-background/25 md:to-background/45"></div>

          <div className="relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
              <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  1892년 설립
                </span>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  귀하의 법률 문제를 신뢰와 전문성으로 해결해 드립니다
                </h1>
                <p className="text-base text-muted-foreground sm:text-lg">
                  130년이 넘는 노하우로 기업과 가정을 위한 맞춤형 법률 전략을 수립하고 실행합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="mx-auto max-w-4xl rounded-3xl border border-border/40 bg-background/95 p-8 shadow-lg sm:p-12">
              <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Gibb & Co는 1892년에 설립된 말레이시아에서 가장 오래된 로펌 중 하나입니다. 설립자 Alfred Montagu Gibb은 영국에서 페낭으로 건너와 이포에서 회사를 세웠고, 이후 Ashworth Hope와 함께 회사를 성장시켰습니다.
                </p>

                <p>
                  오늘날에도 저희는 의뢰인-파트너 관계를 중시하며, 기업과 개인 고객에게 신뢰할 수 있는 법률 솔루션을 제공합니다.
                </p>

                <p>
                  아래는 저희가 제공하는 주요 서비스 영역입니다.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">법률 서비스</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                기업부터 개인까지 다양한 분야의 법률 문제를 해결할 수 있는 전문 인력을 보유하고 있습니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service}
                  className="rounded-2xl border border-border/30 bg-background/95 p-5 shadow transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-foreground sm:text-base">{service}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">문의하기</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                상담 예약을 원하시면 아래 정보를 남겨주세요. 담당 변호사가 신속히 연락드리겠습니다.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="rounded-3xl border border-border/40 bg-background/95 p-8 shadow-lg">
                <form 
                  action="https://formsubmit.co/admin@gibblawyers.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="/thank-you" />
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" name="name" placeholder="성함을 입력해주세요" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">전화번호</Label>
                    <Input id="phone" name="phone" placeholder="연락처를 입력해주세요" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일 주소</Label>
                    <Input id="email" name="email" type="email" placeholder="이메일 주소를 입력해주세요" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">제목</Label>
                    <Input id="subject" name="subject" placeholder="문의 제목" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">메시지</Label>
                    <Textarea id="message" name="message" placeholder="법률 상담이 필요한 사항을 자세히 설명해주세요..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full min-h-[48px] text-base font-semibold">
                    <Mail className="mr-2 h-5 w-5" />
                    문의 보내기
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="rounded-3xl border border-border/40 bg-background/95 p-6 shadow-lg space-y-4">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground">
                    <Building className="h-5 w-5 text-primary" />
                    사무소 연락처
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Unit 2, 7층, Ipoh Tower, Perak</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+6055471313" className="text-primary underline-offset-4 hover:underline">
                      +60 5-547 1313
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:admin@gibblawyers.com" className="text-primary underline-offset-4 hover:underline">
                      admin@gibblawyers.com
                    </a>
                  </div>
                </Card>

                <div className="space-y-4">
                  <WhatsAppButton
                    label="WhatsApp 문의"
                    className="w-full min-h-[52px] text-base font-semibold"
                  />

                  <Button 
                    variant="outline" 
                    className="w-full min-h-[52px] text-base font-semibold border-primary/30"
                    onClick={() => window.open('https://gibblawyers.com/wp-content/uploads/2024/06/GIBB-PROFILE_book2024_Digital_V02.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    회사 프로필 다운로드
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Korean;