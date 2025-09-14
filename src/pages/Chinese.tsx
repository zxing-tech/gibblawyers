import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Building, MapPin, Phone, Mail, MessageSquare, Download } from 'lucide-react';

const Chinese = () => {
  const services = [
    "企業公司及商业法律",
    "房地产与产权转让", 
    "银行与金融",
    "家庭法律",
    "建筑工程法律",
    "公司秘书服务",
    "信托和遗产规划",
    "替代性争议解决和诉讼",
    "雇佣工业与人力资源",
    "债务追回",
    "破产清盘",
    "申查政府决定的行政法",
    "保险",
    "知识产权", 
    "刑事法律"
  ];

  return (
    <Layout 
      title="Gibb Lawyers - 中文服务" 
      description="马来西亚历史最悠久的律师事务所之一，成立于1892年，提供全面的法律服务。"
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">成立于 1892</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                  让我们来照料有关您的法律事务
                </h1>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80 max-w-4xl mx-auto">
                  您所需要的经验 · 获取您想要的目的
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
                    Gibb & Co是马来西亚历史最悠久的事务所之一，其历史可追溯至1892年，该事务所始创于其创始合伙人阿尔弗雷德·蒙塔古·吉布（Alfred Montagu Gibb）乘坐英国的一艘英国船抵达槟城马来亚海岸，他于1892年在怡保成立了吉布公司（Gibb & Co)。在1906年，阿什沃思·霍普（Ashworth Hope）接任合伙人，并将公司名称更名为Gibb & Hope，延续至1930年。
                  </p>
                  
                  <p>
                    作为马来西亚历史最悠久、最受信赖的律师事务所之一, Gibb & Co 拥有超过130年的法律服务经验。我们的三位资深合伙人团队为客户提供专业、可靠的法律服务，专注于客户与合作伙伴关系的建立。
                  </p>
                  
                  <p>
                    我们广泛的法律业务让这家良好信誉的事务所为我们尊贵的客户以及凡寻求法律咨询或法律代表提供以下各种法律服务：
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
                我们的法律服务
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
                联系我们
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                如您有任何疑问，欢迎您通过电邮咨询详情或预约洽谈。您也可以直接在下方留下您的咨询内容。我们了解您的需求，并期待为您服务。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 backdrop-blur-sm bg-card/50 border border-border/50 shadow-xl">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名</Label>
                    <Input id="name" placeholder="您的姓名" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">电话</Label>
                    <Input id="phone" placeholder="您的电话号码" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">电邮地址</Label>
                    <Input id="email" type="email" placeholder="您的电邮地址" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">主题</Label>
                    <Input id="subject" placeholder="咨询主题" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">讯息</Label>
                    <Textarea id="message" placeholder="请详细描述您的法律需求..." rows={6} />
                  </div>
                  
                  <Button className="w-full h-12 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    发送咨询
                  </Button>
                </form>
              </Card>

              {/* Contact Info & Actions */}
              <div className="space-y-8">
                {/* Office Locations */}
                <Card className="p-6 backdrop-blur-sm bg-card/50 border border-border/50 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-primary">
                    <Building className="w-6 h-6 mr-3" />
                    办事处位置
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <MapPin className="w-5 h-5" />
                      <span>霹雳州 (PERAK)</span>
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
                    WhatsApp 咨询
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-14 text-lg border-2 hover:bg-accent/10 transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://gibblawyers.com/wp-content/uploads/2024/06/GIBB-PROFILE_book2024_Digital_V02.pdf', '_blank')}
                  >
                    <Download className="w-6 h-6 mr-3" />
                    下载公司简介
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

export default Chinese;