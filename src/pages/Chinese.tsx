import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Building, MapPin, Phone, Mail, Download } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

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
                  成立于 1892
                </span>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  让我们照料您的法律事务
                </h1>
                <p className="text-base text-muted-foreground sm:text-lg">
                  通过 130 多年的经验，我们协助企业与家庭应对复杂的法律挑战，提供值得信赖的策略与执行。
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
                  Gibb & Co是马来西亚历史最悠久的事务所之一，其历史可追溯至1892年，该事务所始创于其创始合伙人阿尔弗雷德·蒙塔古·吉布（Alfred Montagu Gibb）乘坐英国的一艘英国船抵达槟城马来亚海岸，他于1892年在怡保成立了吉布公司（Gibb & Co)。在1906年，阿什沃思·霍普（Ashworth Hope）接任合伙人，并将公司名称更名为Gibb & Hope，延续至1930年。
                </p>

                <p>
                  作为马来西亚历史最悠久、最受信赖的律师事务所之一, Gibb & Co 拥有超过130年的法律服务经验。我们的三位资深合伙人团队为客户提供专业、可靠的法律服务，专注于客户与合作伙伴关系的建立。
                </p>

                <p>
                  我们广泛的法律业务让这家良好信誉的事务所为我们尊贵的客户以及凡寻求法律咨询或法律代表提供以下各种法律服务：
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">我们的法律服务</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                从公司法务到个人事务，我们的资深合伙人率领团队提供全面、值得信赖的法律支持。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service}
                  className="rounded-2xl border border-border/30 bg-background/95 p-5 shadow hover:-translate-y-1 hover:shadow-lg transition"
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
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">联系我们</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                如需了解更多或预约咨询，欢迎留下联系方式，我们将在一个工作日内回复。
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
                    <Label htmlFor="name">姓名</Label>
                    <Input id="name" name="name" placeholder="您的姓名" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">电话</Label>
                    <Input id="phone" name="phone" placeholder="您的电话号码" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">电邮地址</Label>
                    <Input id="email" name="email" type="email" placeholder="您的电邮地址" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">主题</Label>
                    <Input id="subject" name="subject" placeholder="咨询主题" className="min-h-[44px]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">讯息</Label>
                    <Textarea id="message" name="message" placeholder="请描述您的法律需求..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full min-h-[48px] text-base font-semibold">
                    <Mail className="mr-2 h-5 w-5" />
                    发送咨询
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="rounded-3xl border border-border/40 bg-background/95 p-6 shadow-lg space-y-4">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground">
                    <Building className="h-5 w-5 text-primary" />
                    办事处联系
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>怡保办公室 · Unit 2, 7楼, Ipoh Tower</span>
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
                    label="WhatsApp 咨询"
                    className="w-full min-h-[52px] text-base font-semibold"
                  />
                  <Button
                    variant="outline"
                    className="w-full min-h-[52px] text-base font-semibold border-primary/30"
                    onClick={() => window.open('https://gibblawyers.com/wp-content/uploads/2024/06/GIBB-PROFILE_book2024_Digital_V02.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5" />
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