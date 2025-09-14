import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Building, MapPin, Phone, Mail, MessageSquare, Download } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">1892년 설립</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                  저희가 당신을 법적으로 돌보겠습니다
                </h1>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80 max-w-4xl mx-auto">
                  당신에게 필요한 경험 · 당신이 얻게될 성취
                </h2>
              </div>
              
              <Separator className="w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border border-border/50 shadow-2xl">
              <div className="space-y-8">
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Gibb & Co는 설립 역사가 1892년까지 거슬러 올라가는, 말레이시아에서 가장 오래된 회사 중 하나입니다. 설립자 Alfred Montagu Gibb은 영국 동인도 회사의 선박을 타고 영국에서 페낭에 도착하여1892년에 이포에서 Gibb & Co 라는 이름으로 회사를 세웠습니다. 1906년에 그가 은퇴하면서 Ashworth Hope이 동업자로 회사를 이어받으며 회사 이름을 Gibb&Hope로 바꾸어 1930년대 그가 영국으로 돌아갈 때까지 사용했습니다. 그 후 나머지 동업자들이 회사를 Gibb&Co.라는 원래의 이름으로 되돌려 놓았습니다.
                  </p>
                  
                  <p>
                    말레이시아 최선두에서 가장 잘 알려진 회사들 가운데 하나로서, Gibb & Co는 의뢰인-파트너의 관계에 초점을 맞춘 견실하고 주요한 법률 서비스를 제공하기 위해 사무실 전체에 최고의 인재들을 영입하고 있습니다.
                  </p>
                  
                  <p>
                    광범위한 법률 실무의 진용을 갖추고 있기로 정평이 나 있는 저희 회사는 소중한 의뢰인과 법률 자문 및/혹은 법률 대리자를 구하시는 분들께 다음과 같은 법률 서비스를 제공해드립니다:
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-accent/5 via-transparent to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                법률 서비스
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105 border border-border/50 bg-card/30 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {service}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                문의하기
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                질문이 있으시면 언제든지 전화, 이메일 또는 방문해주십시오. 문의 사항에 대해 한두 줄을 남겨 주시면됩니다. 우리가 성공할 것이라는 것을 알고 당신의 필요를 믿으십시오.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 backdrop-blur-sm bg-card/50 border border-border/50 shadow-xl">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" placeholder="성함을 입력해주세요" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">전화번호</Label>
                    <Input id="phone" placeholder="연락처를 입력해주세요" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일 주소</Label>
                    <Input id="email" type="email" placeholder="이메일 주소를 입력해주세요" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">제목</Label>
                    <Input id="subject" placeholder="문의 제목" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">메시지</Label>
                    <Textarea id="message" placeholder="법률 상담이 필요한 사항을 자세히 설명해주세요..." rows={6} />
                  </div>
                  
                  <Button className="w-full h-12 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    문의 보내기
                  </Button>
                </form>
              </Card>

              {/* Contact Info & Actions */}
              <div className="space-y-8">
                {/* Office Locations */}
                <Card className="p-6 backdrop-blur-sm bg-card/50 border border-border/50 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-primary">
                    <Building className="w-6 h-6 mr-3" />
                    사무소 위치
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <MapPin className="w-5 h-5" />
                      <span>페락 (PERAK)</span>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <Button 
                    className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://api.whatsapp.com/send/?phone=60124775779&text=Hi+there&app_absent=0', '_blank')}
                  >
                    <MessageSquare className="w-6 h-6 mr-3" />
                    WhatsApp 문의
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-14 text-lg border-2 hover:bg-accent/10 transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://gibblawyers.com/wp-content/uploads/2024/06/GIBB-PROFILE_book2024_Digital_V02.pdf', '_blank')}
                  >
                    <Download className="w-6 h-6 mr-3" />
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