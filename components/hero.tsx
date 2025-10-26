import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Brain, Activity, Shield } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">فناوری پیشرفته هوش مصنوعی</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            تشخیص زودهنگام سرطان
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-secondary to-accent mt-2">
              با قدرت هوش مصنوعی
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed text-pretty mt-[15px] py-[30px]">
            سیستم هوشمند ما با استفاده از الگوریتم‌های پیشرفته یادگیری ماشین، به تشخیص دقیق و سریع انواع سرطان کمک می‌کند
            و شانس بهبودی را افزایش می‌دهد.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
              شروع تشخیص
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-transparent">
              مشاهده نمونه‌ها
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {/* Section 1 */}
            <Link href="/#features" className="block">
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">تشخیص هوشمند</h3>
                <p className="text-muted-foreground leading-relaxed">
                  الگوریتم‌های پیشرفته یادگیری عمیق برای تحلیل دقیق تصاویر پزشکی
                </p>
              </div>
            </Link>

            {/* Section 2 */}
            <Link href="/#features" className="block">
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">سرعت بالا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نتایج تشخیصی در کمتر از ۳۰ ثانیه با دقت بالای ۹۵ درصد
                </p>
              </div>
            </Link>

            {/* Section 3 */}
            <Link href="/#features" className="block">
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">امنیت کامل</h3>
                <p className="text-muted-foreground leading-relaxed">حفاظت کامل از اطلاعات پزشکی با رمزنگاری پیشرفته</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
